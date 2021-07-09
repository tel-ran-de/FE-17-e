import React from 'react'
import { useSelector } from 'react-redux'

const PostsList = () => {

    const list = useSelector( state => state.posts )

    const renderList = () => {
        if (!list.length) {
            return (<li className="list-group-item list-group-item-warning">No Records</li>)
        }
        return list.map( item => (
            <li key={item.id} className="list-group-item">
                <div className="card p-3 shadow-lg">
                    <h4 className="card-title">{item.title}</h4>
                    <div className="card-text">
                        {item.body}
                    </div>
                </div>
            </li>
        ) )
    }

    return (
        <ul className="list-group">
            {renderList()}
        </ul>
    )
}

export default PostsList