import React from "react";
import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { green } from "@mui/material/colors";
// import "./NewPinForm.css";
import styles from "./NewPinForm.css";
import { useDropzone } from "react-dropzone";

const NewPinForm = ({ latLng, user }) => {
  const navigate = useNavigate();

  const [uploadedFiles, setUploadedFiles] = useState();

  // const [image, setImage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    description: "",
    lng: latLng.lng,
    lat: latLng.lat,
    image: uploadedFiles?.secure_url,
    Owner: user?._id,
  });

  useEffect(() => {
    setFormData((prevState) => {
      return {
        ...prevState,
        image: uploadedFiles?.secure_url,
      };
    });
  }, [uploadedFiles]);

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);

    const url = `https://api.cloudinary.com/v1_1/general-assembly-jrk/upload`;

    acceptedFiles.forEach(async (acceptedFile) => {
      const imageData = new FormData();
      imageData.append("file", acceptedFile);
      imageData.append("upload_preset", "unsigned_upload");
      const response = await fetch(url, {
        method: "POST",
        body: imageData,
      });

      const data = await response.json();
      console.log(data);
      setUploadedFiles(data);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accepts: "image/*",
    multiple: false,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/pins", formData).then((res) => {
      console.log(res);
      setFormData({
        name: "",
        address: "",
        city: "",
        description: "",
        lng: latLng.lng,
        lat: latLng.lat,
        image: "",
        Owner: user._id,
      });
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
      image: "",
      Owner: user._id,
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
        <input
          type="hidden"
          name="Owner"
          value={user._id}
          onChange={handleChange}
        />

        <input
          type="hidden"
          name="image"
          value={uploadedFiles?.secure_url}
          onChange={handleChange}
        />

        {/* <label htmlFor="fileInput">Include a Photo!</label>
        <input type="file" id="fileInput" name="image" onChange={handleFileInputChange} value={fileInputState}/> */}

        <div {...getRootProps()} className={`dropzone`}>
          <input {...getInputProps} value={uploadedFiles?.secure_url} />
          DROP AN IMAGE HERE
        </div>

        <input type="submit" value="Mark It Down" className="button" />
      </form>

      {/* {previewSource && (
          <img src={previewSource} alt="chosen" style={{height:'300px'}}/>
        )} */}
    </div>
  );
};

export default NewPinForm;
