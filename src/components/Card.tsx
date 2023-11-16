import { FC } from "react";
import ReadMore from "./Readmore";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constant/GlobalConst";

type Card = {
  image: string;
  description: string;
  title: string;
  type: boolean;
  category?: string;
  value?: number;
  style?: string;
};

const Card: FC<Card> = ({
  image,
  description,
  title,
  type,
  category,
  value,
  style = "",
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.book, { state: { id: value } });
  };

  if (!type) {
    return (
      <div className=" flex">
        <div>
          <a>
            <img
              className={` h-64 pl-20 mt-12 mb-6 object-cover`}
              src={image}
            />
          </a>
        </div>
        <div className="w-3/4">
          <h1 className="pl-3 mt-16 text-white text-2xl font-bold">{title}</h1>
          <ReadMore style="" text={description} active={true} />
        </div>
      </div>
    );
  }
  return (
    <div onClick={handleClick} className={style ? style : " flex"}>
      <a>
        <img className="h-48 w-52 mt-2 mb-6" src={image} />
      </a>
      <div className="w-full pr-2">
        <h1 className="pl-3 text-white text-2xl font-bold">{title}</h1>
        <ReadMore style="" text={description} active={false} />
        <button className="bg-gray-500 rounded-full mt-2 w-20 h-4 text-xs ml-2 text-white">
          {category}
        </button>
      </div>
    </div>
  );
};

export default Card;
