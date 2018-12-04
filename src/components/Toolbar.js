import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon, Tooltip } from 'antd'
import Draggable from 'react-draggable'
import styles from './Toolbar.css'

// TODO:
// vertical support
// multiple lines support

class Toolbar extends Component {
  clickHandler = toolKey => {
    this.props.onChange(toolKey)
  }

  render () {
    const { tools = [], activeToolKey, defaultPosition } = this.props
    return (
      <Draggable
        handle={`.${styles.handler}`}
        defaultPosition={defaultPosition}
        bounds="parent"
      >
        <div className={styles.toolbar}>
          <div className={styles.handler}>
            <Icon type="fullscreen" />
          </div>
          {tools.map((tool, index) => 
            tool.render
            ? tool.render()
            : <div
                key={index}
                className={activeToolKey === tool.key ? styles.activeTool : styles.tool}
                onClick={() => this.clickHandler(tool.key)}
              >
                <Tooltip title={tool.label}>
                  <Icon type={tool.icon} />
                </Tooltip>
              </div> 
          )}
        </div>
      </Draggable>
    )
  }
}

Toolbar.propTypes = {
  tools: PropTypes.array.isRequired, // [{ icon, key, label, render }],
  activeToolKey: PropTypes.string,
  defaultPosition: PropTypes.object.isRequired,
  onChange: PropTypes.func
}

Toolbar.defaultProps = {
  defaultPosition: { x: 10, y: 10 },
  onChange: (toolKey) => {}
}

export default Toolbar