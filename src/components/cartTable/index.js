import React, { Component } from 'react';
import './index.css';

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
          <tr>
            <td>placeholder1</td>
            <td>placeholder2</td>
            <td>placeholder3</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default CartTable;
