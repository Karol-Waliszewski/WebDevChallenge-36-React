import React, {Component} from 'react';

class Products extends Component {
  render() {
var{props} = this;
    return (<header className="main__header">
      <div className="sort">
        <h3 className="sort__heading">Sort by: A-Z</h3>
        <ul className="sort__options"/>
      </div>
      <p className="main__resultsInfo">
        Showing 1 - {props.results < 12 ? props.results : 12} of {props.results} results
      </p>
      <div className="main__view">
        <button className="main__grid--small" onClick={() => {
            this.props.setGridSize('small');
          }}>
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <button className="main__grid--medium" onClick={() => {
            this.props.setGridSize('medium');
          }}>
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <button className="main__grid--big" onClick={() => {
            this.props.setGridSize('');
          }}>
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </header>);
  }
}

export default Products;
