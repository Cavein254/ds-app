import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';
import prisma from '../prismadb';

export const registerUser = async (req: NextRequest, res: NextResponse) => {
  console.log('---------------------------------------------');
  const data = await new Response(req.body).json();
  console.log(data);
  const { username, email, isAdult } = data;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    console.log('user not found');
    try {
      const newUser = await prisma.profile.create({
        data: {
          username,
          email,
          isAdult,
        },
      });
      console.log(newUser);
      return redirect('/signin');
    } catch (err) {
      console.log('On error');
      console.log(err);
      return NextResponse.json(err);
    }
  }
  return redirect('/signin');
};
