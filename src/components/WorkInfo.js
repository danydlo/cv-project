import InputField from './InputField'
import ChangeMode from './ChangeMode'
import '../styles/Sections.css'

function WorkInfo({ addWork, deleteWork, handleChange, work, changeMode }) {
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

  const addButton = workInputs.map((element, index) => {
    if (index === 0) {
      return (
        <div className="extradiv two-cols" key={'work' + index}>
          {element}
        </div>
      )
    } else {
      return (
        <div className="extradiv two-cols" key={'work' + index}>
          <button className="btn delete-btn two-cols" onClick={() => deleteWork('work', index)}>
            <span className="material-icons">clear</span>
          </button>
          {element}
        </div>
      )
    }
  })

  return (
    <div>
      <div className="section-container">
        {addButton}
        <button className="btn add-btn two-cols" onClick={() => addWork('work')}>
          <span className="material-icons">add</span>
        </button>
      </div>
      <ChangeMode back="Education" next="Skills" changeMode={changeMode} />
    </div>
  )
}

export default WorkInfo
