import Dog from '@/assets/dog2_edited.png';
import axios from 'axios';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { ToggleTheme } from '../misillenious/ToggleTheme';
import { ScrollArea } from '../ui/scroll-area';
import SidebarItem from './SidebarItem';

const MainSidebar = () => {
  console.log('on mainsidebar');
  const profile = async () => {
    const data = await axios
      .get('/api/me')
      .then((res) => res.data)
      .catch((err) => console.log(err));
    return data;
  };
  console.log(profile);

  if (!profile) {
    return redirect('/');
  }

  const newData = {
    profileId: 'clr0q48ic00005ej2qnd61sey',
  };

  const tribes = async () => {
    const data = await axios
      .post('/api/me/tribes', newData)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    return data;
  };

  console.log(tribes);

  return (
    <div className="h-full dark:bg-[#181310] bg-gray-400">
      <div className="h-[85%] p-[2px] flex flex-col items-center">
        <SidebarItem />
        {/* TODO :: Add conditional routing to check route so to display  */}
        <ScrollArea className="">
          {/* {tribes?.map((tribe) => (
            <div key={tribe.id}>
              <NavItem id={tribe.id} imageUrl={tribe.imageUrl} />
            </div>
          ))} */}
        </ScrollArea>
      </div>
      <div className="bottom-0 right-0 flex flex-col justify-center items-center">
        <Image
          src={Dog}
          height={50}
          width={50}
          alt="profile Pic"
          className="contain rounded-full my-2"
        />
        <ToggleTheme />
      </div>
    </div>
  );
};

export default MainSidebar;
