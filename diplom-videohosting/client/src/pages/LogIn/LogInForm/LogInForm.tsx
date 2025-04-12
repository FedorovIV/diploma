import React, { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../shared/stores/store";
import { loginUser } from "../../../shared/auth/AuthController";


const LoginForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, user } = useSelector(
    (state: RootState) => state.authController
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await dispatch(loginUser({ email, password }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
        <h2 className="font-bold text-3xl w-full flex justify-center">
          Log In
        </h2>
        <div className="flex flex-col gap-2">
          <label className="">Email</label>
          <input
            className=" rounded-md"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Password</label>
          <input
            type="password"
            className=" rounded-md"
            placeholder="Minimum of 6 characters"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="bg-black rounded-md font-bold text-white py-2 text-2xl"
          disabled={loading}
        >
          Log In
        </button>
      </form>
      {error && <div>{error}</div>}
      {user && <div>Welcome, {user.email}</div>}
    </div>
  );
};

export default LoginForm;
