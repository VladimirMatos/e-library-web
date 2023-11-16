import Select from "@mui/material/Select";
import Card from "../components/Card";
import { useGetBookById } from "../hooks/useBook";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { getBookPageByIdAndType } from "../services/book";

const defaultBook = {
  id: 0,
  title: "",
  description: "",
  imageUrl: "",
  totalPage: 0,
  category: {
    id: 0,
    name: "",
  },
  bookPage: [
    {
      id: 0,
      page: 0,
      text: "",
    },
  ],
  createAt: "",
  author: {
    firstName: "",
    lastName: "",
    confirmPassword: "",
    email: "",
    password: "",
    roleId: "",
  },
};

const type = ["HTML", "PLAIN", "JSON"];

const ReadBookPage = (): JSX.Element => {
  const [inputs, setInputs] = useState({
    page: "1",
    type: "PLAIN",
  });
  const [text, setText] = useState({ text: "" });

  const location = useLocation();
  const bookId = location.state?.id;

  const handleClick = async () => {
    console.log("entre");

    const page = await getBookPageByIdAndType(bookId, inputs.page, inputs.type);
    console.log(page);

    setText({ text: page.data.text });
  };

  const [book] = useGetBookById(bookId);

  const bookFind = book ? book : defaultBook;

  const textFind = text.text ? text.text : bookFind.bookPage[0].text;

  const handleChangePage = (value: string, inputName: "page" | "type") => {
    setInputs({ ...inputs, [inputName]: value });
  };

  console.log(inputs);

  return (
    <section className="">
      <div
        className="flex items-center justify-center h-80 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bookFind.imageUrl})`,
        }}>
        <div className=" w-full h-full flex items-center justify-center  backdrop-blur-lg">
          <Card
            value={bookFind.id}
            image={bookFind.imageUrl}
            description={bookFind.description}
            title={bookFind.title}
            type={true}
            category={bookFind.category.name}
            style="flex w-1/2"
          />
        </div>
      </div>
      <hr className="mb-1" />
      <div className="flex justify-center items-center ">
        <div className="h-48 flex flex-col justify-center items-center ">
          <label className="text-white font-bold mb-2">Page Number</label>
          <Select
            value={inputs.page}
            sx={{ backgroundColor: "white", width: 115 }}
            onChange={(SelectChangeEvent) =>
              handleChangePage(SelectChangeEvent.target.value, "page")
            }>
            {bookFind.bookPage.map((items) => (
              <MenuItem
                key={items.id}
                sx={{ color: "black" }}
                value={items.page}>
                {items.page}
              </MenuItem>
            ))}
          </Select>
          <label className="text-white font-bold mb-2 mt-2">Show Type</label>
          <Select
            value={inputs.type}
            sx={{ backgroundColor: "white", width: 115, marginBottom: 2 }}
            onChange={(SelectChangeEvent) =>
              handleChangePage(SelectChangeEvent.target.value, "type")
            }>
            {type.map((items, index) => (
              <MenuItem key={index} sx={{ color: "black" }} value={items}>
                {items}
              </MenuItem>
            ))}
          </Select>
          <Button onClick={() => handleClick} variant="contained">
            Search
          </Button>
        </div>
        <div className="ml-40 mr-96 w-2/5">
          <textarea
            className="resize-none w-full"
            rows={34}
            name="Text"
            value={textFind}
            readOnly
          />
        </div>
      </div>
    </section>
  );
};

export default ReadBookPage;
