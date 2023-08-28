/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import Button from "@mui/material/Button";
import { useState } from "react";

const ReadMore = ({ style, text }: any): JSX.Element => {
  const [readMore, setReadMore] = useState(true);

  console.log(text, style);

  const handleReadMore = () => {
    setReadMore(!readMore);
  };
  return (
    <>
      <p className={`${style} pl-3 pt-2 text-white `}>
        {readMore ? text?.slice(0, 150) + " ..." : text}
      </p>
      <Button
        sx={{ paddingLeft: "0.8rem", fontSize: "0.70rem", height: "0.8rem" }}
        onClick={handleReadMore}
        variant="text"
      >
        {readMore ? "Read More" : "Read Less"}
      </Button>
    </>
  );
};

export default ReadMore;
