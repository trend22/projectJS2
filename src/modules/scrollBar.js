const scrollBar = () => {
  const scrollBar = document.querySelector('body>main>a')
  const serviceBlock = document.querySelector('#service-block')

  scrollBar.addEventListener('click', (event) => {
    event.preventDefault()

    window.scrollTo({
      top: serviceBlock.offsetTop,
      behavior: 'smooth',
    })
  })
}

export default scrollBar
