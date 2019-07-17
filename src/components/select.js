import React from 'react'

export default function Input(props) {
  const handleChange = event => {
    const value = event.target.value
    props.handleUserAction(value)
  }
  return (
    <div className="flex flex-column justify-center items-start">
      {props.label}
      <div className="flex justify-center items-center mt3 h2 ba bw1 b--dark">
        <select
          className="b--transparent bg-transparent fw3 w-100 color-inherit outline-transparent"
          type={props.type}
          value={props.value}
          onChange={handleChange}
        >
          {props.children}
        </select>
      </div>
    </div>
  )
}
