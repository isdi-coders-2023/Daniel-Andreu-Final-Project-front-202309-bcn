import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled className="not-found">
      <h1 className="not-found__text">
        Vaya, parece que no hemos encontrado lo que buscas...
      </h1>
      <span className="not-found__404">Error 404</span>
      <img
        className="not-found__image"
        src="/images/sadBox.svg"
        alt="página no encontrada"
        width="250"
        height="210"
      />
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
