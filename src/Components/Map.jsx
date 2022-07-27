import React, { useState } from "react";
import styled from "styled-components";
import {
  Googleap,
  useLoadScript,
  Marker,
  InfoWindow,
  GoogleMap,
  InfoBox,
} from "@react-google-maps/api";

const libraries = ["places"];
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
    lat: 36.15057109062495,
    lng: -115.26343132931979,
  },
  {
    lat: 36.1388575586096,
    lng: -115.27596260983736,
  },
  {
    lat: 36.14734831097478,
    lng: -115.27885939557345,
  },
  {
    lat: 36.14906367791806,
    lng: -115.2816059776047,
  },
];

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBW0WUaQkQtv0J98ywCq9Y-tIFFOCwBSEU",
    libraries,
  });

  const [latLng, setLatLng] = useState({
    lat: null,
    lng: null,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

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
      }}
    >
      {testData.map((location, i) => {
        return (
          <Marker
            key={i}
            position={{
              lat: location.lat,
              lng: location.lng,
            }}
          >
            {/* <InfoBox
                options={options}
                position={{
                  lat: latLng.lat,
                  lng: latLng.lng,
                }}
              >
                <div>
                  <div
                    style={{
                      backgroundColor: "yellow",
                      opacity: 0.75,
                      padding: 12,
                    }}
                  >
                    Would you like to place a marker here at {latLng.lat},{" "}
                    {latLng.lng}?
                  </div>
                  <button>yes</button>
                </div>
              </InfoBox> */}
          </Marker>
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
          <div>
            <div>
              Would you like to place a marker here at {latLng.lat},{" "}
              {latLng.lng}?
            </div>
            <button>yes</button>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default Map;
