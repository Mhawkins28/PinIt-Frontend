import React, { useState, useEffect } from "react";
import {
  Googleap,
  useLoadScript,
  Marker,
  InfoWindow,
  GoogleMap,
  InfoBox,
} from "@react-google-maps/api";
import { Link } from "react-router-dom";
import "./Map.css";


const mapContainerStyle = {
  width: "100vw",
  height: "80vh",
};

const center = {
  lat: 40.743,
  lng: -73.986,
};

const UserMap = ({
  latLng,
  setLatLng,
  infoLatLng,
  setInfoLatLng,
  setAllPins,
  allPins,
  pinInfo,
  setPinInfo,
  user,
  userPins,
  setUserPins,
}) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCZSCr-Wo0SYQZE-cqf0MNFzP9Qat0EYiY",
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={12}
      center={center}
      onClick={(e) => {
        setLatLng({
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        });
      }}
      options={{
        styles: [
          {
            elementType: "labels",
            featureType: "poi",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [
              {
                lightness: 20,
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
              {
                color: "#c5c6c6",
              },
            ],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
              {
                color: "#e4d7c6",
              },
            ],
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [
              {
                color: "#fbfaf7",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [
              {
                visibility: "on",
              },
              {
                color: "#acbcc9",
              },
            ],
          },
        ],
      }}
    >
      {userPins?.map((location, i) => {
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
              setPinInfo(location);
            }}
            // label={`${i}`}
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
              <div>{pinInfo.name}</div>
              {pinInfo.address}
              {/* Created By: user */}
              Created By: {pinInfo.Owner?.username}
              <Link to={`/pins/${pinInfo._id}`}>View More</Link>
            </div>
          ) : (
            <div className="placement">
              <div>
                {/* <div>{pinInfo.name}</div>
              <div>{pinInfo.address}</div> */}
                {/* Created By: user */}
                {/* <div>Created By: {pinInfo.Owner?.username}</div> */}

                {/* <Link to={`/pins/${pinInfo._id}`}>View More</Link> */}
                {/* Would you like to place a marker here at {latLng.lat},{" "} */}
                {/* {latLng.lng}? */}
              </div>
              <div>
                {/* <button>yes</button> */}
                <Link to="/newPin">ADD A PIN</Link>
              </div>
            </div>
          )}
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default UserMap;
