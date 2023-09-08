import { useNavigate } from "react-router-dom";
import BookBar from "../components/BookBar";
import { useAppSelector } from "../hooks/useRedux";
import { ROUTES } from "../constant/GlobalConst";
import { useState } from "react";
import { ICreateBook } from "../interfaces/Book";
import { useCreateBook } from "../hooks/useBook";
import RenderIf from "../components/RenderIf";
import { AlertError } from "../components/AlertError";

const WriteBookPage = (): JSX.Element => {
  const book = useAppSelector((state) => state.book);
  const auth = useAppSelector((state) => state.auth);
  const [textInput, setTextInput] = useState({ text: "" });

  const navigate = useNavigate();
  const newBook: ICreateBook = {
    title: book.title,
    description: book.description,
    categoryId: book.category,
    authorId: auth.id,
    text: textInput.text,
    image: {
      base64: book.imageBase64,
      name: book.title,
    },
  };
  const [handleCreateBook, loading, error] = useCreateBook(newBook);

  const handleCreateButton = () => {
    void handleCreateBook();

    return;
  };

  const handleChange = (value: string) => {
    setTextInput({ ...textInput, ["text"]: value });
  };

  const handleBackButtton = () => {
    return navigate(ROUTES.newBook);
  };
  return (
    <>
      <BookBar
        title={book.title}
        image={book.imageUrl}
        button="Create"
        button2="Back"
        handleCancelButton={handleBackButtton}
        handleContinueButton={handleCreateButton}
      />
      <div className="justify-center items-center flex ml-96 mr-96 border-solid">
        <div className="w-full">
          <h1 className="text-2xl font-bold h-20 bg-slate-200 w-full items-center justify-center flex">
            {book.title}
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
    </>
  );
};

export default WriteBookPage;
