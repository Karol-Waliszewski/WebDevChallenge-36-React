import React, {Component} from 'react';

// Images
import slider1 from '../../assets/slider-1.jpg';
import slider2 from '../../assets/slider-2.jpg';

class Header extends Component {
  render() {
    return (<header className="header">
      <div className="slider">
        <div className="slider__wrapper">
          <div className="slider__wrapper--image">
            <button className="slider__button--left"/>
            <img className="slider__image current" src={slider1} alt="flower in flowerpot"/>
            <img className="slider__image" src={slider2} alt="alt"/>
            <button className="slider__button--right"/>
          </div>
          <div className="slider__wrapper--text">
            <h2 className="slider__heading">Sky Planet</h2>
            <a href="#" className="slider__subheading">Shop now</a>
          </div>
          <p className="slider__status">1
            <span className="italic"> of </span>
            3
          </p>
        </div>
      </div>
    </header>);
  }
}

export default Header;
