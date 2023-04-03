import React, { useState } from "react";
import { logo } from "../assets/constants";
import Input from "./ui/input";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUserFailure,
  registerUserStart,
  registerUserSuccess,
} from "../slices/auth";
import AuthService from "../service/auth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const registerHendler = async (e) => {
    e.preventDefault();
    dispatch(registerUserStart());
    try {
      dispatch(registerUserSuccess());
      const user = {
        username: name,
        email,
        password,
      };
      const response = await AuthService.userRegister(user);
      console.log(response);
      console.log(user);
    } catch (error) {
      dispatch(registerUserFailure());
    }
  };
  return (
    <div className="flex justify-center items-center h-[89vh] w-full flex-col">
      <img
        src={logo}
        className="w-32 h-32 object-cover rounded-full"
        alt="logo"
      />
      <h1 className="my-3 text-2xl">Please Register! 🔐</h1>
      <Input
        label={"Username"}
        text={"Enter username..."}
        state={name}
        setState={setName}
      />
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
        onClick={registerHendler}
        className="bg-blue-500 px-6 py-3 rounded mt-5 text-white"
      >
        {isLoading ? "loading..." : "Register"}
      </button>
    </div>
  );
};

export default Register;
