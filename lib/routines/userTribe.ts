import prisma from '@/lib/prismadb';

export const userTribe = async (profile) => {
  const tribes = await prisma.tribe.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });
  return tribes;
};
