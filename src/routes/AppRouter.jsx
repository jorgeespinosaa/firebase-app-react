import { Routes, Route } from "react-router";

import { AuthProvider } from "../context/AuthContext";
import { PrivateRouter } from "./PrivateRouter";

import { PostList } from "../components/PostList";
import { Navbar } from "../components/Navbar";
import { LoginScreen } from "../components/LoginScreen";
import { RecoverScreen } from "../components/RecoverScreen";
import { RegisterScreen } from "../components/RegisterScreen";


export const AppRouter = () => {
  return (
    <AuthProvider>
      
        <div>
          <Navbar />

          <div className="container mt-5">
            <Routes>
              <Route
                path="/"
                element={
                  <PrivateRouter>
                    <PostList />
                  </PrivateRouter>
                }
              />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/recover" element={<RecoverScreen />} />
            </Routes>
          </div>
        </div>
     
    </AuthProvider>
  );
};
