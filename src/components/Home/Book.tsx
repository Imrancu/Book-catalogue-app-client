import { useState } from "react";
// import "../../App.css";
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const Book = ({ book }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unused-vars
  const { Title, Img_URL, Author, Genre, Publication_Date } = book;
  // console.log(book);

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
            ? "block font-serif p-5 transition-transform transform hover:scale-110 ease-out duration-300 text-center relative"
            : "hidden"
        }`}
      >
        <h1 className="text-2xl text-center text-primary font-bold">{Title}</h1>
        <h3 className="text-xl text-center  font-semibold">{Author}</h3>
        <p className="text-lg text-center my-4 ">{Genre}</p>
        <p className=" text-center text-error ">{Publication_Date}</p>
        <button className="btn mt-10 bg-[#77B748] text-white hover:text-black rounded-full">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Book;
