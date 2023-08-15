/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useParams } from "react-router-dom";
import { useGetSingleBooksQuery } from "../../redux/features/Book/apiBookSlice";

const BookDetails = () => {
  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unused-vars
  const singleData = useGetSingleBooksQuery(id);
  const loading: boolean = singleData?.isLoading;
  if (loading) {
    return (
      <h1 className="text-center mt-20 text-3xl text-error font-serif font-bold">
        loading.....
      </h1>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const data = singleData?.data?.data?.singlebook;
  const { Title, Img_URL, Author, Genre, Publication_Date, _id, Reviews } =
    data;

  return (
    <div className=" p-20">
      <div className="flex justify-center items-center  lg:mb-10">
        <div className="lg:grid grid-cols-2 space-x-4 space-y-4">
          <section>
            <img
              className="lg:w-64 h-auto p-3 shadow-2xl"
              src={Img_URL}
              alt=""
            />
          </section>
          <section className="text-center ">
            <h1 className="lg:text-3xl font-semibold font-serif mt-4">
              {Title}
            </h1>
            <h2 className="lg:text-2xl font-semibold font-serif mt-4">
              Author:{Author}
            </h2>
            <h3 className="lg:text-xl font-semibold font-serif mt-4">
              Genre:{Genre}
            </h3>
            <h4 className="lg:text-lg font-semibold font-serif mt-4">
              Publication Date:{Publication_Date}
            </h4>
            <div className="flex lg:justify-evenly justify-between mt-4">
              <button className="btn lg:btn-sm btn-xs btn-primary text-white">
                Edit Books
              </button>
              <button className="btn lg:btn-sm btn-xs btn-error">
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
              {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                Reviews?.map((reviw: any, index: number) => {
                  return (
                    <tr className="hover">
                      <th>{index + 1}</th>
                      <td>{reviw.user}</td>

                      <td>{reviw?.rating}</td>
                      <td>{reviw?.comment}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div>
          <h1 className=" text-primary lg:text-4xl mb-5 font-bold">
            Rating And Comments
          </h1>
          <form className="border border-primary p-5 rounded-xl">
            <textarea
              placeholder="Write Your Comments"
              className="textarea textarea-bordered textarea-lg w-full"
            ></textarea>
            <select className="select select-primary w-full my-4">
              <option disabled selected>
                Give Your Rating
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <button className="btn btn-warning text-white w-full lg:text-3xl">
              Submit Your opinion
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
