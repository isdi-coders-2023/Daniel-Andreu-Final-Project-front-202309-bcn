import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled className="loading">
      <span className="spinner"></span>
      <span className="loading-text">Estamos preparando todo</span>
    </LoadingStyled>
  );
};

export default Loading;
