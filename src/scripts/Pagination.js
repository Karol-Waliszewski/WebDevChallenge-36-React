import React, {Component} from 'react';

import backArrow from '../assets/002-back.svg';
import nextArrow from '../assets/001-next.svg';

class Pagination extends Component {

  renderButton(index) {
    return (<li key={index}>
      <button className={(
          index == this.props.currentPage)
          ? "pagination__link active"
          : "pagination__link"} onClick={() => {
          this.props.changePage(index)
        }}>{
          (index < 10)
            ? '0' + index
            : index
        }</button>
    </li>);
  }

  render() {
    var {
      props
    } = this;

    var pages = [];
    if (props.currentPage < 3) {
      for (let i = 1; i <= 5; i++) {
        if (i <= props.lastPage) {
          pages.push(this.renderButton(i));
        }
      }
    } else if (props.currentPage >= props.lastPage - 2) {
      for (let i = props.lastPage - 4; i <= props.lastPage; i++) {
        if (i >= 1) {
          pages.push(this.renderButton(i));
        }
      }
    } else {
      for (let i = props.currentPage - 2; i <= props.currentPage + 2; i++) {
        pages.push(this.renderButton(i));
      }
    }

    return (<div className="pagination">
      <ol className="pagination__links">
        {/* <li>
          <button className="pagination__link" onClick={() => {
              props.changePage(props.currentPage - 1)
            }}>
            <img src={backArrow} alt="back arrow"/>
          </button>
        </li>*/
        }
        {pages}
        {/*<li>
          <button class="pagination__link" onClick={() => {
              props.changePage(props.currentPage + 1)
            }}>
            <img src={nextArrow} alt="next arrow"/>
          </button>
        </li>*/
        }
      </ol>
    </div>);
  }
}

export default Pagination;
