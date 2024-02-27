const btnmenu = document.querySelector("#btn-menu")
const btnclose = document.querySelector("#btn-close")
const slidebar = document.querySelector("#slidebar")

btnmenu.addEventListener("click", () => {
    slidebar.style.display = "flex"
    btnmenu.style.display = "none"
    btnclose.style.display = "flex"
})

btnclose.addEventListener("click", () => {
    slidebar.style.display = "none"
    btnmenu.style.display = "flex"
    btnclose.style.display = "none"
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        dynanmicBullets: true,
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        clickable: true
    },

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});