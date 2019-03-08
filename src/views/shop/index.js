import React, { Component } from 'react';
import './index.css';
import ProductsCard from '../../components/productsCard';
import products from '../../products.js';


class Shop extends Component {
  constructor() {
    super();
    this.state = {
      'products': []
    }
  }

  componentWillMount() {
    this.setState({'products': products});
  }


  render() {
    return (
      <div className="container">
        <ProductsCard products={this.state.products} />

      </div>
    );
  }
}

export default Shop;
