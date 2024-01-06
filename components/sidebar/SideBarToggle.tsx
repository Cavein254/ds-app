'use client';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const SideBarToggle = () => {
  const [openModal, setopenModal] = useState(false);
  return (
    <div
      className="my-2 h-[48px] w-[48px] rounded-full py-2 border-[1px] shadow-sm dark:bg-slate-900 flex justify-center items-center
    hover:dark:bg-slate-100 hover:dark:text-[#130f0e]"
      onClick={() => setopenModal(!openModal)}
    >
      {openModal ? <ArrowLeft /> : <ArrowRight />}
    </div>
  );
};

export default SideBarToggle;
