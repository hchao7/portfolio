import React, {useState} from 'react';
import { AiFillCaretUp, AiFillCaretDown} from 'react-icons/ai';

function ProductQuantity({price}) {
  const [quantity, setQuantity] = useState(0);

  const increaser = () => {
    if (quantity == 10) {
      setQuantity(10);
    }
    else {
      setQuantity(quantity+1);
    }
  }

  const decreaser = () => {
    if (quantity == 0) {
      setQuantity(0);
    }
    else {
      setQuantity(quantity-1);
    }
  }

  return (<div class="quantity-column">
    <AiFillCaretUp onClick={increaser} />
    <p>{quantity}</p>
    <AiFillCaretDown onClick={decreaser} />
    <p>${price * quantity}</p>
  </div>);
}

export default ProductQuantity;