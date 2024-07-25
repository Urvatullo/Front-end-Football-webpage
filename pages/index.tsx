import { NextPage } from 'next';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Welcome to Football CMS</h1>
        <p>Your go-to platform for football news and updates.</p>
      </div>
    </Layout>
  );
};

export default Home;
