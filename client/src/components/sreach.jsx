// import React, { useState, useEffect } from 'react'


// const Search = () => {
//     const [inputValue, setInputValue] = useState('');

//     const handleOnChange = (e) => {
//         setInputValue(e.target.value)
//     }

//     const getcities = async () => {
//         const getdata = await fetch(`'http://loclhost:3001/api/search'`)
//         const data = await getdata.json();
//         console.log('data: ', data)
//     }

//     useEffect(() => {
//         getcities()
//       }, []);

//     return (
//         <div class="search" >
//             <h1>
//                 lets start searching...
//                 </h1>
//             <input type='text' value={inputValue} onChange={handleOnChange} />


//         </div>
//     );
// }

// export default Search;