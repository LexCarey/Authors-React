import React, { useState } from 'react'
import Input from './Input'
import BackButton from './BackButton'

const AuthorForm = (props) => {
    const { submit, errors, propsName } = props
    const [name, setName] = useState(propsName)

    return (
        <div>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <form onSubmit={(e) => submit(e, name)}>
                <Input value={name} setOnChange={setName} label="Name" />
                <BackButton />
                <button className='btn btn-primary' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AuthorForm

//disabled={name.length<3?true:false}