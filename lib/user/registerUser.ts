import { NextRequest, NextResponse } from 'next/server';
import prisma from '../prismadb';

export const registerUser = async (req: NextRequest, res: NextResponse) => {
  const data = await new Response(req.body).json();
  const { username, email, isAdult } = data;
  const user = await prisma.profile.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    try {
      const newUser = await prisma.profile.create({
        data: {
          username,
          email,
          isAdult,
        },
      });
      return NextResponse.redirect(`${process.env.NEXT_APP_URL}/signin`);
    } catch (err) {
      // return NextResponse.json(err);
      return NextResponse.json(err);
    }
  }

  return NextResponse.redirect(`${process.env.NEXT_APP_URL}/signin`);
};
