import { NextResponse } from 'next/server';
import prisma from '../prismadb';

export async function createTribe(req: Request, res: Response) {
  console.log('on create tribe');
  const { name, description, imageUrl } = await new Response(req.body).json();
  const id = '2';
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
    return NextResponse.json(err);
  }
}
