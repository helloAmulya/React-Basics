
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { login } from "../store/authSlice";
// import { Button, Input, Logo } from "./index";
// import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import authService from "../appwrite/auth";

// function Signup() {
//   const navigate = useNavigate();
//   const [error, setError] = useState("");
//   const dispatch = useDispatch();
//   const { register, handleSubmit } = useForm();

//   const signup = async (data) => {
//     setError("");
//     try {
//       const userData = await authService.createAccount(data);
//       if (userData) {
//         const userData = await authService.getCurrentUser();
//         if (userData) dispatch(login(userData));
//         navigate("/");
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center w-full min-h-screen bg-transparent">
//       <div className="mx-auto w-full max-w-lg bg-white/10 backdrop-blur-xl shadow-2xl rounded-2xl p-10 border border-white/20 text-white">
//         {/* Logo */}
//         {/* <div className="mb-5 flex justify-center">
//           <span className="inline-block w-full max-w-[80px]">
//             <Logo width="100%" />
//           </span>
//         </div> */}

//         {/* Heading */}
//         <h2 className="text-center text-3xl font-bold">Create Your Account</h2>
//         <p className="mt-2 text-center text-base text-white/70">
//           Already have an account?&nbsp;
//           <Link
//             to="/login"
//             className="font-medium text-blue-400 transition-all duration-200 hover:underline"
//           >
//             Sign In
//           </Link>
//         </p>

//         {/* Error Message */}
//         {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

//         {/* Signup Form */}
//         <form onSubmit={handleSubmit(signup)} className="mt-6">
//           <div className="space-y-6">
//             <Input
//               // label="Full Name"
//               placeholder="Enter Your Name"
//               type="text"
//               {...register("name", { required: true })}
//             />

//             <Input
//               // label="Email Address"
//               placeholder="example@gmail.com"
//               type="email"
//               {...register("email", {
//                 required: true,
//                 validate: {
//                   matchPattern: (value) =>
//                     /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
//                     "Enter a valid email address",
//                 },
//               })}
//             />

//             <Input
//               // label="Password"
//               type="password"
//               placeholder="Password"
//               {...register("password", { required: true })}
//             />

//             <Button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out"
//             >
//               Create Account
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input } from "./index";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const signup = async (data) => {
    setError("");
    try {
      const newUser = await authService.createAccount(data);
      if (newUser) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-transparent">
      <div className="mx-auto w-full max-w-sm bg-white/10 backdrop-blur-xl shadow-2xl rounded-2xl p-8 border border-white/20 text-white">
        {/* Heading */}
        <h2 className="text-center text-2xl font-semibold">Create Your Account</h2>
        <p className="mt-2 text-center text-sm text-white/70">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-blue-400 transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>

        {/* Error Message */}
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

        {/* Signup Form */}
        <form onSubmit={handleSubmit(signup)} className="mt-6 flex flex-col items-center">
          <div className="space-y-5 w-full">
            <Input
              placeholder="Enter Your Name"
              type="text"
              {...register("name", { required: true })}
            />

            <Input
              placeholder="example@gmail.com"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Enter a valid email address",
                },
              })}
            />

            <Input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />

            <Button
              type="submit"
              className="w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
            >
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
