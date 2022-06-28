const slider = () => {
  //находим элементы html
  const sliderBlock = document.querySelector('.portfolio-content')
  const slides = document.querySelectorAll('.portfolio-item')
  let dots = document.querySelectorAll('.dot')
  const dotList = document.querySelector('.portfolio-dots')
  //переменная для setInterval в startSlide
  const timeInterval = 2000
  //currentSlide - счётчик сладов, interval - переменная для запуска и остановки autoSlide
  let currentSlide = 0
  let interval
  //фукнция для наполнения точками слайдера по количеству слайдов
  const getDots = () => {
    for (let i = 0; i < slides.length; i++) {
      let newDot = document.createElement('li')
      newDot.classList.add('dot')
      if (i === 0) {
        newDot.classList.add('dot-active')
      }

      dotList.append(newDot)
    }
    //обновляем список li c классом dots для запуска слайдера
    dots = document.querySelectorAll('.dot')
  }

  //функция удаляющая класс с предыдущего слайда
  const previousSlide = (elems, index, classRemove) => {
    elems[index].classList.remove(classRemove)
  }
  // функция, устанавливающая класс на новый слайд
  const nextSlide = (elems, index, classAdd) => {
    elems[index].classList.add(classAdd)
  }
  // функция проигрывания слайдов
  const autoSlide = () => {
    previousSlide(slides, currentSlide, 'portfolio-item-active')
    previousSlide(dots, currentSlide, 'dot-active')
    currentSlide++
    // обновление счётчика слайдов, если они закончились
    if (currentSlide >= slides.length) {
      currentSlide = 0
    }

    nextSlide(slides, currentSlide, 'portfolio-item-active')
    nextSlide(dots, currentSlide, 'dot-active')
  }
  // запуск пригрывания слайдов
  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer)
  }
  // остановка проигрывания слайдов
  const stopSlide = () => {
    clearInterval(interval)
  }
  //слушатель click для прокручивания слайдов вручную по стрелкам и точкам
  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault()

    //отключение лишнего обработчика событий
    if (!e.target.matches('.dot, .portfolio-btn')) {
      return
    }
    previousSlide(slides, currentSlide, 'portfolio-item-active')
    previousSlide(dots, currentSlide, 'dot-active')
    //работа с конкретными html элементами (стрелки и точки)
    if (e.target.matches('#arrow-right')) {
      currentSlide++
    } else if (e.target.matches('#arrow-left')) {
      currentSlide--
    } else if (e.target.matches('.dot')) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index
        }
      })
    }
    //обновление счётчика слайдов при превышении
    if (currentSlide >= slides.length) {
      currentSlide = 0
    }
    //обновление счётчика слайдов, чтобы проигрывались с конца
    if (currentSlide < 0) {
      currentSlide = slides.length - 1
    }

    nextSlide(slides, currentSlide, 'portfolio-item-active')
    nextSlide(dots, currentSlide, 'dot-active')
  })
  //слушатель при наведении мыши на стрелку и точки, чтобы останавливать autoSlide
  sliderBlock.addEventListener(
    'mouseenter',
    (e) => {
      if (e.target.matches('.dot, .portfolio-btn')) {
        stopSlide()
      }
    },
    true
  )
  //слушатель при отведении курсора мыши на стрелку и точки, чтобы запускать autoSlide
  sliderBlock.addEventListener(
    'mouseleave',
    (e) => {
      if (e.target.matches('.dot, .portfolio-btn')) {
        startSlide(timeInterval)
      }
    },
    true
  )

  //создание элементов c классом dot
  getDots()
  //запуск слайда
  startSlide(timeInterval)
}

export default slider
