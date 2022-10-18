import { createContext, useEffect, useState, useContext } from "react";
import { auth } from "../firebase/firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

// const {} = useAuth();
export const AuthContext = createContext();
export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // LOGOUT
  const logout = () => signOut(auth);

  // REGISTER
  const register = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // LOGIN
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // LOGIN GOOGLE
  const loginGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // LOGIN FACEBOOK
  const loginFacebook = () => {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // LOGIN GITHUB
  const loginGithub = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // RECOVER PASSWORD
  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    onAuthStateChanged(auth, (userInfo) => {
      setUser(userInfo);
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        register,
        login,
        logout,
        loginGoogle,
        loginFacebook,
        loginGithub,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
