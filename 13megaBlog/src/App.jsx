import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { Header, Footer } from "./components";
import { login, logout } from "./store/authSlice";

import "./App.css";

function App() {
  // comments
  // console.log(process.env.REACT_APP_APPWRITE_URL); we will not use process as we are uing vite
  // console.log(import.meta.env.VITE_APPWRITE_URL); // we will use import.meta

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          // dispatch(logout);
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between ">
      <div className="w-full block">
        <Header />
        <main>
          {/* Todo: <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
