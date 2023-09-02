/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useGetBooksQuery } from "../../redux/features/Book/apiBookSlice";
import Book from "./Book";

const BookCatalog = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unused-vars
  const { data, isLoading } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 3000,
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const books: [] = data?.data?.books;

  if (isLoading) {
    return (
      <h1 className="text-center mt-20 text-3xl text-error font-serif font-bold">
        loading.....
      </h1>
    );
  }

  return (
    <div className="lg:my-32">
      <h1 className="lg:text-5xl text-xl font font-bold font-serif lg:my-10">
        Books Catelog
      </h1>

      <div className="lg:grid grid-cols-5 space-x-5 space-y-10">
        {books?.slice(0, 10)?.map((book) => {
          return <Book book={book}></Book>;
        })}
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => navigate("/all-book")}
          className="btn mt-10 bg-[#77B748] text-white hover:text-black rounded-full"
        >
          More Books{" "}
          <BsFillArrowRightCircleFill className="w-5 h-5"></BsFillArrowRightCircleFill>
        </button>
      </div>
    </div>
  );
};

export default BookCatalog;
