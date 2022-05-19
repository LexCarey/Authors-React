import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AuthorList from '../components/AuthorList'

const Main = () => {
    const [Authors, setAuthors] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
        .then(res => setAuthors(res.data))
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>Favorite Authors</h1>
            <h3><Link to="/new">Add an author</Link></h3>
            <h3 style={{color: "purple"}}>We have quotes by:</h3>
            {Authors.length>0 && <AuthorList list={Authors} updateList={setAuthors} />}
        </div>
    )
}

export default Main