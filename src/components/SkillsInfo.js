import InputField from './InputField'
import '../styles/Sections.css'

function SkillsInfo(props) {
  const { addSkill, deleteSkill, handleChange, skills, changeMode } = props

  const skillsInputs = skills.map((element, index) => (
    <div className="skills-div" key={index}>
      <InputField section="skills" index={index} value={element} name="skill" handleChange={handleChange} />
      <button className="btn delete-btn" onClick={() => deleteSkill('skills', index)}>
        <span className="material-icons">clear</span>
      </button>
    </div>
  ))
  return (
    <div>
      <div className="section-container">
        {skillsInputs}
        <button className="btn add-btn skills-btn two-cols" onClick={() => addSkill('skills')}>
          Add Skill
        </button>
      </div>
      <div className="buttons">
        <button className="button" onClick={() => changeMode('work')}>
          Back
        </button>
        <button className="button" onClick={() => changeMode('preview')}>
          Preview
        </button>
      </div>
    </div>
  )
}

export default SkillsInfo
