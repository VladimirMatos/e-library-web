/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from "axios";
import { API_CONFIG, ERROR_MESSAGES } from "../constant/GlobalConst";
import { Book } from "../routes/bookRoutes";
import { IBook, ICreateBook, IUpdateBook } from "../interfaces/Book";

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

export const getAllBooks = async () => {
  try {
    const petision = API_CONFIG.URL + Book.create;

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

export const getAllBookByCategory = async (categoryId: number[]) => {
  try {
    const petision = API_CONFIG.URL + Book.getByCategory;

    const { data, status }: Book = await axios.post(petision, {
      ids: categoryId,
    });

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

export const getAllBookByOneCategory = async (categoryId: string) => {
  try {
    const petision = API_CONFIG.URL + Book.getByCategory + categoryId;

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

export const getBookById = async (categoryId: string) => {
  try {
    const petision = API_CONFIG.URL + Book.create + categoryId;

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

export const getBookPageByIdAndType = async (
  bookId: string,
  pageId: string,
  type: string
) => {
  try {
    const petision =
      API_CONFIG.URL +
      Book.create +
      bookId +
      "/page/" +
      pageId +
      "/type/" +
      type;
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
export const getBookPageById = async (bookId: string, pageId: string) => {
  try {
    const petision = API_CONFIG.URL + Book.create + bookId + "/page/" + pageId;

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

export const deleteBook = async (bookId: number) => {
  try {
    const petision = API_CONFIG.URL + Book.create + bookId.toString();

    const { data, status }: Book = await axios.delete(petision);

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

export const updateBook = async (bookId: string, book: IUpdateBook) => {
  try {
    const petision = API_CONFIG.URL + Book.create + bookId;

    await axios.patch(petision, book);
  } catch (error: any) {
    console.log(error);

    const message: Message = {
      title: error.message || "Error",
      message:
        error.response.data.message ||
        "¡Hubo un error inesperado, intentalo mas tarde!",
    };

    if (error.response.status === 500) {
      message.message = ERROR_MESSAGES.SERVER_ERROR;
    }
    if (error.response) {
      console.log(error.response.data.message);
    }
    return message;
  }
};

export const updateBookPage = async (
  bookId: string,
  page: string,
  text: string
) => {
  try {
    const petision = API_CONFIG.URL + Book.create + bookId + "/page/" + page;

    await axios.patch(petision, { text });
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

export const getAllBookByName = async (name: string) => {
  try {
    console.log(name);

    if (!name) return "";
    const petision = API_CONFIG.URL + Book.create + "name/" + name;

    const { data, status } = await axios.get(petision);
    return { data, status };
  } catch (error: any) {
    console.log(error);

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
