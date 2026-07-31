import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Layout() {
  const location = useLocation();
  const hideFooter =
    location.pathname.startsWith("/docs") ||
    location.pathname.startsWith("/contribution")||
    location.pathname.startsWith("/component-list")||
    location.pathname.startsWith("/components/");

  return (
    <div>
      <Navbar />
      <main>
        <ScrollToTop />
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}
