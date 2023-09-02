/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from "react";
import {
  useDeleteBookReadingMutation,
  useGetBookReadinglistQuery,
  useReadingBookUpdateMutation,
} from "../../redux/features/Book/apiBookSlice";
import { toast } from "react-hot-toast";

const ReadingList = () => {
  const [hovered, setHovered] = useState(false);
  const getBookReadinglist = useGetBookReadinglistQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 3000,
  });
  const bookData = getBookReadinglist?.data?.data?.map((book: any) => book);
  const bookData2 = bookData?.map((book2: any) => book2);
  // console.log(bookData2);
  const [deleteBookReading] = useDeleteBookReadingMutation();
  const handleDelete = async (id: string) => {
    const response = await deleteBookReading(id);
    if (response) {
      toast.success("Successfully delete book");
      window.location.reload();
    }
  };
  const [readingBookUpdate] = useReadingBookUpdateMutation();
  const handleUpdateStatus = async (id: string) => {
    const response: any = await readingBookUpdate({ id });
    if (response?.data?.success === true) {
      toast.success("Successfully updated ReadingBook");
      window.location.reload();
    }
  };
  return (
    <div className="px-40 my-10 font-serif">
      <h1 className="text-center  text-primary text-3xl my-4 font-serif font-semibold">
        REEADING LIST
      </h1>
      {bookData2?.map((item: any) => {
        return (
          <div className="flex lg:my-5 bg-green-100 justify-around items-center space-x-8 border border-primary p-3 rounded-xl shadow-xl">
            <div>
              <img
                className="w-32 h-32 rounded-xl"
                src={item?.BookId?.Img_URL}
                alt=""
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold">
                Title: {item?.BookId?.Title}
              </h1>
              <h2 className="my-3  text-lg font-semibold">
                Author: {item?.BookId?.Author}
              </h2>
              <h3 className="text-lg font-semibold">
                Genre: {item?.BookId?.Genre}
              </h3>
            </div>
            <div>
              <h1 className="text-center font-semibold">Action</h1>
              <button
                disabled={item.Status === "Finished"}
                onClick={() => handleUpdateStatus(item._id)}
                onMouseEnter={() => setHovered(!hovered)}
                onMouseLeave={() => setHovered(!hovered)}
                className="btn btn-primary btn-xs mx-3 my-3 text-white"
              >
                {hovered ? "Finished" : `${item?.Status}`}
              </button>
              <button
                onClick={() => handleDelete(item._id)}
                className="btn btn-error btn-xs my-3 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReadingList;
