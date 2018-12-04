import React, { Component } from 'react'
import Toolbar from '@/components/Toolbar'

class TestPage extends Component {
  state = {
    activeToolKey: ''
  }


  render () {
    const { activeToolKey } = this.state
    const tools = [
      { key: 'select', label: '选择', icon : 'select' },
      { key: 'box-select', label: '框选', icon : 'border' },
      { key: 'draw', label: '绘制', icon : 'highlight' },
      { key: 'measure', label: '测量', icon : 'gitlab' },
    ]
    return (
      <div>
        <Toolbar tools={tools} activeToolKey={activeToolKey} onChange={key => this.setState({ activeToolKey: key })} />
      </div>
    )
  }
}

export default TestPage