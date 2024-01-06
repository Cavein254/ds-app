'use client';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import MinorSidebar from './MinorSidebar';

const SideBarToggle = () => {
  const [openModal, setopenModal] = useState(false);
  return (
    <div className="">
      <div className={cn(openModal ? 'visible' : 'hidden')}>
        <div
          className="h-[48px] w-[48px] rounded-full py-2 hover:shadow-sm dark:bg-slate-900 flex justify-center items-center
    hover:dark:bg-slate-100 hover:dark:text-[#130f0e] hover:bg-emerald-600 hover:text-slate-100 mt-2 bg-gray-200"
          onClick={() => setopenModal(!openModal)}
        >
          {openModal ? <ArrowRight /> : ''}
        </div>
      </div>
      <div className="h-full dark:bg-[#000000] bg-gray-300">
        {openModal ? (
          ''
        ) : (
          <MinorSidebar openModal={openModal} setopenModal={setopenModal} />
        )}
      </div>
    </div>
  );
};

export default SideBarToggle;
