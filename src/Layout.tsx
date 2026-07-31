import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

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
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}
