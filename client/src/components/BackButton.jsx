import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
        <button type="button" className='btn btn-danger' onClick={goBack}>Cancel</button>
    )
}

export default BackButton