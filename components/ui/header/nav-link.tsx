'use client';

import { cn } from '@/lib/utils';
import { Link } from '@/navigation';
import { VariantProps, cva } from 'class-variance-authority';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useState } from 'react';

const linkVariants = cva('', {
  variants: {
    size: {
      small: ' body leading-body font-medium',
      medium: ' sub-heading',
      large: ' heading'
    },
    intent: {
      primary: 'text-primary80 dark:text-primary1',
      secondary: 'text-secondary80 dark:text-secondary1',
      tertiary: 'text-tertiary80 dark:text-tertiary1',
      success: 'text-success80 dark:text-success1',
      error: 'text-error80 dark:text-error1',
      warning: 'text-warning80 dark:text-warning1',
      info: 'text-info80 dark:text-info1',
      neutral: 'text-neutral80 dark:text-neutral1'
    },
    currentNavStyle: {
      primary: '',
      secondary: '',
      tertiary: '',
      success: '',
      error: '',
      warning: 'bg-warning80 dark:bg-warning1',
      info: 'bg-info80 dark:bg-info1',
      neutral: '',
      transparent: ''
    },
    hover: {
      true: 'hover:bg-neutral80 hover:text-primary1 duration-fast ease-in'
    },
    rounded: {
      small: 'rounded-extra-small',
      medium: 'rounded-small',
      large: 'rounded-medium',
      full: 'rounded-full'
    }
  },
  compoundVariants: [
    {
      intent: 'primary',
      hover: true,
      className: ' hover:bg-primary80 hover:text-primary1 duration-fast ease-in'
    },
    {
      intent: 'secondary',
      hover: true,
      className: 'hover:bg-secondary80 hover:text-secondary1 duration-fast ease-in'
    },
    {
      intent: 'tertiary',
      hover: true,
      className: 'hover:bg-tertiary80 hover:text-tertiary1 duration-fast ease-in'
    },
    {
      intent: 'info',
      hover: true,
      className: 'hover:bg-info80 hover:text-info1 duration-fast ease-in'
    },
    {
      intent: 'success',
      hover: true,
      className: 'hover:bg-success80 hover:text-success1 duration-fast ease-in'
    },
    {
      intent: 'error',
      hover: true,
      className: 'hover:bg-error80 hover:text-error1 duration-fast ease-in'
    },
    {
      intent: 'warning',
      hover: true,
      className: 'hover:bg-warning80 hover:text-warning1 duration-fast ease-in'
    },
    {
      intent: 'neutral',
      hover: true,
      className: 'hover:bg-neutral80 hover:text-neutral1 duration-fast ease-in'
    }
  ]
});
interface NavLinkProps extends LinkProps, VariantProps<typeof linkVariants> {
  children?: React.ReactNode;
  className?: string;
  locale?: string;
  href: any;
  isLi?: boolean;
  index?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const NavLink: FC<NavLinkProps> = ({
  children,
  hover,
  rounded,
  size,
  intent,
  className,
  currentNavStyle,
  isLi,
  index,
  ...props
}: NavLinkProps) => {
  const pathname = usePathname();
  const t = useTranslations('navigation.primaryNavigation');
  const isActive =
    props.href.replace(/\//g, '') === ''
      ? pathname.replace('en', '') === props.href
      : pathname.includes(t(props.href.replace(/\//g, '')));
  const [showHover] = useState<boolean>(true);

  if (!isLi)
    return (
      <Link
        href={props.href}
        className={cn(
          'change-color-hover',
          linkVariants({
            size,
            rounded,

            intent,
            currentNavStyle: isActive ? intent : 'transparent',
            className
          })
        )}
      >
        {children}
      </Link>
    );

  return (
    <li className="relative">
      <Link
        href={props.href}
        className={cn(
          'change-color-hover peer',
          'peer ',
          linkVariants({
            size,
            rounded,

            intent,
            currentNavStyle: isActive ? intent : 'transparent',
            className
          })
        )}
      >
        {children}
      </Link>

      <Image
        src="/link-hover.png"
        width="400"
        height="400"
        alt=""
        className={cn(
          ` absolute top-1/4 -z-10  scale-x-150 scale-y-[200%]  overflow-hidden opacity-0 duration-slow   ${
            index! % 2 === 0 ? 'rotate-180' : ''
          } 
        }`,
          isActive && showHover ? 'opacity-100' : null,
          isActive && 'cursor-none',
          showHover && 'peer-hover:opacity-100'
        )}
      ></Image>
    </li>
  );
};

export default NavLink;
