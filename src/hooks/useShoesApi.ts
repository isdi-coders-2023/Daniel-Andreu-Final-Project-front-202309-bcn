import { useCallback } from "react";
import axios from "axios";
import {
  ShoeStructure,
  ShoesStateStructure,
} from "../store/features/shoes/types";
import { UseShoesApiStructure } from "./types";

const useShoesApi = (): UseShoesApiStructure => {
  const getShoes = useCallback(async (): Promise<ShoesStateStructure> => {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;

    const { data: shoes } = await axios.get<{ shoes: ShoeStructure[] }>(
      `/shoes`,
    );

    return shoes;
  }, []);

  return {
    getShoes,
  };
};

export default useShoesApi;
