import React, {Component} from 'react';

class Products extends Component {
  render() {

    return (
      <header className="main__header">
        <div className="sort">
          <h3 className="sort__heading">Sort by: A-Z</h3>
          <ul className="sort__options"/>
        </div>
        <p className="main__resultsInfo">
          Showing
          <span id="resultsRange">
            1 - 12
          </span>
          of
          <span id="resultsAmount">
            24
          </span>
          results
        </p>
      </header>
);
  }
}

export default Products;
