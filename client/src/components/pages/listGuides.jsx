import React from 'react';
import api from '../../api'
import ListItem from '../ListDisplay'
import Modal from '../profileGaide'


const TableRow = ({ rows }) => {
    return (
        rows.map(cell =>
            <div>
                <ListItem src={cell.pic}
                    text={cell.first_name + ' ' + cell.last_name}
                    country={' '+cell.country}
                    cost={' '+cell.cost+'$'}   
                    summery={cell.summery}
                    com  = {cell.comments.map((com)=>(
                        com.text
                    ))}
                    date  = {cell.comments.map((date)=>(
                        date.date
                    ))}
       />
            </div>
        )
    )
}
class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            guides: []
        }
    }
    componentDidMount = async () => {
        await api.getAllGuides().then(res => {
            this.setState({
                guides: res.data.data
            })
        })
    }
    render() {
        const { guides: guides } = this.state
        return (
            <div>
                <h2 >
                    The best tour guides !
                </h2>
                <ul>
                    {guides ? <TableRow guides={guides} /> : ' '}
                </ul>
            </div>


        )
    }
}
export default List;