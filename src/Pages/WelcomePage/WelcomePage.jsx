import React, { useEffect } from "react";
import styled from "styled-components";
import WelcomeContent from "../../Components/WelcomeContent/WelcomeContent";

const Welcome = ({ setUser, user, setAllPins }) => {
  useEffect(() => {
    let loggedInUser = JSON.parse(window.sessionStorage.getItem("user"));
    setUser(loggedInUser ? loggedInUser : null);
  }, []);

  return (
    <>
      <WelcomeContent />
    </>
  );
};

export default Welcome;
