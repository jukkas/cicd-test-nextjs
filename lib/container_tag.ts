import 'server-only';

export async function getContainerTagFromEnv() {
  console.log('Fetching CONTAINER_TAG from environment variables:', process.env.CONTAINER_TAG);
  return process.env.CONTAINER_TAG ? process.env.CONTAINER_TAG : '---CONTAINER_TAG not set---';
}
