import ReadMore from "./Readmore";

const CardList = () => {
  const img =
    "https://firebasestorage.googleapis.com/v0/b/e-library-ef80c.appspot.com/o/banners%2F106959201-256-k124257.jpg?alt=media&token=50066ecc-2fdd-4262-b4fe-bc6eac4a352b";

  return (
    <>
      <div className="pt-2">
        <h1 className="text-white font-bold text-2xl pl-3">Category</h1>
        <div className="flex">
          <a>
            <img className="h-32 pl-2 mt-12 mb-6" src={img} />
          </a>
          <div className="w-3/4">
            <h1 className="pl-3 mt-12 text-white text-sm font-bold">
              This is a title
            </h1>
            <h2 className="pl-3 mt-1 text-white text-xs ">by author</h2>
            <ReadMore style={"text-xs"} />
          </div>
        </div>
        <div className="ml-24">
          <button className="bg-gray-500 rounded-full mt-2 w-12 h-4 text-xs text-white">
            category
          </button>
        </div>
      </div>
    </>
  );
};

export default CardList;
