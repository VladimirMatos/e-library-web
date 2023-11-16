/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from "axios";
import { API_CONFIG, ERROR_MESSAGES } from "../constant/GlobalConst";
import { IUser } from "../interfaces/User";
import { USER } from "../routes/userRoutes";

const signUp = async (user: IUser): Promise<any> => {
  delete user.confirmPassword;

  const petision = API_CONFIG.URL + USER.path;
  try {
    
    const { data, status } = await axios.post(petision, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });


    return { data, status };
  } catch (error: any) {
    const message = {
      title: error.response.status || "Error",
      message:
        error.message || "¡Hubo un error inesperado, intentalo mas tarde!",
    };
    if (error.response.status === 500) {
      message.message = ERROR_MESSAGES.BAD_EMAIL_OR_PASSWORD;
    }
    return message;
  }
};

export default signUp;
