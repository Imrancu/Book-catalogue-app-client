import { AiTwotoneStar } from "react-icons/ai";
const ReelsBooks = () => {
  return (
    <div>
      <section className="lg:flex items-center gap-3 justify-around ">
        <img
          src="http://exprostudio.com/html/book_library/images/img-02.png"
          alt=""
        />
        <div>
          <div>
            <div className="flex justify-center">
              <small className="text-white text-center text-xs my-3 bg-warning px-2 rounded-full">
                FEATURED
              </small>
            </div>

            <h1 className="lg:text-5xl text-center text-[#77B748] font-bold">
              Things To Know About <br /> Green Flat Design
            </h1>
            <p className="text-center my-3">By: Farrah Whisenhunt</p>
          </div>
          <div className="flex justify-center">
            <AiTwotoneStar className="text-yellow-400 text-2xl"></AiTwotoneStar>
            <AiTwotoneStar className="text-yellow-400 text-2xl"></AiTwotoneStar>
            <AiTwotoneStar className="text-yellow-400 text-2xl"></AiTwotoneStar>
            <AiTwotoneStar className="text-yellow-400 text-2xl"></AiTwotoneStar>
            <AiTwotoneStar className="text-gray-300 text-2xl"></AiTwotoneStar>
          </div>
        </div>
        <div>
          <h1 className="lg:text-4xl font-bold text-center lg:text-start">
            $23.18 $
            <span>
              <del>30.20</del>
            </span>
          </h1>
          <div className="flex justify-center lg:my-5">
            <button className="btn  bg-[#77B748] text-white hover:text-black rounded-full">
              Add to cart
            </button>
          </div>
        </div>
      </section>
      <section className="lg:my-20 my-5 lg:grid grid-cols-2 gap-3">
        <div>
          <p>Taste The New Spice</p>
          <h1 className="text-3xl font-bold font-serif mb-3">
            New Release Books
          </h1>
          <hr />
          <p className="my-4">
            Consectetur adipisicing elit sed do eiusmod tempor incididunt labore
            toloregna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamcoiars nisiuip commodo consequat aute irure dolor in
            aprehenderit aveli esseati cillum dolor fugiat nulla pariatur
            cepteur sint occaecat cupidatat.
          </p>
          <div className="flex ">
            <button className="btn btn-primary text-white btn-sm ">
              View All
            </button>
            <button
              className="btn btn-primary btn-outline ml-4 btn-sm
            "
            >
              Read More
            </button>
          </div>
        </div>
        <div className="lg:grid grid-cols-3 gap-3 lg:p-5">
          <div>
            <img
              className="p-2 hover:shadow-2xl"
              src="http://exprostudio.com/html/book_library/images/books/img-07.jpg"
              alt=""
            />
            <small>Adventure,Fun</small> <hr />
            <h4 className="text-primary my-2">Help Me Find My Stomach</h4>
            <small>By: Kathrine Culbertson</small>
            <div className="flex">
              <AiTwotoneStar className="text-yellow-400 text-lg"></AiTwotoneStar>
              <AiTwotoneStar className="text-yellow-400 text-lg"></AiTwotoneStar>
              <AiTwotoneStar className="text-yellow-400 text-lg"></AiTwotoneStar>
              <AiTwotoneStar className="text-yellow-400 text-lg"></AiTwotoneStar>
              <AiTwotoneStar className="text-gray-300 text-lg"></AiTwotoneStar>
            </div>
          </div>
          <div>
            <img
              className="p-2 hover:shadow-2xl"
              src="http://exprostudio.com/html/book_library/images/books/img-08.jpg"
              alt=""
            />
            <small>Adventure,Fun</small> <hr />
            <h4 className="text-primary my-2">Help Me Find My Stomach</h4>
            <small>By: Kathrine Culbertson</small>
            <div className="flex">
              <AiTwotoneStar className="text-yellow-400 text-lg"></AiTwotoneStar>
              <AiTwotoneStar className="text-yellow-400 text-lg"></AiTwotoneStar>
              <AiTwotoneStar className="text-yellow-400 text-lg"></AiTwotoneStar>
              <AiTwotoneStar className="text-yellow-400 text-lg"></AiTwotoneStar>
              <AiTwotoneStar className="text-gray-300 text-lg"></AiTwotoneStar>
            </div>
          </div>
          <div>
            <img
              className="p-2 hover:shadow-2xl"
              src="http://exprostudio.com/html/book_library/images/books/img-09.jpg"
              alt=""
            />
            <small>Adventure,Fun</small> <hr />
            <h4 className="text-primary my-2">Help Me Find My Stomach</h4>
            <small>By: Kathrine Culbertson</small>
            <div className="flex">
              <AiTwotoneStar className="text-yellow-400 text-lg"></AiTwotoneStar>
              <AiTwotoneStar className="text-yellow-400 text-lg"></AiTwotoneStar>
              <AiTwotoneStar className="text-yellow-400 text-lg"></AiTwotoneStar>
              <AiTwotoneStar className="text-yellow-400 text-lg"></AiTwotoneStar>
              <AiTwotoneStar className="text-gray-300 text-lg"></AiTwotoneStar>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReelsBooks;
