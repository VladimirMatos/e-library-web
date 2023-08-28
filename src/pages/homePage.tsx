import TopBar from "../components/TopBar";
import { useGetAllBanner } from "../hooks/useBanner";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import CardList from "../components/CardList";

const HomePage = (): JSX.Element => {
  const [banner] = useGetAllBanner();

  const name = "SrPack";
  const images = [
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      subtitle: "accusamus beatae ad facilis cum similique qui sunt",
      imageUrl: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
    {
      albumId: 1,
      id: 2,
      title: "reprehenderit est deserunt velit ipsam",
      subtitle: "reprehenderit est deserunt velit ipsam",
      imageUrl: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796",
    },
    {
      albumId: 1,
      id: 3,
      title: "officia porro iure quia iusto qui ipsa ut modi",
      subtitle: "officia porro iure quia iusto qui ipsa ut modi",
      imageUrl: "https://via.placeholder.com/600/24f355",
      thumbnailUrl: "https://via.placeholder.com/150/24f355",
    },
    {
      albumId: 1,
      id: 4,
      title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      subtitle: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      imageUrl: "https://via.placeholder.com/600/d32776",
      thumbnailUrl: "https://via.placeholder.com/150/d32776",
    },
    {
      albumId: 1,
      id: 5,
      title: "natus nisi omnis corporis facere molestiae rerum in",
      subtitle: "natus nisi omnis corporis facere molestiae rerum in",
      imageUrl: "https://via.placeholder.com/600/f66b97",
      thumbnailUrl: "https://via.placeholder.com/150/f66b97",
    },
    {
      albumId: 1,
      id: 6,
      title: "accusamus ea aliquid et amet sequi nemo",
      subtitle: "accusamus ea aliquid et amet sequi nemo",
      imageUrl: "https://via.placeholder.com/600/56a8c2",
      thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
    },
    {
      albumId: 1,
      id: 7,
      title: "officia delectus consequatur vero aut veniam explicabo molestias",
      subtitle:
        "officia delectus consequatur vero aut veniam explicabo molestias",
      imageUrl: "https://via.placeholder.com/600/b0f7cc",
      thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
    },
    {
      albumId: 1,
      id: 8,
      title: "aut porro officiis laborum odit ea laudantium corporis",
      subtitle: "aut porro officiis laborum odit ea laudantium corporis",
      imageUrl: "https://via.placeholder.com/600/54176f",
      thumbnailUrl: "https://via.placeholder.com/150/54176f",
    },
    {
      albumId: 1,
      id: 9,
      title: "qui eius qui autem sed",
      subtitle: "qui eius qui autem sed",
      imageUrl: "https://via.placeholder.com/600/51aa97",
      thumbnailUrl: "https://via.placeholder.com/150/51aa97",
    },
    {
      albumId: 1,
      id: 10,
      title: "beatae et provident et ut vel",
      subtitle: "beatae et provident et ut vel",
      imageUrl: "https://via.placeholder.com/600/810b14",
      thumbnailUrl: "https://via.placeholder.com/150/810b14",
    },
    {
      albumId: 1,
      id: 11,
      title: "accusamus ea aliquid et amet sequi nemo",
      subtitle: "accusamus ea aliquid et amet sequi nemo",
      imageUrl: "https://via.placeholder.com/600/56a8c2",
      thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
    },
    {
      albumId: 1,
      id: 12,
      title: "officia delectus consequatur vero aut veniam explicabo molestias",
      subtitle:
        "officia delectus consequatur vero aut veniam explicabo molestias",
      imageUrl: "https://via.placeholder.com/600/b0f7cc",
      thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
    },
    {
      albumId: 1,
      id: 13,
      title: "aut porro officiis laborum odit ea laudantium corporis",
      subtitle: "aut porro officiis laborum odit ea laudantium corporis",
      imageUrl: "https://via.placeholder.com/600/54176f",
      thumbnailUrl: "https://via.placeholder.com/150/54176f",
    },
    {
      albumId: 1,
      id: 14,
      title: "qui eius qui autem sed",
      subtitle: "qui eius qui autem sed",
      imageUrl: "https://via.placeholder.com/600/51aa97",
      thumbnailUrl: "https://via.placeholder.com/150/51aa97",
    },
    {
      albumId: 1,
      id: 15,
      title: "beatae et provident et ut vel",
      subtitle: "beatae et provident et ut vel",
      imageUrl: "https://via.placeholder.com/600/810b14",
      thumbnailUrl: "https://via.placeholder.com/150/810b14",
    },
  ];
  const singleItems = {
    image: banner,
    showButtons: true,
    autoPlay: true,
  };
  const multiItems = {
    image: images,
    showButtons: true,
    autoPlay: false,
    multiItems: true,
  };

  return (
    <>
      <section className="bg-gray-900 min-h-screen overscroll-auto">
        <TopBar />
        <div className="min-h-screen m-auto w-4/6">
          <Carousel prop={singleItems} />
          <div className="pt-6">
            <h1 className="text-white text-2xl pb-2 font-bold">
              Welcome, {name}!
            </h1>
          </div>
          <hr />
          <div>
            <h1 className="text-white text-2xl pt-2 font-bold">
              Recommed for you!
            </h1>
            <Card />
          </div>
          <hr />
          <div className="pb-2">
            <h1 className="pt-5 text-2xl font-bold text-white">New & Hot</h1>
            <Carousel prop={multiItems} />
          </div>
          <hr />
          <div className="bg-gray-800">
            <CardList />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
