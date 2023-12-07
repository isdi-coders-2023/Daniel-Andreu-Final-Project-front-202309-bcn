import { useDispatch } from "react-redux";
import HomePageStyled from "./HomePageStyled";
import { useEffect } from "react";
import ShoesList from "../../components/ShoesList/ShoesList";
import useShoesApi from "../../hooks/useShoesApi";
import { loadShoesActionCreator } from "../../store/features/shoes/shoesSlice";
import { hideLoadingActionCreator } from "../../store/features/ui/uiSlice";
import { toast } from "react-toastify";

const HomePage = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { getShoes } = useShoesApi();

  useEffect(() => {
    (async () => {
      try {
        const { shoes } = await getShoes();

        dispatch(loadShoesActionCreator(shoes));
      } catch (error) {
        dispatch(hideLoadingActionCreator());

        toast.error("Error cargando los calzados", {
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
    })();
  }, [dispatch, getShoes]);

  return (
    <HomePageStyled>
      <h1 className="main-heading">Lo mejor, al mejor precio</h1>
      <ShoesList />
    </HomePageStyled>
  );
};
export default HomePage;
