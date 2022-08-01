import React from 'react'
import "./Store.css";
import Data from './Data';
import {HiArrowNarrowRight} from 'react-icons/hi'

function Store() {
  return (
    <section className="container store" id="shop">
      <div className="storeText">
        <div className="div1">
          <h1>New In Store Now</h1>
        </div>
        <div className='div2'>
          <p>Get the latest items immediately with promo prices</p>
          <a href="#store">
            Check All{" "}
            <span>
              <HiArrowNarrowRight />
            </span>
          </a>
        </div>
      </div>

      <div className="flex-section">
        {Data.map(({ id, img, description }) => {
          return (
            <div className="ImgContainer" key={id}>
              <img src={img} alt="" />
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Store
