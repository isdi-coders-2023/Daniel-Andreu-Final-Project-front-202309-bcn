import { Routes, Route, Navigate } from "react-router-dom";
import BottomNavigation from "../BottomNavigation/BottomNavigation";
import Header from "../Header/Header";
import HomePage from "../../pages/HomePage/HomePage";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="*" element={<Navigate to="/inicio" />} />
      </Routes>
      <BottomNavigation />
    </>
  );
};

export default App;
