# TODOs

地物选择
地物绘制
大量地物加载

使用 consumer / provider from react 16

可拖动工具栏
可拖动地物属性弹框



```js
// define a customized tool
const tool = {
  key: 'myTool',
  label: 'xxx',
  icon: '',
  // render: () => {}, 
  defaultSettings: {},
  settingPanelRender: (props) => {
    const { toolInstance, ...restProps } = props
    return <MyToolSettingsPanelForm toolInstance={toolInstance} />
  },
  onActivate () {},
  onSettingsChange (settings) {},
  onDeactivate () {}
}

class MyToolSettingsPanelForm extends Component {

  componentDidMount () {
    this.props.toolInstance.onUpdate(data => {
      this.setState({ data })
    })
  }

  onFormChange (data) {
    this.props.toolInstance.config(data)
  }

  render () {
    const { data } = this.state
    return (
      <div>
      {/* render form based on data */}
      </div>
    )
  }
}

```