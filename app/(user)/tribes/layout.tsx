'use client';
import '@/app/globals.css';
import MainSidebar from '@/components/sidebar/MainSidebar';
import MinorSidebar from '@/components/sidebar/MinorSidebar';
import { useState } from 'react';
const tribeLayout = ({ children }: { children: React.ReactNode }) => {
  const [openModal, setopenModal] = useState(false);
  return (
    <div className="flex h-full w-full flex-row">
      <div className="w-[60px] h-full dark:bg-[#181310] flex flex-col items-center justify-center">
        <MainSidebar />
      </div>
      <div>
        {openModal ? (
          <MinorSidebar openModal={openModal} setopenModal={setopenModal} />
        ) : (
          <div>
            <h1>The end of the road all</h1>
          </div>
        )}
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default tribeLayout;
