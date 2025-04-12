import { useSelector } from "react-redux";
import { RootState } from "../../shared/stores/store";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const AuthBlock = () => {
  const isAuth = useSelector((state: RootState) => state.authController.isAuth);

  return (
    <>
      {isAuth ? (
        <div>
          <Link to="/personalAccount">
            <FaRegUserCircle size={40} />{" "}
          </Link>
        </div>
      ) : (
        <div className="flex gap-2">
          <Link to="logIn">
            <button className="bg-white header__button">Log In</button>
          </Link>
          <Link to="signUp">
            <button className="header__button button_gradient">Join</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default AuthBlock;
