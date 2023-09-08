import ReadMore from "./Readmore";

const CardList = () => {
  const img =
    "https://firebasestorage.googleapis.com/v0/b/e-library-ef80c.appspot.com/o/banners%2F106959201-256-k124257.jpg?alt=media&token=50066ecc-2fdd-4262-b4fe-bc6eac4a352b";
  const text = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
    autem tenetur cumque eaque vitae voluptatum quasi recusandae et sed
    sunt aperiam dignissimos a veniam reprehenderit nisi, culpa
    praesentium! Atque, dolorem? Lorem ipsum dolor sit amet, consectetur
    adipisicing elit. Autem, libero enim aliquid ab porro distinctio aut
    doloribus mollitia, laboriosam nobis voluptas, aspernatur ipsum
    consequatur vero laborum aperiam aliquam quasi a. Lorem ipsum dolor
    sit amet consectetur, adipisicing elit. Voluptatum possimus doloribus
    eius totam expedita ratione id quia unde, quas fugit ullam porro
    doloremque qui, ut odit temporibus soluta ab magni? Lorem ipsum dolor
    sit amet consectetur adipisicing elit. Iure exercitationem doloribus,
    soluta obcaecati inventore deserunt cum harum rem impedit possimus,
    rerum modi ipsa praesentium neque animi, fugiat quidem saepe ipsum.`;
  return (
    <>
      <div className="pt-2 w-full">
        <h1 className="text-white font-bold text-2xl pl-3">Category</h1>
        <div className="flex">
          <a>
            <img className="h-48 pl-4 mt-12 mb-6" src={img} />
          </a>
          <div className="w-5/6">
            <h1 className="pl-3 mt-12 text-white text-base font-bold">
              This is a title
            </h1>
            <h2 className="pl-3 mt-1 text-white">by author</h2>
            <ReadMore style={"text-xs"} text={text} />
          </div>
        </div>
        <div className="ml-4 -mt-4">
          <button className="bg-gray-500 rounded-full mt-2 w-12 h-4 text-xs text-white">
            category
          </button>
        </div>
      </div>
    </>
  );
};

export default CardList;
