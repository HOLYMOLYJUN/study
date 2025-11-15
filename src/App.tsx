import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import UIPage from "./pages/ui-page";
import Header from "./components/header";
import CustomScrollArea from "./components/ui/scroll-area";

function App() {
  return (
    <BrowserRouter>
      <CustomScrollArea className="h-screen w-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ui" element={<UIPage />} />
        </Routes>
      </CustomScrollArea>
    </BrowserRouter>
  );
}

export default App;

