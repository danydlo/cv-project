import React, { Component, useState } from 'react'
import { PDFViewer } from '@react-pdf/renderer'
//components
import ContactInfo from './ContactInfo'
import EducationInfo from './EducationInfo'
import WorkInfo from './WorkInfo'
import SkillsInfo from './SkillsInfo'
import PDF from './PDF'
//data and assets
import { contact, education, work, skills } from '../data/data'
import { formatValue } from '../utils/bodyUtils'
import '../styles/Body.css'

function Body() {
  const [mode, setMode] = useState('Start')
  const [section, setSection] = useState({ contact, education, work, skills })
  let body = null

  const handleChange = (sectionName, name, value, index = 0, key = '') => {
    let newSection = null
    if (sectionName === 'contact') {
      newSection = { ...section[sectionName] }
      newSection[name] = value
    } else if (sectionName === 'skills') {
      newSection = [...section[sectionName]]
      newSection[index] = value
    } else {
      newSection = [...section[sectionName]]
      newSection[index][name] = key === 'Enter' ? formatValue(value) : value
    }
    setSection(prevState => ({ ...prevState, [sectionName]: newSection }))
  }

  const addItem = sectionName => {
    let newSection = null
    if (sectionName === 'education') {
      newSection = section[sectionName].concat({
        degree: '',
        program: '',
        university: '',
        start: '',
        end: ''
      })
    } else if (sectionName === 'work') {
      newSection = section[sectionName].concat({
        title: '',
        company: '',
        start: '',
        end: '',
        bullets: '\u2022 '
      })
    } else {
      newSection = section[sectionName].concat('')
    }
    setSection(prevState => ({ ...prevState, [sectionName]: newSection }))
  }

  const deleteItem = (sectionName, index) => {
    const oldSection = section[sectionName]
    const newSection = [...oldSection.slice(0, index), ...oldSection.slice(index + 1)]
    setSection(prevState => ({ ...prevState, [sectionName]: newSection }))
  }

  const changeMode = newMode => setMode(newMode)

  if (mode === 'Start') {
    body = (
      <div className="body-info">
        <button className="start-btn" onClick={() => changeMode('Contact')}>
          START
        </button>
      </div>
    )
  } else if (mode === 'Contact') {
    body = (
      <div className="body-info">
        <h1 className="section-title">Contact Information</h1>
        <ContactInfo contact={section.contact} handleChange={handleChange} changeMode={changeMode} />
      </div>
    )
  } else if (mode === 'Education') {
    body = (
      <div className="body-info">
        <h1 className="section-title">Education</h1>
        <EducationInfo
          education={section.education}
          handleChange={handleChange}
          addEducation={addItem}
          deleteEducation={deleteItem}
          changeMode={changeMode}
        />
      </div>
    )
  } else if (mode === 'Work') {
    body = (
      <div className="body-info">
        <h1 className="section-title">Work Experience</h1>
        <WorkInfo
          work={section.work}
          handleChange={handleChange}
          addWork={addItem}
          deleteWork={deleteItem}
          changeMode={changeMode}
        />
      </div>
    )
  } else if (mode === 'Skills') {
    body = (
      <div className="body-info">
        <h1 className="section-title">Add Skills</h1>
        <SkillsInfo
          skills={section.skills}
          handleChange={handleChange}
          addSkill={addItem}
          deleteSkill={deleteItem}
          changeMode={changeMode}
        />
      </div>
    )
  } else if (mode === 'Preview') {
    body = (
      <div className="preview">
        <PDFViewer width="900px" height="750px">
          <PDF contact={section.contact} education={section.education} work={section.work} skills={section.skills} />
        </PDFViewer>
        <div className="buttons">
          <button className="button" onClick={() => changeMode('Skills')}>
            Skills
          </button>
        </div>
      </div>
    )
  }

  return body
}

export default Body
