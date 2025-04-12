import SideBlock from "../../widgets/SideBlock";
import LogInForm from "./LogInForm/LogInForm";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="w-full flex items-center justify-center h-full">
      <SideBlock isRight={false} imageSrc="/images/logIn/igor1.webp" />
      <div className=" w-[300px] h-[400px] shadow-2xl rounded-xl mt-[50px] flex flex-col gap-4">
        <LogInForm />
        <div className="flex flex-grow items-start text-sm">
          <p className="px-4 ">
            Forgot password?{" "}
            <Link className=" underline text-blue-900" to="/recoverPassword">
              Recover password
            </Link>
          </p>
        </div>
      </div>
      <SideBlock isRight={true} imageSrc="/images/logIn/vizivalovo.jpg" />
    </div>
  );
};

export default LogIn;
