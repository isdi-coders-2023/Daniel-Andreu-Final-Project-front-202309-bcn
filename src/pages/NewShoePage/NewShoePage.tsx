import ShoeForm from "../../components/ShoeForm/ShoeForm";
import useShoesApi from "../../hooks/useShoesApi";
import { ShoeDataStructure } from "../../store/features/shoes/types";
import NewShoePageStyled from "./NewShoePageStyled";

const NewShoePage = (): React.ReactElement => {
  const { addShoe } = useShoesApi();

  const addNewShoe = async (newShoe: ShoeDataStructure) => {
    await addShoe(newShoe);
  };

  return (
    <NewShoePageStyled>
      <h1 className="main-heading">
        Añade un calzado y véndelo o cambialo por otro
      </h1>
      <ShoeForm actionOnSubmit={addNewShoe} />
    </NewShoePageStyled>
  );
};

export default NewShoePage;
