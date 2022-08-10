import React from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLock,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
const LoginForm = () => {
  const [iconstyle, seticonstyle] = React.useState("border-grey");
  const [borderstylepassword, setborderstylepassword] =
    React.useState("border-grey");
  const [passwordtype, setpasswordtype] = React.useState("password");
  const changeBorderColor = () => {
    if (iconstyle == "border-grey") {
      seticonstyle("border-primaryblue   border-2 scale-[101%]");
    } else {
      seticonstyle("border-grey");
    }
  };
  const changeBorderColorPassword = () => {
    if (borderstylepassword == "border-grey") {
      setborderstylepassword("border-primaryblue  border-2 scale-[101%]");
    } else {
      setborderstylepassword("border-grey");
    }
  };
  const Viewpassword = () => {
    if (passwordtype == "password") {
      setpasswordtype("text");
    } else {
      setpasswordtype("password");
    }
  };

  return (
    <div className="bg-white grid place-items-center h-screen sm:h-auto">
      <div className="flex flex-col gap-5">
        <h1 className="text-center">
          <span className="text-4xl text-primaryblue font-bold">Log </span>
          <span className="text-4xl text-primaryblue font-normal">in</span>
        </h1>
        <form
          action="
            "
        >
          <div className="flex flex-col gap-6">
            <div
              className={`border-2 rounded-lg ${iconstyle} flex gap-4 shadow-lg  p-2  w-96 md:w-auto`}
            >
              <div>
                <BsPerson className="text-primaryblue my-1 ml-2 w-6 h-6" />
              </div>

              <input
                type="text"
                className="focus:outline-none rounded-r-lg text-primaryblue placeholder:text-primaryblue placeholder:opacity-95 w-full"
                onFocus={changeBorderColor}
                onBlur={changeBorderColor}
                placeholder="User Id"
              ></input>
            </div>
            <div
              className={`border-2 rounded-lg ${borderstylepassword} flex gap-4 shadow-lg p-2 w-96 md:w-auto`}
            >
              <div>
                <AiOutlineLock className="text-primaryblue my-1 ml-2 w-6 h-6" />
              </div>

              <input
                type={passwordtype}
                className="focus:outline-none rounded-r-lg text-primaryblue placeholder:text-primaryblue placeholder:opacity-95 w-full"
                onFocus={changeBorderColorPassword}
                onBlur={changeBorderColorPassword}
                placeholder="password"
              ></input>
              <div>
                {passwordtype == "password" ? (
                  <AiOutlineEyeInvisible
                    className="text-primaryblue my-1 ml-2 w-6 h-6"
                    onClick={Viewpassword}
                  />
                ) : (
                  <AiOutlineEye
                    className="text-primaryblue my-1 ml-2 w-6 h-6"
                    onClick={Viewpassword}
                  />
                )}
              </div>
            </div>
            <div className="grid place-content-center">
              <button className="bg-primaryred text-white rounded-lg px-24 py-3 font-bold w-max ">
                Login
              </button>
            </div>
          </div>
        </form>
        <div></div>
      </div>
    </div>
  );
};

export default LoginForm;
