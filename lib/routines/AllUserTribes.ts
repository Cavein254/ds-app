import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export const AllUserTribes = async (req: Request, res: Response) => {
  const { profileId } = await new Response(req.body).json();
  try {
    const allTribes = await prisma.tribe.findMany({
      where: {
        members: {
          some: {
            profileId,
          },
        },
      },
    });
    return NextResponse.json(allTribes);
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  }
};
