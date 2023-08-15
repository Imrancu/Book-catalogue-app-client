import { useEffect, useState } from "react";
import { BsFilterSquare, BsArrowRightCircleFill } from "react-icons/bs";
import Book from "../Home/Book";
import { useGetBooksQuery } from "../../redux/features/Book/apiBookSlice";
import { useNavigate } from "react-router-dom";

const AllBook = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unused-vars
  const { data, isLoading, error } = useGetBooksQuery(undefined);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
  const books: [] = data?.data?.books;

  if (isLoading) {
    return (
      <h1 className="text-center mt-20 text-3xl text-error font-serif font-bold">
        loading.....
      </h1>
    );
  }
  return (
    <div className="lg:my-20  overflow-x-hidden overflow-y-auto ">
      <div className=" flex justify-around items-center my-5">
        <h1 className="text-center text-accent lg:text-4xl font-serif font-bold">
          All BOOK
        </h1>
        <input
          type="text"
          placeholder="search for books based on criteria such as title, author, or genre"
          className="input input-bordered input-accent lg:w-10/12 w-full "
        />
      </div>
      <div className="flex justify-between ">
        <section className="lg:w-[170px] lg:ml-4 w-28">
          <div className="h-screen border border-secondary mt-4 rounded-xl w-full">
            <h3 className="text-2xl bg-primary lg:pl-2 rounded-tl-lg rounded-tr-lg text-white font-semibold flex justify-between items-center">
              Filter <BsFilterSquare className="mx-2"></BsFilterSquare>
            </h3>
            <button className="my-5 flex items-center font-bold mx-3 lg:mx-0">
              <BsArrowRightCircleFill className="mx-2 lg:block hidden text-primary"></BsArrowRightCircleFill>
              Genre
            </button>
            <button className="flex items-center font-bold mx-3 lg:mx-0">
              <BsArrowRightCircleFill className="mx-2 lg:block hidden  text-primary"></BsArrowRightCircleFill>
              Publication Date
            </button>
          </div>
        </section>
        <section className="lg:w-10/12  px-10 shadow-2xl rounded-xl">
          <div className="lg:grid grid-cols-4 space-x-5 space-y-10">
            {books?.map((book: object) => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              return <Book book={book}></Book>;
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllBook;
