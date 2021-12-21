import { Link, useLoaderData } from 'remix';
import { getPosts } from '~/post';
import type { Post } from '~/post';

export const loader = () => getPosts();

export default function Admin() {
  const posts = useLoaderData<Post[]>();

  return (
    <div className="admin">
      <nav>
        <h1>Admin</h1>

        <ul>
          {posts.map(({ slug, title }) => (
            <li key={slug}>
              <Link to={`/posts/${slug}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <main>...</main>
    </div>
  );
}
