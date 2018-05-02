import React, {Component} from 'react';

class Filter extends Component {
  render() {
    return (
      <div id="filter" className="filter">
        <h4 className="sidebar__heading">Filter by</h4>
        {this.props.children}
      </div>)
  }
}
export default Filter;
