import React, { Component } from 'react';
import './index.css';
import CartTable from '../../components/cartTable';


class CartItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.price}</td>
        <td>
          <button className="btn btn-danger" onClick={() => this.props.removeItem(this.props.item.id)}>Remove</button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
