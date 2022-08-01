import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const PinDetails = ({ pinInfo, updatePinState, setAllPins, setPinInfo }) => {

  const navigate = useNavigate()

  const deletePin = (id) => {
    axios.delete(`http://localhost:3001/pins/${id}`)
    .then(res => {
      console.log(res)

      // updatePinState(id)
      // ^ From Coffee app

      navigate('/', {replace: true})

    })
  }


  return (
    <div>
      <div>{pinInfo.name}</div>
      <div>{pinInfo.address}</div>
      <div>{pinInfo.city}</div>
      <div>{pinInfo.lng}</div>
      <div>{pinInfo.lat}</div>
      <div>{pinInfo.description}</div>

      <Link to ={`/pins/edit/${pinInfo._id}`}>Edit Pin</Link>
      <button onClick={() => deletePin(pinInfo._id)} >DELETE</button>
    </div>
  );
};

export default PinDetails;
