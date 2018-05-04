import React, {Component} from 'react';
import Product from './Product';

class Products extends Component {
  render() {

    var pageProducts = [];

    var gap = (this.props.products.length < 12 * (this.props.startIndex))
      ? this.props.products.length
      : 12 * (this.props.startIndex);

    for (let i = 12 * (this.props.startIndex - 1); i < gap; i++) {
      pageProducts.push(this.props.products[i])
    }

    var filteredProducts = pageProducts.map((product, index) =>
    <div className={"products__column " + this.props.gridSize} key={index}>
      <Product {...product} toggleFavourite={this.props.toggleFavourite}/>
    </div>);

    return (<div className="products">
      {
        filteredProducts.length > 0
          ? filteredProducts
          : (<p style={{
              margin: '2rem auto'
            }}>No results.</p>)
      }
    </div>);
  }
}

export default Products;
