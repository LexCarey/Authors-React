import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {
    const { id, list, updateList } = props

    const deleteAuthor = (AuthorId) => {
        console.log(AuthorId)
        axios.delete(`http://localhost:8000/api/authors/${AuthorId}`)
        .then(res => {
            const updatedList = list.filter((entry) => entry._id !== AuthorId)
            updateList(updatedList)
        })
        .catch(err => console.log(err))
    }

    return (
    <div>
        <button className='btn btn-danger' onClick={() => deleteAuthor(id)}>Delete</button>
    </div>
    )
}

export default DeleteButton