import React, { createContext, useState, useContext, ReactNode, Dispatch } from 'react';

interface AuthContextData {
  isSignedIn: boolean;
  setIsSignedIn: Dispatch<React.SetStateAction<boolean>>;
  token: string;
  setToken: Dispatch<React.SetStateAction<string>>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [token, setToken] = useState("");

  return (
    <AuthContext.Provider value={{ isSignedIn, setIsSignedIn, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => useContext(AuthContext);
