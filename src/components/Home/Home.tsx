import React from "react";
import HeroSection from "./HeroSection";
import BookCard from "./BookCard";
import LatestNews from "./LatestNews";
import PopularAuthors from "./PopularAuthors";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      {/* <BookCard></BookCard> */}
      <div className="px-10 lg:my-20">
        <PopularAuthors></PopularAuthors>
        <LatestNews></LatestNews>
      </div>
    </div>
  );
};

export default Home;
