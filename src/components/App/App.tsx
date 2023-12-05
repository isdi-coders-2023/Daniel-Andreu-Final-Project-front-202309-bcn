import { Routes, Route, Navigate } from "react-router-dom";
import BottomNavigation from "../BottomNavigation/BottomNavigation";
import Header from "../Header/Header";
import HomePage from "../../pages/HomePage/HomePage";
import { useAppSelector } from "../../store/hooks";
import Loading from "../Loading/Loading";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const App = (): React.ReactElement => {
  const isLoading = useAppSelector((state) => state.uiState.isLoading);

  return (
    <>
      {isLoading && <Loading />}
      <Header />
      <Routes>
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <BottomNavigation />
    </>
  );
};

export default App;
