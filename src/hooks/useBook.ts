/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from "react";
import { IBook, ICreateBook } from "../interfaces/Book";
import { createBook, getAllBookByAuthor } from "../services/book";
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

const useGetBookByAuthor = (): [IBook[], boolean, IError | null] => {
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

  return [book, loading, error];
};

export { useCreateBook, useGetBookByAuthor };
