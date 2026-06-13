import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const { loginAs } = useAuth();

  return (
    <main>
      <h1>Tiffora Login</h1>
      <p>Choose a role to access the right workspace:</p>
      <button onClick={() => loginAs('customer')}>Continue as Customer</button>
      <button onClick={() => loginAs('admin')}>Continue as Admin</button>
    </main>
  );
}
