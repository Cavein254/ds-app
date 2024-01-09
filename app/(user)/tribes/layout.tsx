import '@/app/globals.css';
const tribeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {/* <div className="flex h-full w-full">
          <div className="w-[60px] h-full dark:bg-[#181310] flex flex-col items-center justify-center">
            <MainSidebar />
          </div>
          <div className="bg-black">{children}</div>
        </div> */}
      </body>
    </html>
  );
};

export default tribeLayout;
