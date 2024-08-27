import React, { useState } from 'react';
import ProductRow from '../components/ProductRow.js';  
import products from '../data/products.js';  

function OrderPage() {
      return (
      <div>
      <h2>Products</h2>
        <article>
          <h3>Trending Pet Merchandise</h3>
          <p>Welcome to our product page! Look through the list of products below
            to find something perfect for your furry friend.
          </p>
            <fieldset>
              <table>
                <caption>Select your products:</caption>
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity & Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                    {products.map((product, i) => 
                    <ProductRow
                        product={product} key = {i}
                    />
                    )}
                </tbody>
              </table>
            </fieldset>
        </article>
        </div>
      );
};
export default OrderPage; 