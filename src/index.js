import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import validForm from './modules/validForm'
import scrollBar from './modules/scrollBar'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'
import sendForm from './modules/sendForm'
import {
    swiper
} from './modules/swiper'


timer('12 july 2022')
menu()
modal()
validForm()
scrollBar()
tabs()
slider()
calc(100)
swiper()
sendForm({
    formId: 'form1'
})
sendForm({
    formId: 'form2'
})
sendForm({
    formId: 'form3'
})