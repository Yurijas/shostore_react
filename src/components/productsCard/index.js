import React, { Component } from 'react';
import './index.css';

class ProductsCard extends Component {
  render() {
    return (
        <div className="row">
          {
            this.props.products &&
              this.props.products.map( item =>
                <div className="col-md-4">
                  <div className="card" key={item.id}>
                  <img src="http://placehold.it/250x250" alt="Placeholder" className="card-img" />
                  <div className="card-title">{item.name}</div>
                  <div className="card-subtitle">${item.price}</div>
                  <div className="card-text">{item.desc}</div>
                  <button className="btn btn-success" onClick={() => this.props.addItem(item.id)}>Add to Cart</button>
                  </div>
                </div>
              )
          }
        </div>
    );
  }
}

export default ProductsCard;
