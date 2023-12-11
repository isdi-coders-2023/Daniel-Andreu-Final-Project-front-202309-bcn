import { useState } from "react";
import { ShoeDataStructure } from "../../store/features/shoes/types";
import {
  BigInputContainerStyled,
  BigInputInputStyled,
  BigInputLabelStyled,
  ShoeFormStyled,
  SmallInputContainerStyled,
  SmallInputInputStyled,
  SmallInputLabelStyled,
  SwitchInputStyled,
  SwitchLabelStyled,
  SwitchStyled,
} from "./ShoeFormStyled";
import { brands, possibleStatus, sizes } from "../../data/list";
import Button from "../Button/Button";

interface ShoeFormProps {
  actionOnSubmit: (shoe: ShoeDataStructure) => void;
}

const ShoeForm = ({ actionOnSubmit }: ShoeFormProps): React.ReactElement => {
  const initialNewShoe: ShoeDataStructure = {
    title: "",
    brand: "",
    image: "",
    price: "" as unknown,
    description: "",
    size: 0,
    shoeStatus: "Aceptable",
    isBoxIncluded: false,
    isChangesAccepted: false,
    name: "",
    location: "",
    phone: "",
    isFavourite: false,
  } as ShoeDataStructure;

  const [newShoe, setNewShoe] = useState(initialNewShoe);
  const [status, setStatus] = useState("Aceptable");

  const updateStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
    newShoe.shoeStatus = event.target.value;
  };

  const onChangeData = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setNewShoe((newShoe: ShoeDataStructure) => ({
      ...newShoe,
      [event.target.id]:
        event.target.type !== "checkbox"
          ? (event.target as HTMLInputElement).value
          : (event.target as HTMLInputElement).checked,
    }));
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    actionOnSubmit(newShoe);
  };

  const { image, title, price, description, name, phone, location } = newShoe;

  return (
    <ShoeFormStyled autoComplete="off" onSubmit={onFormSubmit}>
      <img
        className="image"
        src={image}
        alt="calzado subido"
        width="420"
        height="420"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = "images/imageNotFound.svg";
        }}
      />
      <SmallInputContainerStyled>
        <SmallInputInputStyled
          tabIndex={0}
          type="text"
          id="image"
          placeholder=""
          value={image}
          required
          onChange={onChangeData}
        />
        <SmallInputLabelStyled className="input-label" htmlFor="image">
          URL de la imagen
        </SmallInputLabelStyled>
      </SmallInputContainerStyled>
      <SmallInputContainerStyled>
        <SmallInputInputStyled
          tabIndex={0}
          type="text"
          id="title"
          placeholder=""
          value={title}
          required
          onChange={onChangeData}
        />
        <SmallInputLabelStyled htmlFor="title">Título</SmallInputLabelStyled>
      </SmallInputContainerStyled>
      <SmallInputContainerStyled>
        <SmallInputInputStyled
          tabIndex={0}
          type="text"
          id="price"
          placeholder=""
          value={price}
          required
          onChange={onChangeData}
        />
        <SmallInputLabelStyled htmlFor="price">Precio €</SmallInputLabelStyled>
      </SmallInputContainerStyled>
      <div className="size-brand-container">
        <select
          id="size"
          className="select"
          onChange={onChangeData}
          defaultValue="Talla"
          required
        >
          <option value="Talla" disabled>
            Talla
          </option>
          {sizes.map((size, position) => (
            <option key={position} value={size}>
              {size} EU
            </option>
          ))}
        </select>
        <select
          id="brand"
          className="select"
          onChange={onChangeData}
          defaultValue="Marca"
          required
        >
          <option value="Marca" disabled>
            Marca
          </option>
          {brands.map((brand, position) => (
            <option key={position} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <span className="form-text">¿En qué estado se encuentra el calzado?</span>
      <div className="status-container">
        {possibleStatus.map((actualStatus, position) => (
          <div
            key={position}
            className={status === actualStatus ? "toogled" : "not-toggled"}
          >
            <input
              type="radio"
              name="status"
              value={actualStatus}
              id={actualStatus}
              checked={status === actualStatus}
              onChange={updateStatus}
            />
            <label htmlFor={actualStatus}>{actualStatus}</label>
          </div>
        ))}
      </div>
      <BigInputContainerStyled>
        <BigInputInputStyled
          tabIndex={0}
          id="description"
          placeholder=""
          value={description}
          required
          onChange={onChangeData}
        />
        <BigInputLabelStyled htmlFor="description">
          Descripción
        </BigInputLabelStyled>
      </BigInputContainerStyled>
      <SwitchLabelStyled htmlFor="isBoxIncluded">
        ¿Incluye la caja original?
        <SwitchInputStyled
          type="checkbox"
          id="isBoxIncluded"
          onChange={onChangeData}
        />
        <SwitchStyled />
      </SwitchLabelStyled>
      <SwitchLabelStyled htmlFor="isChangesAccepted">
        ¿Aceptas cambios por otros calzados?
        <SwitchInputStyled
          type="checkbox"
          id="isChangesAccepted"
          onChange={onChangeData}
        />
        <SwitchStyled />
      </SwitchLabelStyled>
      <SmallInputContainerStyled>
        <SmallInputInputStyled
          tabIndex={0}
          type="text"
          id="name"
          placeholder=""
          value={name}
          required
          onChange={onChangeData}
        />
        <SmallInputLabelStyled htmlFor="name">
          Nombre completo
        </SmallInputLabelStyled>
      </SmallInputContainerStyled>
      <SmallInputContainerStyled>
        <SmallInputInputStyled
          tabIndex={0}
          type="text"
          id="phone"
          placeholder=""
          value={phone}
          required
          onChange={onChangeData}
        />
        <SmallInputLabelStyled htmlFor="phone">
          Número de teléfono
        </SmallInputLabelStyled>
      </SmallInputContainerStyled>
      <SmallInputContainerStyled>
        <SmallInputInputStyled
          tabIndex={0}
          type="text"
          id="location"
          placeholder=""
          value={location}
          required
          onChange={onChangeData}
        />
        <SmallInputLabelStyled htmlFor="location">
          Localidad
        </SmallInputLabelStyled>
      </SmallInputContainerStyled>
      <Button
        className="button__primary-big"
        type="submit"
        text="Añadir Calzado"
      />
    </ShoeFormStyled>
  );
};

export default ShoeForm;
