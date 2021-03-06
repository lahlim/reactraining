import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
  getStyle = () => {
      return {
          background: '#d3d3d3',
          padding: '10px',
          borderBottom: '1px black dotted',
          textDecoration: this.props.todo.completed ?
          'line-through' : 'none'
      }
  }


  
    render() {
        const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
      <p>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> 
        {' '}
        {title}
        </p>
      </div>
    )
  }
}


Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default Todoitem
