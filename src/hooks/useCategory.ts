/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from "react";
import { ICategory } from "../interfaces/Category";
import { getAllCategory } from "../services/category";

const useGetAllCategory = (): [ICategory[], boolean, IError | null] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<IError | null>(null);
  const [category, setCategory] = useState<ICategory[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    handleRoles();
  }, []);

  const handleRoles = async (): Promise<void> => {
    try {
      setLoading(true);
      const { data, message } = await getAllCategory();

      setCategory(data);
      if (message) {
        setError(message);
      }
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [category, loading, error];
};

export default useGetAllCategory;
