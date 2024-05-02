import React, { useContext, useState } from "react";
// import { authval } from './AuthcontextProvider'
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { authval } from "./AuthContextProvider";

let intistate = {
  email: "",
  password: "",
};

function Login() {
  const [formdata, setformdata] = useState(intistate);

  const {login} = useContext(authval)

  const nav = useNavigate();
  const location = useLocation();

  const handle_chnage = (e) => {
    const { name, value } = e.target;
    let obj = { ...formdata };
    obj[name] = value;
    //  console.log("obj", obj)
    setformdata(obj);
  };

  const handle_form = (e) => {
    e.preventDefault();
    // console.log("adil")
    // console.log(formdata)
    // setformdata(intistate);

    // console.log( formdata.password)

    let lsadata = JSON.parse(localStorage.getItem("regData"));

    if (lsadata) {
      console.log(lsadata);
      let checkauth = lsadata.find(
        (ele) =>
          ele.email == formdata.email && ele.password == formdata.password
      );
      console.log("checauth", checkauth);
      if (checkauth) {
    
        toast.success("Registration successfull!", {
          style: {
            borderRadius: "50px",
            background: "#000428",
            color: "#ffffff",
            padding: "1rem 1.5rem",
            fontWeight: "600",
          },
        });
        login(checkauth)

        nav(location.state?.from || "/");
      } else {
        toast.error("Something went wrong", {
          style: {
            borderRadius: "50px",
            background: "#000428",
            color: "#ffffff",
            padding: "1rem 1.5rem",
            fontWeight: "600",
          },
        });
      }
    }
  };

  const gotosignform = () => {
    nav("/signup");
  };

  const { email, password } = formdata;

  return (
    <div className="signup login">
      <h1>Login</h1>

      <form onSubmit={(e) => handle_form(e)} className="signupform">
      <label>Email :  </label>
        <input
          onChange={(e) => handle_chnage(e)}
          name="email"
          value={email}
          type="text"
          placeholder="email"
        />
            <label>Password :  </label>
        <input
          onChange={(e) => handle_chnage(e)}
          name="password"
          value={password}
          type="password"
          placeholder="password"
        />

        <div className="logindiv">
          <button type="submit">Login</button>
        </div>
      </form>
      <p onClick={gotosignform}>
        Create new user
      </p>
    </div>
  );
}

export default Login;
