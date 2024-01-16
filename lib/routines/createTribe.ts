import prisma from '@/lib/prismadb';
import { MemberRole } from '@prisma/client';
import axios from 'axios';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function createTribe(req: Request, res: Response) {
  const { name, description, imageUrl } = await new Response(req.body).json();
  const { id } = await axios.get('/api/me').then((res) => res.data);
  if (!id) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  try {
    const newTribe = await prisma.tribe.create({
      data: {
        profileId: id,
        name,
        description,
        imageUrl,
        invite: `${process.env.NEXT_APP_NAME}` + '-' + uuidv4(),
        clans: {
          create: [
            {
              name: 'default',
              profileId: id,
            },
          ],
        },
        members: {
          create: [{ profileId: id, role: MemberRole.ADMIN }],
        },
      },
    });
    return NextResponse.json(newTribe);
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  }
}
