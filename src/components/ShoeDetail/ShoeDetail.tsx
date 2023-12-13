import { useNavigate } from "react-router-dom";
import useShoesApi from "../../hooks/useShoesApi";
import { deleteShoeActionCreator } from "../../store/features/shoes/shoesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Button from "../Button/Button";
import ShoeDetailStyled from "./ShoeDetailStyled";
import { toast } from "react-toastify";

const ShoeDetail = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { deleteShoe } = useShoesApi();
  const navigate = useNavigate();

  const {
    _id,
    title,
    description,
    image,
    size,
    price,
    name,
    location,
    phone,
    shoeStatus,
    isChangesAccepted,
    isBoxIncluded,
  } = useAppSelector((state) => state.shoesState.shoe)!;

  const deleteThisShoe = async (): Promise<void> => {
    try {
      await deleteShoe(_id);
      dispatch(deleteShoeActionCreator(_id));
      navigate("/inicio");
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
    <ShoeDetailStyled className="detail">
      <img
        className="detail__image"
        src={image}
        alt={image}
        width="420"
        height="420"
      />
      <section className="detail__section">
        <h1 className="detail__title">{title}</h1>
        <div className="detail__size-and-price-container">
          <span className="detail__size">Talla {size} EU</span>
          <span className="detail__price">{price}€</span>
        </div>
        <span className="detail__status">{shoeStatus}</span>
        <p className="detail__description">{description}</p>
        {isBoxIncluded ? (
          <div className="detail__bolean">
            <span>Incluye la caja original</span>
            <img
              src="/images/check.svg"
              alt="icono de check"
              width="28"
              height="28"
            />
          </div>
        ) : null}
        {isChangesAccepted ? (
          <div className="detail__bolean">
            <span>Acepta cambios</span>
            <img
              src="/images/check.svg"
              alt="icono de check"
              width="28"
              height="28"
            />
          </div>
        ) : null}
      </section>
      <section className="detail__section">
        <h2 className="detail__name">{name}</h2>
        <span className="detail__location">{location}</span>
        <span className="detail__phone">{phone}</span>
      </section>
      <div className="detail__butons-container">
        <Button
          type="button"
          className="button__primary-big"
          text="Modificar calzado"
        />
        <Button
          type="button"
          actionOnClick={deleteThisShoe}
          className="button__secondary-big"
          text="Eliminar calzado"
        />
      </div>
    </ShoeDetailStyled>
  );
};

export default ShoeDetail;
