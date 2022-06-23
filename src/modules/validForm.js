const validForm = () => {
    //достаём инпуты калькулятора
    const calcInputs = document.querySelectorAll('.calc-block input')
    //достаём forms с атрибутом [type=text]
    const textInputs = document.querySelectorAll('form [type=text]')
    //достаём forms с атрибутом [placeholder="Ваше сообщение"]
    const messageInput = document.querySelector('form [placeholder="Ваше сообщение"]')
    //достаём forms с атрибутом [type=text]
    const emailInputs = document.querySelectorAll('form [type=email]')
    //достаём forms с атрибутом [type=tel]
    const phoneInputs = document.querySelectorAll('form [type=tel]')

    //функция вешает на инпуты с атрибутом [type=text] события и не даёт ввод букв 
    calcInputs.forEach((calcInput) => {
        calcInput.addEventListener('input', (event) => {
            //использовано регулярное выражение /\D+/, где \D - ввод цифр
            // + - это ввод сколько угодно большого набора цифр
            event.target.value = event.target.value.replace(/\D+/, "")
        })
    })
    //функция вешает на инпуты форм события и проверяет правильность ввода
    textInputs.forEach((textInput) => {
        textInput.addEventListener('input', (event) => {
            // регулярное выражение допускает ввод только кириллицы, - и пробела
            event.target.value = event.target.value.replace(/[^а-яА-Я- ]/, "")
            console.log(event.target.value)
        })

    })
    //функция вешает на инпуты с атрибутом [type=text] события и не даёт ввод букв 
    emailInputs.forEach((emailInput) => {
        emailInput.addEventListener('input', (event) => {
            // регулярное выражение допускает ввод только латиницы и набора спецсимволов
            event.target.value = event.target.value.replace(/[^a-zA-Z@-_.!~*']/, "")
        })
    })
    //функция вешает на инпуты с атрибутом [placeholder="Ваше сообщение"] события и не даёт ввод букв 
    messageInput.addEventListener('input', (event) => {
        // регулярное выражение допускает ввод только кириллицы, - и пробела
        event.target.value = event.target.value.replace(/[^а-яА-Я- ]/, "")
    })
    //функция вешает на инпуты с атрибутом [type=tel] события и не даёт ввод букв 
    phoneInputs.forEach((phoneInput) => {
        phoneInput.addEventListener('input', (event) => {
            // регулярное выражение допускает ввод только латиницы и набора спецсимволов
            event.target.value = event.target.value.replace(/[^\d()-]/, "")
        })
    })
}

export default validForm