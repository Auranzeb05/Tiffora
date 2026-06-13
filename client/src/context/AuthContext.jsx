import { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [role, setRole] = useState(localStorage.getItem('tiffora_role') || null);

  const value = useMemo(
    () => ({
      role,
      loginAs(nextRole) {
        setRole(nextRole);
        localStorage.setItem('tiffora_role', nextRole);
      },
      logout() {
        setRole(null);
        localStorage.removeItem('tiffora_role');
      }
    }),
    [role]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
