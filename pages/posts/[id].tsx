import { GetServerSideProps, NextPage } from 'next';
import Layout from '../../components/Layout';
import styles from '../../styles/Posts.module.css';

interface PostProps {
  post: { id: string; title: string; content: string; author: string; date: string } | null;
}

const Post: NextPage<PostProps> = ({ post }) => {
  if (!post) {
    return (
      <Layout>
        <div className={styles.container}>
          <h1>Post not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.container}>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <p>By: {post.author}</p>
        <p>Date: {post.date}</p>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  // Simulate fetching post data from an API or database
  const posts = [
    { id: '1', title: 'First Post', content: 'This is the first post.', author: 'Author 1', date: '2023-01-01' },
    { id: '2', title: 'Second Post', content: 'This is the second post.', author: 'Author 2', date: '2023-01-02' },
  ];

  const post = posts.find((p) => p.id === id) || null;

  return { props: { post } };
};

export default Post;
