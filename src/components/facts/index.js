import React from 'react'

export default function Facts(props) {
  return (
    <div>
      <input
        type="text"
        onChange={props.handleChange}
        value={props.value}
      />
      <button
        onClick={props.handleClick}
      >Submit new fact</button>
      <ul>
        {
          props.facts.map(fact =>
            <li>{fact.text}</li>)
        }
      </ul>
    </div>
  )
}