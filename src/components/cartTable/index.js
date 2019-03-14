import React, { Component } from 'react';
import './index.css';
import CartItem from '../../components/cartItem';

class CartTable extends Component {
  render() {
    return (
      <table id="cart">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Remove Product</th>
          </tr>
        </thead>
        <tbody>
        {
          this.props.cart &&
            this.props.cart.map( item =>
              <CartItem item={item} key={item.id} removeItem={this.props.removeItem}/>
          )
        }
        </tbody>
      </table>
    );
  }
}

export default CartTable;
