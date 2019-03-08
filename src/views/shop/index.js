import React, { Component } from 'react';
import './index.css';
import ProductsCard from '../../components/productsCard';


class Shop extends Component {
  render() {
    return (
      <div className="container">
        <ProductsCard products={this.props.products} addItem={this.addItem} />
      </div>
    );
  }
}

export default Shop;
