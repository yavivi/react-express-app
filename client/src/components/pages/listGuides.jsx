import React from 'react';
import api from '../../api'
import ListItem from '../ListDisplay';
import Search from '../search'


// const TableRow= ({rows})=>{
//     return(
//         rows.map(cell =>
//             <ListItem  src='../pictures/eliran.jpeg'
//             text={cell.first_name+' '+cell.last_name}
//             // text2={cell.last_name}
        
//             label={cell.country+' '+' only in '+cell.cost+'$ for a tour' }
//             path='/services'/>
          
//     )
// )
//         }


class List extends React.Component {

    
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         guides:[]
    //     }
    // }
    // componentDidMount = async () => {
    //     await api.getAllGuides().then(res=>{
    //         this.setState({
    //             guides: res.data.data
    //         })
    //     })
    // }
    render() {
        return(
            <Search/>
        )
        // const{guides:guides}=this.state
        // return (
        //    <table>
        //        <h2 >
        //         The best tour guides !
        //        </h2>
        //        {guides ? <TableRow rows={guides}/>:' '}
        //    </table>
            
        // )
    // }
}
}
export default List;