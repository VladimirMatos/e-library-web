/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from "react";
import { IBanner } from "../interfaces/Banner";
import getAllBanners from "../services/banner";

export const useGetAllBanner = (): [IBanner[], boolean, IError | null] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<IError | null>(null);
  const [banner, setBanner] = useState<IBanner[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    handleBanners();
  }, []);

  const handleBanners = async (): Promise<void> => {
    try {
      setLoading(true);
      const { data, message } = await getAllBanners();

      setBanner(data);
      if (message) {
        setError(message);
      }
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [banner, loading, error];
};
