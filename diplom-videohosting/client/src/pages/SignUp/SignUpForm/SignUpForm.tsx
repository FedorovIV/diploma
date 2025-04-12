import { FormEvent, useState } from "react";
import { signUpUser } from "../../../shared/auth/AuthController";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../shared/stores/store";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";

type AppDispatch = ThunkDispatch<RootState, void, UnknownAction>;

const SignUpForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const { loading, error, user } = useSelector(
    (state: RootState) => state.authController
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await dispatch(signUpUser({ email, password }));
  };

  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
        <h2 className="font-bold text-3xl w-full flex justify-center">
          Sign Up
        </h2>
        <div className="flex flex-col gap-2">
          <label className="">Email</label>
          <input
            className=" rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Password</label>
          <input
            type="password"
            className=" rounded-md"
            placeholder="Minimum of 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Confirm password</label>
          <input
            type="password"
            className=" rounded-md"
            placeholder="Passwords must match"
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-black rounded-md font-bold text-white py-2 text-2xl"
          disabled={loading}
        >
          Sign Up
        </button>
      </form>
      {error && <div>{error}</div>}
      {user && <div>Welcome, {user.email}</div>}
    </div>
  );
};

export default SignUpForm;
