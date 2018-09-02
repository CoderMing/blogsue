export default () => {
  if (window.innerWidth > 800) {
    const el = document.querySelector('.content-right .section-item:first-of-type')
    const secEl = window.document.querySelector('.content-right')
    const elComHeight = `${window.parseInt(window.getComputedStyle(el).height) + 20}px`
    const navEl = window.document.querySelector('#header-container')

    if (!(el && secEl && navEl && elComHeight)) return

    let prevPageY = 0
    const loopFunc = () => {
      const pageY = window.pageYOffset
      if (prevPageY !== pageY) {
        prevPageY = pageY
        if (pageY <= 100) {
          el.style.transform = `translate(0, 0)`
          secEl.style.transform = `translate(0, 0)`
          navEl.style.opacity = 1
          navEl.className = 'bp3-dark'
        } else {
          el.style.transform = `translate(0, -100px)`
          secEl.style.transform = `translate(0, -${elComHeight})`
          navEl.className = ''
          navEl.style.opacity = 0.9
        }
      }
      setTimeout(loopFunc, 100)
    }
    loopFunc()
  }
}
