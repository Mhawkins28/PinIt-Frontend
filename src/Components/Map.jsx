import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Googleap,
  useLoadScript,
  Marker,
  InfoWindow,
  GoogleMap,
  InfoBox,
} from "@react-google-maps/api";
import {Link} from 'react-router-dom'

// const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 36.1716,
  lng: -115.1391,
};

const testData = [
  {
    name: "pin1",
    lat: 36.15057109062495,
    lng: -115.26343132931979,
  },
  {
    name: "pin2",
    lat: 36.1388575586096,
    lng: -115.27596260983736,
  },
  {
    name: "pin3",
    lat: 36.14734831097478,
    lng: -115.27885939557345,
  },
  {
    name: "pin4",
    lat: 36.14906367791806,
    lng: -115.2816059776047,
  },
];



const Map = ({ latLng, setLatLng, infoLatLng, setInfoLatLng, setAllPins, allPins }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCZSCr-Wo0SYQZE-cqf0MNFzP9Qat0EYiY",
  });

  //states
  ////move these states to app.js so we can utilize in all pages
  
  // const [latLng, setLatLng] = useState({
  //   lat: null,
  //   lng: null,
  // });
  // const [infoLatLng, setInfoLatLng] = useState({
  //   lat: null,
  //   lng: null,
  // });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";



  // useEffect(() => {
  //   fetch(`http://localhost:3001/pins`)
  //     .then((res) => res.json())
  //     .then((data) => setAllPins(data));
  // }, []);



  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={8}
      center={center}
      onClick={(e) => {
        setLatLng({
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        });
        console.log(e);
      }}
      options={{
        styles: [
          {
            elementType: "labels",
            featureType: "poi",
            stylers: [{ visibility: "off" }],
          },
        ],
      }}
    >
      {allPins.map((location, i) => {
        return (
          <Marker
            key={i}
            position={{
              lat: location.lat,
              lng: location.lng,
            }}
            onClick={(e) => {
              setLatLng({
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
              });
              setInfoLatLng({
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
              });
              console.log(e);
            }}
            label={`${i}`}
      
          ></Marker>
        );
      })}

      {latLng.lat && (
        <InfoWindow
          position={{
            lat: latLng.lat,
            lng: latLng.lng,
          }}
          onCloseClick={() => {
            setLatLng({
              lat: null,
              lng: null,
            });
          }}
        >
          {latLng.lat === infoLatLng.lat && latLng.lat === infoLatLng.lat ? (
            <div>
              <div>
                this is a marker.
                {testData[0].name}
              </div>
            </div>
          ) : (
            <div>
              <div>
                Would you like to place a marker here at {latLng.lat},{" "}
                {latLng.lng}?
              </div>
              {/* <button>yes</button> */}
              <Link to="/newPin">ADD A PIN</Link>
            </div>
          )}
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default Map;
