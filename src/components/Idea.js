import React, { Component } from 'react'

class Idea extends Component {


	render () {
		return(
		  <div className="tile">
		    <h4 onClick={this.handleClick}>{this.props.idea.title}</h4>
		    <p onClick={this.handleClick}>{this.props.idea.body}</p>
		  </div>
		)
	}
}

export default Idea