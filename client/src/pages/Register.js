import React, { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const toggleMember = () => {
    setValues({ ...values, isMember: !values?.isMember });
  };
  const {
    user,
    isLoading,
    showAlert,
    displayAlert,
    registerUser,
    loginUser,
    setupUser,
  } = useAppContext();

  const handleChange = (e) => {
    // console.log(e.target);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      // console.log("Already a Member");
      //loginUser(currentUser)
      setupUser({currentUser, endPoint: 'login', alertText: 'Login Successful! Redirecting...'})
    } else {
   //   registerUser(currentUser);
      setupUser({currentUser, endPoint: 'register', alertText: 'User Created! Redirecting...'})
   
    }
    // console.log(values)
  };
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user, navigate]);
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3 style={{ textAlign: "center" }}>
          {values?.isMember ? "Login" : "Register"}
        </h3>
        <br />
        {showAlert && <Alert />}
        {/* name input */}
        {!values?.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values?.name}
            handleChange={handleChange}
          />
        )}
        {/* email input */}
        <FormRow
          type="email"
          name="email"
          value={values?.email}
          handleChange={handleChange}
        />
        {/* password input */}
        <FormRow
          type="password"
          name="password"
          value={values?.password}
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          Submit
        </button>
        <p>
          <p>
            {values.isMember ? "Not a member yet?" : "Already a member?"}

            <button type="button" onClick={toggleMember} className="member-btn">
              {values.isMember ? "Register" : "Login"}
            </button>
          </p>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
