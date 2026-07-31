import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import Landing from "./pages/LandingPage";
import Docs from "./pages/docs";
import Contribution from "./pages/Contribution";
import ComponentsList from "./pages/ComponentsList";
import { componentDocs } from "./data/components";
import ComponentDocPage from "./components/ComponentDocPage";


function DocRoute() {
  const { slug } = useParams();
  const doc = componentDocs.find((d) => d.slug === slug);
  if(!doc) return <p className="p-10">Component not found.</p>

  return <ComponentDocPage  doc={doc} />
}





function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route element={<Layout />}>
  <Route index element={<Landing />} />
  <Route path="docs" element={<Docs />} />
  <Route path="contribution" element={<Contribution />} />
  <Route path="component-list" element={<ComponentsList />} />
  <Route path="components/:slug" element={<DocRoute/>} />
</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
