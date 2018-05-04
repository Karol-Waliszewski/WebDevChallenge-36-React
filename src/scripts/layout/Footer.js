import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (<footer className="footer">
      <span className="footer__rights">© 2017 Mainson. All rights reserved</span>
      <nav className="navigation--footer">
        <ul className="navigation__links">
          <li>
            <a href="#" className="navigation__link">Shop</a>
          </li>
          <li>
            <a href="#" className="navigation__link">Journal</a>
          </li>
          <li>
            <a href="#" className="navigation__link">About Us</a>
          </li>
          <li>
            <a href="#" className="navigation__link">Contact</a>
          </li>
        </ul>
      </nav>
    </footer>);
  }
}

export default Footer;
