import { Plus } from 'lucide-react';

type NameProp = {
  name: string;
};
const MinorSidebarItem = ({ name }: NameProp) => {
  return (
    <div className="flex justify-between  items-center">
      <h4 className="uppercase my-4 text-gray-400">{name}</h4>
      <button className="rounded-full hover:dark:bg-slate-100 p-2  hover:font-extrabold hover:bg-emerald-600 hover:text-slate-100 hover:shadow-sm hover:dark:text-emerald-600">
        <Plus />
      </button>
    </div>
  );
};

export default MinorSidebarItem;
