import React from "react";

const LatestNews = () => {
  return (
    <div className="">
      <hr className="my-10 "></hr>
      <p>
        Latest News & Articles
        <h1 className="text-3xl font-bold font-serif">
          What's Hot In The News
        </h1>
      </p>
      <div className="lg:grid grid-cols-3 gap-x-5">
        <section className="px-10 py-5 my-5 shadow-xl ">
          <div>
            {" "}
            <div className="flex justify-center">
              <img
                className="lg:p-2 text-center hover:shadow-2xl"
                src="http://exprostudio.com/html/book_library/images/blog/img-01.jpg"
                alt=""
              />
            </div>
            <div className="">
              <small>Advanture,Fun</small> <br />
              <div className="my-2">
                <hr />
              </div>
              <small className="text-white text-xs my-3 bg-warning px-2 rounded-full">
                FEATURED
              </small>
              <br />
              <h4 className="text-xl font-semibold ">
                Why Walk When you can climb
              </h4>
              <small className="font-semibold">By: Jhon</small>
              <div className="flex justify-between ">
                <small>Comment: 35363452</small>
                <small>View: 23423452</small>
              </div>
            </div>
          </div>
        </section>
        <section className="px-10 py-5 my-5 shadow-xl">
          <div>
            {" "}
            <div className="flex justify-center">
              <img
                className="lg:p-2 text-center hover:shadow-2xl"
                src="http://exprostudio.com/html/book_library/images/blog/img-02.jpg"
                alt=""
              />
            </div>
            <div className="">
              <small>Advanture,Fun</small> <br />
              <div className="my-2">
                <hr />
              </div>
              <small className="text-white text-xs my-3 bg-warning px-2 rounded-full">
                FEATURED
              </small>
              <br />
              <h4 className="text-xl font-semibold ">
                Why Walk When you can climb
              </h4>
              <small className="font-semibold">By: Jhon</small>
              <div className="flex justify-between ">
                <small>Comment: 35363452</small>
                <small>View: 23423452</small>
              </div>
            </div>
          </div>
        </section>
        <section className="px-10 py-5 my-5 shadow-xl">
          <div>
            {" "}
            <div className="flex justify-center">
              <img
                className="lg:p-2 text-center hover:shadow-2xl"
                src="http://exprostudio.com/html/book_library/images/blog/img-04.jpg"
                alt=""
              />
            </div>
            <div className="">
              <small>Advanture,Fun</small> <br />
              <div className="my-2">
                <hr />
              </div>
              <small className="text-white text-xs my-3 bg-warning px-2 rounded-full">
                FEATURED
              </small>
              <br />
              <h4 className="text-xl font-semibold ">
                Why Walk When you can climb
              </h4>
              <small className="font-semibold">By: Jhon</small>
              <div className="flex justify-between ">
                <small>Comment: 35363452</small>
                <small>View: 23423452</small>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LatestNews;
