import InputField from './InputField'
import ChangeMode from './ChangeMode'
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
      <ChangeMode back="Work" next="Preview" changeMode={changeMode} />
    </div>
  )
}

export default SkillsInfo
