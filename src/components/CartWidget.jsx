import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  //la lógica va siempre antes del return
  return (
    <div className="cart-widget">
      {/* Acá puede ir cualquier ícono que quieran. En mi caso, estoy usando FontAwesome para React JS. */}
      <FontAwesomeIcon icon={faCartShopping} size="2x" color="black" />
      <div className="qty-display">0</div>
    </div>
  );
};

export default CartWidget;