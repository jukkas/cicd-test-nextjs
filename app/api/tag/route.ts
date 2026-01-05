import { NextResponse } from 'next/server';
import { getContainerTagFromEnv } from '@/lib/container_tag';

export async function GET() {
  return NextResponse.json(await getContainerTagFromEnv());
}
