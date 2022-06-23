const timer = (deadline) => {
    const timerDays = document.getElementById('timer-days')
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')
    let idInterval

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        // let days = Math.floor(timeRemaining / 60 / 60 / 24)
        // let hours = Math.floor((timeRemaining / 3600) / 24)
        let hours = Math.floor((timeRemaining / 3600))
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)

        if (hours.toString().length === 1) {
            hours = '0' + hours
        }
        if (minutes.toString().length === 1) {
            minutes = '0' + minutes
        }
        if (seconds.toString().length === 1) {
            seconds = '0' + seconds
        }

        return {
            timeRemaining,
            // days,
            hours,
            minutes,
            seconds
        }
    }

    const updateClock = () => {
        let getTime = getTimeRemaining()

        if (getTime.timeRemaining >= 0) {
            // timerDays.textContent = getTime.days
            timerHours.textContent = getTime.hours
            timerMinutes.textContent = getTime.minutes
            timerSeconds.textContent = getTime.seconds

        } else {
            clearInterval(idInterval)
        }

    }
    idInterval = setInterval(updateClock, 1000)
}

export default timer