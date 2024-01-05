// import prisma from "@/lib/prismadb";
import { NextRequest, NextResponse } from 'next/server';

export const createTribe = (req: NextRequest, res: NextResponse) => {
  console.log(req.body);
  return NextResponse.json({ ok: 'true' });
};
