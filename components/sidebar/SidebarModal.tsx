'use client';
type SidebarProps = {
  modalOpen: Boolean;
  setmodalOpen: (value: any) => void;
};
const SidebarModal = ({ setmodalOpen, modalOpen }: SidebarProps) => {
  return (
    <div className="relative h-[40vh] w-[70vw] bg-white dark:bg-[#303238] ">
      <div className="m-4 flex justify-center items-center flex-col">
        <h1>Create Your Tribe</h1>
        <form>
          <label>Tribe Name</label>
          <input placeholder="Team Mafisi" />
          <label>Tribe Description</label>
          <textarea placeholder="There is Black in Every Greatness" />
        </form>
      </div>
    </div>
  );
};

export default SidebarModal;
