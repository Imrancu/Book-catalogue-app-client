/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { SubmitHandler, useForm } from "react-hook-form";
import { useUpdateBookMutation } from "../../redux/features/Book/apiBookSlice";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

interface IFormInputs {
  Title: string;
  Author: string;
  Img_URL: string;
  Publication_Date: string;
  Genre: string;
  email: string;
}

const EditBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();
  const [updateBook] = useUpdateBookMutation();
  // console.log(updateBook);

  // eslint-disable-next-line @typescript-eslint/require-await
  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    const token = localStorage.getItem("accessToken");
    // console.log(token);
    if (!token) {
      toast.error("Please Login Before you are Not user");
      return navigate("/login");
    } else if (token) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
      const bookId = id;
      const bookData = data;
      const respons = await updateBook({ bookId, bookData });
      console.log(id);

      if (respons?.data?.success === true) {
        toast.success("Updated your book");
        navigate("/");
        reset();
      }
      console.log(respons);
    }
  };
  return (
    <div className="bg-gradient-to-br py-20 from-gray-100  to-primary min-h-screen flex items-center justify-center">
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 md:w-1/2"
      >
        <h2 className="text-2xl font-semibold mb-6 text-primary">
          Edit Your Book
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            {...register("Title", { required: true })}
            required
            type="text"
            name="Title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Image URL
          </label>
          <input
            required
            {...register("Img_URL", { required: true })}
            type="text"
            name="Img_URL"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Author
          </label>
          <input
            required
            {...register("Author", { required: true })}
            type="text"
            name="Author"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Genre
          </label>
          <input
            required
            {...register("Genre", { required: true })}
            type="text"
            name="Genre"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Publication Date
          </label>
          <input
            required
            type="date"
            {...register("Publication_Date", { required: true })}
            name="Publication_Date"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-gradient-to-br  from-green-300  to-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
