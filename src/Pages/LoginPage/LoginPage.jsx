import React, { useState, Component } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import userService from "../../utils/userService";
import "../../Components/NewPinForm/NewPinForm.css";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  max-width: 50vw;
  align-items: baseline;

  div input {
    margin-right: 25px;
  }
`;
const Login = ({
  setUser,
  setUserLogin,
  userLogin,
  handleSignupOrLogin,
  setIsLoggedIn,
}) => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserLogin((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    try {
      await userService.login(userLogin);
      await handleSignupOrLogin();
      navigate("/home");
      setUserLogin({
        username: "",
        password: "",
      });
    } catch (err) {
      alert("Something went wrong. Refresh the page and try again!");
    }
  };

  return (
    <form className="lform" onSubmit={handleSubmit}>
      <h2>SIGN IN</h2>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />
      </div>

      <input type="submit"
      className="button lbutton" 
      value="Log In"  />

      <br></br>
      <div className="register">
        Haven't logged-in before?
        <h4 className="here">
          Register
          <a href="/signup">
            {" "}
            <em>here</em>
          </a>
        </h4>
      </div>
    </form>
  );
};

export default Login;
