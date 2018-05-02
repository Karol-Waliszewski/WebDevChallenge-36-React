import React, {Component} from 'react';
import cartIcon from '../assets/Cart.png';

class Product extends Component {
  render() {
    var {props} = this;
    return (<div className="product">
      <div className="product__properties">
        {props.isNew && <span className="product__new">New</span>}
        <span className="product__favourite">{props.isFavourite ? '❤' : 'o'}</span>
      </div>
      <img src={props.image} alt={props.imageAlt} className="product__display"/>
      <div className="product__info">
        <p className="product__name">{props.name}</p>
        <p className="product__price">${Number(props.price).toFixed(2)}</p>
        <button className="product__cart">
          <img className="icon" src={cartIcon} alt="Shopping cart"/>
          Add to Cart
        </button>
      </div>
    </div>);
  }
}

export default Product;
