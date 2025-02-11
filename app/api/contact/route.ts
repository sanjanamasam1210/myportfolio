import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    const contact = await prisma.contact.create({
      data: { name, email, subject, message },
    });

    return NextResponse.json({ message: 'Form submitted successfully', contact }, { status: 200 });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json({ error: 'Error submitting form' }, { status: 500 });
  }
}
