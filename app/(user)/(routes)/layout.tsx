import { ToggleTheme } from '@/components/misillenious/ToggleTheme';
import MainSidebar from '@/components/sidebar/MainSidebar';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-full w-full">
      <div className="w-[48px] h-[full] dark:bg-[#0c0a09] ">
        <MainSidebar />
      </div>
      <div>{children}</div>
      <ToggleTheme />
    </main>
  );
};

export default MainLayout;
