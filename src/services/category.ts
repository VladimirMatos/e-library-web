/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from "axios";
import {
  API_CONFIG,
  ERROR_MESSAGES,
  STATUS_CODE,
} from "../constant/GlobalConst";
import { CATEGORY } from "../routes/categoryRoutes";

export const getAllCategory = async (): Promise<any> => {
  try {
    const petision = API_CONFIG.URL + CATEGORY.path;

    const { data, status } = await axios.get(petision);

    return { data, status };
  } catch (error: any) {
    const message = {
      title: error.response.status || "Error",
      message:
        error.message || "¡Hubo un error inesperado, intentalo mas tarde!",
    };
    if (error.response.status === STATUS_CODE.server_error) {
      message.message = ERROR_MESSAGES.SERVER_ERROR;
    }
    return message;
  }
};
