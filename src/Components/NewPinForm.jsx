import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete';
import { green } from "@mui/material/colors";

const NewPinForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Name: "",
    Address: "",
    City: "",
    Description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/pins", formData).then((res) => {
      setFormData({ Name: "", Address: "", City: "", Description: "" });
      navigate("/", { replace: true });
    });
  };



  const [locationName, setLocationName] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
  })


  const handleSelect = async value => {
    const results = await geocodeByAddress(value)
    const latLng = await getLatLng(results[0])

    let name = value.split(",")
    
    let newName = name[0]

    let city = name[2]

    console.log(typeof newName)

    setLocationName(newName)
    setAddress(results[0].formatted_address)
    setCity(city)
    setCoordinates(latLng)

    console.log(value)
    console.log(results)

  }

  


  return (
    <div>

      <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>

      {({getInputProps, suggestions, getSuggestionItemProps, loading}) => 
      <div>

         <p>Lattitude: {coordinates.lat}</p> 
         <p>Longitude: {coordinates.lng}</p>

        <input {...getInputProps({placeholder: "Type Address"})}/> 
        
        <div>
          {loading ? <div>...loading</div> : null}
          {suggestions.map((suggestion) => {
            const style = {
              backgroundColor: suggestion.active ? "#c0ffee" : "#fff"
            };

            console.log(suggestion.formattedSuggestion.mainText)

            return <div {...getSuggestionItemProps(suggestion, {style})}> {suggestion.description} </div>
          })}
        </div>


      </div>}

      </PlacesAutocomplete>


      <br></br><br></br><br></br><br></br><br></br><br></br>

      <form onSubmit={handleSubmit}>

        <label htmlFor="Name">Name of location</label>
        <input type="text" name="Name" value={locationName} onChange={handleSelect}/>
        <label htmlFor="Address">Address</label>
        <input type="text" name="Address" value={address} onChange={handleSelect}/>
        <label htmlFor="City">City</label>
        <input type="text" name="City" value={city}/>
        <label htmlFor="Description">Description</label>
        <input type="text" name="Description" />


        <input type="hidden" name="lat" value={coordinates.lat}/>
        <input type="hidden" name="lng" value={coordinates.lng}/>


        <input type="submit" value="Mark It Down" />
        
      </form>
    </div>
  );
};

export default NewPinForm;
