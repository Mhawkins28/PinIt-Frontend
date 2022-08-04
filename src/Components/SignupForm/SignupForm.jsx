import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";
import "../NewPinForm/NewPinForm.css";

const SignupForm = ({
  userSignup,
  setUserSignup,
  setUser,
  handleSignupOrLogin,
}) => {
  const navigate = useNavigate();
  // const updateMessage = (msg) => {
  //   this.setState({ message: msg });
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserSignup((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(userSignup);
      // Successfully signed up - show GamePage
      handleSignupOrLogin();
      navigate("/login");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      // updateMessage(err.message);
    }
  };

  const isFormInvalid = () => {
    return !(
      userSignup.username && userSignup.password === userSignup.passwordConf
    );
  };

  return (
    // <div>
      <form onSubmit={handleSubmit} className="sform">
      <header>Sign Up</header>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={userSignup.username}
              name="username"
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={userSignup.password}
              name="password"
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              value={userSignup.passwordConf}
              name="passwordConf"
              onChange={handleChange}
            />
          </div>

          <div id="sbuttons">
            <button className="button sbutton" disabled={isFormInvalid()}>Sign Up</button>
            &nbsp;&nbsp;
            <Link to="/" id="cancel"><button className="button" >Cancel</button></Link>
          </div>
      </form>
    // </div>
  );
};

export default SignupForm;
