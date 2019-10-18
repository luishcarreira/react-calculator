import React, { Component } from 'react';

export class Button extends Component {
  render() {
    return <input type="button" className={`button ${this.props.className}`} value={this.props.value} onClick={this.props.onClick} />
  }
}