import MainSidebar from '@/components/sidebar/MainSidebar';
import SideBarToggle from '@/components/sidebar/SideBarToggle';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  //TODO :: Use context or redux for state management

  return (
    <main className="flex h-full w-full">
      <div className="w-[60px] h-full dark:bg-[#181310] flex flex-col items-center justify-center">
        <MainSidebar />
      </div>
      <div className="flex w-full h-full">
        <div className="h-full">
          <SideBarToggle />
        </div>
        <div>{children}</div>
      </div>
    </main>
  );
};

export default MainLayout;
