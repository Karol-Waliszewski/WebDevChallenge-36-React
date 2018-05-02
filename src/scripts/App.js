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

// Images
import humidifierImage from '../assets/product-1.jpg';
import scissorsImage from '../assets/product-2.jpg';
import watchImage from '../assets/product-3.jpg';
import sweeperImage from '../assets/product-4.jpg';
import bulbImage from '../assets/product-5.jpg';
import teapotImage from '../assets/product-6.jpg';

class App extends Component {
  constructor() {
    super();
    this.products = [
      {
        name: "Bottle Humidifier",
        price: 69,
        image: humidifierImage,
        isNew: true,
        category: 'Dining',
        brand: 'Braun',
        size: 'medium',
        tags: ['White', 'Accessories']
      }, {
        name: "Flower Scissors",
        price: 159.99,
        image: scissorsImage,
        category: 'Living',
        brand: 'Banshu Hamono',
        size: 'small',
        tags: ['Black', 'Accessories']
      }, {
        name: "Grey Watch",
        price: 215,
        image: watchImage,
        category: 'Accessories',
        brand: 'Henry Wilson',
        size: 'small',
        tags: ['Minimalism', 'Grey', 'Accessories']
      }, {
        name: "Sweeper and Funnel",
        price: 59,
        image: sweeperImage,
        isFavourite: true,
        category: 'Technics',
        brand: 'Elevenplus',
        size: 'medium',
        tags: ['Simple', 'White', 'Black']
      }, {
        name: "White Bulb",
        price: 349,
        image: bulbImage,
        category: 'Lighting',
        brand: 'Banshu Hamono',
        size: 'medium',
        tags: ['Simple', 'White']
      }, {
        name: "Teapot",
        price: 55,
        image: teapotImage,
        category: 'Furniture',
        brand: 'Field',
        size: 'medium',
        tags: ['Simple', 'Minimalism', 'Black']
      }
    ]
    this.state = {
      filteredProducts: this.products
    }
    // Easier binding
    this.filterBy = this.filterBy.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
  }

  resetFilter() {
    this.setState({filteredProducts: this.products});
  }

  filterBy(key, value) {
    let filtered = this.products.filter(product => product[key] === value);
    this.setState({filteredProducts: filtered});
  }

  render() {
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
        <Sort/>
        <Products products={this.state.filteredProducts}/>
      </Main>
    </div>);
  }
}

export default App;
