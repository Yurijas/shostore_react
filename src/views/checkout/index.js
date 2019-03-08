import React, { Component } from 'react';
import './index.css';
import CartTable from '../../components/cartTable';

class Checkout extends Component {
  render() {
    return (
      <div className="countainer">
        <h1>This is the checkout page.</h1>
        <CartTable />
      </div>
    );
  }
}

export default Checkout;
