import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Route, Routes } from "react-router-dom";
import AllBook from "./components/AllBook/AllBook";
import Footer from "./components/Footer/Footer";
import BookDetails from "./components/Home/BookDetails";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";

import { Toaster } from "react-hot-toast";
import AddBook from "./components/AddBook/AddBook";
import EditBook from "./components/AddBook/EditBook";
import RequireAuth from "./components/Login/RequierAuth";
import ReadingList from "./components/ReadingLis/ReadingList";
import Wishlist from "./components/WishList/Wishlist";
// ..
AOS.init();
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/signup"
          element={
            <Signup
              toggleSignup={false}
              setToggleSignup={function (_value: boolean) {
                throw new Error("Function not implemented.");
              }}
            />
          }
        ></Route>
        <Route path="/all-book" element={<AllBook />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/readinglist" element={<ReadingList />}></Route>
        <Route path="/single-book/:id" element={<BookDetails />}></Route>
        <Route
          path="/addBook"
          element={
            <RequireAuth>
              <AddBook></AddBook>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/editBook/:id"
          element={
            <RequireAuth>
              <EditBook></EditBook>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer></Footer>
      <Toaster />
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
