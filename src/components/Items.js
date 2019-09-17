import React from 'react';
const items = require('../magicItems.json');

function Items({itemsToShow}) {

  const { type, rarity, tag, attunement } = itemsToShow;
  const typeArr = type[0];
  const rarityArr = rarity[0];
  const tagArr = tag[0];
  const attunementArr = attunement[0];
  const showedItems = items.filter( item => {
    
    let show = true;

    // type filter
    if (typeArr 
      && typeArr.length > 0 
      && typeArr.includes(item.type
      .toLowerCase().replace(' ','-')) === false ) {
      show = false;
    }
    // rarity filter
    if (rarityArr 
      && rarityArr.length > 0 
      && rarityArr.includes(item.rarity
      .toLowerCase().replace(' ','-')) === false) {
      show = false;
    }
    // tags filter
    if (tagArr
      && tagArr.length > 0) {
      tagArr.forEach( tag => {
        if (!item.tags.includes(tag
          .replace('-',' ')
          .replace(/\w\S*/g, (text) => {            // Capitalize
            return text.charAt(0).toUpperCase()     // First
              + text.substr(1).toLowerCase();}))) { // Letter
          show = false;
        }
      });
    }
    return show;
}); 

  console.log(showedItems);

  return (
    <div className="app-items">
      <h3>Items</h3>
    </div>
  );
};

export default Items;
