import SideBlock from "../../widgets/SideBlock";
import SignUpForm from "./SignUpForm/SignUpForm";

const SignUp = () => {
  return (
    <div className="w-full flex items-center justify-center h-full">
      <SideBlock isRight={false} imageSrc="/images/signUp/van-darkholm.webp" />
      <div className=" w-[300px] h-[400px] shadow-2xl rounded-xl mt-[50px] flex flex-col gap-4">
        <SignUpForm />
      </div>
      <SideBlock isRight={true} imageSrc="/images/signUp/billy.jpg" />

    </div>
  );
};

export default SignUp;
