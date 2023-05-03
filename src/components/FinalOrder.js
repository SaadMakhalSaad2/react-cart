import React, { Component } from 'react'

export default class FinalOrder extends Component {
  render() {
    const selectionsHtml = []
    for (let key in this.props.selections) {
      selectionsHtml.push(<span>{this.props.selections[key]}</span>)
    }

    return (
      <div className="">
        <h1>Final Order</h1>
        <div className="card p-2">{
            selectionsHtml
        }</div>
        <button className="btn btn-secondary mt-4">
          Click me if youar ready
        </button>
      </div>
    )
  }
}
