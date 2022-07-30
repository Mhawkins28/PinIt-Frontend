import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { green } from "@mui/material/colors";
import "./newpinform.css";

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
    // setCity(city)
    // setCoordinates(latLng)

    // Need both of these states
    setAddress(results[0].formatted_address);
    setFormData({
      name: newName,
      city: city,
      address: results[0].formatted_address,
      lat: latLng.lat,
      lng: latLng.lng,
    });
  };

  return (
    <div className="pins">
      <form onSubmit={handleSubmit}>
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div id="ac">
              {/* <p>Lattitude: {coordinates.lat}</p> 
         <p>Longitude: {coordinates.lng}</p> */}
              <div className="ac">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                <input {...getInputProps({ placeholder: "Search Address" })} />
              </div>

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

        <div>
          <label htmlFor="name">Name of location</label>
          <input
            type="text"
            name="name"
            id="name"
            // value={locationName.length < 1 ? formData.name : locationName}
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            // value={address.length < 1 ? formData.address : address}
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            // value={city.length < 1 ? formData.city : city}
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            onChange={handleChange}
          />
        </div>

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

        <input type="submit" value="Mark It Down" className="button" />
      </form>
    </div>
  );
};

export default NewPinForm;
