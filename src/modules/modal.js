const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')
    const popupContent = modal.querySelector('.popup-content')

    let count = 0
    let idInterval

    const animationModal = () => {

        if (window.screen.availWidth >= 768) {
            count += 10
            idInterval = requestAnimationFrame(animationModal)

            if (popupContent.offsetLeft < (window.screen.availWidth / 2.6)) {
                popupContent.style.left = count * 5 + 'px'
            } else {
                cancelAnimationFrame(idInterval)
            }
        }

    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            count = 0
            popupContent.style.left = 0
            modal.style.display = 'block'
            animationModal()
        })
    })


    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
    })
}

export default modal