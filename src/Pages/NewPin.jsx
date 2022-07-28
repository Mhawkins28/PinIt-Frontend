import React from "react";
import NewPinForm from "../Components/NewPinForm";

const NewPin = ({latLng}) => {
  return (
    <div>
      <NewPinForm 
            latLng={latLng}
      />
    </div>
  );
};

export default NewPin;
