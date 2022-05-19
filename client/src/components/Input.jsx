import React from 'react'

const Input = (props) => {
    const { value, setOnChange, label } = props
    return (
    <div className='input-group flex-nowrap' style={{width: "500px", margin: "0 auto 10px"}}>
        <span className='input-group-text'  >{label}: </span>
        <input className='form-control' type="text" value={value} onChange={e => setOnChange(e.target.value)} />
    </div>
    )
}

export default Input