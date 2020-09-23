import React, { Component } from 'react'

export default class BookCard extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.book.title}</h1>
                <p>{this.props.book.des}</p>
            </div>
        )
    }
}
