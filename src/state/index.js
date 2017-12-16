import { observable, action } from 'mobx'

const state = observable({
  width: window.innerWidth,
  height: window.innerHeight,
  image: null,
  config: {
    mode: 0,
  },
  setImage: action(function (img) {
    this.image = img
  }),
  updateConfig: action(function (config) {
    this.config = config
  }),
  handleResize() {
    this.width = window.innerWidth
    this.height = window.innerHeight
  },
})

window.addEventListener('resize', () => {
  state.handleResize()
})

export default state
