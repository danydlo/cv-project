import InputField from './InputField'
import '../styles/EducationWorkInfo.css'

function SkillsInfo(props) {
  const { addSkill, deleteSkill, handleChange, skills, changeMode } = props

  const skillsInputs = skills.map((element, index) => (
    <InputField section="skills" index={index} value={element} name="skill" handleChange={handleChange} key={element} />
  ))
  return (
    <div>
      <div className="section-container">{skillsInputs}</div>
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
