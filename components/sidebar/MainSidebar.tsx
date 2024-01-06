import prisma from '@/lib/prismadb';
import { initialUser } from '@/lib/routines/initUser';
import { redirect } from 'next/navigation';
import SideBarToggle from './SideBarToggle';
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
    <div className="h-full">
      <div className="">
        <SideBarToggle />
        <SidebarItem />
      </div>
    </div>
  );
};

export default MainSidebar;
