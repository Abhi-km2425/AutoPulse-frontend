import React from "react";
import "./VehicleCard.css";
import EditVehicleModal from "./EditVehicleModal";
import Button from 'react-bootstrap/Button';

function VehicleCard({id, name, year, reg, type ,serviceName,onDelete}) {
  
  const handleDelete = () => {
    // confirmation dialog
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      onDelete(id)
    }
  }
  
  return (
    <div className="vehicle-card">
      <h3>Vehicle:{name}</h3>
      <p>Year: {year}</p>
      <p>Reg. No: {reg}</p><hr />
        <div className="services-list mt-2">
          <h5>Services</h5>
          <p>serviceName:{serviceName}</p>

        </div>
 

      <div className="card-actions">
        {type === "vehicle" ? (
          <>
          
              <button className="btn btn-secondary p-1">
              <EditVehicleModal vehicleId={id} onUpdate={() => window.location.reload()}/>
              </button>
            <button onClick={handleDelete} className="btn btn-danger ">Delete</button>
          </>
        ) : (
          <>
          
        <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default VehicleCard;
