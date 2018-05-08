import React, {Component} from 'react';

class Products extends Component {
  render() {
    var {
      props
    } = this;

    var gap = (props.results < props.productsOnPage * props.startIndex)
      ? props.results
      : props.productsOnPage * props.startIndex;

    var start = props.productsOnPage * (props.startIndex - 1);
    start = start > 0
      ? start
      : 1;

    var sortOptions = [];
    for (let sort in props.sortings) {
      sortOptions.push(<li key={sort} className={(props.sortBy==sort) ? "sort__option active" : "sort__option"} onClick={() => {
          props.setSorting(sort)
        }}>{sort}</li>)
    }

    return (<header className="main__header">
      <div className="sort">
        <h3 className="sort__heading">Sort by: {props.sortBy}</h3>
        <button className="sort__dropdown">
          <span className="sort__button">&#x25BA;</span>
          <ul className="sort__options">
            {sortOptions}
          </ul>
        </button>
      </div>

      <p className="main__resultsInfo">
        Showing {start}
        - {gap + " "}
        of {" " + props.results + " "}
        results
      </p>
      <div className="main__view">
        <button className={(props.gridSize=="small") ? "main__grid--small active" :"main__grid--small"} onClick={() => {
            props.setGridSize('small');
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
        <button className={(props.gridSize=="medium") ? "main__grid--medium active" :"main__grid--medium"} onClick={() => {
            props.setGridSize('medium');
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
        <button className={(props.gridSize=="big") ? "main__grid--big active" :"main__grid--big"} onClick={(e) => {
            props.setGridSize('big');
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
