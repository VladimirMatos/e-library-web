import { FC } from "react";
import { IBookByCategory } from "../interfaces/Book";
import ReadMore from "./Readmore";

type Book = {
  book: IBookByCategory[];
};

const CardList: FC<Book> = ({ book }) => {
  return (
    <div className="pt-2 w-full">
      {book.map((items, index) => (
        <div key={index}>
          <div>
            <h1 className="text-white font-bold text-2xl pl-3">
              {items.category}
            </h1>
          </div>
          {items.bookCategory.map((items) => (
            <div key={items.id}>
              <div className="flex -mt-6">
                <a>
                  <img
                    className="h-48 w-40 pl-4 mt-12 mb-6"
                    src={items.imageUrl}
                  />
                </a>
                <div className="w-5/6">
                  <h1 className="pl-3 mt-12 text-white text-base font-bold">
                    {items.title}
                  </h1>
                  <h2 className="pl-3 mt-1 text-white">
                    by author: {items.author.firstName}
                  </h2>
                  <ReadMore
                    style={"text-xs"}
                    text={items.description}
                    active={true}
                  />
                </div>
              </div>
              <div className="ml-4 -mt-4 pb-2">
                <button className="bg-gray-500 rounded-full mt-2 w-20 h-4 text-xs text-white">
                  {items.category.name}
                </button>
              </div>
            </div>
          ))}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default CardList;
