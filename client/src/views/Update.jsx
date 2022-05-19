import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import AuthorForm from '../components/AuthorForm'

const Update = () => {
    const [author, setAuthor] = useState("")
    const [loaded, setLoaded] = useState(false)
    const [errors, setErrors] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res => {
            setAuthor(res.data.name)
            setLoaded(true)
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
            <Link to="/">Home</Link>
            <p>Edit this Author:</p>
            {loaded && <AuthorForm submit={submitHandler} errors={errors} propsName={author} />}
        </div>
    )
}

export default Update