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
            <Link to="/new">Add an author</Link>
            <p style={{color: "purple"}}>We have quotes by:</p>
            {Authors.length>0 && <AuthorList list={Authors} updateList={setAuthors} />}
        </div>
    )
}

export default Main