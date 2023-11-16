import { useLocation, useNavigate } from "react-router-dom";
import BookBar from "../components/BookBar";
import { useAppSelector } from "../hooks/useRedux";
import { ROUTES } from "../constant/GlobalConst";
import { useState } from "react";
import { ICreateBook, IUpdateBook } from "../interfaces/Book";
import { useCreateBook, useGetBookById } from "../hooks/useBook";
import RenderIf from "../components/RenderIf";
import { AlertError } from "../components/AlertError";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { getBookPageById, updateBook, updateBookPage } from "../services/book";
import Button from "@mui/material/Button";

const WriteBookPage = (): JSX.Element => {
  const bookSave = useAppSelector((state) => state.book);
  const auth = useAppSelector((state) => state.auth);
  const [inputs, setInputs] = useState({
    page: "1",
  });
  const location = useLocation();
  const [text, setText] = useState({ text: "" });
  const action = location.state?.action;
  const bookId = location.state?.id;

  const navigate = useNavigate();
  const newBook: ICreateBook = {
    title: bookSave.title,
    description: bookSave.description,
    categoryId: bookSave.categoryId,
    authorId: auth.id,
    text: text.text,
    image: {
      base64: bookSave.imageBase64,
      name: bookSave.title,
    },
  };

  const updateBookBase: IUpdateBook = {
    title: bookSave.title,
    description: bookSave.description,
    image: {
      base64: bookSave.imageBase64,
      name: bookSave.title,
    },
  };
  const imgUrl = bookSave.imageUrl;
  const [book] = useGetBookById(bookId);

  const textFind = text.text ? text.text : book.bookPage[0].text;

  const [handleCreateBook, error] = useCreateBook(newBook);

  const handleCreateButton = () => {
    void handleCreateBook();

    return;
  };

  const handleUpdateButton = () => {
    void updateBook(bookId, updateBookBase);
    void updateBookPage(bookId, inputs.page, textFind);
  };

  const handleChangePage = (value: string, inputName: "page") => {
    setInputs({ ...inputs, [inputName]: value });
  };

  const handleChange = (value: string) => {
    setText({ text: value });
  };

  const handleBackButtton = () => {
    return navigate(ROUTES.newBook);
  };

  const handleClick = async () => {
    const page = await getBookPageById(bookId, inputs.page);

    setText({ text: page.data.bookPage[0].text });
  };

  if (action === "Update") {
    return (
      <section>
        <BookBar
          title={updateBookBase.title}
          image={imgUrl}
          button="Update"
          button2="Back"
          handleCancelButton={handleBackButtton}
          handleContinueButton={handleUpdateButton}
        />
        <div className="justify-center items-center flex ml-80 mr-80 border-solid">
          <div className="h-48 flex flex-col justify-center items-center mr-28">
            <label className="text-white font-bold mb-2">Page Number</label>
            <Select
              value={inputs.page}
              sx={{ backgroundColor: "white", width: 115 }}
              onChange={(SelectChangeEvent) =>
                handleChangePage(SelectChangeEvent.target.value, "page")
              }>
              {book.bookPage.map((items) => (
                <MenuItem
                  key={items.id}
                  sx={{ color: "black" }}
                  value={items.page}>
                  {items.page}
                </MenuItem>
              ))}
            </Select>
            <Button
              sx={{ marginTop: 2, width: 118 }}
              onClick={() => void handleClick()}
              variant="contained">
              Search
            </Button>
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-bold h-20 bg-slate-200 w-full items-center justify-center flex">
              {updateBookBase.title}
            </h1>
            <textarea
              rows={32}
              value={textFind}
              className="resize-none w-full"
              onChange={({ target }) => handleChange(target.value)}
            />
          </div>
        </div>
        <RenderIf condition={!(error == null)}>
          <AlertError>{error}</AlertError>
        </RenderIf>
      </section>
    );
  }

  return (
    <section>
      <BookBar
        title={bookSave.title}
        image={bookSave.imageUrl}
        button="Create"
        button2="Back"
        handleCancelButton={handleBackButtton}
        handleContinueButton={handleCreateButton}
      />
      <div className="justify-center items-center flex ml-96 mr-96 border-solid">
        <div className="w-full">
          <h1 className="text-2xl font-bold h-20 bg-slate-200 w-full items-center justify-center flex">
            {bookSave.title}
          </h1>

          <textarea
            rows={31}
            className="resize-none w-full"
            onChange={({ target }) => handleChange(target.value)}
          />
        </div>
      </div>
      <RenderIf condition={!(error == null)}>
        <AlertError>{error}</AlertError>
      </RenderIf>
    </section>
  );
};

export default WriteBookPage;
