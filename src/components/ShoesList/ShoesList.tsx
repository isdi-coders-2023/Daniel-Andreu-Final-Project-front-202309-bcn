import { useAppSelector } from "../../store/hooks";
import ShoesListStyled from "./ShoesListStyled";

const ShoesList = (): React.ReactElement => {
  const shoes = useAppSelector((state) => {
    return state.shoesState.shoes;
  });
  return (
    <ShoesListStyled>
      {shoes.map((shoe) => (
        <li key={shoe._id}>
          <div></div>
        </li>
      ))}
    </ShoesListStyled>
  );
};
export default ShoesList;
