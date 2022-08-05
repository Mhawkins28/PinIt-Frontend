import React from "react";
import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { green } from "@mui/material/colors";
import styles from "./NewPinForm.css";
import { useDropzone } from "react-dropzone";

library.add(fab, faMagnifyingGlass);

const NewPinForm = ({ latLng, user }) => {
  const navigate = useNavigate();

  const [uploadedFiles, setUploadedFiles] = useState();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    description: "",
    lng: latLng.lng,
    lat: latLng.lat,
    image: uploadedFiles?.secure_url,
    image_id: uploadedFiles?.public_id,
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

  useEffect(() => {
    setFormData((prevState) => {
      return {
        ...prevState,
        image_id: uploadedFiles?.public_id,
      };
    });
  }, [uploadedFiles]);

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);

    const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/upload`;

    acceptedFiles.forEach(async (acceptedFile) => {
      const imageData = new FormData();
      imageData.append("file", acceptedFile);
      imageData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);
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

    axios.post("https://jmmz-ga-p3places-backend.herokuapp.com/pins", formData).then((res) => {
      console.log(res);
      setFormData({
        name: "",
        address: "",
        city: "",
        description: "",
        lng: latLng.lng,
        lat: latLng.lat,
        image: "",
        image_id: "",
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
      image_id: "",
      Owner: user._id,
    });
  };

  return (
    <div className="pins">
      <form onSubmit={handleSubmit} id="pform">
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
              <div className="ac">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                <input {...getInputProps({ placeholder: "Search Address" })} />
              </div>

              <div>
                {loading ? <div>...loading</div> : null}
                {suggestions.map((suggestion, i) => {
                  const style = {
                    backgroundColor: suggestion.active ? "#c0ffee" : "#fff",
                  };

                  return (
                    <div
                      key={i}
                      {...getSuggestionItemProps(suggestion, { style })}
                    >
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>

        <div id="pinputs">
          <div className="pdiv">
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

          <div className="pdiv">
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

          <div className="pdiv">
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

          <div className="pdiv">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              onChange={handleChange}
            />
          </div>
        </div>

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

        <input
          type="hidden"
          name="image_id"
          value={uploadedFiles?.public_id}
          onChange={handleChange}
        />

        {/* <label htmlFor="fileInput">Include a Photo!</label>
        <input type="file" id="fileInput" name="image" onChange={handleFileInputChange} value={fileInputState}/> */}

        <div {...getRootProps()} className={`dropzone`}>
          <input
            {...getInputProps}
            value={uploadedFiles?.secure_url}
            type="hidden"
          />
          DROP AN IMAGE HERE
        </div>

        <input type="submit" value="Mark It Down" className="button pbutton" />
      </form>

      {/* {previewSource && (
          <img src={previewSource} alt="chosen" style={{height:'300px'}}/>
        )} */}
    </div>
  );
};

export default NewPinForm;
