import Link from 'next/link';

interface PostItemProps {
  post: { id: string; title: string; author: string; date: string };
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div>
      <Link href={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
        <p>By: {post.author}</p>
        <p>Date: {post.date}</p>
      </Link>
    </div>
  );
};

export default PostItem;
