import { Outlet } from "react-router-dom";
import Header from "../widgets/Header/Header";
import Footer from "../widgets/Footer/Footer";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../shared/stores/store";
import { checkAuth } from "../shared/auth/AuthController";

const Root = () => {
  const dispatch:AppDispatch = useDispatch();
  dispatch(checkAuth());

  return (
    <div className="page-desktop-wrapper">
      <Header />
      <main className="flex-grow relative">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Root;
