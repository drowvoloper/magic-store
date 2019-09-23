import React from 'react';

const items = require('../magicItems.json');
const img = {};
img.armor = require('../img/armor.jpg');
img.potion = require('../img/potion.jpg');
img.ring = require('../img/ring.jpg');
img.rod = require('../img/rod.jpg');
img.scroll = require('../img/scroll.jpg');
img.staff = require('../img/staff.jpg');
img.wand = require('../img/wand.jpg');
img.weapon = require('../img/weapon.jpg');
img.wondrousitem = require('../img/wondrousitem.jpg');


function Items({itemsToShow}) {

  const { type, rarity, tag, attunement } = itemsToShow;
  const typeArr = type[0];
  const rarityArr = rarity[0];
  const tagArr = tag[0];
  const attunementArr = attunement[0];

  const showItems = items.filter( item => {
    
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
          .replace(/\w\S*/g, (text) => {            // Capitalize
            return text.charAt(0).toUpperCase()     // First
              + text.substr(1).toLowerCase();}))) { // Letter
          show = false;
        }
      });
    }
    // attunement filter
    if (attunementArr
      && attunementArr.length > 0
      && attunementArr.includes(item.attunement) === false) {
      show = false;
    }
    return show;
  });

  const handleClick = event => {
    console.log(event.currentTarget.nextSibling);
    const itemDetails = event.currentTarget.nextSibling;
     itemDetails.classList.remove('disabled') 
  }

  const handleClose = event => {
    const itemDetails = event.currentTarget.parentNode;
    itemDetails.classList.add('disabled');
    console.log(itemDetails);
  }

  const finallyShowedItems = showItems.map( item => {
    return (
      <div 
        className="item" 
        key={item.id}
      >
        <div className="item-list"
             onClick={handleClick}
        >
          <img 
            src={img[item.type.toLowerCase().replace(' ','')]}
            className="item-img" 
            alt="item type"/>
          <p>{item.name}</p>
        </div>
        <div className="details-item disabled">
          <img
            src={img[item.type.toLowerCase().replace(' ','')]}
            className="details-img"
            alt="item type"/>
          <p className="details-name">{item.name}</p>
          <p>({item.type}, {item.rarity})</p>
          <p>Tags: {item.tags}</p>
          <p className="details-description">"{item.description}"</p>
          <p className="close-btn" 
            onClick={handleClose}
          >
            Close</p>
        </div>
      </div>
    );
  });

  return (
  <div className="app-items">
    { finallyShowedItems }
    
  </div>
 );
};

export default Items;
