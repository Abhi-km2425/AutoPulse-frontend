import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addVehicleAPI } from "../service/allApi";

function AddVehicleModal({ vehicles, setVehicles }) {

  // Separate state for the form data
  const [vehicleData, setVehicleData] = useState({
    name: "",
    year: "",
    reg: "",
    serviceName: "",
  });


  //post api call
  const handleAddvehicle = async() => {
    try {
      // Pass the vehicle data to the API
      const result = await addVehicleAPI(vehicleData);
      console.log(result);
      
    
      if (result.status >= 200 && result.status < 300) {
        // Add the new vehicle to the existing vehicles array
        setVehicles([...vehicles, result.data]);
        
        // Reset the form
        setVehicleData({
          name: "",
          year: "",
          reg: "",
          serviceName: "",
        });
        
        // Close the modal
        handleClose();
        
        console.log("Vehicle added successfully!");
      } else {
        console.log("Error adding vehicle:", result);
      }
      
    } catch (error) {
      console.log("Error in API call:", error);
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        +Add Vehicle
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
          <Modal.Title>Add New Vehicle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label htmlFor="">Your Car Name</label>
            <input
            value={vehicleData.name}
              onChange={(e) => setVehicleData({...vehicleData, name: e.target.value })}
              type="text"
              placeholder="Enter Car Name"
              className="form-control m-2"
            />
          </div>
          <div>
            <label htmlFor="">Car model Year</label>
            <input
            value={vehicleData.year}
              onChange={(e) => setVehicleData({...vehicleData, year: e.target.value })}
              type="text"
              placeholder="Enter model Year"
              className="form-control m-2"
            />
          </div>
          <div>
            <label htmlFor="">Car Registration Number</label>
            <input
            value={vehicleData.reg}
            onChange={(e) => setVehicleData({...vehicleData, reg: e.target.value })}
              type="text"
              placeholder="Enter Car Registration Number"
              className="form-control m-2"
            />
          </div>
          <hr />
          <h5>Add First Service</h5>
          <div>
            <label>Service Name</label>
            <input
            value={vehicleData.serviceName}
            onChange={(e) => setVehicleData({...vehicleData, serviceName: e.target.value })}
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
          <Button onClick={handleAddvehicle} variant="primary">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddVehicleModal;