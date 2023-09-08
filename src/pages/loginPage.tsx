/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useState } from "react";
import useLogin from "../hooks/useLogin";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import RenderIf from "../components/RenderIf";
import { AlertError } from "../components/AlertError";
import LoadingButton from "@mui/lab/LoadingButton";

const LoginPage = (): JSX.Element => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  const handleChange = (value: string, inputName: "email" | "password") => {
    setInputs({
      ...inputs,
      [inputName]: value,
    });
  };

  const [handleLogin, loading, error, formError] = useLogin(inputs);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    void handleLogin();
  };
  return (
    <section className="min-h-screen items-center justify-center flex ">
      <div className="bg-gray-700 rounded-md w-96 h-96">
        <div className="text-center text-xl font-bold leading-tight tracking-tight text-white md:text-2xl my-2">
          <h1>Sign in</h1>
        </div>
        <form
          className="flex flex-col items-center justify-center content-center my-10"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col mb-4 w-80">
            <label className="mb-2 text-white">Email</label>
            <input
              type="text"
              placeholder="example@example.com"
              className="rounded-md pl-2"
              onChange={({ target }) => handleChange(target.value, "email")}
            />
            {formError?.email && (
              <span className="text-red-700">{formError.email}</span>
            )}
          </div>
          <div className="flex flex-col mb-4 w-80">
            <label className="mb-2 text-white">Password</label>
            <input
              type={!open ? "password" : "text"}
              placeholder="••••••••"
              className="rounded-md pl-2"
              onChange={({ target }) => handleChange(target.value, "password")}
            />
            <div className="text-2xl absolute my-8 ml-72 ">
              {!open ? (
                <AiFillEye onClick={handleToggle} />
              ) : (
                <AiFillEyeInvisible onClick={handleToggle} />
              )}
            </div>
            {formError?.password && (
              <span className="text-red-700">{formError.password}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="text-blue-600 text-sm">
              Don't have an account?{" "}
              <a href="/Signup" className="text-white underline ">
                Register
              </a>
            </label>
          </div>
          <div className="pt-4">
            <LoadingButton
              loading={loading}
              variant="contained"
              sx={{ minWidth: 200 }}
              type="submit"
            >
              Login
            </LoadingButton>
          </div>
        </form>
        <RenderIf condition={!(error == null)}>
          <AlertError>{error}</AlertError>
        </RenderIf>
      </div>
    </section>
  );
};

export default LoginPage;
