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

export default async function Home() {
  // const session = await getServerSession(authOptions);
  const session = await initialUser();
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

        <h1>Server Session</h1>
        <pre>{JSON.stringify(session)}</pre>
      </div>
    </main>
  );
}