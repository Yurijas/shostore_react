import React, { Component } from 'react';
import './index.css';
import CartItem from '../../components/cartItem';

class CartTable extends Component {
  render() {
    return (
      <table id="cart">
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Name</th>
            <th>Price</th>
            <th>Remove Product</th>
          </tr>
        </thead>
        <tbody>
        {
          this.props.cart &&
            this.props.cart.map( item =>
              <CartItem item={item} key={item.id} removeItem={this.props.removeItem} countDuplicates={this.props.countDuplicates}/>
          )
        }
        </tbody>
        <tfoot>
          <th colSpan="2">Total:</th>
          <th class="total">${this.props.total}</th>
        </tfoot>
      </table>
    );
  }
}

export default CartTable;
