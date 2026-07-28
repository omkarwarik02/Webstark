import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Navbar from "./components/navbar";
import "./App.css";
import Landing from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
