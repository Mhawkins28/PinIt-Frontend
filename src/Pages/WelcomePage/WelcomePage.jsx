import React, { useEffect } from "react";
import styled from "styled-components";
import WelcomeContent from "../../Components/WelcomeContent/WelcomeContent";

const Welcome = ({ setUser, user, setAllPins }) => {
  useEffect(() => {
    let loggedInUser = JSON.parse(window.sessionStorage.getItem("user"));
    setUser(loggedInUser ? loggedInUser : null);
  }, []);

  useEffect(() => {
    fetch(`https://jmmz-ga-p3places-backend.herokuapp.com/pins/home`)
      .then((res) => res.json())
      .then((data) => setAllPins(data));
  }, []);

  return (
    <>
      <WelcomeContent />
    </>
  );
};

export default Welcome;
