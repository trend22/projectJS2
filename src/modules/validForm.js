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

    //функция проверки двойных и более пробелов в строчке и исправление на один пробел
    const validSpace = (str) => {
        // console.log(event.target.value.match(/(\s\s)+/gi))
        if (/\s\s/gi.test(str)) {
            do {
                str = str.replace(/(\s\s)/gi, (str) => {
                    return " ";
                })
            }
            while (/\s\s/gi.test(str))
            //Дополнительно удалим пробел в начале и в конце строки
            str = str.replace(/^\s/i, "")
            str = str.replace(/\s$/gi, "")
        }
        return str
    }
    //функция проверки двойных и более пробелов в строчке и исправление на один пробел
    const validHyphen = (str) => {
        if (/\-\-/gi.test(str)) {
            do {
                str = str.replace(/\-\-/gi, (str) => {
                    return "-";
                })
            }
            while (/\-\-/gi.test(str))
            //Дополнительно удалим пробел в начале и в конце строки
            str = str.replace(/^\-/i, "")
            str = str.replace(/\-$/gi, "")
        }
        return str
    }

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
            event.target.value = event.target.value.replace(/[^а-яА-Я\-\ ]/, "")
            console.log(event.target.value)
        })
    })
    //функция вешает на инпуты форм события blur и проверяет правильность ввода [type=text]
    textInputs.forEach((textInput) => {
        textInput.addEventListener('blur', (event) => {
            //если в тексте встречаются двойные и более пробелы,то менять на один пробел
            event.target.value = validSpace(event.target.value)
            //если в тексте встречаются двойные и более дефисы,то менять на один дефис
            event.target.value = validHyphen(event.target.value)
            //перевод первого символа в верхнйи регистр, а остальных в нижний
            event.target.value = event.target.value.replace(/./, (str) => str[0].toUpperCase())
        })
    })
    //функция вешает на инпуты с атрибутом [type=text] события и не даёт ввод букв 
    emailInputs.forEach((emailInput) => {
        emailInput.addEventListener('input', (event) => {
            // регулярное выражение допускает ввод только латиницы и набора спецсимволов
            event.target.value = event.target.value.replace(/[^a-zA-Z0-9\@\-\_\.\!\~\*\']/, "")
        })
    })
    //функция вешает на инпуты с атрибутом [placeholder="Ваше сообщение"] события и не даёт ввод букв 
    messageInput.addEventListener('input', (event) => {
        // регулярное выражение допускает ввод только кириллицы, - и пробела
        event.target.value = event.target.value.replace(/[^а-яА-Я\-\ ]/, "")
    })
    //функция вешает на инпуты форм события blur и проверяет правильность ввода [placeholder="Ваше сообщение"]
    messageInput.addEventListener('blur', (event) => {
        //если в тексте встречаются двойные и более пробелы,то менять на один пробел
        event.target.value = validSpace(event.target.value)
        //если в тексте встречаются двойные и более дефисы,то менять на один дефис
        event.target.value = validHyphen(event.target.value)
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