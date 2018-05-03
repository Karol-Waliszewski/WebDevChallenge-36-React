import React, {Component} from 'react';
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
      products: this.products,
      //filter:{},
      filteredProducts: this.products,
      gridSize: 'medium'
    };
    // Easier binding
    this.filterBy = this.filterBy.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.setGridSize = this.setGridSize.bind(this);
    this.toggleFavourite = this.toggleFavourite.bind(this);
  }

  resetFilter() {
    this.setState({filteredProducts: this.products});
  }

  filterBy(key, value) {
    let filtered = this.products.filter(product => product[key] === value);
    this.setState({filteredProducts: filtered});
  }

  // FOR FILTER STACKING
  // filter() {
  //   for (key in this.state.filter) {
  //     let filtered = this.products.filter(product => product[key] === this.state.filter[key]);
  //     this.setState({filteredProducts: filtered});
  //   }
  // }

  toggleFavourite(id) {

    console.log(id)
  }

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

  render() {
    var {
      state
    } = this;
    return (<div className="shop">
      <Sidebar>
        <Categories products={this.products} filterBy={this.filterBy} resetFilter={this.resetFilter}/>
        <hr className="sidebar__line"/>
        <Filter>
          <PriceFilter/>
          <ColorFilter/>
          <StandardFilter property="size" heading="size" products={this.products} filterBy={this.filterBy}/>
          <StandardFilter property="brand" heading="brands" products={this.products} filterBy={this.filterBy}/>
        </Filter>
        <hr className="sidebar__line"/>
        <Tags products={this.products}/>
      </Sidebar>
      <Main>
        <Sort results={state.filteredProducts.length} setGridSize={this.setGridSize}/>
        <Products gridSize={state.gridSize} products={state.filteredProducts.sort(this.sortNew)} toggleFavourite={this.toggleFavourite}/>
      </Main>
    </div>);
  }
}

export default App;
