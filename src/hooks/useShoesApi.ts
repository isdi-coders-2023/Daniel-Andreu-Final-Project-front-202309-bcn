import { useCallback } from "react";
import axios from "axios";
import {
  ShoeDataStructure,
  ShoeStructure,
  ShoesStateStructure,
} from "../store/features/shoes/types";
import { UseShoesApiStructure } from "./types";
import { useDispatch } from "react-redux";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/features/ui/uiSlice";
import { addShoeActionCreator } from "../store/features/shoes/shoesSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useShoesApi = (): UseShoesApiStructure => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getShoes = useCallback(async (): Promise<ShoesStateStructure> => {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;

    try {
      dispatch(showLoadingActionCreator());
      const { data: shoes } = await axios.get<{ shoes: ShoeStructure[] }>(
        `/shoes`,
      );
      dispatch(hideLoadingActionCreator());
      return shoes;
    } catch (error) {
      dispatch(hideLoadingActionCreator());
      throw new Error((error as Error).message);
    }
  }, [dispatch]);

  const deleteShoe = useCallback(
    async (shoeId: string): Promise<void> => {
      axios.defaults.baseURL = import.meta.env.VITE_API_URL;

      dispatch(showLoadingActionCreator());

      try {
        const { data } = await axios.delete(`/shoes/${shoeId}`);
        dispatch(hideLoadingActionCreator());
        return data;
      } catch (error) {
        dispatch(hideLoadingActionCreator());
        throw new Error((error as Error).message);
      }
    },
    [dispatch],
  );

  const addShoe = useCallback(
    async (newShoe: ShoeDataStructure): Promise<void> => {
      dispatch(showLoadingActionCreator());

      try {
        const {
          data: { shoe },
        } = await axios.post<{ shoe: ShoeStructure }>("/shoes", newShoe);
        dispatch(addShoeActionCreator(shoe));
        toast.success("Calzado añadido correctamente", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        dispatch(hideLoadingActionCreator());
        navigate("/inicio");
      } catch (error) {
        dispatch(hideLoadingActionCreator());
        toast.error("No hemos podido añadir el calzado", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        throw new Error((error as Error).message);
      }
    },
    [dispatch, navigate],
  );

  return {
    getShoes,
    deleteShoe,
    addShoe,
  };
};

export default useShoesApi;
