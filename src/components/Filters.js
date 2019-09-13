import React from 'react';

let filters = [];
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
const tags = ['Creation',
              'Healing',
              'Summoning',
              'Teleportation',
              'Damage',
              'Control',
              'Communication',
              'Buff',
              'Social',
              'Debuff',
              'Scrying',
              'Detection',
              'Banishment',
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
              'Belt',
              'Necklace',
              'Jewelry',
              'Wristwear',
              'Headwear',
              'Outerwear',
              'Eyewear',
              'Handwear',
              'Bane',
              'Instrument',
              'Sentient',
              'Tag',
              'Tags',
              'Eldritch Machine',
              'Focus',
              'Negates Difficult Terrain',
              'Artificer',
              'Subclass Feature'
];

function Filters({checkFilters}) {
 
  const handleClick = event => {

    const filter = event.target.value;
    // if filter already exists, remove it
    // otherwise includes this new filter to the array
    if (filters.includes(filter)) {
      filters.splice(filters.indexOf(filter),1);
    } else {
      filters.push(filter);
    }

    // we call the method from App.js
    checkFilters(filters);
    // console.log(filters);
  };

  // Filter for types
  const typeFilter = types.map( type => {
    return (
      <label key={types.indexOf(type)} > 
        <div className="filter-type"> 
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
    )
  });

  // Filter for rarity
  const rarityFilter = rarities.map( rarity => {
    return (
      <label key={rarities.indexOf(rarity)}> 
        <div className="filter-rarity"> 
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
    );
  });

  // Filter for tags
  const tagsFilter = tags.map( tag => {
    return (
      <option 
        key={tags.indexOf(tag)}
        value={tag.toLowerCase().replace(' ','-')}
        onClick={handleClick}
      >
        {tag}
      </option>
    );
  });

  
  return (
    <div className="app-filter">
      <form className="filter-form" id="filterForm" >
        <div className="items-type">
          <h4>Type:</h4>
          {typeFilter}
        </div>
        <hr/>
        <div className="items-rarity">
          <h4>Rarity:</h4>
          {rarityFilter}
        </div>
        <hr/>
        <div className="items-tags">
          <h4>Tags:</h4>
          <select name="tags" form="filterForm">
            {tagsFilter}
          </select>
        </div>
        <hr/>
        <div className="items-attunement">
          <h4>Attunement:</h4>
          <label>
            <input 
              type="checkbox" 
              name="attunement" 
              value="yes" 
              onClick={handleClick}
            />
            <p>Yes</p>
          </label>
          <label>
            <input 
              type="checkbox" 
              name="attunement" 
              value="no" 
              onClick={handleClick}
            />
            <p>No</p>
          </label>
          </div>
        </form>
      </div>
  );
};

export default Filters;
