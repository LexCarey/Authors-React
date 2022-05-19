import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import DeleteButton from './DeleteButton'

const AuthorList = (props) => {
    const { list, updateList } = props
    const navigate = useNavigate()

    return (
        <div style={{width: "700px", margin: "0 auto"}}>
            <table className='table table-striped' style={{margin: "0 auto"}}>
                <thead>
                    <tr>
                        <th>Authors</th>
                        <th colSpan={2}>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.sort((a, b) => a.name.localeCompare(b.name)).map((entry, i) => 
                            <tr key={i}>
                                <td style={{color: "purple"}}><h3>{entry.name}</h3></td>
                                <td><button className='btn btn-success' onClick={() => navigate(`/edit/${entry._id}`)}>Edit</button></td>
                                <td><DeleteButton id={entry._id} list={list} updateList={updateList} /></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList