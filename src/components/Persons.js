import React, { Component } from "react"
import OnePerson from "./OnePerson"
export default class Persons extends Component {

    render() {
        return (
            <ul className="list-group">
                { this.props.persons.map((p,index) => {
                    return (<OnePerson key={index} person={p} />)
                }) }
            </ul>
        )
    }
}

