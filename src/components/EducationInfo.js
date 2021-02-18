import InputField from './InputField'
import ChangeMode from './ChangeMode'
import '../styles/Sections.css'

function EducationInfo({ addEducation, deleteEducation, handleChange, education, changeMode }) {
  const educationInputs = education.map((element, index) => {
    const education = Object.entries(element)
    return education.map(input => (
      <InputField
        section="education"
        index={index}
        value={input[1]}
        name={input[0]}
        handleChange={handleChange}
        key={index + input[0]}
      />
    ))
  })

  const addButton = educationInputs.map((element, index) => {
    if (index === 0) {
      return (
        <div className="extradiv two-cols" key={'education' + index}>
          {element}
        </div>
      )
    } else
      return (
        <div className="extradiv two-cols" key={'education' + index}>
          <button className="btn delete-btn two-cols" onClick={() => deleteEducation('education', index)}>
            <span className="material-icons">clear</span>
          </button>
          {element}
        </div>
      )
  })

  return (
    <div>
      <div className="section-container">
        {addButton}
        <button className="btn add-btn two-cols" onClick={() => addEducation('education')}>
          <span className="material-icons">add</span>
        </button>
      </div>
      <ChangeMode back="Contact" next="Work" changeMode={changeMode} />
    </div>
  )
}

export default EducationInfo
