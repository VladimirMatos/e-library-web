import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useGetAllBookByCategory } from "../hooks/useBook";
import { IBookByCategory } from "../interfaces/Book";

const bookDefault: IBookByCategory = {
  category: "",
  books: [
    {
      id: 0,
      title: "",
      description: "",
      imageUrl: "",
      totalPage: 0,
      category: {
        id: 0,
        name: "",
      },
      bookPage: [
        {
          id: 0,
          page: 0,
          text: "",
        },
      ],
      createAt: "",
      author: {
        firstName: "",
        lastName: "",
        confirmPassword: "",
        email: "",
        password: "",
        roleId: "",
      },
    },
  ],
};

const BooksForCategoryPage = (): JSX.Element => {
  const location = useLocation();
  const categoryId = location.state?.id;

  const [book] = useGetAllBookByCategory(categoryId);

  const books = book ? book : bookDefault;

  return (
    <section className="min-h-screen m-auto w-4/6 ">
      <div>
        <h1 className="pt-20 pb-10 w- text-4xl text-white font-bold">
          {books.category} Stories
        </h1>
        <div className="bg-gray-700">
          <div className="p-5">
            <label className="text-white">{books.books?.length} Stories</label>
          </div>
          <hr />
          <div className="grid grid-cols-2">
            {books.books?.map((item) => (
              <Card
                value={item.id}
                key={item.id}
                image={item.imageUrl}
                description={item.description}
                title={item.title}
                type={true}
                category={book.category}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksForCategoryPage;
