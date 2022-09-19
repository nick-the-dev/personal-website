import About from './sections/About'

export default function () {
  const appHeight = function appHeight() {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', ''.concat(window.innerHeight + 'px'))
  }

  window.addEventListener('resize', appHeight)
  appHeight()

  return (
    <>
      <About />
    </>
  )
}
