/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from "react";
import { IBook, IBookByCategory, ICreateBook } from "../interfaces/Book";
import {
  createBook,
  getAllBookByAuthor,
  getAllBookByCategory,
  getAllBookByName,
  getAllBookByOneCategory,
  getAllBooks,
  getBookById,
  getBookPageByIdAndType,
} from "../services/book";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constant/GlobalConst";
import { useAppSelector } from "./useRedux";

const useCreateBook = (
  book: ICreateBook
): [() => Promise<void>, boolean, IError | null] => {
  const [error, setError] = useState<IError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleCreateBook = async (): Promise<void> => {
    try {
      setLoading(true);
      const { status, message }: any = await createBook(book);

      if (message) {
        setError(message);
      }
      if (status === 201) {
        navigate(ROUTES.home);
      }
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return [handleCreateBook, loading, error];
};

const useGetBookByAuthor = (): [
  IBook[],
  () => Promise<void>,
  boolean,
  IError | null
] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<IError | null>(null);
  const [book, setBook] = useState<IBook[]>([]);
  const auth = useAppSelector((state) => state.auth);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    handleBooks();
  }, []);

  const handleBooks = async (): Promise<void> => {
    try {
      setLoading(true);
      const { data, message, status } = await getAllBookByAuthor(auth.id);

      setBook(data);
      if (message) {
        setError(message);
      }
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [book, handleBooks, loading, error];
};

const useGetAllBook = (): [IBook[], boolean, IError | null] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<IError | null>(null);
  const [book, setBook] = useState<IBook[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    handleBooks();
  }, []);

  const handleBooks = async (): Promise<void> => {
    try {
      setLoading(true);
      const { data, message, status } = await getAllBooks();

      setBook(data);
      if (message) {
        setError(message);
      }
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [book, loading, error];
};

const useGetBookByCategory = (
  categoryId: number[]
): [IBookByCategory[], boolean, IError | null] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<IError | null>(null);
  const [book, setBook] = useState<IBookByCategory[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    handleBooks();
  }, []);

  const handleBooks = async (): Promise<void> => {
    try {
      setLoading(true);
      const { data, message, status } = await getAllBookByCategory(categoryId);

      setBook(data);
      if (message) {
        setError(message);
      }
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [book, loading, error];
};

const useGetAllBookByCategory = (
  categoryId: string
): [IBookByCategory, boolean, IError | null] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<IError | null>(null);
  const [book, setBook] = useState<IBookByCategory>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    handleBooks();
  }, [categoryId]);

  const handleBooks = async (): Promise<void> => {
    try {
      setLoading(true);
      const { data, message, status } = await getAllBookByOneCategory(
        categoryId
      );

      setBook(data);
      if (message) {
        setError(message);
      }
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [book, loading, error];
};

const useGetBookById = (bookId: string): [IBook, boolean, IError | null] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<IError | null>(null);
  const [book, setBook] = useState<IBook>({
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
  });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    handleBooks();
  }, [bookId]);

  const handleBooks = async (): Promise<void> => {
    try {
      setLoading(true);
      const { data, message, status } = await getBookById(bookId);

      setBook(data);
      if (message) {
        setError(message);
      }
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [book, loading, error];
};

const useGetBookPageById = (
  bookId: string,
  pageId: string,
  type: string
): [IBook, boolean, IError | null] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<IError | null>(null);
  const [book, setBook] = useState<IBook>({
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
  });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    handleBooks();
  }, []);

  const handleBooks = async (): Promise<void> => {
    try {
      setLoading(true);
      const { data, message, status } = await getBookPageByIdAndType(
        bookId,
        pageId,
        type
      );

      setBook(data);
      if (message) {
        setError(message);
      }
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [book, loading, error];
};

const useGetBookByName = (name: string): [IBook[], boolean, IError | null] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<IError | null>(null);
  const [book, setBook] = useState<IBook[]>([
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
  ]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    handleBooks();
  }, [name]);

  const handleBooks = async (): Promise<void> => {
    try {
      setLoading(true);
      const { data, message, status } = await getAllBookByName(name);

      setBook(data);
      if (message) {
        setError(message);
      }
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [book, loading, error];
};

export {
  useCreateBook,
  useGetBookByAuthor,
  useGetAllBook,
  useGetBookByCategory,
  useGetAllBookByCategory,
  useGetBookById,
  useGetBookPageById,
  useGetBookByName,
};
