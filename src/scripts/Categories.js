import React, {Component} from 'react';

class Categories extends Component {

  getCategories(products) {
    let productCategories = products.map(product => product.category);
    productCategories.sort();
    let categories = {};
    for (let category of productCategories) {
      categories[category] = (categories[category] || 0) + 1;
    }
    return categories;
  }

  renderCategories(categories) {
    let renderedCategories = [];
    for (let category in categories) {
      renderedCategories.push(<li className="sidebar__item" key={category} onClick={() => {
          this.props.filterBy('category', category)
        }}>
        {category}
        <span className="sidebar__badge">{categories[category]}</span>
      </li>);
    }
    return renderedCategories;
  }

  render() {
    var categories = this.renderCategories(this.getCategories(this.props.products));
    return (<div id="categories" className="sidebar__categories">
      <h4 className="sidebar__heading">Categories</h4>
      <ul className="sidebar__list">
        <li className="sidebar__item" onClick={this.props.resetFilter}>
          All products
          <span className="sidebar__badge">{this.props.products.length}</span>
        </li>
        {
          categories.length > 0
            ? categories
            : (<li className="sidebar__item">No categories.</li>)
        }
      </ul>
    </div>)
  }
}

export default Categories;
