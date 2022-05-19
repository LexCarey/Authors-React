import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthorForm from '../components/AuthorForm'
import axios from 'axios'

const Create = () => {
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const submitHandler = (e, name) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/authors", {
            name
        })
        .then(res => {
            console.log(res)
            navigate("/")
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
            <h3 style={{color: "purple"}}>Add a new author:</h3>
            <AuthorForm submit={submitHandler} errors={errors} propsName="" />
        </div>
    )
}

export default Create