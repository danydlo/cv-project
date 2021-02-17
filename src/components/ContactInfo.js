import InputField from './InputField'
import ChangeMode from './ChangeMode'

function ContactInfo(props) {
  const { changeMode, handleChange, contact } = props

  const contactEntries = Object.entries(contact)
  const inputs = contactEntries.map(input => (
    <InputField section="contact" value={input[1]} name={input[0]} handleChange={handleChange} key={input[0]} />
  ))

  return (
    <div>
      <div className="section-container">{inputs}</div>
      <ChangeMode back="Start" next="Education" changeMode={changeMode} />
    </div>
  )
}

export default ContactInfo
