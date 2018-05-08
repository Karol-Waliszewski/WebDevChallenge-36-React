import React, {Component} from 'react';
import Product from './Product';

class Products extends Component {
  render() {

    var {
      props
    } = this;

    var pageProducts = [];

    var gap = (props.products.length < props.productsOnPage * (props.startIndex))
      ? props.products.length
      : props.productsOnPage * (props.startIndex);

    for (let i = props.productsOnPage * (props.startIndex - 1); i < gap; i++) {
      pageProducts.push(props.products[i])
    }

    var filteredProducts = pageProducts.map((product, index) =>
    <div className={"products__column " + props.gridSize} key={index}>
      <Product {...product} toggleFavourite={props.toggleFavourite}/>
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
