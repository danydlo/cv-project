import InputField from './InputField'
import '../styles/EducationInfo.css'

function EducationInfo(props) {
  const { addEducation, deleteEducation, handleChange, education, changeMode } = props

  const educationArr = education
  const educationInputs = educationArr.map((element, index) => {
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

  return (
    <div>
      <div className="section-container">
        {educationInputs.map((element, index) => {
          if (index === 0) {
            return element
          } else
            return (
              <div className="extradiv two-cols">
                <button className="btn delete-btn two-cols" onClick={() => deleteEducation(index)}>
                  <span className="material-icons">clear</span>
                </button>
                {element}
              </div>
            )
        })}
        <button className="btn add-btn two-cols" onClick={addEducation}>
          <span className="material-icons">add</span>
        </button>
      </div>
      <div className="buttons">
        <button className="button" onClick={() => changeMode('contact')}>
          Back
        </button>
        <button className="button" onClick={() => changeMode('education')}>
          Work
        </button>
      </div>
    </div>
  )
}

export default EducationInfo
