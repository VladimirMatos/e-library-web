/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { FC, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IBook } from "../interfaces/Book";
import { IBanner } from "../interfaces/Banner";
import { defaultBanner } from "../services/banner";

type CarouselMulti = {
  banners?: never;
  books: IBook[];
  showButtons: boolean;
  autoPlay: boolean;
  multiItems: boolean;
  type: "multi";
};

type CarouselSingle = {
  books?: never;
  banners: IBanner[];
  showButtons: boolean;
  autoPlay: boolean;
  multiItems?: never;
  type: "single";
};

type CAROUSEL = CarouselMulti | CarouselSingle;

const Carousel: FC<CAROUSEL> = ({
  banners,
  showButtons = true,
  autoPlay = false,
  multiItems = false,
  books,
  type,
}) => {
  const prop = {
    banners,
    showButtons,
    autoPlay,
    multiItems,
    books,
    type,
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const selectedImage = prop.banners
    ? prop.banners[currentIndex]
    : defaultBanner;

  const selectedMultiImage = prop.books
    ? prop.books.slice(currentIndex, currentIndex + 5)
    : [];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (prop.autoPlay || !prop.showButtons) {
      interval = setTimeout(() => {
        selectNewImage();
      }, 4000);
    }

    return () => clearTimeout(interval);
    // eslint-disable-next-line
  }, [banners, currentIndex]);

  const selectNewImage = (next = true) => {
    if (prop.books) selectMultiImage(currentIndex, next);
    if (prop.banners) selectSingleImage(currentIndex, next);
  };

  const previous = () => {
    selectNewImage(false);
  };

  const next = () => {
    selectNewImage();
  };

  const selectSingleImage = (_: number, next = true) => {
    if (!banners) return;
    let index = currentIndex;

    const canGoNext = (i: number) => i < banners.length - 1;
    const canGoPrevious = (i: number) => i > 0;

    if (next) index = canGoNext(index) ? index + 1 : 0;
    else index = canGoPrevious(index) ? index - 1 : banners.length - 1;

    setCurrentIndex(index);
  };

  const selectMultiImage = (_: number, next = true) => {
    if (!books) return;
    let index = currentIndex;

    const canGoNext = (i: number) => i + 5 <= books.length;
    const canGoPrevious = (i: number) => i - 5 >= 0;

    if (next) {
      index = canGoNext(index) ? index + 5 : 0;
      if (index >= books.length) index = 0;
    } else {
      index = canGoPrevious(index) ? index - 5 : books.length - 5;
    }

    setCurrentIndex(index);
  };
  if (prop.type === "multi") {
    return (
      <div className="flex">
        <button
          className="bg-white rounded-full w-8 h-7 relative m-2 top-32"
          onClick={previous}
        >
          <div className="relative left-2">
            <FiChevronLeft />
          </div>
        </button>

        <ul className="flex w-11/12 mt-7">
          {selectedMultiImage.map((items) => (
            <li key={items.id} className="ml-2 ">
              <a>
                <img src={items.imageUrl} alt={items.title} className="h-64" />
              </a>
              <div>
                <button className="bg-gray-500 rounded-full mt-2 w-12 h-4 text-xs text-white">
                  category
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button
          className="bg-white rounded-full w-8 h-7 m-2 relative top-32"
          onClick={next}
        >
          <div className="relative left-2">
            <FiChevronRight />
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="flex">
      {prop.showButtons ? (
        <button
          className="bg-white rounded-full w-8 h-7 relative top-56 m-2"
          onClick={previous}
        >
          <div className="relative left-2">
            <FiChevronLeft />
          </div>
        </button>
      ) : null}
      <div className="w-11/12">
        <h1 className="pt-4 text-white text-2xl">{selectedImage?.title}</h1>
        <p className="text-white pt-2">{selectedImage?.subtitle}</p>
        <a className="" href="https://www.goodreads.com/genres/fantasy">
          <img
            className="pt-4 rounded-lg object-cover h-96 w-full"
            src={selectedImage?.imageUrl}
            alt={selectedImage?.title}
          />
        </a>
      </div>
      {prop?.showButtons ? (
        <button
          className="bg-white rounded-full w-8 h-7 m-2 relative top-56 "
          onClick={next}
        >
          <div className="relative left-2">
            <FiChevronRight />
          </div>
        </button>
      ) : null}
    </div>
  );
};

export default Carousel;
