import React from 'react';

// this package helps to highlight text which matches item names
const reactStringReplace = require('react-string-replace');

const items = require('../data/magicItems.json');
const itemNames = items.map( item => {
  return item.name;
});

const findMatches = (text,itemNames) => {
  return itemNames.filter( item => {
    
    const regex = new RegExp(text, 'gi');
    return item.match(regex);
  });
};

const displayMatches = (text) => {
  const matchArray = findMatches(text, itemNames);
  const html = matchArray.map( item => {
    
      return (
        <li key={matchArray.indexOf(item)} className="suggested-item">
          <p className="item-name" key={matchArray.indexOf(item)}>
            {reactStringReplace(item,text, (match,i) => (
              <span key={i} className="highlight">{match}</span>
            ))}
          </p>
        </li>
      );
  });

  return html;
};

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      list: null
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    const suggestions = e.target.value 
      ? displayMatches(e.target.value)
      : null;

    this.setState(
      {value: [e.target.value],
        list: [suggestions]}
    );
  }
  
  render() {
  return (
    <div className="app-search">
      <form className="search-form" >
        <input 
          type="search" 
          value={this.state.value}
          placeholder="Enter item.." 
          className="search-input"
          onChange={this.handleChange}
        /> 
      </form>
      <ul className="suggested-items">
        {this.state.list}
      </ul>
    </div>
  );}
};

export default Search;
