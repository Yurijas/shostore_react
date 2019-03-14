import React, { Component } from 'react';
import './index.css';
import CartTable from '../../components/cartTable';

class Checkout extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <CartTable cart={this.props.cart}
          removeItem={this.props.removeItem} />
        </div>
      </div>
    );
  }
}

export default Checkout;
