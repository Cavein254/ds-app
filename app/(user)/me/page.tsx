import CreateTribe from '@/components/modals/CreateTribe';
// import { authOptions } from '@/lib/auth';
// import { getServerSession } from 'next-auth';
import { initialUser } from '@/lib/routines/initUser';
import { userTribe } from '@/lib/routines/userTribe';
import { redirect } from 'next/navigation';

export default async function Home() {
  // const session = await getServerSession(authOptions);
  const session = await initialUser();
  const tribes = await userTribe(session);

  //TODO :: Ask the user to join a community in place
  //TODO :: of creating one
  if (tribes) {
    redirect(`/tribes/${tribes.id}`);
  }
  return <CreateTribe />;
}
