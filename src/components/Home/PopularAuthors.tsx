import { AiFillLinkedin } from "react-icons/ai";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { BsTwitter, BsFacebook } from "react-icons/bs";

const PopularAuthors = () => {
  return (
    <div className="lg:my-20 my-10">
      <p className="lg:my-5">
        Strong Minds Behind Us
        <h1 className="text-3xl font-bold font-serif">Most Popular Authors</h1>
      </p>
      <hr />
      <div className="lg:grid grid-cols-5 gap-5 my-3">
        <section className="p-5 shadow-2xl rounded-sm">
          <div className="flex justify-center">
            <img
              className="p-2 hover:shadow-2xl"
              src="http://exprostudio.com/html/book_library/images/author/imag-03.jpg"
              alt=""
            />
          </div>
          <p className="text-primary text-center my-2">Enoch Gallion</p>
          <p className=" text-center my-2">12,435 Published Books</p>
          <div className="flex justify-evenly">
            <button>
              <AiFillLinkedin className="hover:text-[#0A66C2]"></AiFillLinkedin>
            </button>

            <button>
              <BsFacebook className="hover:text-[#0A66C2]"></BsFacebook>
            </button>
            <button>
              <BsTwitter className="hover:text-[#1DA1F2]"></BsTwitter>
            </button>
          </div>
        </section>
        <section className="p-5 shadow-2xl rounded-sm">
          <div className="flex justify-center">
            <img
              className="p-2 hover:shadow-2xl"
              src="http://exprostudio.com/html/book_library/images/author/imag-08.jpg"
              alt=""
            />
          </div>
          <p className="text-primary text-center my-2">Enoch Gallion</p>
          <p className=" text-center my-2">12,435 Published Books</p>
          <div className="flex justify-evenly">
            <button>
              <AiFillLinkedin className="hover:text-[#0A66C2]"></AiFillLinkedin>
            </button>

            <button>
              <BsFacebook className="hover:text-[#0A66C2]"></BsFacebook>
            </button>
            <button>
              <BsTwitter className="hover:text-[#1DA1F2]"></BsTwitter>
            </button>
          </div>
        </section>
        <section className="p-5 shadow-2xl rounded-sm">
          <div className="flex justify-center">
            <img
              className="p-2 hover:shadow-2xl"
              src="http://exprostudio.com/html/book_library/images/author/imag-05.jpg"
              alt=""
            />
          </div>
          <p className="text-primary text-center my-2">Enoch Gallion</p>
          <p className=" text-center my-2">12,435 Published Books</p>
          <div className="flex justify-evenly">
            <button>
              <AiFillLinkedin className="hover:text-[#0A66C2]"></AiFillLinkedin>
            </button>

            <button>
              <BsFacebook className="hover:text-[#0A66C2]"></BsFacebook>
            </button>
            <button>
              <BsTwitter className="hover:text-[#1DA1F2]"></BsTwitter>
            </button>
          </div>
        </section>
        <section className="p-5 shadow-2xl rounded-sm">
          <div className="flex justify-center">
            <img
              className="p-2 hover:shadow-2xl"
              src="http://exprostudio.com/html/book_library/images/author/imag-04.jpg"
              alt=""
            />
          </div>
          <p className="text-primary text-center my-2">Enoch Gallion</p>
          <p className=" text-center my-2">12,435 Published Books</p>
          <div className="flex justify-evenly">
            <button>
              <AiFillLinkedin className="hover:text-[#0A66C2]"></AiFillLinkedin>
            </button>

            <button>
              <BsFacebook className="hover:text-[#0A66C2]"></BsFacebook>
            </button>
            <button>
              <BsTwitter className="hover:text-[#1DA1F2]"></BsTwitter>
            </button>
          </div>
        </section>
        <section className="p-5 shadow-2xl rounded-sm">
          <div className="flex justify-center">
            <img
              className="p-2 hover:shadow-2xl"
              src="http://exprostudio.com/html/book_library/images/author/imag-06.jpg"
              alt=""
            />
          </div>
          <p className="text-primary text-center my-2">Enoch Gallion</p>
          <p className=" text-center my-2">12,435 Published Books</p>
          <div className="flex justify-evenly">
            <button>
              <AiFillLinkedin className="hover:text-[#0A66C2]"></AiFillLinkedin>
            </button>

            <button>
              <BsFacebook className="hover:text-[#0A66C2]"></BsFacebook>
            </button>
            <button>
              <BsTwitter className="hover:text-[#1DA1F2]"></BsTwitter>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PopularAuthors;
