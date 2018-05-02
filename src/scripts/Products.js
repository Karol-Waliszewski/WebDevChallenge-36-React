import React, {Component} from 'react';
import Product from './Product';

class Products extends Component {
  render() {

    var filteredProducts = this.props.products.map((product, index) =>
    <div className="products__column" key={index}>
      <Product {...product}/>
    </div>);

    return (
      <div className="products">
        {filteredProducts}
      </div>);
  }
}

export default Products;
