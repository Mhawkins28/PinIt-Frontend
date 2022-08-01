import React from "react";
import NewPinForm from "../Components/NewPinForm/NewPinForm";
import "./Home/Home";

const NewPin = ({ latLng, user }) => {
  return (
    <div>
      <NewPinForm user={user} latLng={latLng} />
    </div>
  );
};

export default NewPin;
