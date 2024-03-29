import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/userSlice";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword1, setShowPassword1] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const userData = useSelector((state) => state.user);
  // console.log(userData.user);

  const dispatch = useDispatch();

  const handleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  // function to take input from the signup form
  const handleData = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = data;
    if (email && password) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/user/login`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const respData = await fetchData.json();
      console.log(respData);
      toast(respData.message);
      if (respData.alert) {
        dispatch(loginRedux(respData));
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
      console.log(userData);
    } else {
      alert("Enter all required fields");
    }

    setData(() => {
      return {
        email: "",
        password: "",
      };
    });
  };
  return (
    <div className="p-10 md:p-4">
      <div className=" w-full max-w-sm bg-white m-auto flex flex-col p-4 shadow-2xl">
        <h1 className="text-indigo-600 font-medium mb-2 text-2xl">
          Sign in to your account
        </h1>
        <form className="w-full py-3" onSubmit={handleSubmit}>
          <label htmlFor="email" className=" text-indigo-500">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleData}
            className="w-full px-2 py-1 rounded bg-violet-200 mt-2 mb-3 outline-none"
          />
          <label htmlFor="password" className=" text-indigo-500">
            Password
          </label>
          <div className="flex  px-2 py-1 bg-violet-200 rounded mt-2 mb-3 ">
            <input
              type={showPassword1 ? "text" : "password"}
              id="password"
              name="password"
              value={data.password}
              onChange={handleData}
              className="w-full bg-violet-200 border-none outline-none"
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword1}
            >
              {showPassword1 ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <div className="flex justify-center mt-6">
            <button className=" px-8 py-2 rounded-md bg-violet-200 text-indigo-500 hover:bg-violet-300 hover:text-indigo-700 cursor-pointer">
              Login
            </button>
          </div>
        </form>
        <p className="text-sm">
          Don't have an account?{" "}
          <Link
            className="text-base text-red-500 underline hover:text-red-600"
            to={"/signup"}
          >
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
