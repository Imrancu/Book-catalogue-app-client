import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import NotFound from "./components/NotFound/NotFound";
import Signup from "./components/Login/Signup";
import AllBook from "./components/AllBook/AllBook";
import BookDetails from "./components/Home/BookDetails";
// ..
AOS.init();
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/signup"
          element={
            <Signup setToggleSignup={undefined} toggleSignup={undefined} />
          }
        ></Route>
        <Route path="/all-book" element={<AllBook />}></Route>
        <Route path="/single-book/:id" element={<BookDetails />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
