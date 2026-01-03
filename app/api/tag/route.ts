import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(process.env.CONTAINER_TAG ? process.env.CONTAINER_TAG : '---CONTAINER_TAG not set---');
}
