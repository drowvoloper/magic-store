import React from 'react';
import filterItems from './showItems.js';

function Items({itemsToShow}) {

const showItems = filterItems(itemsToShow);

  return (
  <div className="app-items">
    { showItems }
    
  </div>
 );
};

export default Items;
