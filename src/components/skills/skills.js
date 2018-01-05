import React from 'react'
import Skill from './skill'
import './skills.css';

class Skills extends React.Component {
  dragStart = event => {
    // console.log("Drag Start");
    this.dragged = event.currentTarget
    event.dataTransfer.effectAllowed = "move"

    // for firefox
    event.dataTransfer.setDate("text/html", event.currentTarget)
  }
  dragEnd = event => {
    // console.log("Drag End");
    this.dragged.style.display = "block"
  }
  dragOver = event => {
    // console.log("Drag Over")
  }
  render() {
    return (
      <div className="output" onDragOver={this.dragOver}>
        {this.props.skills.map((skill, i) => {
          return (
            <Skill
              data-id={i}
              key={skill.skill + i}
              index={i}
              id={skill.id}
              skill={skill.skill}
              onclick={this.props.handleRemoveElement}
              draggable="true"
              onDragEnd={this.dragEnd}
              onDragStart={this.dragStart}
            />
          )
        })}
      </div>
    )
  }
}

export default Skills
