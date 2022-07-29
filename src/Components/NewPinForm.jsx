import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { green } from "@mui/material/colors";

const NewPinForm = ({ latLng }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    description: "",
    lng: latLng.lng,
    lat: latLng.lat,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/pins", formData).then((res) => {
      setFormData({ name: "", address: "", city: "", description: "" });
      navigate("/", { replace: true });
    });
  };

  //part of places api
  const [locationName, setLocationName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);

    let name = value.split(",");

    let newName = name[0];

    let city = name[2];

    // setLocationName(newName)
    // setAddress(results[0].formatted_address)
    // setCity(city)
    // setCoordinates(latLng)

    setFormData({
      name: newName,
      city: city,
      address: results[0].formatted_address,
      lat: latLng.lat,
      lng: latLng.lng,
    });
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            {/* <p>Lattitude: {coordinates.lat}</p> 
         <p>Longitude: {coordinates.lng}</p> */}

            <input {...getInputProps({ placeholder: "Type Address" })} />

            <div>
              {loading ? <div>...loading</div> : null}
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#c0ffee" : "#fff",
                };

                console.log(suggestion.formattedSuggestion.mainText);

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {" "}
                    {suggestion.description}{" "}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name of location</label>
        <input
          type="text"
          name="name"
          id="name"
          value={locationName.length < 1 ? formData.name : locationName}
          onChange={handleChange}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          value={address.length < 1 ? formData.address : address}
          onChange={handleChange}
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          value={city.length < 1 ? formData.city : city}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={handleChange}
        />

        {/* <input type="hidden" name="lat" value={!coordinates.lat ? latLng.lat : coordinates.lat}/>
        <input type="hidden" name="lng" value={!coordinates.lng ? latLng.lng : coordinates.lng}/> */}

        <input
          type="hidden"
          name="lat"
          value={latLng.lat}
          onChange={handleChange}
        />
        <input
          type="hidden"
          name="lng"
          value={latLng.lng}
          onChange={handleChange}
        />

        <input type="submit" value="Mark It Down" />
      </form>
    </div>
  );
};

export default NewPinForm;
