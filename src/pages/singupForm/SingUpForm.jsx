import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";
const SingUpForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
    nameError: "",
    userNameError: "",
    confirmPasswordError: "",
  });
  const [showPssword, setShowPssword] = useState(false);

  const handleChange = (evt) => {
    var passwordValue;
    var regexemail = /^[a-zA-Z]{2,5}(@)(gmail|yahoo)(.com)$/;
    var regexuserName = /^[A-Za-z0-9]*$/;

    var regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[@#$%^&*]{8,20}$/;

    if (evt.target.name == "name") {
      setUser({ ...user, name: evt.target.value });
      setErrors({
        ...errors,
        nameError: evt.target.value == 0 ? "name is required" : "",
      });
    } else if (evt.target.name == "email") {
      setUser({ ...user, email: evt.target.value });
      setErrors({
        ...errors,
        emailError:
          evt.target.value == 0
            ? "Email is Required"
            : regexemail.test(evt.target.value)
            ? ""
            : "Invalid Email",
      });
    } else if (evt.target.name == "userName") {
      setUser({ ...user, username: evt.target.value });
      setErrors({
        ...errors,
        userNameError: regexuserName.test(evt.target.value)
          ? ""
          : "user name must be not contain spaces",
      });
    } else if (evt.target.name == "password") {
      setUser({ ...user, password: evt.target.value });
      passwordValue = evt.target.value;
      setErrors({
        ...errors,
        passwordError:
          evt.target.value == 0
            ? "password is required"
            : evt.target.value.length < 8
            ? "password must be at least 8 characters"
            : regexPassword.test(evt.target.value)
            ? ""
            : "invalid password",
      });
    } else if (evt.target.name === "confirm") {
      setUser({ ...user, confirmPassword: evt.target.value });
      console.log(evt.target.value);
      setErrors({
        ...errors,
        confirmPasswordError:
          evt.target.value == 0
            ? "confirm password is requiered"
            : evt.target.value !== user.password
            ? "password not match "
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
      <form className="w-50" autoComplete="off" onSubmit={(e)=>handelSubmite(e)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={user.name}
            className="form-control "
            id="inputName"
            aria-describedby="nameHelp"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <span className="text-danger">{errors.nameError}</span>
        </div>
        <div className="mb-3">
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
        <div className="mb-3">
          <label htmlFor="exampleInputuserName" className="form-label">
            User Name
          </label>
          <input
            type="text"
            name="userName"
            value={user.username}
            className="form-control "
            id="exampleInputuserName"
            aria-describedby="emailHelp"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <span className="text-danger">{errors.userNameError}</span>
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
        <div className="mb-3 input">
          <label htmlFor="InputPassword1Confirm" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm"
            value={user.confirmPassword}
            className="form-control"
            id="InputPassword1Confirm"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <span className="text-danger">{errors.confirmPasswordError}</span>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SingUpForm;
