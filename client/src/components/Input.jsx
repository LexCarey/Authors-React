import React from 'react'

const Input = (props) => {
    const { value, setOnChange } = props
    return (
    <div>
        <input type="text" value={value} onChange={e => setOnChange(e.target.value)} />
    </div>
    )
}

export default Input