import React, { Component } from 'react'
import ContactInfo from './ContactInfo'
import EducationInfo from './EducationInfo'
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
      ]
    }

    this.handleChangeContact = this.handleChangeContact.bind(this)
    this.handleChangeEducation = this.handleChangeEducation.bind(this)
    this.deleteEducation = this.deleteEducation.bind(this)
    this.addEducation = this.addEducation.bind(this)
    this.changeMode = this.changeMode.bind(this)
  }

  handleChangeContact(name, value) {
    this.setState(state => {
      const newContact = { ...state.contact }
      newContact[name] = value
      return { contact: newContact }
    })
  }

  handleChangeEducation(name, value, index) {
    this.setState(state => {
      const newEducation = [...state.education]
      newEducation[index][name] = value
      return { education: newEducation }
    })
  }

  addEducation() {
    this.setState(state => {
      const newEducation = state.education.concat({
        degree: '',
        program: '',
        university: '',
        start: '',
        end: ''
      })
      return { education: newEducation }
    })
  }

  deleteEducation(index) {
    this.setState(state => {
      const { education } = state
      const newEducation = [...education.slice(0, index), ...education.slice(index + 1)]
      return { education: newEducation }
    })
  }

  changeMode(mode) {
    this.setState({ mode })
  }

  render() {
    const { mode, contact, education } = this.state

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
        <form className="body-info" onSubmit={e => e.preventDefault()}>
          <h1 className="section-title">Contact Information</h1>
          <ContactInfo contact={contact} handleChange={this.handleChangeContact} changeMode={this.changeMode} />
        </form>
      )
    } else if (mode === 'education') {
      return (
        <form className="body-info" onSubmit={e => e.preventDefault()}>
          <h1 className="section-title">Education</h1>
          <EducationInfo
            education={education}
            handleChange={this.handleChangeEducation}
            addEducation={this.addEducation}
            deleteEducation={this.deleteEducation}
            changeMode={this.changeMode}
          />
        </form>
      )
    }
  }
}

export default Body
