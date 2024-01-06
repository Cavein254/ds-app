import { HashIcon } from 'lucide-react';

type NameProp = {
  name: string;
};
const TribeListings = ({ name }: NameProp) => {
  return (
    <div>
      <div className="flex items-center rounded-md px-4 py-2 hover:dark:bg-gray-900 hover:bg-emerald-600 hover:text-slate-100">
        <HashIcon />
        <h5 className="pl-2 font-bold">{name}</h5>
      </div>
    </div>
  );
};

export default TribeListings;
