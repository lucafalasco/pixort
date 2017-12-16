import React from 'react'
import Dropzone from 'react-dropzone'
import { inject, observer } from 'mobx-react'

const MAX_UPLOAD_SIZE = 5000000

@inject('state')
@observer
export default class Uploader extends React.Component {
  state = {
    isLoading: false,
    isBlank: true,
  }

  uploadNewImage = (accepted, rejected) => {
    const { state } = this.props

    if (rejected.length > 0) {
      console.error('File rejected:', rejected[0])
      let message = 'Cannot proceed.'
      if (rejected[0].size >= MAX_UPLOAD_SIZE) {
        message += ' File is too large (must be less then 5MB).'
      }
      return window.alert(message)
    }

    console.log(accepted[0])
    this.setState({ isLoading: true })
    const img = new window.Image()
    img.src = accepted[0].preview

    img.onload = () => {
      state.setImage(img)
      this.setState({ isLoading: false })
      this.setState({ isBlank: false })
    }
  }
  render() {
    const { isLoading, isBlank } = this.state

    return (
      <Dropzone
        className="absolute w-100 h-100 bg-dark-gray white flex justify-center items-center pointer f4"
        accept="image/*"
        maxSize={5000000}
        onDrop={this.uploadNewImage}>
        {!isLoading &&
          isBlank && (
            <div className="w-50 tc f3">Drag and DROP an image here, or CLICK to upload</div>
          )}
        {isLoading && (
          <div className="relative z-5 w-100 h-100 flex justify-center items-center bg-black-50 white f3">
            Loading...
          </div>
        )}
      </Dropzone>
    )
  }
}
