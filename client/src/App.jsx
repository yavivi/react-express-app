import React, { useEffect, useState } from 'react';
import Menu from './components/Menu';
import './App.css';
import { getAllCategories } from './apis/categoriesApi';

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getAllCategories()
        .then(res => {
            let items = res.data.data;
            items.unshift({_id:1, name:'All'});
            setItems(items);
        })
        .catch(error => console.log(error));
    }, []);
   
    return <div>
        <Menu items={items} ulClass="category-menu" liClass="category-item" liClassClicked="category-item-clicked" />
    </div>
}

export default App;