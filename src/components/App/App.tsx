import { Routes, Route, Navigate } from "react-router-dom";
import BottomNavigation from "../BottomNavigation/BottomNavigation";
import Header from "../Header/Header";
import HomePage from "../../pages/HomePage/HomePage";
import { useAppSelector } from "../../store/hooks";
import Loading from "../Loading/Loading";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewShoePage from "../../pages/NewShoePage/NewShoePage";
import ShoeDetailPage from "../../pages/ShoeDetailPage/ShoeDetailPage";

const App = (): React.ReactElement => {
  const isLoading = useAppSelector((state) => state.uiState.isLoading);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/añadir-calzado" element={<NewShoePage />} />
        <Route path="/detalle/:shoeId" element={<ShoeDetailPage />} />
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
      <BottomNavigation />
      {isLoading && <Loading />}
    </>
  );
};

export default App;
