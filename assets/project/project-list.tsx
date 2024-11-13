import abjectactimg from '@/public/project/abject-act.jpg';
import acte5img from '@/public/project/acte-5.jpg';
import arozvitimg from '@/public/project/arozvit.jpg';
import dinedongimg from '@/public/project/dine-dong.jpg';
import mtonarchiimg from '@/public/project/mtonarchi.jpg';
import roddatimg from '@/public/project/roddat.jpg';

import { StaticImageData } from 'next/image';

export interface ProjectListProps {
  title: string;
  image: StaticImageData;
  client?: string;
  category: string[];
  stack: string[];
  year: number;
  status: 'completed' | 'inProgress';
  url?: string;
  id: number;
  github: string;
}

export const projectList: ProjectListProps[] = [
  {
    title: 'DINE-DONG',
    image: dinedongimg,
    category: ['Full-stack', 'UI/UX Design', 'DevOps'],
    year: 2024,
    stack: [
      'Next.js',
      'TailwindCSS',

      'Framer Motion',
      'FastAPI',
      'Stripe',
      'Auth0',
      'PostgreSQL',
      'Redis',
      'Github Actions',
      'Docker',
      'Terraform',
      'AWS'
    ],
    status: 'completed',
    url: 'https://dine-dong.fr',
    id: 0,
    github: 'https://github.com/dobzacode/dine-dong'
  },
  {
    title: 'RODDAT',
    image: roddatimg,
    category: ['Full-stack', 'UI/UX Design'],
    year: 2024,
    stack: ['Next.js', 'TailwindCSS', 'Prisma', 'NextAuth', 'PostgreSQL', 'S3', 'Vercel'],
    status: 'completed',
    url: 'https://roddat.vercel.app',
    id: 1,
    github: 'https://github.com/dobzacode/roddat'
  },
  {
    title: 'AROZVIT',
    image: arozvitimg,
    category: ['Full-stack', 'UI/UX Design', 'Mobile', 'DevOps'],
    year: 2024,
    stack: [
      'Next.js',
      'TailwindCSS',
      'NativeWind',
      'Drizzle',
      'TRPC',
      'Expo',
      'S3',
      'Turborepo',
      'Github Actions',
      'Jest',
      'Maestro'
    ],
    status: 'completed',
    id: 2,
    github: 'https://github.com/dobzacode/arozvit'
  },
  {
    title: 'ACTE-5',
    image: acte5img,
    category: ['Front-End', 'UI/UX Design'],
    year: 2024,
    stack: ['Next.js', 'TailwindCSS', 'Vercel', 'Framer Motion', 'Sanity'],
    status: 'completed',
    id: 3,
    github: 'https://github.com/dobzacode/acte-5'
  },
  {
    title: 'ABJECT-ACT',
    image: abjectactimg,
    client: 'Abject-Act',
    category: ['Front-End', 'UI/UX Design'],
    year: 2023,
    stack: ['Next.js', 'TailwindCSS', 'Framer Motion', 'Next-intl', 'Vercel', 'Sanity'],
    status: 'inProgress',
    url: 'https://abject-act.vercel.app',
    id: 4,
    github: 'https://github.com/dobzacode/ABJECT-ACT'
  },
  {
    title: 'MTONARCHI',
    image: mtonarchiimg,
    client: 'Mtonarchi',
    category: ['Front-End', 'UI/UX Design'],
    year: 2023,
    stack: ['Next.js', 'TailwindCSS', 'Framer Motion', 'Vercel', 'Sanity'],
    status: 'inProgress',
    url: 'https://marion-archi.vercel.app',
    id: 5,
    github: 'https://github.com/dobzacode/MTONARCHI'
  }
];
