import { useAppSelector } from "../../store/hooks";

const ShoesList = (): React.ReactElement => {
  const shoes = useAppSelector((state) => {
    return state.shoesState.shoes;
  });
  return (
    <ul>
      {shoes.map((shoe) => (
        <li key={shoe._id}>
          <div></div>
        </li>
      ))}
    </ul>
  );
};
export default ShoesList;
