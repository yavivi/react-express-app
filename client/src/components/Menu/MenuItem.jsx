import React from 'react';

function MenuItem({liClass, item, clickHandler}) {
    return <li className={liClass} onClick={() => clickHandler(item._id)}>
        {item.name}
    </li>
}

export default MenuItem;