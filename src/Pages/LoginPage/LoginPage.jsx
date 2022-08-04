import React, { useState, Component } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import userService from "../../utils/userService";
import  "../../Components/NewPinForm/NewPinForm.css";

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

    // <StyledForm onSubmit={handleSubmit}>
    //   <h2>SIGN IN</h2>

    //   {/* <div>
    //     <button
    //       className="active"
    //       id="googleBtn"
    //       // onClick={google}
    //       href="/auth/google"
    //     >
    //       LOGIN
    //     </button> */}
    //   {/* </div> */}
    //   <br></br>
    //   <div>
    //     <label htmlFor="username">Username</label>
    //     <input
    //       type="text"
    //       name="username"
    //       id="username"
    //       onChange={handleChange}
    //     />
    //   </div>

    //   <div>
    //     <label htmlFor="password">Password</label>
    //     <input
    //       type="password"
    //       name="password"
    //       id="password"
    //       onChange={handleChange}
    //     />
    //   </div>

    //   <input type="submit" value="Log In" />

    //   <br></br>
    //   <div class="register">
    //     Haven't logged-in before?
    //     <h4>
    //       Register
    //       <a href="/signup">
    //         {" "}
    //         <em>Here</em>
    //       </a>
    //     </h4>
    //   </div>

    //   {/* <Link to="auth/google">SIGN IN WITH GOOGLE</Link> */}
    // </StyledForm>

    // <form onSubmit={handleSubmit} className="lform">
    //      <h2>SIGN IN</h2>

    //      <br></br>
    //   <div >
    <StyledForm onSubmit={handleSubmit}>
      <h2>SIGN IN</h2>
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

      <input type="submit"
      className="button" 
      value="Log In"  />

      <br></br>
      <div className="register">
        Haven't logged-in before?
        <h4>
          Register
          <a href="/signup">
            {" "}
            <em>Here</em>
          </a>
        </h4>
      </div>
    </StyledForm>
  );
};

export default Login;
