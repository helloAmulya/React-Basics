import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  // this code is to limit the pages to be viewed by an unauthenticated user

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  // another simple way to do this is to use authStatus only
  // wrap this inside a useEffect
  // if (!authStatus && authentication) {
  //   navigate("/login");
  // } else if (!authentication && authStatus) {
  //   navigate("/");
  // }

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}

export default Protected;
