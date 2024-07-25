// components/Logout.tsx
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useRouter } from 'next/router';

const Logout: React.FC = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
