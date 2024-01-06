import { HashIcon } from 'lucide-react';

type NameProp = {
  name: string;
};
const TribeListings = ({ name }: NameProp) => {
  return (
    <div className="flex justify-between items-center rounded-md px-4 py-2 hover:dark:bg-gray-900 hover:bg-emerald-600 hover:text-slate-100">
      <div className="flex items-center ">
        <HashIcon />
        <h5 className="pl-2 font-bold">{name}</h5>
      </div>
      <div className="h-[24px] w-[24px] rounded-full  bg-blue-300 text-blue-900 flex justify-center items-center">
        <h4 className="">2</h4>
      </div>
    </div>
  );
};

export default TribeListings;
