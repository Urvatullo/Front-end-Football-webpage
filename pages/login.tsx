import { NextPage } from 'next';
import Login from '../components/Login';
import Link from 'next/link';

const LoginPage: NextPage = () => {
  return (
    <div>
      <Login />
      <p>
        Don't have an account? <Link href="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default LoginPage;