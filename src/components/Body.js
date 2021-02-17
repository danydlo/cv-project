import React, { Component } from 'react'
import { data } from '../data/data'
import ContactInfo from './ContactInfo'
import EducationInfo from './EducationInfo'
import WorkInfo from './WorkInfo'
import SkillsInfo from './SkillsInfo'
import PDF from './PDF'
import { formatValue } from '../utils/bodyUtils'
import { PDFViewer } from '@react-pdf/renderer'
import '../styles/Body.css'

class Body extends Component {
  constructor() {
    super()

    this.state = {
      mode: 'Start',
      contact: data.contact,
      education: data.education,
      work: data.work,
      skills: data.skills
    }

    this.handleChange = this.handleChange.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.changeMode = this.changeMode.bind(this)
  }

  handleChange(section, name, value, index = 0, key = '') {
    this.setState(state => {
      if (section === 'contact') {
        const newContact = { ...state[section] }
        newContact[name] = value
        return { contact: newContact }
      } else if (section === 'skills') {
        const newSkills = [...state.skills]
        newSkills[index] = value
        return { skills: newSkills }
      } else {
        const newSection = [...state[section]]
        newSection[index][name] = key === 'Enter' ? formatValue(value) : value
        return { [section]: newSection }
      }
    })
  }

  addItem(section) {
    this.setState(state => {
      if (section === 'education') {
        const newEducation = state.education.concat({
          degree: '',
          program: '',
          university: '',
          start: '',
          end: ''
        })
        return { education: newEducation }
      } else if (section === 'work') {
        const newWork = state.work.concat({
          title: '',
          company: '',
          start: '',
          end: '',
          bullets: '\u2022 '
        })
        return { work: newWork }
      } else {
        const newSkills = state.skills.concat('')
        return { skills: newSkills }
      }
    })
  }

  deleteItem(section, index) {
    this.setState(state => {
      const oldSection = state[section]
      const newSection = [...oldSection.slice(0, index), ...oldSection.slice(index + 1)]
      return { [section]: newSection }
    })
  }

  changeMode(mode) {
    this.setState({ mode })
  }

  render() {
    const { mode, contact, education, work, skills } = this.state

    if (mode === 'Start') {
      return (
        <div className="body-info">
          <button className="start-btn" onClick={() => this.changeMode('Contact')}>
            START
          </button>
        </div>
      )
    } else if (mode === 'Contact') {
      return (
        <div className="body-info">
          <h1 className="section-title">Contact Information</h1>
          <ContactInfo contact={contact} handleChange={this.handleChange} changeMode={this.changeMode} />
        </div>
      )
    } else if (mode === 'Education') {
      return (
        <div className="body-info">
          <h1 className="section-title">Education</h1>
          <EducationInfo
            education={education}
            handleChange={this.handleChange}
            addEducation={this.addItem}
            deleteEducation={this.deleteItem}
            changeMode={this.changeMode}
          />
        </div>
      )
    } else if (mode === 'Work') {
      return (
        <div className="body-info">
          <h1 className="section-title">Work Experience</h1>
          <WorkInfo
            work={work}
            handleChange={this.handleChange}
            addWork={this.addItem}
            deleteWork={this.deleteItem}
            changeMode={this.changeMode}
          />
        </div>
      )
    } else if (mode === 'Skills') {
      return (
        <div className="body-info">
          <h1 className="section-title">Add Skills</h1>
          <SkillsInfo
            skills={skills}
            handleChange={this.handleChange}
            addSkill={this.addItem}
            deleteSkill={this.deleteItem}
            changeMode={this.changeMode}
          />
        </div>
      )
    } else if (mode === 'Preview') {
      return (
        <div className="preview">
          <PDFViewer width="900px" height="750px">
            <PDF contact={contact} education={education} work={work} skills={skills} />
          </PDFViewer>
          <div className="buttons">
            <button className="button" onClick={() => this.changeMode('Skills')}>
              Skills
            </button>
          </div>
        </div>
      )
    }
  }
}

export default Body