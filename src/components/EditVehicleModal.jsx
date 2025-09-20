import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getSingleVehicleAPI, updateVehicleAPI } from "../service/allApi";

function EditVehicleModal({ vehicleId, onUpdate }) {
  const [show, setShow] = useState(false);
  
  // State for form data
  const [vehicleData, setVehicleData] = useState({
    name: "",
    year: "",
    reg: "",
    serviceName: "",
  
  });

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    // Fetch vehicle data when modal opens
    if (vehicleId) {
      getSingleVehicle();
    }
  };

  // Fetch single vehicle data
  const getSingleVehicle = async () => {
    try {
      const result = await getSingleVehicleAPI(vehicleId);
      if (result.status >= 200 && result.status < 300) {
        setVehicleData(result.data);
      } else {
        console.log("Error fetching vehicle:", result);
      }
    } catch (error) {
      console.log("Error in getSingleVehicle:", error);
    }
  };

  // Handle update vehicle
  const handleUpdateVehicle = async () => {
    try {
      const result = await updateVehicleAPI(vehicleId, vehicleData);
      if (result.status >= 200 && result.status < 300) {
        console.log("Vehicle updated successfully!");
        handleClose();
        // Call parent function to refresh the vehicles list
        if (onUpdate) {
          onUpdate();
        }
      } else {
        console.log("Error updating vehicle:", result);
      }
    } catch (error) {
      console.log("Error in update API call:", error);
    }
  };

  return(
       <>
             <Button variant="" onClick={handleShow}>
        Edit 
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        contentClassName="custom-modal-content"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Vehicle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label htmlFor="">Your Car Name</label>
            <input
              value={vehicleData.name}
              onChange={(e) => setVehicleData({...vehicleData, name: e.target.value})}
              type="text"
              placeholder="Enter Car Name"
              className="form-control m-2"
            />
          </div>
          <div>
            <label htmlFor="">Car model Year</label>
            <input
              value={vehicleData.year}
              onChange={(e) => setVehicleData({...vehicleData, year: e.target.value})}
              type="text"
              placeholder="Enter model Year"
              className="form-control m-2"
            />
          </div>
          <div>
            <label htmlFor="">Car Registration Number</label>
            <input
              value={vehicleData.reg}
              onChange={(e) => setVehicleData({...vehicleData, reg: e.target.value})}
              type="text"
              placeholder="Enter Car Registration Number"
              className="form-control m-2"
            />
          </div>
           <hr />
          <h5>Edit Service</h5>
          <div>
            <label>Service Name</label>
            <input
              value={vehicleData.serviceName}
              onChange={(e) => setVehicleData({...vehicleData, serviceName: e.target.value})}
              type="text"
              placeholder="Enter Service Name"
              className="form-control m-2"
            />
          </div>
       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateVehicle}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

       </>
    

  )
}

export default EditVehicleModal;