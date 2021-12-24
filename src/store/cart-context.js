import React, { PureComponent } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

export default CartContext;
