'use client';

import { ArrowLeft } from 'lucide-react';

interface StateProps {
  setopenModal: (value: boolean) => boolean;
  openModal: boolean;
}
const MinorSidebar = ({ openModal, setopenModal }: StateProps) => {
  return (
    <div className="w-[250px] dark:bg-[#000000] p-4 flex flex-row justify-center items-center">
      <div>
        <div
          className="h-[48px] w-[48px] rounded-full py-2 shadow-sm dark:bg-slate-900 flex justify-center items-center
    hover:dark:bg-slate-100 hover:dark:text-[#130f0e]"
          onClick={() => setopenModal(!openModal)}
        >
          {openModal ? <ArrowLeft /> : ''}
        </div>
        <div>
          <input type="text" placeholder="search" />
        </div>
      </div>
    </div>
  );
};

export default MinorSidebar;
