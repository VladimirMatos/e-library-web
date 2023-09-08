/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import { ILogin } from "../interfaces/Auth";
import Login from "../services/Login";
import { IUser } from "../interfaces/User";
import { ROUTES } from "../constant/GlobalConst";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { useAppDispatch } from "./useRedux";
import { addAuth } from "../redux/authSlice";

const useLogin = (
  login: ILogin
): [() => Promise<void>, boolean, IError | null, IUser | null] => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<IError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [formError, setFormError] = useState<ILogin | null>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = async (): Promise<void> => {
    try {
      const inputError = {
        email: "",
        password: "",
      };

      if (!login.email && !login.password) {
        setFormError({
          ...inputError,
          password: "Password should not be empty",
          email: "Email should not be empty",
        });
        return;
      }
      if (!login.email) {
        setFormError({
          ...inputError,
          email: "Email should not be empty",
        });
        return;
      }

      if (!login.password) {
        setFormError({
          ...inputError,
          password: "Password should not be empty",
        });
        return;
      }

      setFormError(inputError);
      setLoading(true);

      const { data, message } = await Login(login);

      if (data?.data?.message == "Login") {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        dispatch(addAuth(data.data.user));
        navigate(ROUTES.home);
        return;
      }
      if (message) {
        setError(message);
      }
    } catch (error: any) {
      console.log(error);

      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return [handleLogin, loading, error, formError];
};

export default useLogin;
