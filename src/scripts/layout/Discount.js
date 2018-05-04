import React, {Component} from 'react';

class Discount extends Component {
  render() {
    return (<aside className="discount">
      <div className="discount__content">
        <h3 className="discount__heading">Get Discount 35% off</h3>
        <form className="discount__form">
          <input type="email" placeholder="Enter your email..." className="discount__input"/>
          <input type="submit" defaultValue="Send" className="discount__button"/>
        </form>
      </div>
    </aside>);
  }
}

export default Discount;
