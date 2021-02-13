import React, { Component } from 'react'
import { inputType, makePlaceHolder, containerClass } from '../utils/inputUtils'
import '../styles/InputField.css'

class InputField extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    if (this.props.section === 'contact') {
      this.props.handleChange(e.target.name, e.target.value)
    } else {
      this.props.handleChange(e.target.name, e.target.value, this.props.index)
    }
  }

  render() {
    const { value, name } = this.props
    const label = name[0].toUpperCase() + name.slice(1)

    if (name !== 'phone') {
      return (
        <div className={containerClass(name)}>
          <label className="input-label">{label}</label>
          <input
            className="input-box"
            type={inputType(name)}
            value={value}
            name={name}
            onChange={this.handleChange}
            placeholder={makePlaceHolder(name)}
          />
        </div>
      )
    } else {
      return (
        <div className="input-container">
          <label className="input-label">{label}</label>
          <input
            className="input-box"
            type="tel"
            value={value}
            name={name}
            onChange={this.handleChange}
            placeholder={makePlaceHolder(name)}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
        </div>
      )
    }
  }
}

export default InputField
