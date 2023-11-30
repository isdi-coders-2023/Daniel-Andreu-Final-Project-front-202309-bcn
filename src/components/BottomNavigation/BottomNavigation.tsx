import { NavLink } from "react-router-dom";
import BottomNavigationStyled from "./BottomNavigationStyled";

const BottomNavigation = (): React.ReactElement => {
  return (
    <BottomNavigationStyled className="navigation">
      <li>
        <NavLink className="navigation__content" to="/inicio">
          {({ isActive }) => (
            <>
              <img
                className="navigation__icon"
                src={
                  isActive ? "images/exploreActive.svg" : "images/explore.svg"
                }
                alt="icono de explorar"
                width="36"
                height="36"
              />
              <span
                className={
                  isActive ? "navigation__text-active" : "navigation__text"
                }
              >
                Explorar
              </span>
            </>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink className="navigation__content" to="/favoritos">
          {({ isActive }) => (
            <>
              <img
                className="navigation__icon"
                src={
                  isActive
                    ? "images/favoritesActive.svg"
                    : "images/favorites.svg"
                }
                alt="icono de favoritos"
                width="36"
                height="36"
              />
              <span
                className={
                  isActive ? "navigation__text-active" : "navigation__text"
                }
              >
                Favoritos
              </span>
            </>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink className="navigation__content" to="/añadir-calzado">
          {({ isActive }) => (
            <>
              <img
                className="navigation__icon"
                src={isActive ? "images/addActive.svg" : "images/add.svg"}
                alt="icono de añadir"
                width="36"
                height="36"
              />
              <span
                className={
                  isActive ? "navigation__text-active" : "navigation__text"
                }
              >
                Añadir
              </span>
            </>
          )}
        </NavLink>
      </li>
    </BottomNavigationStyled>
  );
};
export default BottomNavigation;
