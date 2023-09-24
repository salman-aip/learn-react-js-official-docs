"use client";

import { createContext, useContext, useEffect, useState } from "react";

const authContext = createContext({});

export default function ContextAPI({ children }: any) {
  const [token, setToken] = useState("");

  useEffect(() => {
    const getToken: any = localStorage.getItem("token");

    if (getToken) {
      setToken(getToken);
    } else {
      setToken("");
    }
  }, []);

  return <authContext.Provider value={{ token, setToken }}>{children}</authContext.Provider>;
}

// export const useContextAPI = () => {
//   useContext(authContext);
// };
