import React from 'react';
import Menu from './components/Menu';
import './App.css';


function App() {
    const categories = [{_id:1,name:'All'},{_id:2,name:'Music'},{_id:3,name:'Sport'},{_id:4,name:'Theater'},{_id:5,name:'Festival'}];
    const items = categories.map((category) => {return {id:category._id,text:category.name}});
    return <div>
        <Menu items={items} ulClass="category-menu" liClass="category-item" liClassClicked="category-item-clicked"/>
    </div>
}

export default App;