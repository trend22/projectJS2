const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = menu.querySelector('.close-btn')
    const menuItems = menu.querySelectorAll('ul>li>a')

    const dispMenu = () => {
        menu.classList.toggle('active-menu')
    }

    menuBtn.addEventListener('click', dispMenu)
    closeBtn.addEventListener('click', dispMenu)

    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', dispMenu)
    })
}

export default menu