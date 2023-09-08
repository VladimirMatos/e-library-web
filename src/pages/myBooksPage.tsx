import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useGetBookByAuthor } from "../hooks/useBook";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constant/GlobalConst";

const newBookStyle = {
  height: 30,
  padding: 2,
  margin: 2,
  position: "absolute",
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
  const [book, loading, error] = useGetBookByAuthor();
  const navigate = useNavigate();

  const handleNewBookClick = () => {
    navigate(ROUTES.newBook);
  };

  return (
    <div className="ml-96 mr-96 w-">
      <div className="mb-10 mt-14 grid grid-cols-2 gap-2">
        <h1 className="text-white text-4xl font-bold">My Books</h1>
        <Button
          onClick={handleNewBookClick}
          sx={newBookStyle}
          variant="contained"
          startIcon={<AddIcon />}
        >
          New Book
        </Button>
      </div>
      <div className="bg-gray-800">
        <h1 className="text-white text-lg font-bold">All Books</h1>
        <hr />
        {book.map((items) => (
          <div className="mt-6 ml-16 flex pb-5" key={items.id}>
            <img src={items.imageUrl} className="h-52 object-cover w-48 " />
            <div className="ml-6 w-4/5">
              <h1 className="text-white font-bold pb-4">{items.title}</h1>
              <h6 className="text-white">{items.description}</h6>
            </div>
            <div>
              <Button sx={continueStyle} variant="contained">
                Continue Writing
              </Button>
              <Button sx={deleteStyle} variant="contained">
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
