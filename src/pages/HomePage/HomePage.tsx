import { useDispatch } from "react-redux";
import HomePageStyled from "./HomePageStyled";
import { useEffect } from "react";
import ShoesList from "../../components/ShoesList/ShoesList";
import useShoesApi from "../../hooks/useShoesApi";
import { loadShoesActionCreator } from "../../store/features/shoes/shoesSlice";

const HomePage = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { getShoes } = useShoesApi();

  useEffect(() => {
    (async () => {
      const { shoes } = await getShoes();

      dispatch(loadShoesActionCreator(shoes));
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
