'use client';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import SidebarModal from './SidebarModal';

const SidebarItem = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  console.log(modalOpen);
  return (
    <div>
      <Plus
        className="hover:pointer"
        onClick={() => setmodalOpen(!modalOpen)}
      />
      <div className="absolute w-full h-[50vh] flex justify-center items-center">
        {modalOpen && (
          <SidebarModal modalOpen={modalOpen} setmodalOpen={setmodalOpen} />
        )}
      </div>
    </div>
  );
};

export default SidebarItem;
