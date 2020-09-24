import React, { useState } from 'react';
import MenuItem from './MenuItem';
import classNames from 'classnames';

//items must be an array of objects with id and text properties. example:[{_id:1, name:'someText'}]
//ulClass is the css class for inner ul html tag.
//liClass is the css class for inner li html tag.
//liClassClicked is the css class to add to inner li html tag when it is clicked.
function Menu({ items, ulClass, liClass, liClassClicked, onItemClicked }) {
    const [clickedItemId, setClickedItemId] = useState('1');
    function clickHandler(id) {
        setClickedItemId(id);
        onItemClicked(id);
    }
    // classNames({liClass : true, liClassClicked : item._id === clickedItemId})
    // liClass + (item._id === clickedItemId ? ' '+liClassClicked : '')
    return <ul className={ulClass}>
        {items.map((item) => <MenuItem key={item._id} liClass={classNames({[liClass] : true, [liClassClicked] : item._id === clickedItemId})} item={item} clickHandler={clickHandler} />)}
    </ul>
}

export default Menu;