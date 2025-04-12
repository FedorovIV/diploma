import { Link } from "react-router-dom";
import { SlBasket } from "react-icons/sl";

import Search from "./Search";
import { useMediaQuery } from "react-responsive";
import AuthBlock from "./AuthBlock";
import { RootState } from "../../shared/stores/store";
import { useSelector } from "react-redux";
import AfterAuthBlock from "./AfterAuthBlock";

const Header = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 764px)",
  });

  const isAuth = useSelector((state: RootState) => state.authController.isAuth);

  return (
    <header className=" bg-gradient-to-t from-gray-300 to-gray-500 flex flex-col pb-2 md:pb-0 ">
      <div className="flex justify-between pr-2 items-center gap-1 ">
        <h1>
          <Link to="/">
            <img
              src="/images/header/siteName.svg"
              className="h-[80px] pb-[10px]"
              alt="site name"
            />
          </Link>
        </h1>
        {!isMobile && (
          <div className="grow mr-4 z-50">
            <Search />
          </div>
        )}
        <div className="flex gap-3 items-center ">
          <Link to="/personalAccount">
            <SlBasket size={40} />{" "}
          </Link>
          {isAuth ? <AfterAuthBlock /> : <AuthBlock />}
        </div>
      </div>
      {isMobile && (
        <div className="w-full px-2 mt-[-10px] z-50">
          <Search />
        </div>
      )}
      <nav className=" mb-2 mt-2 md:mt-0 flex gap-3">
        <div className="flex gap-3 px-2 py-1 ml-2 rounded-md bg-gray-800 text-white w-fit font-bold">
          <Link to="/categories">
            <h2>Categories</h2>
          </Link>
          <div className="w-[2px] bg-white"></div>
          <Link to="/videoBloggers">
            <h2>Video bloggers</h2>
          </Link>
          <div className="w-[2px] bg-white"></div>
          <Link to="/best">
            <h2>The best</h2>
          </Link>
        </div>
        <button className=" button_gradient rounded-md font-bold px-2">
          Subscribe
        </button>
      </nav>
    </header>
  );
};

export default Header;
