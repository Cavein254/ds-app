import '@/app/globals.css';
import MainSidebar from '@/components/sidebar/MainSidebar';
const tribeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <main className="flex h-full w-full">
          <div className="w-[60px] h-full dark:bg-[#181310] flex flex-col items-center justify-center">
            <MainSidebar />
          </div>
          <div className="bg-black">{children}</div>
        </main>
      </body>
    </html>
  );
};

export default tribeLayout;
