import { useSelector } from "react-redux";
import { RootState } from "../../shared/stores/store";
import UploadVideo from "./UploadVideo/UploadVideo";

const UserPage = () => {
  const { user } = useSelector((state: RootState) => state.authController);

  return (
    <div className="flex-col pl-3 pt-3 gap-3 flex">
      <p>{user?.email}</p>
      <p>{user?.role}</p>
      <UploadVideo/>
    </div>
  );
};

export default UserPage;
