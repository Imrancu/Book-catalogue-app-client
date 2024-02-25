/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from "react";
import { BsArrowRightCircleFill, BsFilterSquare } from "react-icons/bs";
import { useGetBooksQuery } from "../../redux/features/Book/apiBookSlice";
import Book from "../Home/Book";

const AllBook = () => {
  const [queryParams, setQueryParams] = useState({
    Genre: "",
    Publication_Date: "",
    Author: "",
    Tile: "",
  });

  // console.log(queryParams);

  const handleClear = () => {
    window.location.reload();
  };

  const handleGenreAndDate = (e: string, type: string) => {
    if (type === "Genre") {
      setQueryParams({
        ...queryParams,
        Genre: e.trim(),
      });
    } else if (type === "Publication_Date") {
      setQueryParams({
        ...queryParams,
        Publication_Date: e.trim(),
      });
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unused-vars
  const { data, isLoading } = useGetBooksQuery(queryParams);
  const data2 = useGetBooksQuery(undefined);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
  const books: [] = data?.data?.books;
  // console.log(books);

  const [, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (e: { target: { value: string } }) => {
    const query = e?.target?.value?.toLowerCase();
    setSearchQuery(query);

    const filteredResults: any = books?.filter(
      (book: any) =>
        book?.Title?.toLowerCase()?.includes(query) ||
        book?.Author?.toLowerCase()?.includes(query) ||
        book?.Genre?.toLowerCase()?.includes(query)
    );

    setFilteredBooks(filteredResults);
  };

  const mapBooks =
    filteredBooks === undefined || filteredBooks.length === 0
      ? books
      : filteredBooks;

  const books2: [] = data2?.data?.data?.books;

  if (isLoading) {
    return (
      <div className="flex justify-center my-20 items-center">
      <span className="loading loading-infinity w-16   text-primary loading-xl"></span>
    </div>
    );
  }

  const uniqueGenre = new Set();
  const uniqueDate = new Set();

  books2?.map((object: any) => {
    uniqueGenre?.add(object?.Genre);
  });
  books2?.map((object: any) => {
    uniqueDate?.add(object?.Publication_Date);
  });

  const uniqueGenreArray = Array.from(uniqueGenre);
  const uniqueDateArray = Array.from(uniqueDate);

  return (
    <div className="lg:my-20  overflow-x-hidden overflow-y-auto ">
      <div className=" flex justify-around items-center my-5">
        <h1
          onClick={handleClear}
          className="text-center cursor-pointer text-accent lg:text-4xl font-serif font-bold"
        >
          All BOOK
        </h1>
        <input
          onChange={handleSearch}
          type="text"
          // name={searchCriteria} // Use selected search criteria as name
          placeholder="search for books based on criteria such as title, author, or genre"
          className="input input-bordered input-accent lg:w-10/12 w-full "
        />
      </div>
      <div className="flex justify-between ">
        <section className="lg:w-[170px] lg:ml-4 w-28">
          <div className="h-screen border border-secondary mt-4 rounded-xl w-full">
            <h3
              onClick={handleClear}
              className="text-2xl bg-primary cursor-pointer lg:pl-2 rounded-tl-lg rounded-tr-lg text-white font-semibold flex justify-between items-center"
            >
              Filter <BsFilterSquare className="mx-2"></BsFilterSquare>
            </h3>
            <button className="my-2 flex items-center font-bold mx-3 lg:mx-0">
              <BsArrowRightCircleFill className="mx-2 lg:block hidden text-primary"></BsArrowRightCircleFill>
              Genre
            </button>
            <ul className="ml-4 cursor-pointer font-semibold">
              {uniqueGenreArray.map((g: any) => {
                return (
                  <li onClick={() => handleGenreAndDate(g, "Genre")}>{g}</li>
                );
              })}
            </ul>
            <button className="flex my-2 items-center  font-bold mx-3 lg:mx-0">
              <BsArrowRightCircleFill className="mx-2 lg:block hidden  text-primary"></BsArrowRightCircleFill>
              Publication Date
            </button>
            <ul className="ml-4 font-semibold cursor-pointer ">
              {uniqueDateArray.map((g: any) => {
                return (
                  <li onClick={() => handleGenreAndDate(g, "Publication_Date")}>
                    {g}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <section className="lg:w-10/12  px-10 shadow-2xl rounded-xl">
          <div className="lg:grid grid-cols-4 space-x-5 space-y-10">
            {mapBooks?.map((book) => {
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
