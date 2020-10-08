import React from 'react';
import api from '../../api'
import ListItem from '../ListDisplay'
import Modal from '../profileGaide'


const TableRow = ({ guides }) => {
    return (
        guides.map(guide =>
                <ListItem src={guide.pic}
                    name={guide.first_name+ ' ' + guide.last_name}
                    country={guide.country}
                    lang={ guide.Language}
                    cost={guide.cost}
                    summary={guide.summary}
                    email={guide.Email}
                    // com  = {guide.comments.map((com)=>(
                    //     com.comments                 
                    // ))}
                    // date  = {guide.comments.map((date)=>(
                    //     date.comments                 
                    // ))}

                     path='/services'
                     />

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