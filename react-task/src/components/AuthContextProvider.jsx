import React, { createContext, useState } from "react";

let intilstate = {
  isAuth: false,
  username : ""
};
export const authval = createContext();

function AuthcontextProvider({ children }) {
  const [user, setuser] = useState(intilstate);

  const login = (checkauth) => {
    setuser({
      isAuth: true,
      username : checkauth.username
     })
  }
  const logout = () => {
    setuser({
      isAuth: false,
      username : ""
     })
  }

  return <authval.Provider value={{ user, login , logout}}>{children}</authval.Provider>;
}

export default AuthcontextProvider;
