import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {
    const { id, list, updateList } = props

    const deleteAuthor = () => {
        console.log(id)
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then(res => {
            const updatedList = list.filter((entry) => entry._id !== id)
            updateList(updatedList)
        })
        .catch(err => console.log(err))
    }

    return <button className='btn btn-danger' onClick={deleteAuthor}>Delete</button>
}

export default DeleteButton