import React from 'react'
import products from './Data';
import './Products.css'

function Products() {
  return (
    <section className='container'>
      <div className="product-head">
        <h1>All Product</h1>
        <p>
          The products only for you as our services are selected from the best
          products with number 1 quality in the world.
        </p>
      </div>

      <div className='carousel'>
        {products.map(({id, pic, title, price, discount}) => {
          return (
            <div className="box" key={id}>
              <article>
                <img src={pic} alt="pics" />
              </article>
              <h3>{title}</h3>
              <div className='prices'>
                <p>{price}</p>
                <small>{discount}</small>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Products