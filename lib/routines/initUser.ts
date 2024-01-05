import prisma from '@/lib/prismadb';

export const initialUser = async () => {
  //TODO :: Get user email from NextAuth
  const nextEmail = {
    id: 'x4563dtyr67835',
    first_name: 'cavein',
    last_name: 'Get',
    imageUrl: 'large url',
    email: 'cavein@get.com',
  };
  const profile = await prisma.profile.findFirst({
    where: {
      userId: nextEmail.id,
    },
  });

  if (profile) {
    return profile;
  }

  const newProfile = await prisma.profile.create({
    data: {
      userId: nextEmail.id,
      name: `${nextEmail.first_name} ${nextEmail.last_name}`,
      imageUrl: nextEmail.imageUrl,
      email: nextEmail.email,
    },
  });

  return newProfile;
};
