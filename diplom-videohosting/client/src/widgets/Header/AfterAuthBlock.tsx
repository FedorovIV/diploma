import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../shared/stores/store";
import { logoutUser } from "../../shared/auth/AuthController";
import { Link } from "react-router-dom";

const AfterAuthBlock = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutUser());
  };
  return (
    <div className="flex gap-3 items-center">
      <Link to="/personalAccount">
        <FaRegUserCircle size={40} />
      </Link>
      <button className="header__button bg-white" onClick={handleLogOut}>
        Log out
      </button>
    </div>
  );
};

export default AfterAuthBlock;
