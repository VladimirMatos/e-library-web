/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios, { AxiosError } from "axios";
import { API_CONFIG, ERROR_MESSAGES } from "../constant/GlobalConst";
import { Book } from "../routes/bookRoutes";
import { IBook, ICreateBook } from "../interfaces/Book";

export type Book = {
  data: IBook;
  status: number;
};
export type Message = {
  title: string;
  message: string;
};

export const createBook = async (book: ICreateBook) => {
  try {
    const petision = API_CONFIG.URL + Book.create;

    const { data, status }: Book = await axios.post(petision, book, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log({ data, status });

    return { data, status };
  } catch (error: any) {
    const message: Message = {
      title: error.message || "Error",
      message:
        error.response.data.message ||
        "¡Hubo un error inesperado, intentalo mas tarde!",
    };

    if (error.response.status === 500) {
      message.message = ERROR_MESSAGES.SERVER_ERROR;
    }
    return message;
  }
};

export const getAllBookByAuthor = async (authorId: string) => {
  try {
    const petision = API_CONFIG.URL + Book.getByAuthor + authorId;
    console.log(petision);

    const { data, status }: Book = await axios.get(petision);

    return { data, status };
  } catch (error: any) {
    const message: Message = {
      title: error.message || "Error",
      message:
        error.response.data.message ||
        "¡Hubo un error inesperado, intentalo mas tarde!",
    };

    if (error.response.status === 500) {
      message.message = ERROR_MESSAGES.SERVER_ERROR;
    }
    return message;
  }
};
