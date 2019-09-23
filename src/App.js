import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Filters from './components/Filters';
import Items from './components/Items';
import './App.css';

class App extends React.Component {i
  constructor() {
    super();
    this.state = {
                  type: [],
                  rarity: [],
                  tag: [],
                  attunement:[] 
    };

    this.checkFilters = this.checkFilters.bind(this);
  }

  checkFilters (filters) { 
    const { type, rarity, tag, attunement} = filters;
    
    this.setState({
      "type": [type],
      "rarity": [rarity],
      "tag": [tag],
      "attunement": [attunement]
    });
}

  render() {
    
    return (
      <div className="App">
        <Header />
        <Search />
        <Filters checkFilters={this.checkFilters} />
        <Items itemsToShow={this.state} />
      </div>
    );
  }
}

export default App;
