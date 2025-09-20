import React, { useEffect, useState } from "react";
import VehicleCard from "../components/VehicleCard";
import "./Vehicles.css";
import AddVehicleModal from "../components/AddVehicleModal";
import { deleteVehicleAPI, getAllVehiclesAPI } from "../service/allApi";
import Footer from "../components/Footer";

function Vehicles() {
  // This should be an array to store all vehicles
  const [vehicles, setVehicles] = useState([]);

  //get method api call

  const getAllVehicles = async () => {
    try {
      const result = await getAllVehiclesAPI();
      if (result.status >= 200 && result.status < 300) {
        setVehicles(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllVehicles();
  }, []);



  

 // Delete vehicle function
  const handleDeleteVehicle = async (vehicleId) => {
    try {
      const result = await deleteVehicleAPI(vehicleId)
      if (result.status >= 200 && result.status < 300) {
        // Remove the deleted vehicle from state
        setVehicles(vehicles.filter(vehicle => vehicle.id !== vehicleId))
        console.log("Vehicle deleted successfully!")
      } else {
        console.log("Error deleting vehicle:", result)
      }
    } catch (error) {
      console.log("Error in delete API call:", error)
    }
  }



  return (
    <>
      <section className="vehicles">
        <div className="vehicles-header">
          <h2>My Vehicles</h2>

          <button className="btn p-1">
            <AddVehicleModal vehicles={vehicles} setVehicles={setVehicles} />
          </button>
        </div>

        <div className="vehicle-cards">
          {vehicles.map((v, index) => (
            <VehicleCard
              key={v.id || index} // Better key handling
              id={v.id}
              name={v.name}
              year={v.year}
              reg={v.reg}
              serviceName={v.serviceName}
              type="vehicle"
              onDelete={handleDeleteVehicle}//pass deleting function to card
            />
          ))}
        </div>
      </section>

      <Footer/>
    </>
  );
}

export default Vehicles;
