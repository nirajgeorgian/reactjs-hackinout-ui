import React, { Component } from 'react'
import Skills from '../skills/skills'
import Aux from '../../hoc/Aux'


class MainComponent extends Component {
  render() {
    return (
      <Aux>
        <h2 id="mainHeading">What are your skills?</h2>
        <p id="demoPara">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
        <small>Your skills (Upto 10)</small><br></br>
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" onKeyPress={this.props.handleKeyPress} className="skillsInput" id="inputText" onChange={this.props.onInputChange} name="skill"/>
          <button className="skillsInput" id="addBtn" type="submit">Add</button>
        </form>
        <div onClick={this.props.handleErrorMessage}>
          {this.props.errorDiv}
        </div>
        <Skills
          skills={this.props.skills}
          handleRemoveElement = {this.props.handleRemoveElement}
          moveSkill = {this.moveSkill}
        />
      <button className="continueBtn" onClick={this.props.finalClick}>Continue</button>
      </Aux>
    )
  }
}

export default MainComponent
