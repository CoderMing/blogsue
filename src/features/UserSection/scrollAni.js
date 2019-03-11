export default () => {
  const el = document.querySelector('.content-right .section-item:first-of-type')
  const secEl = window.document.querySelector('.content-right')
  // 计算goTop的高度
  const elComHeight = `${50 - window.parseInt(window.getComputedStyle(el).height)}px`

  // secEl.style.position = 'sticky'
  secEl.style.top = elComHeight

  if (window.innerWidth > 800) {
    const navEl = window.document.querySelector('#header-container')

    if (!(el && secEl && navEl && elComHeight)) return

    let prevPageY = 0
    const loopFunc = () => {
      const pageY = window.pageYOffset
      if (prevPageY !== pageY) {
        prevPageY = pageY
        if (pageY <= window.parseInt(elComHeight)) {
          navEl.style.opacity = 1
          navEl.className = 'bp3-dark'
        } else {
          navEl.className = ''
          navEl.style.opacity = 0.9
        }
      }
      setTimeout(loopFunc, 100)
    }
    loopFunc()
  }
}
