import Swiper, {
    Autoplay
} from 'swiper';

export const swiper = () => {
    const swiper = new Swiper('.swiper', {
        modules: [Autoplay],
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },

        },
    })
}