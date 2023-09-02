/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { SubmitHandler, useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { useCreateUserMutation } from "../../redux/features/Book/apiBookSlice";
// import { toast } from "react-toastify";

interface IFormInputs {
  name: string;
  email: string;
  password: string;
}
interface SignupProps {
  toggleSignup: boolean;
  setToggleSignup: (value: boolean) => any;
}

const Signup = (props: SignupProps) => {
  const [createUser, { isError, isSuccess }] = useCreateUserMutation();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormInputs>();
  // const navigate = useNavigate();
  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    const respons = await createUser(data);
    // console.log(data);
    if (!respons) {
      console.log("error");

      // Handle error
    } else if (respons) {
      // toast.success("successfully signup,please login");
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      // console.log(data);
    }
    reset();
  };
  if (isError) {
    toast.error("You are facing error,please login");
    <Toaster></Toaster>;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return props.setToggleSignup(!props.toggleSignup);
  }
  if (isSuccess) {
    toast.success("successfully signup,please login");
    <Toaster></Toaster>;
    props.setToggleSignup(!props.toggleSignup);
    return;
  }

  return (
    <div
      className="flex justify-center items-center  mt-10 mb-16 px-5 lg:px-0 font-serif"
      data-aos="flip-right"
    >
      <div className="w-96 border border-primary  py-5 rounded-xl shadow-2xl">
        <h1 className="text-center text-4xl font-bold ">Sign Up</h1>
        <form
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="text-center px-10 my-4">
            <p className="text-left font-semibold">Name</p>
            <input
              placeholder="Type your Name"
              className="w-full px-2 rounded-xl h-12 border border-black"
              {...register("name", { required: true })}
              type="text"
              name="name"
              id=""
            />
            {errors && (
              <p role="alert" className="text-red-500">
                {errors.root?.message}
              </p>
            )}
          </div>
          <div className="text-center px-10">
            <p className="text-left font-semibold">Email</p>
            <input
              {...register("email", { required: true })}
              placeholder="type your Email"
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
              placeholder="Password"
              className="w-full rounded-xl h-12 border px-2 border-black"
              type="password"
              name="password"
              id=""
            />
            {errors && (
              <p role="alert" className="text-red-500">
                {errors.root?.message}
              </p>
            )}
          </div>
          <div className=" px-10">
            <button type="submit" className="btn btn-primary w-full text-white">
              SUBMIT
            </button>
          </div>
        </form>
        <div className="divider px-10 text-primary font-semibold">OR</div>
        <div className=" px-10">
          <button className="btn w-full  btn-error border-0">Google</button>
        </div>
        <div className="px-10 mt-3">
          <p className="text-left">
            I have an account{" "}
            <button
              // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
              onClick={() => props.setToggleSignup(!props.toggleSignup)}
              className="text-primary font-bold"
            >
              Login!
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
