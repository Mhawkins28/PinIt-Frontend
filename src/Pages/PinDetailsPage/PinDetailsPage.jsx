import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const PinDetails = ({
  pinInfo,
  updatePinState,
  setAllPins,
  setPinInfo,
  user,
}) => {
  const navigate = useNavigate();

  const deletePin = (id) => {
    axios.delete(`http://localhost:3001/pins/${id}`).then((res) => {
      // updatePinState(id)
      // ^ From Coffee app

      navigate("/", { replace: true });
    });
  };

  return (
    <div>
      <div>{pinInfo.name}</div>
      <div>{pinInfo.address}</div>
      <div>{pinInfo.city}</div>
      <div>{pinInfo.lng}</div>
      <div>{pinInfo.lat}</div>
      {pinInfo.description ? <div>{pinInfo.description}</div> : null}

      {user && pinInfo.Owner._id === user._id ? (
        <div>
          <Link to={`/pins/edit/${pinInfo._id}`}>Edit Pin</Link>
          <button onClick={() => deletePin(pinInfo._id)}>DELETE</button>
        </div>
      ) : null}
    </div>
  );
};

export default PinDetails;
