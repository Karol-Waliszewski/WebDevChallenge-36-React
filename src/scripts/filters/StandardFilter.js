import React, {Component} from 'react';

class StandardFilter extends Component {

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getItems(products) {
    let productItems = products.filter(product => product[this.props.property]).map(product => product[this.props.property]).sort();
    let items = {};
    for (let item of productItems) {
      items[item] = (items[item] || 0) + 1;
    }
    return items;
  }

  renderItems(items) {
    let renderedItems = [];
    for (let item in items) {
      renderedItems.push(<li className="sidebar__item" key={item} onClick={() => {
          this.props.filterBy(this.props.property, item);
        }}>
        {this.capitalizeFirstLetter(item)}
        <span className="sidebar__badge">{items[item]}</span>
      </li>);
    }
    return renderedItems;
  }

  render() {
    var list = this.renderItems(this.getItems(this.props.products));
    return (<div>
      <h5 className="sidebar__subHeading">{this.capitalizeFirstLetter(this.props.heading)}</h5>
      <ul className="sidebar__list">
        {
          list.length > 0
            ? list
            : (<li className="sidebar__item">No {this.props.heading}.</li>)
        }
      </ul>
    </div>)
  }
}

export default StandardFilter;
