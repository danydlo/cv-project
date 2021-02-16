import React, { Component } from 'react'
import { inputType, makePlaceHolder, containerClass } from '../utils/inputUtils'
import '../styles/InputField.css'

class InputField extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleChange(e) {
    const { section, handleChange, index } = this.props
    const { name, value, checked } = e.target
    if (name === 'end' && checked) handleChange(section, name, 'present', index)
    else handleChange(section, name, value, index)
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') e.preventDefault()
    const { section, handleChange, index } = this.props
    const { name, value } = e.target
    handleChange(section, name, value, index, e.key)
  }

  render() {
    const { value, name } = this.props
    const label = name[0].toUpperCase() + name.slice(1)

    if (name === 'phone') {
      return (
        <div className={containerClass(name)}>
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
    } else if (name === 'bullets') {
      return (
        <div className={containerClass(name)}>
          <label className="input-label">{label}</label>
          <textarea
            className="input-textarea"
            value={value}
            name={name}
            onKeyPress={this.handleKeyPress}
            onChange={this.handleChange}
            placeholder={makePlaceHolder(name)}
          />
        </div>
      )
    } else if (name === 'end') {
      return (
        <div className={containerClass(name)}>
          <div className="end-div">
            <label className="input-label">{label}</label>
            <div>
              <input type="checkbox" name="end" onChange={this.handleChange} />
              <label className="input-label">Present</label>
            </div>
          </div>
          <input
            className="input-box"
            type={value === 'present' ? 'text' : inputType(name)}
            readOnly={value === 'present' ? true : false}
            value={value === 'on' ? '' : value}
            name={name}
            onChange={this.handleChange}
            placeholder={makePlaceHolder(name)}
          />
        </div>
      )
    } else {
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
    }
  }
}

export default InputField
