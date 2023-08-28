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

import { Toaster } from "react-hot-toast";
import AddBook from "./components/AddBook/AddBook";
import EditBook from "./components/AddBook/EditBook";
import RequireAuth from "./components/Login/RequierAuth";
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
            <Signup setToggleSignup={undefined} toggleSignup={undefined} />
          }
        ></Route>
        <Route path="/all-book" element={<AllBook />}></Route>
        <Route path="/single-book/:id" element={<BookDetails />}></Route>
        <Route
          path="/addBook"
          element={
            <RequireAuth>
              <AddBook></AddBook>
            </RequireAuth>
          }
        ></Route>
        <Route path="/editBook" element={<EditBook></EditBook>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer></Footer>
      <Toaster />
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
