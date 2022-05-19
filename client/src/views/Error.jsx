import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div style={{width: "600px", margin: "0 auto"}}>
            <h1>Favorite Authors</h1>
            <h5>We're sorry, but we could not find the author you are looking for. Would you like to <Link to="/new">add this author</Link> to our database?</h5>
            <h5><Link to="/">Home</Link></h5>
        </div>
    )
}

export default Error