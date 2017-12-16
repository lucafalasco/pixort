export default function sortPixels(img, canvas, newMode) {
  let ctx, width, height
  let imageData, imageDataWrapper

  const mode = newMode || 0
  let row = 0
  let column = 0

  function setup(img) {
    const dimension = Math.min(img.naturalWidth, img.naturalHeight)
    width = canvas.width = dimension
    height = canvas.height = dimension

    ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0)

    imageDataWrapper = ctx.getImageData(0, 0, width, height)
    imageData = imageDataWrapper.data
  }

  function draw() {
    if (mode === 0 || mode === 1) {
      while (column < width - 1) {
        sortColumn()
        column++
      }
    }

    if (mode === 0 || mode === 2) {
      while (row < height - 1) {
        sortRow()
        row++
      }
    }

    ctx.putImageData(imageDataWrapper, 0, 0)
  }

  function sortRow() {
    let x = 0
    let y = row
    let xend = 0

    x = -1
    xend = width - 1

    const sortLength = xend - x

    const unsorted = new Array(sortLength)
    let sorted = new Array(sortLength)

    for (let i = 0; i < sortLength; i++) {
      unsorted[i] = getPixelValue(x + i, y)
    }

    sorted = unsorted.sort()

    for (let i = 0; i < sortLength; i++) {
      setPixelValue(x + i, y, sorted[i])
    }

    x = xend + 1
  }

  function sortColumn() {
    let x = column
    let y = 0
    let yend = 0

    y = -1
    yend = height - 1

    const sortLength = yend - y

    const unsorted = new Array(sortLength)
    let sorted = new Array(sortLength)

    for (let i = 0; i < sortLength; i++) {
      unsorted[i] = getPixelValue(x, y + i)
    }

    sorted = unsorted.sort()

    for (let i = 0; i < sortLength; i++) {
      setPixelValue(x, y + i, sorted[i])
    }

    y = yend + 1
  }

  function setPixelValue(x, y, val) {
    const offset = (x + y * width) * 4
    const r = (val >> 16) & 255
    const g = (val >> 8) & 255
    const b = val & 255
    imageData[offset] = r
    imageData[offset + 1] = g
    imageData[offset + 2] = b
  }
  function getPixelValue(x, y) {
    const offset = (x + y * width) * 4
    const r = imageData[offset]
    const g = imageData[offset + 1]
    const b = imageData[offset + 2]

    return (((((255 << 8) | r) << 8) | g) << 8) | b
  }

  setup(img)
  draw()
}
