import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';

export const loader: LoaderFunction = async ({ params }) => params.slug;

export default function PostSlug() {
  const slug = useLoaderData();

  return (
    <div>
      <h1>Post: {slug}</h1>
    </div>
  );
}
