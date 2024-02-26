import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../../App.css";
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

interface Book {
  Title: string;
  Img_URL: string;
  Author: string;
 Genre: string;
 Publication_Date: string;
   _id: string
 }
 interface BookProps {
   book: Book;
 }

const Book = (props:BookProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unused-vars
  const { Title, Img_URL, Author, Genre, Publication_Date, _id } =props.book;

  const navigate = useNavigate();

  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-base-100 shadow-xl "
      onMouseEnter={() => setHovered(!hovered)}
      onMouseLeave={() => setHovered(!hovered)}
    >
      <div>
        <img
          src={Img_URL}
          alt=""
          className={`${hovered ? "hidden" : "block rounded-md p-3 shadow-xl"}`}
        />
      </div>
      <div
        className={`${
          hovered
            ? "block font-serif p-5 transition-transform transform hover:scale-110 ease-out duration-700 text-center relative"
            : "hidden"
        }`}
      >
        <h1 className="text-2xl text-center text-primary font-bold">{Title}</h1>
        <h3 className="text-xl text-center  font-semibold">{Author}</h3>
        <p className="text-lg text-center my-4 ">{Genre}</p>
        <p className=" text-center text-error ">{Publication_Date}</p>
        <button
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          onClick={() => navigate(`/single-book/${_id}`)}
          className="btn btn-primary btn-sm mt-5  text-white  rounded-full"
        >
          Book Details
        </button>
      </div>
    </div>
  );
};

export default Book;
