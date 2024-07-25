import { ReactNode } from 'react';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/login">Login</Link> {/* Add this link */}
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
