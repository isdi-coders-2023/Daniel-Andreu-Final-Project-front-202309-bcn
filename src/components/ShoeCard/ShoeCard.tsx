import { ShoeStructure } from "../../store/features/shoes/types";

interface ShoeCardProps {
  shoe: ShoeStructure;
}

const ShoeCard = ({
  shoe: { image, title, size, shoeStatus, price, isChangesAccepted, location },
}: ShoeCardProps): React.ReactElement => {
  return (
    <article className="shoe">
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
            height="auto"
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
    </article>
  );
};

export default ShoeCard;
