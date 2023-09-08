/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import { IUser } from "../interfaces/User";
import signUp from "../services/SignUp";
import { ROUTES, STATUS_CODE } from "../constant/GlobalConst";
import { useNavigate } from "react-router-dom";

const useSignUp = (
  user: IUser
): [() => Promise<void>, boolean, IError | null, IUser | null] => {
  const [error, setError] = useState<IError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [formError, setFormError] = useState<IUser | null>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
    roleId: "",
  });

  const navigate = useNavigate();

  const handleSignUp = async (): Promise<void> => {
    try {
      const inputError = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        confirmPassword: "",
        roleId: "",
      };

      if (!user.email && !user.password && !user.firstName && !user.lastName) {
        setFormError({
          ...inputError,
          email: "Enter valid email address",
          password: "Password should not be empty",
          firstName: "First name should not be empty",
          lastName: "Last name should not be empty",
          confirmPassword: "Confirmation password not be empty",
        });
        return;
      }

      if (!user.firstName) {
        setFormError({
          ...inputError,
          firstName: "First name should not be empty",
        });
        return;
      }

      if (!user.lastName) {
        setFormError({
          ...inputError,
          lastName: "Last name should not be empty",
        });
        return;
      }

      if (!user.email) {
        setFormError({ ...inputError, email: "Enter valid email address" });
        return;
      }

      if (!user.password) {
        setFormError({
          ...inputError,
          password: "Password should not be empty",
        });
        return;
      }

      if (!user.confirmPassword) {
        setFormError({
          ...inputError,
          confirmPassword: "Confirmation password not be empty",
        });
        return;
      }

      if (user.password !== user.confirmPassword) {
        setFormError({
          ...inputError,
          confirmPassword:
            "Confirmation password and password need to be the same",
        });
        return;
      }

      setFormError(inputError);
      setLoading(true);
      const { data, message } = await signUp(user);

      if (!data?.status) {
        navigate(ROUTES.login);
      }

      if (data?.status) {
        setError(data?.response);
      }

      if (message) {
        setError(message);
      }
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return [handleSignUp, loading, error, formError];
};

export default useSignUp;
