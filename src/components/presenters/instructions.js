import React from 'react'
import PropTypes from 'prop-types'

import '../../styles/modal.css'

const InstructionsPresenter = (props) => {
  const classes = props.are_instructions_visible ? 'active modal-container' : 'modal-container'
  return (
    <div id="instructions-holder" className={classes}>
      <div className="backscreen"></div>
      <div id="instructions">
        <button onClick={props.hideInstructions} className="exit" aria-label="exit the instructions modal">&times;</button>
        <h3>Interaction Options</h3>
        <ul>
          <li>Click notes to remove them</li>
          <li>Use the backspace key on your keyboard to remove the last note</li>
          <li>Use any of the keys to add to the song: <span>&#8592;</span>, <span>&#8593;</span>, <span>&#8594;</span>, <span>&#8595;</span>, or <span>A</span></li>
          <li>Click the generate button to generate a new song and title</li>
          <li>Click the title to generate a new title</li>
        </ul>
        <div className="triforce"></div>
      </div>
    </div>
  )
}

InstructionsPresenter.propTypes = {
  hideInstructions: PropTypes.func.isRequired,
  are_instructions_visible: PropTypes.bool.isRequired
}

export default InstructionsPresenter