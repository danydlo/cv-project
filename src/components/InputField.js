import { inputType, makePlaceHolder, containerClass } from '../utils/inputUtils'
import '../styles/InputField.css'

function InputField({ value, name, section, handleChange, index }) {
  let input = null
  const label = name === 'skill' ? '' : name[0].toUpperCase() + name.slice(1)

  const onChange = e => {
    const { name, value, checked } = e.target
    if (name === 'end' && checked) handleChange(section, name, 'present', index)
    else handleChange(section, name, value, index)
  }

  const onKeyPress = e => {
    const { name, value } = e.target
    if (e.key === 'Enter') e.preventDefault()
    handleChange(section, name, value, index, e.key)
  }

  if (name === 'bullets') {
    input = (
      <div className={containerClass(name)}>
        <label className="input-label">{label}</label>
        <textarea
          className="input-textarea"
          value={value}
          name={name}
          onKeyPress={onKeyPress}
          onChange={onChange}
          placeholder={makePlaceHolder(name)}
        />
      </div>
    )
  } else if (name === 'end') {
    input = (
      <div className={containerClass(name)}>
        <div className="end-div">
          <label className="input-label">{label}</label>
          <div>
            <input type="checkbox" name="end" onChange={onChange} />
            <label className="input-label">Present</label>
          </div>
        </div>
        <input
          className="input-box"
          type={value === 'present' ? 'text' : inputType(name)}
          readOnly={value === 'present' ? true : false}
          value={value === 'on' ? '' : value}
          name={name}
          onChange={onChange}
          placeholder={makePlaceHolder(name)}
        />
      </div>
    )
  } else {
    input = (
      <div className={containerClass(name)}>
        <label className="input-label">{label}</label>
        <input
          className="input-box"
          type={inputType(name)}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={makePlaceHolder(name)}
        />
      </div>
    )
  }

  return input
}

export default InputField
