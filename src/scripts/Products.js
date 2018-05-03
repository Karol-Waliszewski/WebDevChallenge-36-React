import React, {Component} from 'react';
import Product from './Product';

class Products extends Component {
  render() {

    var filteredProducts = this.props.products.map((product, index) =>
    <div className={"products__column " + this.props.gridSize} key={index}>
      <Product {...product} toggleFavourite={this.props.toggleFavourite}/>
    </div>);

    return (
      <div className="products">
        {filteredProducts}
      </div>);
  }
}

export default Products;
