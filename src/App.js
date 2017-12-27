import React from 'react'
import fetch from 'isomorphic-fetch'

import Facts from './components/facts'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      facts: [],
      newFact: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    fetch("https://student-example-api.herokuapp.com/v1/facts", {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(response => response.json())
      .then(json => {
        this.setState({
          facts: json.facts
        })
      })
  }

  handleChange(e) {
    this.setState({
      newFact: e.target.value
    })
  }

  handleClick() {
    fetch('https://student-example-api.herokuapp.com/v1/facts', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        fact: {
          text: this.state.newFact
        }
      })
    }).then(response => response.json())
      .then(json => {
        this.setState({
          newFact: '',
          facts: [
            ...this.state.facts,
            json.fact
          ]
        })
      })
  }

  render() {
    return (
      <div>
        <Facts
          facts={this.state.facts}
          value={this.state.newFact}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

export default App
