import React, { Component } from 'react'
import ContactInfo from './ContactInfo'
import EducationInfo from './EducationInfo'
import WorkInfo from './WorkInfo'
import '../styles/Body.css'

class Body extends Component {
  constructor() {
    super()

    this.state = {
      mode: 'start',
      contact: {
        name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        email: '',
        phone: '',
        website: ''
      },
      education: [
        {
          degree: '',
          program: '',
          university: '',
          start: '',
          end: ''
        }
      ],
      work: [
        {
          title: '',
          company: '',
          start: '',
          end: '',
          summary: ''
        }
      ]
    }

    this.handleChange = this.handleChange.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.changeMode = this.changeMode.bind(this)
  }

  handleChange(section, name, value, index = 0) {
    this.setState(state => {
      if (section === 'contact') {
        const newContact = { ...state.contact }
        newContact[name] = value
        return { contact: newContact }
      } else if (section === 'education') {
        const newEducation = [...state.education]
        newEducation[index][name] = value
        return { education: newEducation }
      } else {
        const newWork = [...state.work]
        newWork[index][name] = value
        return { work: newWork }
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
      } else {
        const newWork = state.work.concat({
          title: '',
          start: '',
          end: '',
          bullets: ''
        })
        return { work: newWork }
      }
    })
  }

  deleteItem(section, index) {
    this.setState(state => {
      if (section === 'education') {
        const { education } = state
        const newEducation = [...education.slice(0, index), ...education.slice(index + 1)]
        return { education: newEducation }
      } else {
        const { work } = state
        const newWork = [...work.slice(0, index), ...work.slice(index + 1)]
        return { work: newWork }
      }
    })
  }

  changeMode(mode) {
    this.setState({ mode })
  }

  render() {
    const { mode, contact, education, work } = this.state

    if (mode === 'start') {
      return (
        <div className="body-info">
          <button className="start-btn" onClick={() => this.changeMode('contact')}>
            START
          </button>
        </div>
      )
    } else if (mode === 'contact') {
      return (
        <div className="body-info">
          <h1 className="section-title">Contact Information</h1>
          <ContactInfo contact={contact} handleChange={this.handleChange} changeMode={this.changeMode} />
        </div>
      )
    } else if (mode === 'education') {
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
    } else if (mode === 'work') {
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
    }
  }
}

export default Body
