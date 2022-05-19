import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import AuthorForm from '../components/AuthorForm'

const Update = () => {
    const [author, setAuthor] = useState()
    const [errors, setErrors] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res => {
                setAuthor(res.data.name)
        })
        .catch(err => console.log(err))
    }, [])

    const submitHandler = (e, name) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, {
            name
        })
        .then(res => {
            console.log(res)
            navigate(`/`)
        })
        .catch(err => {
            const errorRes = err.response.data.errors
            const errorArr = []
            for (const key of Object.keys(errorRes)) {
                errorArr.push(errorRes[key].message)
            }
            setErrors(errorArr)
        })
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <h3><Link to="/">Home</Link></h3>
            <h3 style={{color: "purple"}}>Edit this Author:</h3>
            {
                author&&
                <AuthorForm submit={submitHandler} errors={errors} propsName={author} />
            }
        </div>
    )
}

export default Update

//<h3>We're sorry, but we could not find the author you are looking for. Would you like to <Link to="/new">add this author</Link> to our database?</h3>