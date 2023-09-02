/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/features/Book/apiBookSlice";
import Signup from "./Signup";
interface IFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const [toggleSignup, setToggleSignup] = useState<boolean>(false);
  const location = useLocation();
  const from = location?.pathname || "/";
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    const response: any = await loginUser(data);
    if (response?.data) {
      const message = await response?.data?.message;
      toast.success(message);
      const token: string = await response?.data?.data?.accessToken;
      localStorage.setItem("accessToken", token);
      return navigate(from, { replace: true });
    } else {
      toast.error("Please submit your currect Email or password");
      navigate("/login");
    }
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();

  return (
    <section>
      {!toggleSignup && (
        <div
          className="flex justify-center items-center  my-16 px-5 lg:px-0 font-serif"
          data-aos="flip-left"
        >
          <div className="w-96 py-10 border border-primary rounded-xl shadow-2xl">
            <h1 className="text-center text-4xl font-bold ">Login</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="text-center px-10">
                <p className="text-left font-semibold">Email</p>
                <input
                  {...register("email", { required: true })}
                  className="w-full px-2 rounded-xl h-12 border border-black"
                  type="email"
                  id=""
                  name="email"
                />
                {errors && (
                  <p role="alert" className="text-red-500">
                    {errors.root?.message}
                  </p>
                )}
              </div>
              <div className="text-center  px-10 my-4">
                <p className="text-left font-semibold">Password</p>
                <input
                  {...register("password", { required: true })}
                  className="w-full rounded-xl h-12 border px-2 border-black"
                  type="password"
                  name="password"
                />
                {errors && (
                  <p role="alert" className="text-red-500">
                    {errors.root?.message}
                  </p>
                )}
              </div>
              <div className=" px-10">
                <button
                  type="submit"
                  className="btn btn-primary w-full text-white"
                >
                  SUBMIT
                </button>
              </div>
            </form>
            <div className="divider px-10 text-primary font-semibold">OR</div>
            <div className=" px-10">
              <button
                // onClick={handleGoogle}
                className="btn w-full  btn-error border-0"
              >
                Google
              </button>
            </div>
            <div className="px-10 mt-3">
              <p className="text-left">
                Don't have an account?
                <button
                  onClick={() => setToggleSignup(!toggleSignup)}
                  className="text-primary font-bold"
                >
                  Sign up!
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
      {toggleSignup && (
        <Signup
          setToggleSignup={setToggleSignup}
          toggleSignup={toggleSignup}
        ></Signup>
      )}
    </section>
  );
};

export default Login;
