import InputField from './InputField'

function ContactInfo(props) {
  const { changeMode, handleChange, contact } = props

  const contactEntries = Object.entries(contact)
  const inputs = contactEntries.map(input => (
    <InputField section="contact" value={input[1]} name={input[0]} handleChange={handleChange} key={input[0]} />
  ))

  return (
    <div>
      <div className="section-container">{inputs}</div>
      <div className="buttons">
        <button className="button" onClick={() => changeMode('start')}>
          Back
        </button>
        <button className="button" onClick={() => changeMode('education')}>
          Education
        </button>
      </div>
    </div>
  )
}

export default ContactInfo
