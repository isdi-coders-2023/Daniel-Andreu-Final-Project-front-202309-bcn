import { useCallback } from "react";
import axios from "axios";
import {
  ShoeStructure,
  ShoesStateStructure,
} from "../store/features/shoes/types";
import { UseShoesApiStructure } from "./types";
import { useDispatch } from "react-redux";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/features/ui/uiSlice";

const useShoesApi = (): UseShoesApiStructure => {
  const dispatch = useDispatch();

  const getShoes = useCallback(async (): Promise<ShoesStateStructure> => {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;

    dispatch(showLoadingActionCreator());

    const { data: shoes } = await axios.get<{ shoes: ShoeStructure[] }>(
      `/shoes`,
    );

    dispatch(hideLoadingActionCreator());

    return shoes;
  }, [dispatch]);

  return {
    getShoes,
  };
};

export default useShoesApi;
