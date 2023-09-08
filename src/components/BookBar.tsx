import Button from "@mui/material/Button";
import { FC } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constant/GlobalConst";

type BookInfo = {
  title: string;
  image: string;
  button: string;
  button2: string;
  handleContinueButton: () => void;
  handleCancelButton: () => void;
};

const cancelButtonStyle = {
  backgroundColor: "red",
  height: 30,
  padding: 2,
  margin: 2,
  "&:hover": {
    backgroundColor: "#990F02",
  },
  position: "absolute",
  right: 120,
};

const continueButtonStyle = {
  height: 30,
  padding: 2,
  margin: 2,
  position: "absolute",
  right: 3,
};

const BookBar: FC<BookInfo> = ({
  title,
  image,
  button,
  button2,
  handleContinueButton,
  handleCancelButton,
}) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(ROUTES.myBooks);
  };

  return (
    <div>
      <div className="bg-gray-800 flex">
        <button onClick={handleOnClick}>
          <FiChevronLeft color="white" size={60} />
        </button>
        {image ? <img src={image} className="h-20 pr-2" /> : <></>}
        <div className="mt-1">
          <h5 className="text-white text-sm">Book Info</h5>
          <h1 className="text-white font-bold text-lg">
            {title ? title : "Untitled Book"}
          </h1>
        </div>

        <Button
          sx={cancelButtonStyle}
          variant="contained"
          onClick={handleCancelButton}
        >
          {button2}
        </Button>
        <Button
          sx={continueButtonStyle}
          variant="contained"
          onClick={handleContinueButton}
        >
          {button}
        </Button>
      </div>
      <hr />
    </div>
  );
};

export default BookBar;
