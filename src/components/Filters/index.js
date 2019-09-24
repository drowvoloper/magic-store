import React from 'react';

let filters = {
                type: [],
                rarity: [],
                tag: [],
                attunement: []
};
const types = [ 'Armor',
                'Potion',
                'Ring',
                'Rod',
                'Scroll',
                'Staff',
                'Wand',
                'Weapon',
                'Wondrous Item'
];
const rarities = ['Uncommon',
                  'Rare',
                  'Very Rare',
                  'Legendary'
];
const tags = [
              'Healing',
              'Summoning',
              'Teleportation',
              'Damage',
              'Control',
              'Communication',
              'Buff',
              'Debuff',
              'Scrying',
              'Detection',
              'Movement',
              'Utility',
              'Exploration',
              'Combat',
              'Shapechanging',
              'Deception',
              'Warding',
              'Container',
              'Consumable',
              'Cursed',
              'Footwear',
              'Jewelry',
              'Wristwear',
              'Headwear',
              'Outerwear',
              'Bane',
              'Artificer',
];

function Filters({checkFilters}) {
 
  const handleClick = event => {

    const filter = event.target.value;
    const name = event.target.name;
    // if filter already exists, remove it
    // otherwise includes this new filter to the array
    if (filters[name].includes(filter)) {
      filters[name].splice(filters[name].indexOf(filter),1);
      event.target.parentNode.classList.remove('selected');
    } else {
      filters[name].push(filter);
      event.target.parentNode.classList.add('selected');
    }
    // we call the method from App.js
    checkFilters(filters);
  };

  // Filter for types
  const typeFilter = types.map( type => {
    return (
      <li key={types.indexOf(type)} className="disabled">
      <label> 
        <div className="filter type"> 
          <input 
            type="checkbox" 
            name="type"
            value={type.toLowerCase().replace(' ','-')} 
            className="filter-checkbox"
            onClick={handleClick}
          /> 
          <p>{type}</p> 
        </div> 
      </label>
      </li>
    )
  });

  // Filter for rarity
  const rarityFilter = rarities.map( rarity => {
    return (
      <li key={rarities.indexOf(rarity)} className="disabled">
      <label> 
        <div className="filter rarity"> 
          <input 
            type="checkbox" 
            name="rarity" 
            value={rarity.toLowerCase().replace(' ','-')} 
            className="filter-checkbox" 
            onClick={handleClick} 
          /> 
          <p>{rarity}</p>
        </div>
      </label>
    </li>
    );
  });

  // Filter for tags
  const tagsFilter = tags.map( tag => {
    return (
      <li key={tags.indexOf(tag)} className="disabled">
      <label>
        <div className="filter tags">
          <input
            type="checkbox"
            name="tag"
            value={tag.toLowerCase()}
            className="filter-checkbox"
            onClick={handleClick}
          />
          <p>{tag}</p>
        </div>
      </label>
    </li>
    );
  });

  // Display filters
  const displayHandler = event => {

    const displayElements = event.target.nextSibling.childNodes;
console.log(displayElements);
    event.target.classList.contains('active')
      ? event.target.classList.remove('active')
      : event.target.classList.add('active');

    displayElements.forEach( element => {
      element.classList.contains('disabled')
        ? element.classList.remove('disabled') 
        : element.classList.add('disabled');
    });
  }

  
  return (
    <div className="app-filter">
      <form className="filter-form" id="filterForm" >
        <div>
        <h4 className="filter-btn" onClick={displayHandler}>Type</h4>
        <ul className="items-filter">
          {typeFilter}
        </ul>
      </div>
      <div>
        <h4 className="filter-btn" onClick={displayHandler}>Rarity</h4>
        <ul className="items-filter">
          {rarityFilter}
        </ul>
      </div>
      <div>
        <h4 className="filter-btn" onClick={displayHandler}>Tags</h4>
        <ul className="items-filter">
          {tagsFilter}
        </ul>
      </div>
      <div>
        <h4 className="filter-btn" onClick={displayHandler}>Attunement</h4>
        <ul className="items-filter">
          <li className="disabled">
          <label>
            <div className="filter">
              <input
                className="filter-checkbox"
                type="checkbox" 
                name="attunement" 
                value={true} 
                onClick={handleClick}
              />
              <p>Yes</p>
            </div>
          </label>
        </li>
        <li className="disabled">
          <label>
            <div className="filter">
              <input 
                className="filter-checkbox"
                type="checkbox" 
                name="attunement" 
                value={false} 
                onClick={handleClick}
              />
              <p>No</p>
            </div>
          </label>
        </li>
      </ul>
    </div>
        </form>
      </div>
  );
};

export default Filters;
