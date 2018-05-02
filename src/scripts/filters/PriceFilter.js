import React, {Component} from 'react';

class PriceFilter extends Component {
  render() {
    return (<div>
      <h5 className="sidebar__subHeading">Price</h5>
      <form action="action">
        <input type="range" name="name" defaultValue="defaultValue"/> {/* TODO create CUSTOM RANGE SLIDER */}
        <input type="number" className="filter__range"/>
        <input type="number" className="filter__range"/>
        <input type="submit" className="btn--filter"/>
      </form>
    </div>)
  }
}
export default PriceFilter;
