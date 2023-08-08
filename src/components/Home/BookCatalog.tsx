/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect, useState } from "react";
import Book from "./Book";

const BookCatalog = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    void fetch("bookProduct.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data?.books);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setBooks(data?.books);
      });
  }, [books]);

  return (
    <div className="lg:my-32">
      <h1 className="text-4xl font font-bold lg:my-10">Books Catelog</h1>
      <div className="lg:grid grid-cols-5 space-x-5 space-y-10">
        {books?.map((book: any): any => {
          return <Book book={book}></Book>;
        })}
      </div>
    </div>
  );
};

export default BookCatalog;
