import React from "react";
import EditPinForm from "../../Components/EditPinForm/EditPinForm";

const EditPin = ({ setPinInfo, latLng, pinInfo, user }) => {
  return (
    <div>
      <EditPinForm pinInfo={pinInfo} setPinInfo={setPinInfo} latLng={latLng} user={user}/>
    </div>
  );
};

export default EditPin;
