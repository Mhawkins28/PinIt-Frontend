import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { library } from '@fortawesome/fontawesome-svg-core'
  import { fab } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "../NewPinForm/NewPinForm.css";
import { useDropzone } from "react-dropzone";

const EditPinForm = ({ pinInfo, setPinInfo, latLng, user }) => {
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://jmmz-ga-p3places-backend.herokuapp.com/pins/${pinInfo._id}`, formData)
      .then((res) => {
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
        navigate("/home", { replace: true });
      });
  };

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);

    let name = value.split(",");

    let newName = name[0];

    let city = name[2];

    // setLocationName(newName)
    // setCity(city)
    // setCoordinates(latLng)

    setAddress(results[0].formatted_address);
    setFormData({
      name: newName,
      city: city,
      address: results[0].formatted_address,
      lat: latLng.lat,
      lng: latLng.lng,
    });
  };

  const [locationName, setLocationName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });

  return (
    <div className="pins">
      <form id="eform" onSubmit={handleSubmit}>
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div id="ac">
              <div className="ac">
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              <input {...getInputProps({ placeholder: "Type Address" })} />
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

        <h1>Edit Pin: {pinInfo.name}</h1>

        {/* Form should populate the current pin being edited's information */}
        {/* value can be pinInfo.xxxx but take out the search bar. User will just have to edit whats currently avaiable. If user wants a whole new pin, they can delete this pin and create a new one. */}

        <div id="einputs">
          
          <div className="ediv">
              <label htmlFor="name">Name of location</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder={pinInfo.name}
                value={locationName.length < 1 ? formData.name : locationName}
                onChange={handleChange}
              />
          </div>

          <div className="ediv">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder={pinInfo.address}
                value={address.length < 1 ? formData.address : address}
                onChange={handleChange}
              />
          </div>

          <div className="ediv">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder={pinInfo.city}
                value={city.length < 1 ? formData.city : city}
                onChange={handleChange}
              />
          </div>

            <div className="ediv">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                id="description"
                placeholder={pinInfo.description}
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
              name="image"
              value={uploadedFiles?.secure_url}
              onChange={handleChange}
            />


        <div {...getRootProps()} className={`dropzone`}>
          <input
            {...getInputProps}
            value={uploadedFiles?.secure_url}
            type="hidden"
          />
          DROP AN IMAGE HERE
        </div>

            <input type="submit" value="Mark It Down" className="button ebutton"/>
        </form>
    </div>
  );
};

export default EditPinForm;
