import React, { Component } from 'react'

export default class Button extends Component {

  handleClick = (btnClick, text) => {
    btnClick(text);
  }  
  render() {
      const { text } = this.props;
    return (
            <div className="calculator__button" onClick={this.handleClick.bind(this,this.props.btnClick, text)}>{this.props.text}</div>
    )
  }
}
