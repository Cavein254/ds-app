import prisma from '@/lib/prismadb';

export const userTribe = async (profile) => {
  const tribe = await prisma.tribe.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });
  return tribe;
};
