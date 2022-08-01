import React from 'react';
import sofa from './../../Assets/largeSofa.png';
import './Aesthetic.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

export const Aesthetic = () => {
  return (
    <section className="aesthetic container">
      <div className="aesthetic-image ">
        <img src={sofa} alt="sofa_image" />
      </div>
      <div className="write-up">
        <div className="shift">
          <h1>We Create your home more aesthetic</h1>
          <p>
            Furniture power is a software as services for multipurpose business
            management system,
          </p>
        </div>

        <div className="elements">
          <h4>
            <BsFillCheckCircleFill />
            <span>Valuation Services</span>
          </h4>
          <p>
            Sometimes features require a short description. This can be detailed
            description
          </p>
          <h4>
            <BsFillCheckCircleFill /><span>Development of Furniture Models</span>
          </h4>
          <p>
            Sometimes features require a short description. This can be detailed
            description
          </p>
        </div>
      </div>
    </section>
  );
}
