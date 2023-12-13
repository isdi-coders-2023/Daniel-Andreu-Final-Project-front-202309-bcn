import ShoeDetailPageStyled from "./ShoeDetailPageStyled";
import ShoeDetail from "../../components/ShoeDetail/ShoeDetail";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import useShoesApi from "../../hooks/useShoesApi";
import { useEffect } from "react";
import { loadShoeActionCreator } from "../../store/features/shoes/shoesSlice";

const ShoeDetailPage = (): React.ReactElement => {
  const { shoeId } = useParams();
  const dispatch = useAppDispatch();
  const { getShoe } = useShoesApi();

  useEffect(() => {
    (async () => {
      const shoe = await getShoe(shoeId!);

      if (shoe) {
        dispatch(loadShoeActionCreator(shoe));
      }
    })();
  }, [dispatch, getShoe, shoeId]);

  return (
    <ShoeDetailPageStyled>
      <ShoeDetail />
    </ShoeDetailPageStyled>
  );
};
export default ShoeDetailPage;
