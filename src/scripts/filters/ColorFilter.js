import React, {Component} from 'react';

class ColorFilter extends Component {
  render() {
    return (<div>
      <h5 className="sidebar__subHeading">Color</h5>
      <div className="sidebar__colorPicker">
        <button className="colorPick" style={{
            background: '#c7c7c7'
          }}/>
        <button className="colorPick active" style={{
            background: '#fff',
            borderWidth: 2,
            color: '#222'
          }}/>
        <button className="colorPick" style={{
            background: '#ff8b8b'
          }}/>
        <button className="colorPick" style={{
            background: '#b2e6fe'
          }}/>
        <button className="colorPick" style={{
            background: '#beffc9'
          }}/>
      </div>
    </div>)
  }
}
export default ColorFilter;
