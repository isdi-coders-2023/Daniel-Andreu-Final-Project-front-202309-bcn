import { toast } from "react-toastify";
import useShoesApi from "../../hooks/useShoesApi";
import { deleteShoeActionCreator } from "../../store/features/shoes/shoesSlice";
import { ShoeStructure } from "../../store/features/shoes/types";
import { useAppDispatch } from "../../store/hooks";
import Button from "../Button/Button";
import ShoesCardStyled from "./ShoeCardStyled";
import { Link } from "react-router-dom";

interface ShoeCardProps {
  shoe: ShoeStructure;
}

const ShoeCard = ({
  shoe: {
    image,
    title,
    size,
    shoeStatus,
    price,
    isChangesAccepted,
    location,
    _id,
  },
}: ShoeCardProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { deleteShoe } = useShoesApi();

  const deleteThisShoe = async (): Promise<void> => {
    try {
      await deleteShoe(_id);
      dispatch(deleteShoeActionCreator(_id));
      toast.success("Calzado eliminado correctamente", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error("No hemos podido eliminar el calzado", {
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
  };

  return (
    <ShoesCardStyled className="shoe">
      <Link to={`/detalle/${_id}`}>
        <div className="shoe__image-container">
          <img
            className="shoe__image"
            src={image}
            alt={title}
            width="420"
            height="420"
          />
        </div>
        <h2 className="shoe__title">{title}</h2>
        <div className="shoe__info">
          <span className="shoe__location">{location}</span>
          <div className="shoe__status-container">
            <img
              className="shoe__star-status"
              src="images/star.svg"
              alt="icono de estrella"
              width="20"
              height="20"
            />
            <span className="shoe__status">{shoeStatus}</span>
          </div>
        </div>
        <div className="shoe__info">
          <div className="shoe__price-and-changes">
            <span className="shoe__price">{price}€</span>
            <span className="shoe__changes">
              {isChangesAccepted ? "Acepta cambio" : ""}
            </span>
          </div>
          <span className="shoe__size">Talla {size} EU</span>
        </div>
      </Link>
      <div className="shoe__buttons-container">
        <Button
          type="button"
          className="button__primary-circular"
          text="Modificar"
        />
        <Button
          type="button"
          actionOnClick={deleteThisShoe}
          className="button__secondary-circular"
          text="Eliminar"
        />
      </div>
    </ShoesCardStyled>
  );
};

export default ShoeCard;
