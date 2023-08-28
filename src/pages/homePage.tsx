import TopBar from "../components/TopBar";
import { useGetAllBanner } from "../hooks/useBanner";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import CardList from "../components/CardList";
import { IBook } from "../interfaces/Book";

const HomePage = (): JSX.Element => {
  const [banner] = useGetAllBanner();

  const name = "SrPack";
  const images: IBook[] = [
    {
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      description: "accusamus beatae ad facilis cum similique qui sunt",
      imageUrl: "https://via.placeholder.com/600/92c952",
    },
    {
      id: 2,
      title: "reprehenderit est deserunt velit ipsam",
      description: "reprehenderit est deserunt velit ipsam",
      imageUrl: "https://via.placeholder.com/600/771796",
    },
    {
      id: 3,
      title: "officia porro iure quia iusto qui ipsa ut modi",
      description: "officia porro iure quia iusto qui ipsa ut modi",
      imageUrl: "https://via.placeholder.com/600/24f355",
    },
    {
      id: 4,
      title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      description:
        "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      imageUrl: "https://via.placeholder.com/600/d32776",
    },
    {
      id: 5,
      title: "natus nisi omnis corporis facere molestiae rerum in",
      description: "natus nisi omnis corporis facere molestiae rerum in",
      imageUrl: "https://via.placeholder.com/600/f66b97",
    },
    {
      id: 6,
      title: "accusamus ea aliquid et amet sequi nemo",
      description: "accusamus ea aliquid et amet sequi nemo",
      imageUrl: "https://via.placeholder.com/600/56a8c2",
    },
    {
      id: 7,
      title: "officia delectus consequatur vero aut veniam explicabo molestias",
      description:
        "officia delectus consequatur vero aut veniam explicabo molestias",
      imageUrl: "https://via.placeholder.com/600/b0f7cc",
    },
    {
      id: 8,
      title: "aut porro officiis laborum odit ea laudantium corporis",
      description: "aut porro officiis laborum odit ea laudantium corporis",
      imageUrl: "https://via.placeholder.com/600/54176f",
    },
    {
      id: 9,
      title: "qui eius qui autem sed",
      description: "qui eius qui autem sed",
      imageUrl: "https://via.placeholder.com/600/51aa97",
    },
    {
      id: 10,
      title: "beatae et provident et ut vel",
      description: "beatae et provident et ut vel",
      imageUrl: "https://via.placeholder.com/600/810b14",
    },
    {
      id: 11,
      title: "accusamus ea aliquid et amet sequi nemo",
      description: "accusamus ea aliquid et amet sequi nemo",
      imageUrl: "https://via.placeholder.com/600/56a8c2",
    },
    {
      id: 12,
      title: "officia delectus consequatur vero aut veniam explicabo molestias",
      description:
        "officia delectus consequatur vero aut veniam explicabo molestias",
      imageUrl: "https://via.placeholder.com/600/b0f7cc",
    },
    {
      id: 13,
      title: "aut porro officiis laborum odit ea laudantium corporis",
      description: "aut porro officiis laborum odit ea laudantium corporis",
      imageUrl: "https://via.placeholder.com/600/54176f",
    },
    {
      id: 14,
      title: "qui eius qui autem sed",
      description: "qui eius qui autem sed",
      imageUrl: "https://via.placeholder.com/600/51aa97",
    },
    {
      id: 15,
      title: "beatae et provident et ut vel",
      description: "beatae et provident et ut vel",
      imageUrl: "https://via.placeholder.com/600/810b14",
    },
  ];
  const singleItems = {
    banner,
    showButtons: true,
    autoPlay: true,
  };
  const multiItems = {
    book: images,
    showButtons: true,
    autoPlay: false,
    multiItems: true,
  };

  return (
    <section className="bg-gray-900 min-h-screen overscroll-auto">
      <TopBar />
      <div className="min-h-screen m-auto w-4/6">
        <Carousel
          type="single"
          banners={singleItems.banner}
          showButtons={singleItems.showButtons}
          autoPlay={singleItems.autoPlay}
        />
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
          <CardList />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
