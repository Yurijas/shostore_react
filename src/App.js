import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Shop from './views/shop';
import Checkout from './views/checkout';
import products from './products.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      'products': [],
      'cart': []
    }
  }

  componentWillMount() {
    this.setState({'products': products});
  }

  addItem = id => {
    let cart = this.state.cart;
    for (let i in products) {
      if (products[i].id == id) {
        cart.push(products[i]);
        break;
      }
    }
    this.setState({'cart': cart});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path='/' render={() => <Shop products={this.state.products} />} />
            <Route exact path='/checkout' render={() => <Checkout />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
