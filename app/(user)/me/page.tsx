import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from '@/components/buttons.component';
import { ToggleTheme } from '@/components/misillenious/ToggleTheme';
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
  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
      }}
    >
      <ToggleTheme />
      <div>
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />

        <h1>Create a tribe</h1>
      </div>
    </main>
  );
}
