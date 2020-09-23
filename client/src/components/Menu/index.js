import React, { useState } from 'react';
import MenuItem from './MenuItem';

//items must be an array of objects with id and text properties. example:[{_id:1, name:'someText'}]
//ulClass is the css class for inner ul html tag.
//liClass is the css class for inner li html tag.
//liClassClicked is the css class to add to inner li html tag when it is clicked.
function Menu({ items, ulClass, liClass, liClassClicked }) {
    const [clickedItemId, setClickedItemId] = useState(1);
    function clickHandler(id) {
        setClickedItemId(id);
    }
    return <ul className={ulClass}>
        {items.map((item) => <MenuItem key={item._id} liClass={liClass + (item._id === clickedItemId ? ' '+liClassClicked : '')} item={item} clickHandler={clickHandler} />)}
    </ul>
}

export default Menu;