import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './PinDetailsPage.css';
import { FaCity, FaMapMarkedAlt } from 'react-icons/fa'

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
      navigate("/", { replace: true });
    });
  };

  return (
  <section>
    <div className="container">
      <div className="left">
        <div className='infoContainer'>
          
          <h2><FaCity className='icon'/> <br></br> {pinInfo.city}</h2>
          <br></br>

          <h2><FaMapMarkedAlt className='icon'/>  <br></br> {pinInfo.address}</h2>
          <br></br>
          <div className="imgContainer">
            <img src={pinInfo.image} alt={pinInfo.image_id}></img>
          </div>

          <p>{pinInfo.lng}, {pinInfo.lat}</p>
      </div>
    </div>

    <div className="right">
      <h1>{pinInfo.name}</h1>
      <p>{pinInfo.description}</p>
      <p>Pin Created By: {pinInfo.Owner?.username}</p>
    <div className="BtnContainer">
        {user && pinInfo.Owner?._id === user._id ? (
          <div id='btn'>
            <Link to={`/pins/edit/${pinInfo._id}`}>Edit Pin</Link>
            <button className='btn' onClick={() => deletePin(pinInfo._id)}>DELETE</button>
          </div>
          ) : null} 
        </div>
      </div>
    </div>
  </section>
  );
};   


    


export default PinDetails;
