import { useAppSelector } from "../../store/hooks";
import ShoeCard from "../ShoeCard/ShoeCard";
import ShoesListStyled from "./ShoesListStyled";

const ShoesList = (): React.ReactElement => {
  const shoes = useAppSelector((state) => state.shoesState.shoes);

  return (
    <ShoesListStyled>
      {shoes.map((shoe) => (
        <li key={shoe._id}>
          <ShoeCard shoe={shoe} />
        </li>
      ))}
    </ShoesListStyled>
  );
};
export default ShoesList;
