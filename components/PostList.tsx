import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/Posts.module.css';

interface Post {
  id: string;
  title: string;
  author: string;
  date: string;
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Simulate fetching posts from an API
    const fetchedPosts: Post[] = [
      { id: '1', title: 'First Post', author: 'Author 1', date: '2023-01-01' },
      { id: '2', title: 'Second Post', author: 'Author 2', date: '2023-01-02' },
    ];
    setPosts(fetchedPosts);
  }, []);

  return (
    <div className={styles.postList}>
      {posts.map((post) => (
        <div key={post.id} className={styles.postItem}>
          <Link href={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
            <p>By: {post.author}</p>
            <p>Date: {post.date}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
