import React from "react";
import SignupForm from "../Components/SignupForm";

const Signup = ({
  setUserSignup,
  userSignup,
  setUser,
  handleSignupOrLogin,
}) => {
  return (
    <div>
      <SignupForm
        setUser={setUser}
        setUserSignup={setUserSignup}
        userSignup={userSignup}
        handleSignupOrLogin={handleSignupOrLogin}
      />
    </div>
  );
};

export default Signup;
