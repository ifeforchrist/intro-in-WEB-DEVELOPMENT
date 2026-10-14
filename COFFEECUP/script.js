const navMenu = document.querySelector(".nav-menu");
const menuOpen = document.querySelector("#menu-open-button");
const menuClose = document.querySelector("#menu-close-button");

menuOpen.addEventListener("click", () => {
    navMenu.classList.add("active");
    doccument.body.classList.toggle("show-mobile-menu");
});

menuClose.addEventListener("click", () => {
    navMenu.classList.remove("active");
});
const swiper = new Swiper(".slider-container", {
    loop: true,
    spaceBetween: 30,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});