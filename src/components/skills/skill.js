import React, { Component } from 'react'
import errorSvg from '../../error.svg'


export default class Skill extends Component {
  render() {
    const {
			skill,
      onclick
		} = this.props
    return (
        <div className="skillOutput" draggable="true">
          <small className="outputSkill" value={skill}>
            {skill}
            <span onClick={onclick}>
              <img src={errorSvg} title="remove" height="20" className="crossIcon" alt=""/>
            </span>
          </small>
        </div>
    )
  }
}
