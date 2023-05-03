import React, { Component } from 'react'

export default class FinalOrder extends Component {
  render() {
    return (
      <div className="">
        <h1>Final Order</h1>
        <div className="card p-2">
          {this.props.selections.map((s, i) => (
            <p key={i}>{s}</p>
          ))}
        </div>
        <button className="btn btn-secondary mt-4">
          Click me if youar ready
        </button>
      </div>
    )
  }
}
