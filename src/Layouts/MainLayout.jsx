import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
