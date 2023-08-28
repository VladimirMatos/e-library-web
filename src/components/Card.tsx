import ReadMore from "./Readmore";

const Card = (): JSX.Element => {
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
      <div className=" flex">
        <a>
          <img className="h-64 pl-20 mt-12 mb-6" src={img} />
        </a>
        <div className="w-3/4">
          <h1 className="pl-3 mt-16 text-white text-2xl font-bold">
            This is a title
          </h1>
          <ReadMore text={text} />
        </div>
      </div>
    </>
  );
};

export default Card;
