import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Filters from './components/Filters';
import Items from './components/Items';
import Footer from './components/Footer';
import './App.css';

const items = require('./magicItems.json');

class App extends React.Component {
  state = {
    items: []
  };

  checkFilters (filters) { 
    const filteredItems = items.filter( item => {
      const iType = item.type.toLowerCase().replace(' ','-');
      const iRarity = item.rarity.toLowerCase().replace(' ','-');

      return filters.includes(iType)
        //filters.includes(item.rarity.toLowerCase().replace(' ','-'))
        //filters.includes(item.tags.toLowerCase().replace(' ','-'))
      // ) 
    });

    console.log(filteredItems);
      }

  render() {
    //console.log(items);
    return (
      <div className="App">
        <Header />
        <Search />
        <Filters checkFilters={this.checkFilters} />
        <Items />
        <Footer />
      </div>
    );
  }
}

export default App;
