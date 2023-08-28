/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from "react";
import { IRole } from "../interfaces/Roles";
import getAllRoles from "../services/Roles";

export const useGetAllRoles = (): [IRole[], boolean, IError | null] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<IError | null>(null);
  const [roles, setRoles] = useState<IRole[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    handleRoles();
  }, []);

  const handleRoles = async (): Promise<void> => {
    try {
      setLoading(true);
      const { data, message } = await getAllRoles();

      setRoles(data);
      if (message) {
        setError(message);
      }
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [roles, loading, error];
};
