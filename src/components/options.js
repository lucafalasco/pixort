import React from 'react'
import { inject, observer } from 'mobx-react'
import Select from './select'

@inject('state')
@observer
export default class Options extends React.Component {
  updateMode = value => {
    const mode = Number(value)
    this.props.state.updateConfig({ ...this.props.state.config, mode })
  }
  render() {
    const { mode } = this.props.state
    return (
      <div className="flex flex-column justify-between items-start mr4">
        <Select label="Sort:" handleUserAction={this.updateMode} valu={mode}>
          <option value="0">both</option>
          <option value="1">columns</option>
          <option value="2">rows</option>
        </Select>
      </div>
    )
  }
}
