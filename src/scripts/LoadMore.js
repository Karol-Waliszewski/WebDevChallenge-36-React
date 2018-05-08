import React, {Component} from 'react';

import backArrow from '../assets/002-back.svg';
import nextArrow from '../assets/001-next.svg';

class Pagination extends Component {
  componentDidMount() {
    this.more = this.props.more || 12;
  }

  render() {
    var {
      props
    } = this;

    return (
      (props.more < props.onPage)
      ? (
        <button className="loadmore" onClick={() => {
              props.loadMore(this.more)
            }}>
            Load More
          </button>
      )
      : '');
  }
}

export default Pagination;
