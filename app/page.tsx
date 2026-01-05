import { getContainerTagFromEnv } from '@/lib/container_tag';

export const dynamic = 'force-dynamic'; // Ensure the page is always rendered dynamically

export default async function Page() {
  const containerTag = await getContainerTagFromEnv();

  return (
    <>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-sky-600 my-6">
        This is a demo
      </h1>
      <p className="text-lg text-center text-gray-600">Simplest next.js app v1</p>
      <p className="text-lg text-center text-gray-600">Container tag: {containerTag}</p>
    </>
  );
}