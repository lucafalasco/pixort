import React from 'react'
import { inject, observer } from 'mobx-react'
import Options from './Options'
import Uploader from './Uploader'
import Downloader from './Downloader'
import Artwork from './Artwork'
import { ReactComponent as Octocat } from '../../public/assets/github.svg'

@inject('state')
@observer
export default class App extends React.Component {
  render() {
    const { width, height, image, config } = this.props.state
    const length = Math.min(width, height) * 0.7
    return (
      <div className="w-100 h-100 bg-white text-dark flex justify-center items-center">
        <a
          href="https://github.com/lucafalasco/pixort"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute z-5 fw6 f5 black link left-2 bottom-2 w2 h2"
        >
          <Octocat className="w2 h2" />
        </a>
        <div className="absolute w-100 h-100">
          <Uploader />
          <div
            className="absolute absolute--fill flex items-center pointer-events-none"
            style={{
              width: length,
              height: length,
              margin: 'auto',
            }}
          >
            <Artwork image={image} config={config} />
          </div>
          <div className="absolute right-2 bottom-2 flex justify-start items-end">
            {image && <Options />}
            {image && <Downloader />}
          </div>
        </div>
      </div>
    )
  }
}
