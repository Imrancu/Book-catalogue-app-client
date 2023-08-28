/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Await, useNavigate, useParams } from "react-router-dom";
import {
  useCreateBookReviewMutation,
  useGetBooksReviewsQuery,
  useGetSingleBooksQuery,
} from "../../redux/features/Book/apiBookSlice";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import BookReview from "./BookReview";
import { useEffect, useState } from "react";
interface IFormInputs {
  comment: string;
  rating: number;
  _id: string;
}

const BookDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unused-vars
  const singleData = useGetSingleBooksQuery(id);
  const [singleDataState, setSingleDataState] = useState(singleData);
  useEffect(() => {
    setSingleDataState(singleDataState);
  }, [singleDataState]);
  const loading: boolean = singleData?.isLoading;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const data = singleDataState?.data?.data?.singlebook;
  if (loading) {
    return (
      <h1 className="text-center text-error text-2xl font-bold">Loading...</h1>
    );
  }

  // // review data
  const bookId: string = data?._id;
  const allReview = useGetBooksReviewsQuery(bookId);
  const reviewData = allReview?.data?.data?.result;
  const [reviewState, setReviewState] = useState(reviewData);
  useEffect(() => {
    setReviewState(reviewState);
  }, [reviewState]);
  if (allReview?.isLoading) {
    return (
      <h1 className="text-center text-error text-2xl font-bold">Loading...</h1>
    );
  }

  // const [createBookReview, { isLoading, isError, isSuccess }] =
  //   useCreateBookReviewMutation();

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = async (data2: IFormInputs) => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/login");
      return toast.success("Please Login,You Are Not User");
    } else {
      if (isLoading) {
        return toast.loading("loading...");
      }
      const { rating, comment } = data2;
      const newData = {
        rating,
        comment,
        bookId: data?._id,
      };
      // eslint-disable-next-line @typescript-eslint/await-thenable
      const result = await createBookReview(newData);
      console.log(result);
      toast.success("SuccssFully Review Send");
      return reset();
    }
  };

  return (
    <div className=" p-20">
      <div className="flex justify-center items-center  lg:mb-10">
        <div className="lg:grid grid-cols-2 space-x-4 space-y-4">
          <section>
            <img
              className="lg:w-64 h-auto p-3 shadow-2xl"
              src={data?.Img_URL && data?.Img_URL}
              alt=""
            />
          </section>
          <section className="text-center ">
            <h1 className="lg:text-3xl font-semibold font-serif mt-4">
              {data?.Title && data?.Title}
            </h1>
            <h2 className="lg:text-2xl font-semibold font-serif mt-4">
              Author:{data?.Author && data?.Author}
            </h2>
            <h3 className="lg:text-xl font-semibold font-serif mt-4">
              Genre:{data?.Genre}
            </h3>
            <h4 className="lg:text-lg font-semibold font-serif mt-4">
              Publication Date:
              {data?.Publication_Date && data?.Publication_Date}
            </h4>
            <div className="flex lg:justify-evenly justify-between mt-4">
              <button
                onClick={() => navigate("/editBook")}
                className="btn lg:btn-sm btn-xs btn-primary text-white"
              >
                Edit Books
              </button>
              <button className="btn text-white lg:btn-sm btn-xs btn-error">
                Delete Books
              </button>
            </div>
          </section>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto font-serif lg:my-20">
          <h1 className="text-center text-primary lg:text-4xl mb-5 font-bold">
            USER REVIEWS
          </h1>
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-base-200">
                <th>Number</th>
                <th>Name</th>
                <th>Rating</th>
                <th>Comments</th>
              </tr>
            </thead>

            <tbody>
              {allReview?.isSuccess &&
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                reviewState?.map((reviw: any, index: number) => {
                  return (
                    <tr className="hover">
                      <th>{index + 1}</th>
                      <td>{reviw?.user}</td>

                      <td>{reviw?.rating}</td>
                      <td>{reviw?.comment}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center font-serif items-center">
        <div>
          <h1 className=" text-primary lg:text-4xl mb-5 font-bold">
            Rating And Comments
          </h1>
          <form
            // eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/no-unsafe-argument
            // onSubmit={handleSubmit(onSubmit)}
            className="border  border-primary p-5 rounded-xl"
          >
            <textarea
              placeholder="Write Your Comments"
              // {...register("comment", { required: true })}
              required
              name="comment"
              className="textarea textarea-bordered textarea-lg w-full"
            ></textarea>
            <select
              className="select select-primary w-full my-4"
              // {...register("rating", { required: true })}
              required
              name="rating"
            >
              <option disabled selected>
                Give Your Rating
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <button
              type="submit"
              className="btn btn-primary text-white w-full lg:text-3xl"
            >
              Submit Your opinion
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
