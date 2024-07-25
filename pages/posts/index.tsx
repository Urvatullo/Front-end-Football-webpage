import { NextPage } from 'next';
import Layout from '../../components/Layout';
import PostList from '../../components/PostList';
import styles from '../../styles/Posts.module.css';

const Posts: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>All Posts</h1>
        <PostList />
      </div>
    </Layout>
  );
};

export default Posts;
