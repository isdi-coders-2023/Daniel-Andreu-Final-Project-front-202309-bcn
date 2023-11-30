import { NavLink } from "react-router-dom";

const BottomNavigation = (): React.ReactElement => {
  return (
    <ul className="navigation">
      <li>
        <NavLink className="navigation__content" to="/inicio">
          <img
            className="navigation__icon"
            src="images/explore.svg"
            alt="icono de explorar"
            width="45"
            height="auto"
          />
          <span className="navigation__text">Explorar</span>
        </NavLink>
      </li>
      <li>
        <NavLink className="navigation__content" to="/inicio">
          <img
            className="navigation__icon"
            src="images/favorites.svg"
            alt="icono de favoritos"
            width="45"
            height="auto"
          />
          <span className="navigation__text">Favoritos</span>
        </NavLink>
      </li>
      <li>
        <NavLink className="navigation__content" to="/inicio">
          <img
            className="navigation__icon"
            src="images/add.svg"
            alt="icono de añadir"
            width="45"
            height="auto"
          />
          <span className="navigation__text">Añadir</span>
        </NavLink>
      </li>
    </ul>
  );
};
export default BottomNavigation;
