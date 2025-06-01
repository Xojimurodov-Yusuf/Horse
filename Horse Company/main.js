var swiper = new Swiper(".mySwiper1", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next-my",
        prevEl: ".swiper-button-prev-my",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: false,
    keyboard: false,
});

var swiper = new Swiper(".mySwiper-one", {
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next-my",
        prevEl: ".swiper-button-prev-my",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});


var swiper = new Swiper(".mySwiper2", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next-my",
        prevEl: ".swiper-button-prev-my"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        init: function () {
            updateSlideOpacity(this);
        },
        slideChange: function () {
            updateSlideOpacity(this);
        }
    }
});

function updateSlideOpacity(swiper) {
    swiper.slides.forEach(function (slide) {
        slide.style.opacity = "0.5";
    });

    var centerIndex = swiper.activeIndex + Math.floor(swiper.params.slidesPerView / 2);
    var centerSlide = swiper.slides[centerIndex];

    if (centerSlide) {
        centerSlide.style.opacity = "1";
    }
}

var swiper = new Swiper(".mySwiper3", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next-my",
        prevEl: ".swiper-button-prev-my"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        init: function () {
            updateSlideOpacity(this);
        },
        slideChange: function () {
            updateSlideOpacity(this);
        }
    }
});

var swiper = new Swiper(".mySwiper-two", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next-my",
        prevEl: ".swiper-button-prev-my"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

function updateSlideOpacity(swiper) {
    swiper.slides.forEach(function (slide) {
        slide.style.opacity = "0.5";
    });

    var centerIndex = swiper.activeIndex + Math.floor(swiper.params.slidesPerView / 2);
    var centerSlide = swiper.slides[centerIndex];

    if (centerSlide) {
        centerSlide.style.opacity = "1";
    }
}


var swiper = new Swiper(".mySwiper4", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next-my",
        prevEl: ".swiper-button-prev-my"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".mySwiper5", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next-my",
        prevEl: ".swiper-button-prev-my"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let burger = document.querySelector(".burger")
let burgerDiv = document.querySelector(".burger-div")
let closeBurger = document.querySelector(".close")

burger.addEventListener("click", () => {
    burgerDiv.classList.add("active")
})

closeBurger.addEventListener("click", () => {
    burgerDiv.classList.remove("active")
})

window.addEventListener("load", () => {
    let loader = document.getElementById("loader")

    setTimeout(() => {
        loader.style.opacity = "0"

        setTimeout(() => {
            loader.style.display = "none"
        }, 1000);
    }, 1000);
})

let yozilishBtn = document.getElementById("yozilish")

yozilishBtn.addEventListener("click", () => {
    window.location.href = "https://t.me/y_bahodirovich"
})

let yozilishBtntwo = document.getElementById("yozilishtwo")

yozilishBtntwo.addEventListener("click", () => {
    window.location.href = "https://t.me/y_bahodirovich"
})

let qongiroqbtn = document.getElementById("qongiroq")
qongiroqbtn.addEventListener("click", () => {
    let number = "+998910118353"

    window.location.href = "tel:" + number
})

let phoneNumber = document.getElementById("phone-number")
let errorNumber = document.getElementById("errorNumber")
let regexNumber = /^\+998\d{9}$/;

phoneNumber.addEventListener("input", () => {
    let inputValue = phoneNumber.value.replace(/\s+/g, '');

    if (regexNumber.test(inputValue)) {
        errorNumber.style.opacity = "0"
        phoneNumber.style.border = "1px solid green"
    } else {
        errorNumber.style.opacity = "1"
        errorNumber.style.color = "red"
        phoneNumber.style.border = "1px solid red"
    } if (inputValue === "") {
        errorNumber.style.opacity = "0"
    }
})

let sendBtn = document.querySelector(".yozilish-btn")

sendBtn.addEventListener("click", () => {
    let nameinput = document.getElementById("nameInput").value.trim()
    let phoneNumber = document.getElementById("phone-number")
    let phoneinputValue = phoneNumber.value.trim()
    let regexNumber = /^\+998\d{9}$/;
    let checkBox = document.querySelector(".checkbox-input")

    if (nameinput === "" || nameinput.length <= "4" || phoneinputValue === "") {
        alert("Вы не ввели информацию или не указали полное имя")
        return
    } else if (!regexNumber.test(phoneinputValue)) {
        alert("Вы ввели номер в неправильном формате")
        return
    } else if (!checkBox.checked) {
        alert("Вы не дали разрешение на обработку ваших данных")
        return
    }

    const messages = `Name: ${nameinput}\nPhone: ${phoneinputValue}`

    fetch(`https://api.telegram.org/bot7639041237:AAEPytryi9IZp2Q-Wr2r6wK9bLVJvuuXMRo/sendMessage?chat_id=7103297843&text=${encodeURIComponent(messages)}`)
        .then(malumot => {
            if (malumot.ok) {
                alert("Сообщение отправлено")
            } else {
                alert("Ошибка при отправке сообщения")
            }
        })

        .catch(error => {
            alert("Произошла ошибка" + error)
        })
})