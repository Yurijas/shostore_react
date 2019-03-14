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
      'cart': [],
      'total': 0
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
    this.calcTotal();
    console.log(this.state.cart);
  }


  removeItem = id => {
    let cart = this.state.cart;
    for (let i in cart) {
      if (cart[i].id == id) {
        cart.splice(i, 1);
        break;
      }
    }
    this.calcTotal();
    this.setState({'cart': cart});
    console.log(this.state.cart);
  }

  calcTotal = () => {
    let cart = this.state.cart;
    let total = 0;
    for (let i in cart) {
      total += cart[i].price;
    }
    this.setState({ total: total.toFixed(2) });
  }

  updateTotals = () => {
    let total = this.calcTotal();
  }

  countDuplicates = id => {
    let cart = this.state.cart;
    let count = 0;
    for (let i in cart) {
      if (cart[i].id == id) {
        count += 1
      }
    }
    return count;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path='/' render={() => <Shop products={this.state.products} addItem={this.addItem} />} />
            <Route exact path='/checkout' render={() => <Checkout cart={this.state.cart} removeItem={this.removeItem}  total={this.state.total} countDuplicates={this.countDuplicates}/>} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
