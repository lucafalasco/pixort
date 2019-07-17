import React from 'react'
import { saveAs } from 'file-saver'

export default function Input(props) {
  function downlaodPng() {
    const canvas = document.getElementById('artwork')
    canvas.toBlob(function (blob) {
      saveAs(blob, 'output.png')
    }, 'image/png')
  }

  return (
    <div
      onClick={downlaodPng}
      className="flex justify-center h2 items-center pa2 ba bw1 b--black pointer hover-bg-black hover-white"
      href="#">
      Download PNG
    </div>
  )
}
