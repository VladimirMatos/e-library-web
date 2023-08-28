import { Route, Routes, useLocation } from "react-router-dom";
import { LoginPage } from "./pages/loginPage";
import { ROUTES } from "./constant/GlobalConst";
import { SignUp } from "./pages/signUpPage";
import HomePage from "./pages/homePage";

export const Router = (): JSX.Element => {
  const path = useLocation().pathname;

  if (["/", ROUTES.login, ROUTES.singup].includes(path)) {
    return (
      <>
        <Routes>
          <Route path={ROUTES.login} element={<LoginPage />} />
          <Route path={ROUTES.singup} element={<SignUp />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <Routes>
        <Route path={ROUTES.home} element={<HomePage />} />
      </Routes>
    </>
  );

  return <></>;
};
