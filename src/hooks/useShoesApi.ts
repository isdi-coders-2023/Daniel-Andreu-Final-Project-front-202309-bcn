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
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const getShoes = useCallback(async (): Promise<ShoesStateStructure> => {
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
    async (newShoe: ShoeDataStructure): Promise<ShoeStructure | undefined> => {
      dispatch(showLoadingActionCreator());

      try {
        const {
          data: { shoe },
        } = await axios.post<{ shoe: ShoeStructure }>(`/shoes`, newShoe);

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
        scrollTo(0, 0);

        return shoe;
      } catch {
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
      }
    },
    [dispatch, navigate],
  );

  const getShoe = useCallback(
    async (shoeId: string): Promise<ShoeStructure | undefined> => {
      dispatch(showLoadingActionCreator());

      try {
        const {
          data: { shoe },
        } = await axios.get<{ shoe: ShoeStructure }>(`/shoes/${shoeId}`);

        dispatch(hideLoadingActionCreator());

        return shoe;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.error("No se ha podido cargar el calzado", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    },
    [dispatch],
  );

  return {
    getShoes,
    deleteShoe,
    addShoe,
    getShoe,
  };
};

export default useShoesApi;
