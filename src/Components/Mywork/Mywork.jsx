import React from 'react'
import './Mywork.css'
import mywork from '../Api/Myworkapi'
import { FaArrowRight } from "react-icons/fa";

const Mywork = () => {
  return (
    <div id='mywork' className='mywork'>
        <div className="mywork-title">
            <h1>My Works</h1>
        </div>

        <div className="mywork-container">
          {mywork.map((mywork) => (
            <div key={mywork.w_image} className="mywork-item">
              <img src={mywork.w_image} alt={Image} />
             
            </div>
            
          ))}
          
        </div>
        <div className="mywork-showmore">
          <a href="https://www.instagram.com/fatuasesamson/" target="_blank" rel="noopener noreferrer">
            <p>showmore</p>
            <FaArrowRight />
          </a>

          </div>


    </div>
  )
}

export default Mywork