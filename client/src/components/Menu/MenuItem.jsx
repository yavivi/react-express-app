import React from 'react';

function MenuItem({liClass, item, clickHandler}) {
    return <li className={liClass} onClick={() => clickHandler(item.id)}>
        {item.text}
    </li>
}

export default MenuItem;