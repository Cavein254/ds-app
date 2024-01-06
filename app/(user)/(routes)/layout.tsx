import { ToggleTheme } from '@/components/misillenious/ToggleTheme';
import MainSidebar from '@/components/sidebar/MainSidebar';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  //TODO :: Use context or redux for state management

  return (
    <main className="flex h-full w-full">
      <div className="w-[60px] h-[full] dark:bg-[#181310] flex flex-col items-center justify-center">
        <MainSidebar />
      </div>
      <div>{children}</div>
      <ToggleTheme />
    </main>
  );
};

export default MainLayout;
