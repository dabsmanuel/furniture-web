import './Manufacturer.css';
import dining from '../../Assets/Dining.png'
import React from 'react'

export default function Manufacturer() {
  return (
    <section className="container best">
      <div className="furniture">
        <h1>The Best Furniture Manufacturer of your choice</h1>
        <p>
          Furnitre power is a software as services for multiperpose business
          management system, expecially for them who are running two or more
          business exploree the future Furnitre power is a software as services
        </p>
      </div>

      <div className="dining">
        <img src={dining} alt="dining table" />
      </div>
    </section>
  );
}
