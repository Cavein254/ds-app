import Dog from '@/assets/dog2_edited.png';
import { ToggleTheme } from '@/components/misillenious/ToggleTheme';
import NavItem from '@/components/nav/NavItem';
import prisma from '@/lib/prismadb';
import { initialUser } from '@/lib/routines/initUser';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { ScrollArea } from '../ui/scroll-area';
import SidebarItem from './SidebarItem';
const MainSidebar = async () => {
  const profile = await initialUser();

  if (!profile) {
    return redirect('/');
  }

  const tribes = await prisma.tribe.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  return (
    <div className="h-full dark:bg-[#181310] bg-gray-400">
      <div className="h-[85%] p-[2px] flex flex-col items-center">
        <SidebarItem />
        {/* TODO :: Add conditional routing to check route so to display  */}
        <ScrollArea className="">
          {tribes?.map((tribe) => (
            <div key={tribe.id}>
              <NavItem id={tribe.id} imageUrl={tribe.imageUrl} />
            </div>
          ))}
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
