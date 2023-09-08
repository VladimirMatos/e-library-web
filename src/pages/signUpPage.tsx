/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useState } from "react";
import useSignUp from "../hooks/useSignUp";
import RenderIf from "../components/RenderIf";
import { AlertError } from "../components/AlertError";
import { LoadingButton } from "@mui/lab";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useGetAllRoles } from "../hooks/useRoles";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignUp = (): JSX.Element => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    roleId: "",
  });

  const [open, setOpen] = useState(false);
  const [confirOpen, setConfirOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleConfirOpen = () => {
    setConfirOpen(!confirOpen);
  };

  const handleChange = (
    value: string | number,
    inputName:
      | "email"
      | "password"
      | "confirmPassword"
      | "firstName"
      | "lastName"
      | "roleId"
  ) => {
    setInputs({ ...inputs, [inputName]: value });
  };

  const [handleSignUp, loading, error, formError] = useSignUp(inputs);

  const [roles] = useGetAllRoles();

  console.log(inputs.roleId);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    void handleSignUp();
  };
  return (
    <section className=" min-h-screen items-center justify-center flex ">
      <div className="bg-gray-700 rounded-md w-96 h-auto">
        <div className="text-center text-xl font-bold leading-tight tracking-tight text-white md:text-2xl my-2">
          <h1>Sign Up</h1>
        </div>
        <form
          className="flex flex-col items-center justify-center content-center my-10"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col mb-4 w-80">
            <label className="mb-2 text-white">FirstName</label>
            <input
              type="text"
              placeholder="emil"
              className="rounded-md pl-2"
              onChange={({ target }) => handleChange(target.value, "firstName")}
            />
            {formError?.firstName && (
              <span className="text-red-700">{formError.firstName}</span>
            )}
          </div>
          <div className="flex flex-col mb-4 w-80">
            <label className="mb-2 text-white">LastName</label>
            <input
              type="text"
              placeholder="maiz"
              className="rounded-md pl-2"
              onChange={({ target }) => handleChange(target.value, "lastName")}
            />
            {formError?.lastName && (
              <span className="text-red-700">{formError.lastName}</span>
            )}
          </div>
          <div className="flex flex-col mb-4 w-80">
            <label className="mb-2 text-white">Email</label>
            <input
              type="email"
              placeholder="email@email.com"
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
                <AiFillEye onClick={handleOpen} />
              ) : (
                <AiFillEyeInvisible onClick={handleOpen} />
              )}
            </div>
            {formError?.password && (
              <span className="text-red-700">{formError.password}</span>
            )}
          </div>
          <div className="flex flex-col mb-4 w-80">
            <label className="mb-2 text-white">Confirm Password </label>
            <input
              type={!confirOpen ? "password" : "text"}
              placeholder="••••••••"
              className="rounded-md pl-2"
              onChange={({ target }) =>
                handleChange(target.value, "confirmPassword")
              }
            />
            <div className="text-2xl absolute my-8 ml-72 ">
              {!confirOpen ? (
                <AiFillEye onClick={handleConfirOpen} />
              ) : (
                <AiFillEyeInvisible onClick={handleConfirOpen} />
              )}
            </div>
            {formError?.confirmPassword && (
              <span className="text-red-700">{formError.confirmPassword}</span>
            )}
          </div>
          <div className="flex flex-col mb-4 w-80">
            <label className="mb-2 text-white">Roles</label>
            <FormControl fullWidth>
              <InputLabel sx={{ color: "black" }} id="Roles-Select">
                Roles
              </InputLabel>
              <Select
                labelId="Roles-Select"
                id="role-select"
                value={inputs.roleId}
                label="Roles"
                sx={{ backgroundColor: "white" }}
                onChange={(SelectChangeEvent) =>
                  handleChange(SelectChangeEvent.target.value, "roleId")
                }
              >
                {roles.map((items) => (
                  <MenuItem
                    key={items.id}
                    sx={{ color: "black" }}
                    value={items.id}
                  >
                    {items.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <label className="text-blue-600 text-sm">
            You already have a account?{" "}
            <a href="/" className="text-white underline">
              Login
            </a>
          </label>
          <div className="pt-4">
            <LoadingButton
              loading={loading}
              variant="contained"
              sx={{ minWidth: 200 }}
              type="submit"
            >
              Create
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

export default SignUp;
