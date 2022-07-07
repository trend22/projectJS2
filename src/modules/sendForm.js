import {
    validate
} from "schema-utils"
//правка от 07_07_2022, функция задержки сообщения на экране из helpers
import {
    delayMessage
} from './helpers'

const sendForm = ({
    formId
}) => {
    const form = document.getElementById(formId)
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо! Наш менеджер с Вами свяжется.'
    //для автоматического закрытия модального окна
    const modal = document.querySelector('.popup')

    const validate = (listInputs) => {
        let success = true
        //валидация инпутов реализована в модуле validForm с помощью регулярных выражений
        return success
    }

    // функция отправки данных
    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        let formData = new FormData(form)
        let formBody = {}

        statusBlock.textContent = loadText
        //правка от 07_07_2022, не видно текст сообщения в модалке. Текст выставляю белый.
        if (formId === 'form3') {
            statusBlock.style.color = 'white'
        }
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        if (validate(formElements)) {
            sendData(formBody).then(data => {
                statusBlock.textContent = successText
                formElements.forEach(input => {
                    input.value = ''
                })

            }).catch(error => {
                statusBlock.textContent = errorText
            })
            //правка от 07.07.2022, устанавливается время в функцию delayMessage
            //затем стирается блок div с сообщением и закрывается модалка
            //закрыввается модальное окно
            delayMessage(4000).then(() => {
                statusBlock.remove()
                modal.style.display = 'none'
            })

        } else {
            alert('Данные не валидны!')
        }
    }
    // console.log(form)
    try {
        if (!form) {
            throw new Error('Верните форму на место, пожалуйста!')
        }

        form.addEventListener('submit', (e) => {
            //останавливаем работу по умолчанию submit
            e.preventDefault()
            submitForm()
        })
    } catch (error) {
        console.log(error.message)
    }
}

export default sendForm