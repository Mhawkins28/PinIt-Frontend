import React, { useState, Component } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import userService from "../../utils/userService";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  max-width: 50vw;
  align-items: baseline;

  div input {
    margin-right: 25px;
  }
  /* #googleBtn {
    display: flex;
    justify-content: center;
    width: 50%;
    padding: 7px 30px 8px 30px;
    border: none;
    border-radius: 0.25rem;
    box-shadow: 2px 4px 4px rgba(24, 33, 56, 0.969);
    -moz-box-shadow: 2px 4px 4px rgba(24, 33, 56, 0.969);
    -webkit-box-shadow: 2px 4px 4px rgba(24, 33, 56, 0.969);

    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
    background-color: white;
    background-repeat: no-repeat;
    background-position: 12px 11px;
    margin: auto;
  } */
`;
const Login = ({ setUser, setUserLogin, userLogin, handleSignupOrLogin }) => {
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
    console.log(userLogin);
    try {
      await userService.login(userLogin);
      // Successfully signed up - show GamePage
      await handleSignupOrLogin();
      navigate("/");
      // setUserLogin({
      //   username: "",
      //   password: "",
      // });
    } catch (err) {
      // Invalid user data (probably duplicate email)
      // this.props.updateMessage(err.message);
      alert("Invalid Credentials");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>SIGN IN</h2>

      {/* <div>
        <button
          className="active"
          id="googleBtn"
          // onClick={google}
          href="/auth/google"
        >
          LOGIN
        </button> */}
      {/* </div> */}
      <br></br>
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

      <input type="submit" value="Log In" />

      <br></br>
      <div class="register">
        Haven't logged-in before?
        <h4>
          Register
          <a href="/signup">
            {" "}
            <em>Here</em>
          </a>
        </h4>
      </div>

      {/* <Link to="auth/google">SIGN IN WITH GOOGLE</Link> */}
    </StyledForm>
  );
};

export default Login;
