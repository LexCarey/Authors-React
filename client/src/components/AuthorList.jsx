import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AuthorList = (props) => {
    const { list, updateList } = props
    const navigate = useNavigate()

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
            <table style={{margin: "0 auto"}}>
                <thead>
                    <tr>
                        <th>Authors</th>
                        <th colSpan={2}>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((entry, i) => 
                            <tr key={i}>
                                <td style={{color: "purple"}}>{entry.name}</td>
                                <td><button onClick={() => navigate(`/edit/${entry._id}`)}>Edit</button></td>
                                <td><button onClick={() => deleteAuthor(entry._id)}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList