import MainSidebar from '@/components/sidebar/MainSidebar';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-full w-full">
      <div className="w-[60px] h-full dark:bg-[#181310] flex flex-col items-center justify-center">
        <MainSidebar />
      </div>
      <div className="flex w-full h-full">
        <div>{children}</div>
      </div>
    </main>
  );
};

export default layout;
