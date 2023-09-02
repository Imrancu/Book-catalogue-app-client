/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./HeroSection.css";

const carousel = (slider: any) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider?.track?.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element: any, idx: any) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider?.on("detailsChanged", rotate);
};

const HeroSection = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  return (
    <div className="lg:flex lg:justify-between  lg:items-center w-full lg:px-10 px-5 lg:py-20 py-7 bg-gradient-to-r from-secondary to-midnight">
      <div className="lg:w-1/2">
        <h1 className="lg:text-5xl text-3xl leading-snug text-color tracking-wide">
          We Make Better <span className="text-primary font-bold">Books</span>{" "}
          <br /> <span className="text-warning font-bold">You</span> Get Better
          Result
        </h1>
        <p className="text-silver tracking-wide lg:my-9 my-3">
          Find the Latest Trends and Must-Have Items, a powerful statement that
          captures the essence of staying up-to-date with the ever-changing
          fashion landscape.
        </p>
        <button className="lg:mt-5 hover:bg-midnight hover:text-color text-white duration-500 cursor-pointer bg-warning text-xl font-semibold rounded-xl lg:py-3 py-2 lg:px-10 px-5">
          Get Started
        </button>
      </div>
      <div className="wrapper lg:w-1/2 lg:py-0 py-16">
        <div className="scene">
          <div className="carousel keen-slider" ref={sliderRef}>
            <div className="carousel__cell number-slide1 ">
              <img
                src="https://img.freepik.com/free-photo/abundant-collection-antique-books-wooden-shelves-generated-by-ai_188544-29660.jpg?size=626&ext=jpg&ga=GA1.1.832354014.1675511612&semt=ais"
                alt="laptop"
              />
            </div>
            <div className="carousel__cell number-slide2">
              <img
                src="https://img.freepik.com/premium-photo/shelf-with-books_257123-9780.jpg?size=626&ext=jpg&ga=GA1.1.832354014.1675511612&semt=ais"
                alt="mobile"
              />
            </div>
            <div className="carousel__cell number-slide3">
              <img
                src="https://img.freepik.com/premium-photo/stack-books-learning-education-knowledge-concept-illustration-generative-ai_845977-417.jpg?size=626&ext=jpg&ga=GA1.1.832354014.1675511612&semt=ais"
                alt="smart watch"
              />
            </div>
            <div className="carousel__cell number-slide4">
              <img
                src="https://img.freepik.com/free-photo/three-books-near-bookshelf_23-2147845951.jpg?size=626&ext=jpg&ga=GA1.1.832354014.1675511612&semt=ais"
                alt="earphone"
              />
            </div>
            <div className="carousel__cell number-slide5">
              <img
                src="https://img.freepik.com/premium-vector/bookcase-with-books_182089-197.jpg?size=626&ext=jpg&ga=GA1.1.832354014.1675511612&semt=ais"
                alt="Drone Camera"
              />
            </div>
            <div className="carousel__cell number-slide6">
              <img
                src="https://img.freepik.com/free-photo/young-student-learning-library_23-2149215402.jpg?size=626&ext=jpg&ga=GA1.1.832354014.1675511612&semt=ais"
                alt="Camera"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
