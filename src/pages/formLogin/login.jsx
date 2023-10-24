import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import "./login.css";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });
  const [showPssword, setShowPssword] = useState(false);

  const handleChange = (evt) => {
    var regex = /^[a-zA-Z]{2,5}(@)(gmail|yahoo)(.com)$/;
    if (evt.target.name == "email") {
      setUser({ ...user, email: evt.target.value });
      setErrors({
        ...errors,
        emailError:
          evt.target.value == 0
            ? "Email is Required"
            : regex.test(evt.target.value)
            ? ""
            : "Invalid Email",
      });
    } else if (evt.target.name == "password") {
      setUser({ ...user, password: evt.target.value });
      setErrors({
        ...errors,
        passwordError:
          evt.target.value == 0
            ? "password is required"
            : evt.target.value.length < 8
            ? "password must be at least 8 characters"
            : "",
      });
    }
  };
  const togglePassword = () => {
    setShowPssword(!showPssword);
  };
  const handelSubmite = (evt)=>{
    evt.preventDefault();
  };
  // setUser({...user,[evt.target.name]:evt.target.value});
  return (
    <div className="d-flex justify-content-center mt-5">
      <form className="w-50 mt-5" onSubmit={(e)=>handelSubmite(e)}>
        <div className="mb-3 mt-5">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={user.email}
            className="form-control "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <span className="text-danger">{errors.emailError}</span>
        </div>
        <div className="mb-3 input">
          <label htmlFor="InputPassword1" className="form-label">
            Password
          </label>
          <input
            type={showPssword ? "text" : "password"}
            name="password"
            value={user.password}
            className="form-control  "
            id="InputPassword1"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <span onClick={togglePassword} className="icon border-none">
            {showPssword ? (
              <FaEye className="position-absolute" />
            ) : (
              <FaEyeSlash className="position-absolute" />
            )}
          </span>
          <span className="text-danger">{errors.passwordError}</span>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
