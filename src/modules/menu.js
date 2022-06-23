const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = menu.querySelector('.close-btn')
    const menuItems = menu.querySelectorAll('ul>li>a')
    //находим эелементы ссылок в меню
    const serviceBlock = document.querySelector('#service-block')
    const portfolio = document.querySelector('#portfolio')
    const calc = document.querySelector('#calc')
    const command = document.querySelector('#command')
    const connect = document.querySelector('#connect')

    const dispMenu = () => {
        menu.classList.toggle('active-menu')
    }

    const getPositionElement = (element) => {
        element.preventDefault()
        switch (true) {
            case element.target.hash === '#service-block':
                window.scrollTo({
                    top: serviceBlock.offsetTop,
                    behavior: "smooth"
                });
                break;
            case element.target.hash === '#portfolio':
                window.scrollTo({
                    top: portfolio.offsetTop,
                    behavior: "smooth"
                });
                break;
            case element.target.hash === '#calc':
                window.scrollTo({
                    top: calc.offsetTop,
                    behavior: "smooth"
                });
                break;
            case element.target.hash === '#connect':
                window.scrollTo({
                    top: connect.offsetTop,
                    behavior: "smooth"
                });
                break;
            case element.target.hash === '#command':
                window.scrollTo({
                    top: command.offsetTop,
                    behavior: "smooth"
                });
                break;
        }

        // let elementPosition = element.getBoundingClientRect().top;
        // console.dir(event.target)

    }

    menuBtn.addEventListener('click', dispMenu)
    closeBtn.addEventListener('click', dispMenu)

    menuItems.forEach(menuItem => {

        menuItem.addEventListener('click', (event) => {
            dispMenu()
            getPositionElement(event)
        })
    })
}
export default menu