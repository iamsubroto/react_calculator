import React, { Component } from 'react'
import Button from './Button'

export default class Buttons extends Component {
  render() {
    return (
      <React.Fragment>
            <Button className="calculator__button" text="7" btnClick={this.props.btnClick} />
            <Button className="calculator__button" text="8" btnClick={this.props.btnClick} />
            <Button className="calculator__button" text="9" btnClick={this.props.btnClick} />
            <Button className="calculator__button" text="/" btnClick={this.props.btnClick} />
            <Button className="calculator__button" text="4" btnClick={this.props.btnClick} />
            <Button className="calculator__button" text="5" btnClick={this.props.btnClick} />
            <Button className="calculator__button" text="6" btnClick={this.props.btnClick} />
            <Button className="calculator__button" text="-" btnClick={this.props.btnClick} />
            <Button className="calculator__button" text="1" btnClick={this.props.btnClick} />
            <Button className="calculator__button" text="2" btnClick={this.props.btnClick} />
            <Button className="calculator__button" text="3" btnClick={this.props.btnClick} />
            <Button className="calculator__button" text="x" btnClick={this.props.btnClick} />
            <Button className="calculator__button" text="AC" btnClick={this.props.btnClick} />
            <Button className="calculator__button" text="0" btnClick={this.props.btnClick} />
            <Button className="calculator__button" text="=" btnClick={this.props.btnClick} />
            <Button className="calculator__button" text="+" btnClick={this.props.btnClick} />
      </React.Fragment>
    )
  }
}
