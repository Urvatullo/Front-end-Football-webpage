import { NextPage } from 'next';
import Signup from '../components/Signup';
import Link from 'next/link';

const SignupPage: NextPage = () => {
  return (
    <div>
      <Signup />
      <p>
        Already have an account? <Link href="/login">Log In</Link>
      </p>
    </div>
  );
};

export default SignupPage;
