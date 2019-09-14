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
    const name = event.target.name;
    // if filter already exists, remove it
    // otherwise includes this new filter to the array
    if (filters[name].includes(filter)) {
      filters[name].splice(filters[name].indexOf(filter),1);
    } else {
      filters[name].push(filter);
    }

    // we call the method from App.js
    checkFilters(filters);
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
      <label key={tags.indexOf(tag)}>
        <div className="filter-tag">
          <input
            type="checkbox"
            name="tag"
            value={tag.toLowerCase().replace(' ','-')}
            className="checkbox-tag"
            onClick={handleClick}
          />
          <p>{tag}</p>
        </div>
      </label>
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
          {tagsFilter}
        </div>
        <hr/>
        <div className="items-attunement">
          <h4>Attunement:</h4>
          <label>
            <div className="input-attunement">
              <input 
                type="checkbox" 
                name="attunement" 
                value="yes" 
                onClick={handleClick}
              />
              <p>Yes</p>
            </div>
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
