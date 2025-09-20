import React, { useState, useEffect } from "react";
import VehicleCard from "../components/VehicleCard";
import "./Services.css"; // You can reuse Vehicles.css or create new one
import { getAllVehiclesAPI } from "../service/allApi";
import Footer from "../components/Footer";

function Services() {
  const [serviceHistory, setServiceHistory] = useState([]);



  const getAllServices = async () => {
    try {
      const result = await getAllVehiclesAPI()
      if (result.status >= 200 && result.status < 300) {
        // Filter only vehicles that have services
        const vehiclesWithServices = result.data.filter(vehicle => 
          vehicle.serviceName && vehicle.serviceName.trim() !== ""
        );
        setServiceHistory(vehiclesWithServices)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // Fetch all vehicles when component mounts
  useEffect(() => {
    getAllServices()
  }, [])


  
  // Delete service from history (removes from local state only)
  const handleDeleteService = (vehicleId) => {
    // Remove the service from local state (doesn't delete from database)
    setServiceHistory(serviceHistory.filter(vehicle => vehicle.id !== vehicleId))
    console.log("Service removed from history!")
  }

  return (
    <>
      <section className="vehicles">
        <div className="vehicles-header">
          <h2>Service History</h2>
          <p>View all services done for your vehicles</p>
        </div>

        <div className="vehicle-cards">
          {serviceHistory.length > 0 ? (
            serviceHistory.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                id={vehicle.id}
                name={vehicle.name}
                year={vehicle.year}
                reg={vehicle.reg}
                serviceName={vehicle.serviceName}
              
                type="service" // This will show only Delete button
                onDelete={handleDeleteService} // Removes from history only
              />
            ))
          ) : (
            <div className="no-services">
              <p>No service history found.</p>
            </div>
          )}
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Services;