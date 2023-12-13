import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled className="header">
      <img
        className="header__logo"
        src="/images/ReStepsLogo.svg"
        alt="ReSteps logo"
        width="88"
        height="40"
      />
    </HeaderStyled>
  );
};
export default Header;
