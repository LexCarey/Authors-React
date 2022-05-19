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
                <Input value={name} setOnChange={setName} />
                <BackButton />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AuthorForm