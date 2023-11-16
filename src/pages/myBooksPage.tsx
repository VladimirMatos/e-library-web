import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useGetBookByAuthor } from "../hooks/useBook";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constant/GlobalConst";
import { deleteBook } from "../services/book";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks/useRedux";
import { addBook } from "../redux/bookSlice";

const newBookStyle = {
  height: 30,
  padding: 2,
  margin: 2,
  right: 370,
  top: 110,
};

const continueStyle = {
  height: 30,
  padding: 2,
  margin: 2,
};
const deleteStyle = {
  height: 30,
  width: 178,
  padding: 2,
  margin: 2,
};

const MyBookPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [book, handleBooks, loading, error] = useGetBookByAuthor();
  const [lastDelete, setDelete] = useState(0);
  const navigate = useNavigate();

  const handleNewBookClick = () => {
    navigate(ROUTES.newBook);
  };

  const handleDeleteBookClick = async (bookId: number) => {
    await deleteBook(bookId);
    setDelete(bookId);
  };
  useEffect(() => {
    void handleBooks();
  }, [lastDelete]);

  const hadleContinueClick = (value: any) => {
    fetch(value.imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result;
          dispatch(addBook({ ...value, imageBase64: base64data }));
        };
        reader.readAsDataURL(blob);
      })
      .catch((error) => {
        console.error("Error fetching or converting the image:", error);
      });

    navigate(ROUTES.newBook, { state: { action: "Update" } });
  };

  return (
    <div className="ml-96 mr-96 w-">
      <div className="mb-10 mt-14 flex justify-between">
        <h1 className="text-white text-4xl font-bold">My Books</h1>
        <div className="">
          <Button
            onClick={handleNewBookClick}
            variant="contained"
            startIcon={<AddIcon />}>
            New Book
          </Button>
        </div>
      </div>
      <div className="bg-gray-800">
        <h1 className="text-white text-lg font-bold">All Books</h1>
        <hr />
        {book.map((items) => (
          <div className="mt-6 ml-16 flex pb-5" key={items.id}>
            <div>
              <img src={items.imageUrl} className="h-52 object-cover w-52 " />
            </div>
            <div className="ml-6 w-4/5">
              <h1 className="text-white font-bold pb-4">{items.title}</h1>
              <h6 className="text-white">{items.description}</h6>
            </div>
            <div>
              <Button
                sx={continueStyle}
                onClick={() => void hadleContinueClick(items)}
                variant="contained">
                Continue Writing
              </Button>
              <Button
                onClick={() => void handleDeleteBookClick(items.id)}
                sx={deleteStyle}
                variant="contained">
                Delete Book
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookPage;
