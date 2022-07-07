import {
  animate
} from './helpers'

const modal = () => {
  const modal = document.querySelector('.popup')
  const buttons = document.querySelectorAll('.popup-btn')
  const popupContent = modal.querySelector('.popup-content')

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // count = 0
      popupContent.style.left = 0
      modal.style.display = 'block'
      // вызов функции animate из helpers для анимации модального окна
      animate({
        //время выполнения анимации
        duration: 250,
        //задание формулы анимации, сейчас она линейная
        timing(timeFraction) {
          return timeFraction
        },
        //изменение в модальном окне в стиле свойства left
        draw(progress) {
          popupContent.style.left =
            (window.screen.availWidth / 2.6) * progress + 'px'
        },
      })
    })
  })

  modal.addEventListener('click', (e) => {
    if (
      !e.target.closest('.popup-content') ||
      e.target.classList.contains('popup-close')
    ) {
      modal.style.display = 'none'
    }
  })
}

export default modal