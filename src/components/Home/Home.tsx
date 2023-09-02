import BookCatalog from "./BookCatalog";
import HeroSection from "./HeroSection";
import LatestNews from "./LatestNews";
import PopularAuthors from "./PopularAuthors";
import ReelsBooks from "./ReelsBooks";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      {/* <BookCard></BookCard> */}
      <div className="px-10 lg:my-20">
        <BookCatalog></BookCatalog>
        <div className="my-10">
          <ReelsBooks></ReelsBooks>
        </div>
        <PopularAuthors></PopularAuthors>
        <LatestNews></LatestNews>
      </div>
    </div>
  );
};

export default Home;
