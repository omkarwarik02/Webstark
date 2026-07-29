import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import Landing from "./pages/LandingPage";
import Docs from "./pages/docs";
import Contribution from "./pages/Contribution";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route element={<Layout />}>
  <Route index element={<Landing />} />
  <Route path="docs" element={<Docs />} />
  <Route path="contribution" element={<Contribution />} />
</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
