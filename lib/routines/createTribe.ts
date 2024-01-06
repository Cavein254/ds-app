import prisma from '@/lib/prismadb';
import { initialUser } from '@/lib/routines/initUser';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function createTribe(req: Request, res: Response) {
  const { name, description, imageUrl } = await new Response(req.body).json();
  const { id } = await initialUser();
  const tribe = {
    profileId: id,
    name,
    description,
    imageUrl,
    invite: `${process.env.NEXT_APP_NAME}` + '-' + uuidv4(),
  };
  try {
    const newTribe = await prisma.tribe.create({
      data: tribe,
    });
    console.log('created new user');
    return NextResponse.json(tribe);
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  }
}
