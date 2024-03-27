import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import user2 from "../assests/animation_signup.gif";
import { ImageToBase64 } from "../utility/ImageToBase64";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

  console.log(data);

  const handleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };
  const handleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
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

  const handleUploadProfile = async (e) => {
    const data = await ImageToBase64(e.target.files[0]);
    console.log(data);
    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  console.log(process.env.REACT_APP_SERVER_DOMAIN);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, email, password, confirmPassword } = data;
    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const fetchData = await fetch(
          `${process.env.REACT_APP_SERVER_DOMAIN}/user/signup`,
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
          navigate("/login");
        }
      } else {
        alert("Password do not match!");
      }
    } else {
      alert("Enter all fields");
    }
  };
  return (
    <div className="p-10 md:p-4">
      <div className=" w-full max-w-sm bg-white m-auto flex flex-col p-4 shadow-2xl">
        <h1 className=" text-indigo-600 font-medium mb-2 text-2xl text-center">
          Create Your Account
        </h1>
        <div className=" w-20 h-20 overflow-hidden rounded-full drop-shadow-md m-auto relative ">
          <img
            src={data.image ? data.image : user2}
            className="w-full h-full"
            alt=""
          />
          <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3 bg-violet-200 bg-opacity-50 w-full text-center cursor-pointer ">
              <p className="text-sm p-1  text-white">Upload</p>
            </div>

            {/* to upload profile picture */}
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              className="hidden"
              onChange={handleUploadProfile}
            />
          </label>
        </div>
        <form className="w-full py-3" onSubmit={handleSubmit}>
          <label htmlFor="firstName" className=" text-indigo-500">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={data.firstName}
            onChange={handleData}
            className="w-full px-2 py-1 rounded bg-violet-200 mt-2 mb-3 outline-none"
          />
          <label htmlFor="lastName" className=" text-indigo-500">
            Last Name <span className="text-gray-400">(Optional)</span>
          </label>

          <input
            type="text"
            id="lastName"
            name="lastName"
            value={data.lastName}
            onChange={handleData}
            className="w-full px-2 py-1 rounded bg-violet-200  mt-2 mb-3 outline-none"
          />
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
          <label htmlFor="confirmPassword" className=" text-indigo-500">
            Confirm Password
          </label>
          <div className="flex  px-2 py-1 bg-violet-200 rounded mt-2 mb-3 ">
            <input
              type={showPassword2 ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={handleData}
              className="w-full bg-violet-200 border-none outline-none"
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword2}
            >
              {showPassword2 ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <div className="flex justify-center mt-6">
            <button className=" px-8 py-2 rounded-md bg-violet-200 text-indigo-500 hover:bg-violet-300 hover:text-indigo-700 cursor-pointer">
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-sm">
          Already registered ?{" "}
          <Link
            className="text-base text-red-500 underline hover:text-red-600"
            to={"/login"}
          >
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignUp;
