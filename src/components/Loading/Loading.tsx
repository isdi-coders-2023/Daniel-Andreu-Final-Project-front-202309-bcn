import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled className="loading">
      <span className="spinner"></span>
      <span className="loading-text">Loading</span>
    </LoadingStyled>
  );
};

export default Loading;
