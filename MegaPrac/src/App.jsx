import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  // conditional rendering

  // return !loading ? (
  //   <div className="min-h-screen flex flex-wrap content-between bg- text-white ">
  //     <div className=" w-full block">
  //       <Header />
  //       <main>
  //         {/* main tag is mainly for seo purposes and nothing else */}
  //         <Outlet />
  //       </main>
  //       <Footer />
  //     </div>
  //   </div>
  // ) : null;
  return !loading ? (
    <div className="min-h-screen flex flex-col bg-transparent text-white">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null;
}

export default App;
