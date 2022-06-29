const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block')
  const calcType = document.querySelector('.calc-type')
  const calcSquare = document.querySelector('.calc-square')
  const calcRooms = document.querySelector('.calc-count')
  const calcDays = document.querySelector('.calc-day')
  const calcTotal = document.querySelector('#total')

  let countAnimateCicle = 0
  let idAnimateInterval
  let totalValue = 0

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value
    const calcSquareValue = +calcSquare.value

    let calcRoomsValue = 1
    let calcDayValue = 1

    if (calcRooms.value > 1) {
      calcRoomsValue += +calcRooms.value / 10
    }

    if (calcDays.value && calcDays.value < 5) {
      calcDayValue = 2
    } else if (calcDays.value && calcDays.value < 10) {
      calcDayValue = 1.5
    }

    if (calcType.value && calcSquare.value) {
      totalValue =
        price * calcTypeValue * calcSquareValue * calcRoomsValue * calcDayValue
    } else {
      totalValue = 0
    }
    //функция анимации полной цены
    if (totalValue !== 0) {
      animateTotalValue()
    }
  }

  const animateTotalValue = () => {
    countAnimateCicle += totalValue * 0.05
    idAnimateInterval = requestAnimationFrame(animateTotalValue)

    if (countAnimateCicle <= totalValue) {
      calcTotal.textContent = countAnimateCicle
    } else {
      cancelAnimationFrame(idAnimateInterval)
      countAnimateCicle = 0
    }
  }


  calcBlock.addEventListener('input', (e) => {
    if (
      e.target === calcType ||
      e.target === calcSquare ||
      e.target === calcRooms ||
      e.target === calcDays
    ) {
      countCalc()
    }
  })
}

export default calc