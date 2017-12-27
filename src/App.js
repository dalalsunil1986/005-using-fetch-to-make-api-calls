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
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch('https://student-example-api.herokuapp.com/v1/facts', {
      method: 'get'
    }).then(resp => resp.json())
      .then(json => this.setState({
        facts: json.facts
      }))
  }

  handleChange(e) {
    this.setState({ newFact: e.target.value })
  }

  handleSubmit() {
    fetch('https://student-example-api.herokuapp.com/v1/facts', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        fact: {
          text: this.state.newFact
        }
      })
    }).then(resp => resp.json())
      .then(json => {
        if (json.errors) return alert(JSON.stringify(json.errors))
        this.setState({
          newFact: '',
          facts: [
            ...this.state.facts,
            json.fact
          ],
        })
      })
  }

  render() {
    return (
      <div>
        <Facts
          facts={this.state.facts}
          newFact={this.state.newFact}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default App
