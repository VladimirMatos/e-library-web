/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios from "axios";
import {
  API_CONFIG,
  ERROR_MESSAGES,
  STATUS_CODE,
} from "../constant/GlobalConst";
import { Auth } from "../routes/authRoutes";
import { ILogin } from "../interfaces/Auth";

const Login = async (login: ILogin): Promise<any> => {
  try {
    const petision = API_CONFIG.URL + Auth.login;

    const data = await axios.post(petision, login, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return { data };
  } catch (error: any) {
    const message = {
      title: error.response.status || "Error",
      message:
        error?.response?.data?.message ||
        "¡Hubo un error inesperado, intentalo mas tarde!",
    };
    if (error?.response?.status === STATUS_CODE.server_error) {
      message.message = ERROR_MESSAGES.BAD_EMAIL_OR_PASSWORD;
    }
    return message;
  }
};

export default Login;
