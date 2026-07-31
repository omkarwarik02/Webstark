import { BrowserRouter, Routes, Route, useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}





function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
