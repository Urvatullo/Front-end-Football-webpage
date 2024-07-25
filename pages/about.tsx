import { NextPage } from 'next';
import Layout from '../components/Layout';
import styles from '../styles/About.module.css';

const About: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>About Football CMS</h1>
        <p>This project is developed by Urvatullo Atoev.</p>
      </div>
    </Layout>
  );
};

export default About;
