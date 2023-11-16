/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useGetAllBanner } from "../hooks/useBanner";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import CardList from "../components/CardList";
import { IBook, ICreateBook } from "../interfaces/Book";
import { useAppSelector } from "../hooks/useRedux";
import { useGetAllBook, useGetBookByCategory } from "../hooks/useBook";
import { arrayShuffle } from "../helper/arrayFunctions";

export type IBookTest = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

const HomePage = (): JSX.Element => {
  const [banner] = useGetAllBanner();
  const auth = useAppSelector((state) => state.auth);
  const [books] = useGetAllBook();
  const shuffledBookArray: IBook[] = arrayShuffle(books);
  const bookShufled = shuffledBookArray.slice(0, 15)[0];
  const bookShufledMulti = shuffledBookArray.slice(0, 15);

  const [booksCategory] = useGetBookByCategory([1, 2, 3]);

  const defaultCard = {
    imageUrl: "",
    description: "",
    title: "",
  };

  const bookCheck = bookShufled ? bookShufled : defaultCard;

  const singleItems = {
    banner,
    showButtons: true,
    autoPlay: true,
  };
  const multiItems = {
    book: bookShufledMulti,
    showButtons: true,
    autoPlay: false,
    multiItems: true,
  };

  return (
    <div className="min-h-screen m-auto w-4/6">
      <Carousel
        type="single"
        banners={singleItems.banner}
        showButtons={singleItems.showButtons}
        autoPlay={singleItems.autoPlay}
      />
      <div className="pt-6">
        <h1 className="text-white text-2xl pb-2 font-bold">
          Welcome, {auth.firstName}!
        </h1>
      </div>
      <hr />
      <div>
        <h1 className="text-white text-2xl pt-2 font-bold">
          Recommed for you!
        </h1>
        <Card
          image={bookCheck.imageUrl}
          title={bookCheck.title}
          description={bookCheck.description}
          type={false}
        />
      </div>
      <hr />
      <div className="pb-2">
        <h1 className="pt-5 text-2xl font-bold text-white">New & Hot</h1>
        <Carousel
          type="multi"
          books={multiItems.book}
          autoPlay={false}
          multiItems={true}
          showButtons={true}
        />
      </div>
      <hr />
      <div className="bg-gray-800">
        <CardList book={booksCategory} />
      </div>
    </div>
  );
};

export default HomePage;
