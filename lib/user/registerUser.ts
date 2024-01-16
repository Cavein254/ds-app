import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';
import prisma from '../prismadb';

export const registerUser = async (req: NextRequest, res: NextResponse) => {
  console.log('on register user ');
  console.log('on register user ');
  const { username, email, isAdult } = await new Response(req.body).json();
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    try {
      const newUser = await prisma.user.create({
        data: {
          username,
          email,
          isAdult,
        },
      });
      return redirect('/signup');
    } catch (err) {
      console.log('Logging error');
      console.log(err);
      return NextResponse.json(err);
    }
  }
  return redirect('/signup');
};
