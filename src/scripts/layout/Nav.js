import React, {Component} from 'react';

// Images
import logo from '../../assets/Logo.png';
import cart from '../../assets/Cart.png';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      expand: false
    };
  }

  toggleExpand() {
    this.setState({
      expand: !this.state.expand
    });
  }

  render() {
    return (<nav className={(this.state.expand)
        ? "navigation expand"
        : "navigation"}>
      <div className="navigation__main">
        <button className="navigation__hamburger" onClick={this.toggleExpand.bind(this)}>☰</button>
        <h1 className="navigation__logo">
          <img src={logo} alt="Mainson's logo"/>
          <span>Maison</span>
        </h1>
        <button className="navigation__cart">
          <img src={cart} alt="Shopping cart"/>
        </button>
      </div>
      <ul className="navigation__links">
        <li>
          <a href="#" className="navigation__link">Home</a>
        </li>
        <li>
          <a href="#" className="navigation__link active">Shop</a>
        </li>
        <li>
          <a href="#" className="navigation__link">Journal</a>
        </li>
        <li>
          <a href="#" className="navigation__link">Elemens</a>
        </li>
        <li>
          <a href="#" className="navigation__link">Pages</a>
        </li>
        <li>
          <a href="#" className="navigation__link">
            <img src={cart} alt="Shopping cart"/>
          </a>
        </li>
      </ul>
    </nav>);
  }
}

export default Nav;
