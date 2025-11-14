import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import UIPage from "./pages/ui-page";
import Header from "./components/header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ui" element={<UIPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

