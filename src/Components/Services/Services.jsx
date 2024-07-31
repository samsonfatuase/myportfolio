import React from 'react'
import './Services.css'
import services from '../Api/Api'

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
        </div>

        <div className="service-container">
          {services.map((service) => (
            <div key={service.s_no} className="service-item">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2> 
              <p>{service.s_des}</p> 
            </div>
          ))}
        </div>


    </div>
  )
}

export default Services