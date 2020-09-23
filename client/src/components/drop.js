import React, { useState } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

function Dropdown() {
    const data = [
        { category: 'Music', id: 1 },
        { category: 'soccer', id: 2 },
        { category: 'basketball', id: 3 }
    ]

    const [options] = useState(data);

    return (
        <div style={{ width: "90%", justifyContent: "center", display: "flex" }}>
            <div className="Dropdown" >
                <h3 style={{ color: "black" }}> More categories</h3>
                <Multiselect options={options} displayValue="Country" />
            </div>
        </div>
    )
}
export default Dropdown;
