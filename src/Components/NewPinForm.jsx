import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name of location</label>
        <input type="text" name="Name" />
        <label htmlFor="Address">Address</label>
        <input type="text" name="Address" />
        <label htmlFor="City">City</label>
        <input type="text" name="City" />
        <label htmlFor="Description">Description</label>
        <input type="text" name="Description" />

        <input type="submit" value="Mark it down" />
      </form>
    </div>
  );
};

export default NewPinForm;
