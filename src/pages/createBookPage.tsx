import { useEffect, useState } from "react";
import BookBar from "../components/BookBar";
import { BsCardImage } from "react-icons/bs";
import useGetAllCategory from "../hooks/useCategory";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { addBook } from "../redux/bookSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../constant/GlobalConst";
import { IUpdateBook } from "../interfaces/Book";
import { updateBook } from "../services/book";

const CreateBookPage = (): JSX.Element => {
  const location = useLocation();
  const action = location.state?.action;

  const dispatch = useAppDispatch();
  const book = useAppSelector((state) => state.book);

  const navigate = useNavigate();
  const [category] = useGetAllCategory();
  const [selectCategory, setSelectCategory] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [input, setInputs] = useState({
    id: "",
    title: "",
    description: "",
    categoryId: 0,
    imageUrl: "",
    imageBase64: "",
  });

  const [inputError, setInputsError] = useState({
    title: "",
    description: "",
    categoryId: "",
    imageBase64: "",
  });

  useEffect(() => {
    if (action === "Update" && book.category?.id) {
      setPreviewImage(book.imageUrl);
      setInputs({
        id: book.id,
        title: book.title,
        description: book.description,
        categoryId: book.category.id,
        imageUrl: book.imageUrl,
        imageBase64: book.imageBase64,
      });
    }
  }, [book]);

  const handleImageSelect = (event: any) => {
    createBookImage(event);
  };

  const createBookImage = (event: any) => {
    const image = URL.createObjectURL(event);
    setPreviewImage(image);
    const reader = new FileReader();
    reader.readAsDataURL(event);
    reader.onloadend = () => {
      if (reader.result)
        setInputs({
          ...input,
          ["imageUrl"]: image,
          ["imageBase64"]: reader.result.toString(),
        });
    };
  };

  const handleChange = (
    value: string | number,
    inputName: "title" | "description" | "categoryId"
  ) => {
    setInputs({ ...input, [inputName]: value });
  };

  const handleCategorySelect = (value: string, inputName: string) => {
    setInputs({ ...input, [inputName]: value });
    setSelectCategory(value);
  };

  const handleInputsError = () => {
    let inputEmpty = {
      title: "",
      description: "",
      categoryId: "",
      imageBase64: "",
    };
    if (
      !input.title &&
      input.categoryId === 0 &&
      !input.description &&
      !input.imageBase64
    ) {
      setInputsError({
        ...inputError,
        title: "Title should not be empty",
        description: "Description should not be empty",
        categoryId: "Category should not be empty",
        imageBase64: "Category should not be empty",
      });
      return;
    }
    if (!input.title) {
      inputEmpty = { ...inputEmpty, title: "Title should not be empty" };
    }
    if (!input.description) {
      inputEmpty = {
        ...inputEmpty,
        description: "Description should not be empty",
      };
    }
    if (input.categoryId === 0) {
      inputEmpty = {
        ...inputEmpty,
        categoryId: "Category should not be empty",
      };
    }
    if (!input.imageBase64) {
      inputEmpty = {
        ...inputEmpty,
        imageBase64: "Image should not be empty",
      };
    }
    return setInputsError(inputEmpty);
  };

  const handleContinueButton = () => {
    handleInputsError();
    dispatch(addBook(input));
    if (
      !!input.title &&
      input.categoryId !== 0 &&
      !!input.description &&
      !!input.imageBase64
    ) {
      return navigate(ROUTES.write, {
        state: { action: "Update", id: book.id },
      });
    }
  };

  const handleCancelButtton = () => {
    navigate(ROUTES.home);
  };

  if (action === "Update") {
    return (
      <section>
        <BookBar
          button2="Cancel"
          button="Continue"
          image=""
          handleCancelButton={handleCancelButtton}
          title={input.title}
          handleContinueButton={handleContinueButton}
        />
        <div className="flex ml-72 mr-72 mt-4">
          <div>
            <label
              className={
                inputError.imageBase64
                  ? "bg-gray-400 h-96 w-60 justify-center items-center flex mr-16 border-2 border-rose-500 "
                  : "bg-gray-400 h-96 w-60 justify-center items-center flex mr-16"
              }>
              <input
                type="file"
                className="hidden"
                onChange={({ target }) => {
                  if (target.files) handleImageSelect(target.files[0]);
                }}
              />

              <img className="h-96" alt="Preview Image" src={previewImage} />
            </label>
            {inputError.imageBase64 && (
              <span className="text-red-700">{inputError.imageBase64}</span>
            )}
          </div>
          <div className="bg-gray-700 w-full">
            <h1 className="text-white font-bold text-2xl m-4">Book Details</h1>
            <hr />
            <div className="flex flex-col">
              <label className="ml-8 mt-4 text-white text-lg font-bold">
                Title
              </label>
              <input
                type="text"
                defaultValue={input.title}
                className={
                  inputError.title
                    ? "mt-4 ml-8 w-11/12 h-8 border-2 border-rose-500"
                    : "mt-4 ml-8 w-11/12 h-8"
                }
                onChange={({ target }) => handleChange(target.value, "title")}
              />
              {inputError.title && (
                <span className="text-red-700 ml-8">{inputError.title}</span>
              )}
              <label className="ml-8 mt-4 text-white text-lg font-bold ">
                Description
              </label>
              <textarea
                defaultValue={input.description}
                rows={5}
                className={
                  inputError.description
                    ? "ml-8 mt-4 w-11/12 resize-none border-2 border-rose-500"
                    : "ml-8 mt-4 w-11/12 resize-none"
                }
                onChange={({ target }) =>
                  handleChange(target.value, "description")
                }
              />
              {inputError.description && (
                <span className="text-red-700 ml-8">
                  {inputError.description}
                </span>
              )}
              <hr className="mt-4 ml-8 w-11/12" />
              <label className="ml-8 mt-4 text-white text-lg font-bold ">
                Category
              </label>
              <Select
                value={selectCategory}
                onChange={({ target }) =>
                  handleCategorySelect(target.value, "categoryId")
                }
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={
                  inputError.categoryId
                    ? {
                        borderWidth: 2,
                        borderColor: "rgb(244 63 94)",
                        backgroundColor: "white",
                        width: 200,
                        marginTop: 2,
                        marginLeft: 4,
                      }
                    : {
                        backgroundColor: "white",
                        width: 200,
                        marginTop: 2,
                        marginLeft: 4,
                      }
                }>
                <MenuItem value="">
                  <em>Category</em>
                </MenuItem>
                {category.map((items) => (
                  <MenuItem value={items.id} key={items.id}>
                    {items.name}
                  </MenuItem>
                ))}
              </Select>
              {inputError.categoryId && (
                <span className="text-red-700 m-8">
                  {inputError.categoryId}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section>
      <BookBar
        button2="Cancel"
        button="Continue"
        image=""
        handleCancelButton={handleCancelButtton}
        title={input.title}
        handleContinueButton={handleContinueButton}
      />
      <div className="flex ml-72 mr-72 mt-4">
        <div>
          <label
            className={
              inputError.imageBase64
                ? "bg-gray-400 h-96 w-60 justify-center items-center flex mr-16 border-2 border-rose-500 "
                : "bg-gray-400 h-96 w-60 justify-center items-center flex mr-16"
            }>
            <input
              type="file"
              className="hidden"
              onChange={({ target }) => {
                if (target.files) handleImageSelect(target.files[0]);
              }}
            />
            {previewImage ? (
              <img className="h-96" alt="Preview Image" src={previewImage} />
            ) : (
              <div>
                <BsCardImage size={80} />
                <label>Add image</label>
              </div>
            )}
          </label>
          {inputError.imageBase64 && (
            <span className="text-red-700">{inputError.imageBase64}</span>
          )}
        </div>
        <div className="bg-gray-700 w-full">
          <h1 className="text-white font-bold text-2xl m-4">Book Details</h1>
          <hr />
          <div className="flex flex-col">
            <label className="ml-8 mt-4 text-white text-lg font-bold">
              Title
            </label>
            <input
              type="text"
              placeholder="Untitled Book"
              className={
                inputError.title
                  ? "mt-4 ml-8 w-11/12 h-8 border-2 border-rose-500"
                  : "mt-4 ml-8 w-11/12 h-8"
              }
              onChange={({ target }) => handleChange(target.value, "title")}
            />
            {inputError.title && (
              <span className="text-red-700 ml-8">{inputError.title}</span>
            )}
            <label className="ml-8 mt-4 text-white text-lg font-bold ">
              Description
            </label>
            <textarea
              rows={5}
              className={
                inputError.description
                  ? "ml-8 mt-4 w-11/12 resize-none border-2 border-rose-500"
                  : "ml-8 mt-4 w-11/12 resize-none"
              }
              onChange={({ target }) =>
                handleChange(target.value, "description")
              }
            />
            {inputError.description && (
              <span className="text-red-700 ml-8">
                {inputError.description}
              </span>
            )}
            <hr className="mt-4 ml-8 w-11/12" />
            <label className="ml-8 mt-4 text-white text-lg font-bold ">
              Category
            </label>
            <Select
              value={selectCategory}
              onChange={({ target }) =>
                handleCategorySelect(target.value, "categoryId")
              }
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={
                inputError.categoryId
                  ? {
                      borderWidth: 2,
                      borderColor: "rgb(244 63 94)",
                      backgroundColor: "white",
                      width: 200,
                      marginTop: 2,
                      marginLeft: 4,
                    }
                  : {
                      backgroundColor: "white",
                      width: 200,
                      marginTop: 2,
                      marginLeft: 4,
                    }
              }>
              <MenuItem value="">
                <em>Category</em>
              </MenuItem>
              {category.map((items) => (
                <MenuItem value={items.id} key={items.id}>
                  {items.name}
                </MenuItem>
              ))}
            </Select>
            {inputError.categoryId && (
              <span className="text-red-700 m-8">{inputError.categoryId}</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateBookPage;
