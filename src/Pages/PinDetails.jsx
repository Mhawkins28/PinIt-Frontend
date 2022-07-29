import React from "react";

const PinDetails = ({ pinInfo }) => {
  return (
    <div>
      <div>{pinInfo.name}</div>
      <div>{pinInfo.address}</div>
      <div>{pinInfo.city}</div>
      <div>{pinInfo.lng}</div>
      <div>{pinInfo.lat}</div>
      <div>{pinInfo.description}</div>
    </div>
  );
};

export default PinDetails;
