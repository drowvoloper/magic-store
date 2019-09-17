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
    /*if (typeArr 
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
    }*/
    // tags filter
    if (tagArr
      && tagArr.length > 0) {
      let counter = 0;

      for (let i = 0; i < tagArr.length; i++) {
        if (item.tags
          .includes(tagArr[i]
            .replace('-',' ')
            .replace(/\w\S*/g,(txt) => {
              return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}))) // capitalize first letter in a word
        {
          counter++;
        }
      }

  }
    
    //
    return show;
    
}); 
  //console.log(type);

  console.log(showedItems);
  //if(type.length > 0) console.log(type[0].includes('armor'))

  return (
    <div className="app-items">
      <h3>Items</h3>
    </div>
  );
};

export default Items;
