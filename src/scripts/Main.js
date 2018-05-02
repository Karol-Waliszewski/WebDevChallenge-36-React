import React, {Component} from 'react';

class Products extends Component {
  render() {

    return (<div className="main">
      {this.props.children}
    </div>);
  }
}

export default Products;
