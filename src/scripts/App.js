import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';

// Components
import Sidebar from './Sidebar';
import Categories from './Categories';
import Filter from './Filter';
import StandardFilter from './filters/StandardFilter';
import PriceFilter from './filters/PriceFilter';
import ColorFilter from './filters/ColorFilter';
import Tags from './Tags';
import Main from './Main';
import Sort from './Sort';
import Products from './Products';

// JSON
const ProductsArray = require('../products.json');

class App extends Component {
  constructor() {
    super();
    this.products = ProductsArray.map((product, index) => Object.assign({
      ID: index
    }, product));
    this.state = {
      filteredProducts: this.products,
      gridSize: 'medium',
      currentPage: 1
    };
    // Easier binding
    //  this.filterBy = this.filterBy.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.setGridSize = this.setGridSize.bind(this);
    this.toggleFavourite = this.toggleFavourite.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  componentDidMount() {
    var {
      location,
      match
    } = this.props;
    if (location.search) {
      var qs = require('qs');
      var filter = qs.parse(location.search.slice(1, location.search.length));
      for (let key in filter) {
        this.filterBy(key, filter[key]);
      };
    }

    if (match.params.page) {
      this.setState({currentPage: match.params.page});
    }
  }

  resetFilter() {
    this.setState({filteredProducts: this.products});
    this.combineUrl({query: ' ', path: '/'});
    this.scrollToShop();
  }

  setFilter(key, value) {
    this.filterBy(key, value);
    this.combineUrl({query: `?${key}=${value}`, path: '/'});
  }

  filterBy(key, value) {
    let filtered = this.products.filter(product => {
      if (!product[key]) {
        return false;
      }

      if (Array.isArray(product[key])) {
        return product[key].includes(value);
      }

      return (product[key].toLowerCase() === value.toLowerCase());
    });
    this.setState({filteredProducts: filtered});

    this.scrollToShop();
  }

  combineUrl({query, path}) {
    var {
      location
    } = this.props;
    console.log(query)
    if (!query)
      query = location.search;

    if (!path)
      query = location.pathname;

    this.props.history.push({search: query, pathname: path});
  }

  scrollToShop() {
    var $shop = document.querySelector('.shop');
    if (window.scrollY > $shop.offsetTop + 150) {
      $shop.scrollIntoView({behavior: 'smooth', block: "start"});
    } else if (window.scrollY === 0) {
      $shop.scrollIntoView(true);
    }
  }

  toggleFavourite(id) {
    console.log(id)
  }

  // TODO remove items swapping
  sortNew(a, b) {
    if (a.isNew && b.isNew)
      return 0;
    if (a.isNew && !b.isNew)
      return -1;
    if (!a.isNew && b.isNew)
      return 1;

    return 0;
  }

  setGridSize(size) {
    this.setState({gridSize: size});
  }

  changePage(value) {
    var curr = Number(this.state.currentPage) + Number(value);
    curr = (curr < 1)
      ? 1
      : curr;
    this.setState({currentPage: curr});
    this.combineUrl({path:`/${curr}`});
    this.scrollToShop();
  }

  render() {
    var {
      state,
      props
    } = this;

    return (<Router>
      <Switch>
        <Route path="/" render={() => (<div className="shop">
            <Sidebar>
              <Categories products={this.products} filterBy={this.setFilter} resetFilter={this.resetFilter}/>
              <hr className="sidebar__line"/>
              <Filter>
                <PriceFilter/>
                <ColorFilter/>
                <StandardFilter property="size" heading="size" products={this.products} filterBy={this.setFilter}/>
                <StandardFilter property="brand" heading="brands" products={this.products} filterBy={this.setFilter}/>
              </Filter>
              <hr className="sidebar__line"/>
              <Tags products={this.products} filterBy={this.setFilter}/>
            </Sidebar>
            <Main>
              <Sort results={state.filteredProducts.length} setGridSize={this.setGridSize} startIndex={state.currentPage}/>
              <Products gridSize={state.gridSize} products={state.filteredProducts.sort(this.sortNew)} toggleFavourite={this.toggleFavourite} startIndex={state.currentPage}/>
              <button onClick={()=>{this.changePage(-1)}}>back</button>
              <button onClick={()=>{this.changePage(1)}}>next</button>
            </Main>
          </div>)}/>
      </Switch>
    </Router>);
  }
}

export default withRouter(App);
