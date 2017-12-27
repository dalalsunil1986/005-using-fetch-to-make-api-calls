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
  }

  handleChange(e) {
    this.setState({ newFact: e.target.value })
  }

  handleSubmit() {
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
