import React from 'react'
import { inject, observer } from 'mobx-react'
import sortPixels from '../lib/sortpixels'

@inject('state')
@observer
export default class Artwork extends React.Component {
  componentWillReceiveProps({ image, config }) {
    if (image) {
      sortPixels(image, this.canvas, config.mode, config.iterations)
    }
  }

  render() {
    return (
      <div className="absolute w-100 h-100">
        <canvas
          id="artwork"
          style={{ width: '100%', height: '100%' }}
          ref={canvas => {
            this.canvas = canvas
          }}
        />
      </div>
    )
  }
}
