import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function createTribe(req: Request, res: Response) {
  const tribe = await new Response(req.body).json();
  try {
    console.log(tribe);
    const newTribe = await prisma.tribe.create({
      data: tribe,
    });
    console.log('created new user');
    return NextResponse.json(newTribe);
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  }
}
