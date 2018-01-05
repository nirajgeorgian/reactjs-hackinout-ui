import React, { Component } from 'react';
import Banner from './components/banner/banner'
import './App.css';
import MainComponent from './components/main/main'

class App extends Component {
  state = {
    skills: [
    ],
    errorMessage: ""
  }
  onInputChange = event => {
    if(this.state.skills.length !== 10) {
      if(this.state.errorMessage !== "") {
        this.setState({
          errorMessage: ""
        })
      }
    }
  }

  handleEnter = value => {
    //    console.log("pressed enter")
    const newElement = value
    let lastId = null
    // console.log(this.state.skills[this.state.skills.length - 1]);
    if (this.state.skills[this.state.skills.length - 1] === undefined) {
      lastId = 1
    } else {
      lastId = this.state.skills[this.state.skills.length - 1].id + 1;
    }
    if (newElement !== "") {
      const newSkill = {
        id: lastId,
        skill: value
      }
      // check if the element exists
      // lets flatten the array with only skill value
      const dodo = this.state.skills.map(skill => {
        return [...Array(skill.skill)]
      })
      let arr1 = [].concat(...dodo)
      const skillIndex = arr1.indexOf(newElement);
      if (skillIndex === -1) {
        if (this.state.skills.length !== 10) {
          const newSkills = [
            ...this.state.skills,
            newSkill
          ]
          this.setState({skills: newSkills})
        } else {
          this.setState({errorMessage: "Only ten skills are allowed. Remove one to add another"})
        }
      } else {
        this.setState({errorMessage: "Skill is already present."})
      }
    } else {
      this.setState({errorMessage: "Field cannot be empty"})
    }
  }
  handleKeyPress = event => {
  // event.preventDefault();
    if (event.key === 'Enter') {
      event.preventDefault()
      this.handleEnter(event.target.value)
      event.target.value = ""
    }
  }

  handleSubmit = event => {
    const currForm = event.target
    const currValue = currForm.querySelector("input").value
    this.handleEnter(currValue);
    currForm.querySelector("input").value = ""
    event.preventDefault()
  }

  handleRemoveElement = event => {
    const parentElement = event.target.parentElement.parentElement
    const currValue = parentElement.getAttribute("value");
    const newState = this.state.skills.filter(skill => {
      return skill.skill !== currValue
    })
    this.setState({
      skills: newState
    })
    // console.log(parentElement.getAttribute("value"));
  }
  handleErrorMessage = event => {
    this.setState({
      errorMessage: ""
    })
  }
  finalClick = event => {
    event.preventDefault()
    const dodo = this.state.skills.map(skill => {
      return [...Array(skill.skill)]
    })
    let arr1 = [].concat(...dodo)
    console.log(arr1);
  }
  render() {
    let errorDiv = null;
    if(this.state.errorMessage !== "") {
      errorDiv = <p id="errorMessage">{this.state.errorMessage}</p>;
    }
    return (
      <div className="App">
        <MainComponent
          handleKeyPress = {this.handleKeyPress}
          onInputChange = {this.onInputChange}
          handleErrorMessage = {this.handleErrorMessage}
          errorDiv = {errorDiv}
          skills = {this.state.skills}
          handleRemoveElement = {this.handleRemoveElement}
          finalClick = {this.finalClick}
          handleSubmit = {this.handleSubmit}
        />
      <Banner />
      </div>
    );
  }
}

export default App;
