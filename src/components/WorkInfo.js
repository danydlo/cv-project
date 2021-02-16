import InputField from './InputField'
import '../styles/Sections.css'

function WorkInfo(props) {
  const { addWork, deleteWork, handleChange, work, changeMode } = props

  const workInputs = work.map((element, index) => {
    const work = Object.entries(element)
    return work.map(input => (
      <InputField
        section="work"
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
        {workInputs.map((element, index) => {
          if (index === 0) {
            return element
          } else {
            return (
              <div className="extradiv two-cols">
                <button className="btn delete-btn two-cols" onClick={() => deleteWork('work', index)}>
                  <span className="material-icons">clear</span>
                </button>
                {element}
              </div>
            )
          }
        })}
        <button className="btn add-btn two-cols" onClick={() => addWork('work')}>
          <span className="material-icons">add</span>
        </button>
      </div>
      <div className="buttons">
        <button className="button" onClick={() => changeMode('education')}>
          Back
        </button>
        <button className="button" onClick={() => changeMode('skills')}>
          Skills
        </button>
      </div>
    </div>
  )
}

export default WorkInfo
