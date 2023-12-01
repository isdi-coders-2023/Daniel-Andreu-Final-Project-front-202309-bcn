import { useDispatch } from "react-redux";
import HomePageStyled from "./HomePageStyled";
import { useEffect } from "react";
import { loadShoesActionCreator } from "../../store/features/shoes/shoesSlice";
import shoesMock from "../../mocks/shoesMock";
import ShoesList from "../../components/ShoesList/ShoesList";

const HomePage = (): React.ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(loadShoesActionCreator(shoesMock));
    })();
  }, [dispatch]);

  return (
    <HomePageStyled>
      <h1 className="main-heading">Lo mejor, al mejor precio</h1>
      <ShoesList />
    </HomePageStyled>
  );
};
export default HomePage;
