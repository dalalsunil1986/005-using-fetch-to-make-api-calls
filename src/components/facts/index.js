import React from 'react'

export default function Facts(props) {
  return props.facts.length > 0
    ? (
      <div>
        <div>
          <input
            type='text'
            value={props.newFact}
            onChange={props.handleChange}
          />
          <button
            onClick={props.handleSubmit}
          >Create</button>
        </div>
        <ul>
          {
            props.facts.map(fact =>
              <li key={fact.id}>{fact.text}</li>)
          }
        </ul>
      </div>
    ) : <span>Loading facts from server...</span>
}