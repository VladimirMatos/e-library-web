/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = ({ prop }): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(prop.image[0]);

  const imageSlice = prop.image.slice(0, 5);
  const [selectedMultiImage, setSelectedMultiImage] = useState(imageSlice);
  const [currentMultiIndex, setCurrentMultiIndex] = useState(5);

  useEffect(() => {
    if (prop.autoPlay || !prop.showButtons) {
      const interval = setInterval(() => {
        selectNewImage(currentIndex, prop.image);
      }, 8000);
      return () => clearInterval(interval);
    }
  });
  const selectNewImage = (
    index: number,
    images: [],
    next = true,
    multi = prop.multiItems
  ) => {
    multi
      ? selectMultiImage(index, images, next)
      : selectSingleImage(index, images, next);
  };

  const previous = () => {
    prop.multiItems
      ? selectNewImage(selectedMultiImage, prop.image, false)
      : selectNewImage(selectedImage, prop.image, false);
  };

  const next = () => {
    prop.multiItems
      ? selectNewImage(selectedMultiImage, prop.image)
      : selectNewImage(selectedImage, prop.image);
  };

  const selectSingleImage = (index: number, images: [], next = true) => {
    setTimeout(() => {
      const condition = next
        ? currentIndex < images.length - 1
        : currentIndex > 0;

      const nextIndex = next
        ? condition
          ? currentIndex + 1
          : 0
        : condition
        ? currentIndex - 1
        : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setCurrentIndex(nextIndex);
    }, 500);
  };

  const selectMultiImage = (index: number, images: [], next = true) => {
    setTimeout(() => {
      const condition = next
        ? currentMultiIndex < images.length - 1
        : currentMultiIndex >= 5;

      const nextIndex = next
        ? condition
          ? currentMultiIndex + 5
          : 5
        : condition
        ? currentMultiIndex - 5
        : images.length - 5;

      const spliceCondition =
        nextIndex == images.length
          ? prop.image.slice(0, 5)
          : prop.image.slice(nextIndex, nextIndex + 5);

      setSelectedMultiImage(spliceCondition);
      setCurrentMultiIndex(nextIndex);
    }, 500);
  };

  return (
    <>
      {prop.multiItems ? (
        <>
          <div className="flex">
            <button
              className="bg-white rounded-full w-8 h-7 relative m-2 top-32"
              onClick={previous}
            >
              <div className="relative left-2">
                <FiChevronLeft />
              </div>
            </button>

            <ul className="flex w-5/6 mt-7 duration-700 ease-in-out ">
              {selectedMultiImage.map((items) => (
                <li key={items.id} className="ml-2 ">
                  <a>
                    <img
                      src={items.imageUrl}
                      alt={items.title}
                      className="h-64"
                    />
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
        </>
      ) : (
        <div className="flex">
          {prop.showButtons ? (
            <>
              <button
                className="bg-white rounded-full w-8 h-7 relative top-48 m-2"
                onClick={previous}
              >
                <div className="relative left-2">
                  <FiChevronLeft />
                </div>
              </button>
            </>
          ) : (
            <></>
          )}
          <div className="w-full">
            <h1 className="pt-4 text-white text-2xl">{selectedImage?.title}</h1>
            <p className="text-white pt-2">{selectedImage?.subtitle}</p>
            <a className="" href="https://www.goodreads.com/genres/fantasy">
              <img
                className="pt-4 rounded-lg object-cover h-72 w-full"
                src={selectedImage?.imageUrl}
                alt={selectedImage?.title}
              />
            </a>
          </div>
          {prop?.showButtons ? (
            <>
              <button
                className="bg-white rounded-full w-8 h-7 m-2 relative top-48 "
                onClick={next}
              >
                <div className="relative left-2">
                  <FiChevronRight />
                </div>
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
};

export default Carousel;
