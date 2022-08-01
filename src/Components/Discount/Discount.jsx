import React from 'react'
import './Discount.css'

const Footer = () => {
  return (
    <section className='discount'>
      <div className="container discount-container">
        <div className="discount-head">
          <h1>Get more discount Off your order</h1>
          <p>Join our mailing list</p>
          <div className="input">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer