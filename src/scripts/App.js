import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import MediaQuery from 'react-responsive';

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
import Pagination from './Pagination';
import Products from './Products';
import LoadMore from './LoadMore';

// JSON
const ProductsArray = require('../products.json');

class App extends Component {
  constructor() {
    super();
    this.products = ProductsArray.map((product, index) => Object.assign({
      ID: index
    }, product));
    this.sortings = {
      'A-Z': this.sortAlphabetical,
      'Z-A': this.sortAlphabeticalReverse,
      'Newest': this.sortNew,
      'Favourite': this.sortFavourite
    }
    this.state = {
      filteredProducts: this.products,
      gridSize: 'medium',
      currentPage: 1,
      productsOnPage: 12,
      sortBy: 'Newest'
    };
    // Easier binding
    //  this.filterBy = this.filterBy.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.setGridSize = this.setGridSize.bind(this);
    this.toggleFavourite = this.toggleFavourite.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.setSorting = this.setSorting.bind(this);
    this.changePage = this.changePage.bind(this);
    this.loadMore = this.loadMore.bind(this);
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
      this.changePage(match.params.page)
    }
  }

  resetFilter() {
    this.setState({filteredProducts: this.products});
    this.changePage(1);
    this.combineUrl({query: ' ', path: '/'});
    this.scrollToShop();
  }

  setFilter(key, value) {
    this.filterBy(key, value);
    this.changePage(1);
    this.combineUrl({query: `?${key}=${value}`, path: '/'});

  }

  filterBy(key, value) {
    let filtered = this.products.filter(product => {
      if (!product[key]) {
        return false;
      }
      3
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

    if (!query)
      query = location.search || '';

    if (!path)
      path = location.pathname | '';

    this.props.history.push({search: query, pathname: path});
  }

  scrollToShop() {
    var $shop = document.querySelector('.shop');
    if ($shop) {
      if (window.scrollY > $shop.offsetTop + 150) {
        $shop.scrollIntoView({behavior: 'smooth', block: "start"});
      } else if (window.scrollY === 0) {
        $shop.scrollIntoView(true);
      }
    }
  }

  toggleFavourite(id) {
    console.log(id)
  }

  // Sortings
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

  sortFavourite(a, b) {
    if (a.isFavourite && b.isFavourite)
      return 0;
    if (a.isFavourite && !b.isFavourite)
      return -1;
    if (!a.isFavourite && b.isFavourite)
      return 1;
    return this.sortAlphabetical(a, b);
  }

  sortAlphabetical(a, b) {
    return a.name.toLowerCase() < b.name.toLowerCase()
      ? -1
      : a.name.toLowerCase() > b.name.toLowerCase()
        ? 1
        : 0;
  }
  sortAlphabeticalReverse(a, b) {
    return b.name.toLowerCase() < a.name.toLowerCase()
      ? -1
      : b.name.toLowerCase() > a.name.toLowerCase()
        ? 1
        : 0;
  }

  setSorting(sorting) {
    this.setState({sortBy: sorting});
  }

  setGridSize(size) {
    this.setState({gridSize: size});
  }

  loadMore(more) {
    this.setState({
      productsOnPage: this.state.productsOnPage + Number(more)
    });
  }

  changePage(page) {
    var curr = Number(page);
    curr = (curr < 1)
      ? 1
      : curr;
    this.setState({currentPage: curr});
    this.combineUrl({
      path: `/${ (curr == 1)
        ? ''
        : curr}`
    });
    this.scrollToShop();
  }

  render() {
    var {
      state,
      props
    } = this;

    var lastPage = Math.ceil(state.filteredProducts.length / state.productsOnPage);

    return (<div className="shop">
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

        <Sort gridSize={state.gridSize} productsOnPage={state.productsOnPage} results={state.filteredProducts.length} setGridSize={this.setGridSize} startIndex={state.currentPage} sortBy={state.sortBy} sortings={this.sortings} setSorting={this.setSorting}/>
        <MediaQuery query="(min-device-width: 1024px)">
          <Pagination currentPage={state.currentPage} lastPage={lastPage} changePage={this.changePage}/>
        </MediaQuery>
        <Products productsOnPage={state.productsOnPage} gridSize={state.gridSize} products={state.filteredProducts.sort(this.sortings[state.sortBy].bind(this))} toggleFavourite={this.toggleFavourite} startIndex={state.currentPage}/>
        <MediaQuery query="(min-device-width: 1024px)">
          <Pagination currentPage={state.currentPage} lastPage={lastPage} changePage={this.changePage}/>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1023px)">
          <LoadMore more={state.productsOnPage} loadMore={this.loadMore} onPage={state.filteredProducts.length}/>
        </MediaQuery>
      </Main>
    </div>);
  }
}

export default withRouter(App);
