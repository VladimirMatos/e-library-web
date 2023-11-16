import { Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import { ROUTES } from "./constant/GlobalConst";
import SignUp from "./pages/signUpPage";
import HomePage from "./pages/homePage";
import TopBar from "./components/TopBar";
import CreateBookPage from "./pages/createBookPage";
import { useAppSelector } from "./hooks/useRedux";
import NotFoundPage from "./pages/notFoundPage";
import WriteBookPage from "./pages/writeBookPage";
import MyBookPage from "./pages/myBooksPage";
import BooksForCategoryPage from "./pages/booksForCategoryPage";
import ReadBookPage from "./pages/readBookPage";

export const Router = (): JSX.Element => {
  const path = useLocation().pathname.toLowerCase();
  const auth = useAppSelector((state) => state.auth);
  if (
    ![
      "/",
      ROUTES.home,
      ROUTES.login,
      ROUTES.login2,
      ROUTES.newBook,
      ROUTES.singup,
      ROUTES.write,
      ROUTES.myBooks,
      ROUTES.booksByCategory,
      ROUTES.book,
    ].includes(path)
  ) {
    return (
      <Routes>
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    );
  }
  if (["/", ROUTES.login, ROUTES.login2, ROUTES.singup].includes(path)) {
    return (
      <section className="bg-gray-900 min-h-screen overscroll-auto">
        <Routes>
          <Route path={ROUTES.login2} element={<LoginPage />} />
          <Route path={ROUTES.login} element={<LoginPage />} />
          <Route path={ROUTES.singup} element={<SignUp />} />
        </Routes>
      </section>
    );
  }
  if (auth.email) {
    if (
      [
        ROUTES.home,
        ROUTES.myBooks,
        ROUTES.booksByCategory,
        ROUTES.book,
      ].includes(path)
    ) {
      return (
        <section className="bg-gray-900 min-h-screen overscroll-auto">
          <TopBar />
          <Routes>
            <Route path={ROUTES.home} element={<HomePage />} />
            <Route path={ROUTES.myBooks} element={<MyBookPage />} />
            <Route
              path={ROUTES.booksByCategory}
              element={<BooksForCategoryPage />}
            />
            <Route path={ROUTES.book} element={<ReadBookPage />} />
          </Routes>
        </section>
      );
    }
    return (
      <section className="bg-gray-900 min-h-screen overscroll-auto">
        <Routes>
          <Route path={ROUTES.newBook} element={<CreateBookPage />} />
          <Route path={ROUTES.write} element={<WriteBookPage />} />
        </Routes>
      </section>
    );
  }
  if (!auth.email) {
    return (
      <section className="bg-gray-900 min-h-screen overscroll-auto">
        <LoginPage />
      </section>
    );
  }
  return <></>;
};
