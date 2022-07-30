import React from 'react'
import EditPinForm from '../Components/EditPinForm'

const EditPin = ({setPinInfo, latLng, pinInfo}) => {
  return (
    <div>
        
        <EditPinForm pinInfo={pinInfo} setPinInfo={setPinInfo} latLng={latLng}/>

    </div>
  )
}

export default EditPin