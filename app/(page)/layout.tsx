import SideBar from '@/components/ui/side-bar';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-px  container mx-auto flex w-fit max-w-[1200px] gap-medium py-sub-large pb-extra-large  max-laptop:flex-col mobile-large:gap-sub-large tablet:py-large laptop:gap-large">
      <SideBar />
      {children}
    </div>
  );
}
