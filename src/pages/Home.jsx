import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import { motion } from "framer-motion";

function Home() {

     return (
    <>
<section className="home-split">
      {/* Left Section */}
      <motion.div
        className="home-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="home-title">Keeping Your Ride in Top Shape</h1>
        <p className="home-subtitle">
          Hassle-free vehicle servicing at your fingertips. Schedule, track, and
          complete your car maintenance — all in one place.
        </p>
     <Link to="/vehicles" className="btn-primary">Book Service</Link>

      </motion.div>

      {/* Right Section */}
      <motion.div
        className="home-right"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://static.vecteezy.com/system/resources/previews/041/956/464/original/ai-generated-cars-illustration-isolated-on-transparent-background-free-png.png"
          alt="Car Illustration"
          className="car-image"
        />
      </motion.div>
    </section>    </>
  )
}

export default Home