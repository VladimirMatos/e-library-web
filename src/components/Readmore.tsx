/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import Button from "@mui/material/Button";
import { FC, useState } from "react";

type READMORE = {
  style: string;
  text: string;
};

const ReadMore: FC<READMORE> = ({ style, text }) => {
  const [readMore, setReadMore] = useState(true);

  const handleReadMore = () => {
    setReadMore(!readMore);
  };
  return (
    <div className="">
      <p className={`${style} pl-3 pt-2 text-white `}>
        {readMore ? text?.slice(0, 250) + " ..." : text}
      </p>
      <Button
        sx={{ paddingLeft: "0.8rem", fontSize: "0.70rem", height: "0.8rem" }}
        onClick={handleReadMore}
        variant="text"
      >
        {readMore ? "Read More" : "Read Less"}
      </Button>
    </div>
  );
};

export default ReadMore;
