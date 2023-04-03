import React, { useState } from "react";
import { logo } from "../assets/constants";
import Input from "./ui/input";
import { useDispatch, useSelector } from "react-redux";
import { loginUserStart } from "../slices/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const loginHendler = (e) => {
    e.preventDefault();
    dispatch(loginUserStart());
  };

  return (
    <div className="flex justify-center items-center h-[89vh] w-full flex-col">
      <img
        src={logo}
        className="w-32 h-32 object-cover rounded-full"
        alt="logo"
      />
      <h1 className="my-3 text-2xl">Please Login! 🔑</h1>
      <Input
        label={"Email"}
        text={"Enter email..."}
        state={email}
        setState={setEmail}
        type="email"
      />
      <Input
        label={"Password"}
        text={"Enter password..."}
        state={password}
        setState={setPassword}
        type="password"
      />
      <button
        onClick={loginHendler}
        type="submit"
        className="bg-blue-500 px-6 py-3 rounded mt-5 text-white disabled:bg-blue-300"
        disabled={isLoading}
      >
        {isLoading ? "loading..." : "Login"}
      </button>
    </div>
  );
};

export default Login;
