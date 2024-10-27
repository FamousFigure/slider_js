const arrow_right = document.querySelector(".main__slider_arrow-right");
const arrow_left = document.querySelector(".main__slider_arrow-left");
const flats = document.querySelectorAll(".flat");
const flat_one = document.querySelector(".first_flat")
const flat_two = document.querySelector(".second_flat")
const flat_three = document.querySelector(".third_flat");
const sochi_thieves = document.querySelector(".SOCHI_THIEVES")
const admiral = document.querySelector(".ADMIRAL")
const patriotic = document.querySelector(".PATRIOTIC")
const first_circle = document.querySelector(".main__slider_first-circle");
const second_circle = document.querySelector(".main__slider_second-circle");
const third_circle = document.querySelector(".main__slider_third-circle");
const city = document.querySelector(".city");
const area = document.querySelector(".area");
const place = document.querySelector(".place");
const time = document.querySelector(".time");

let index = 0;
black = "images/black-circle.svg";
white = "images/white-circle.svg";

function showSlide() {
    flats[index].classList.add("block");
}

function hideSlide() {
    flats[index].classList.remove("block");
}

function nextSlide() {
    hideSlide();
    index ++;
    if(index > flats.length - 1) {
        index = 0;
    }
    showSlide()
    if(flat_two.classList.contains("block") === true) {
        city.innerHTML = "Sochi";
        place.innerHTML = "Thieves";
        area.innerHTML = "105 m2";
        time.innerHTML = "4 months";
        first_circle.src = black;
        second_circle.src = white;
        sochi_thieves.classList.toggle("active");
        sochi_thieves.classList.toggle("not_active");
        admiral.classList.toggle("active");
        admiral.classList.toggle("not_active");
    }
    else if(flat_three.classList.contains("block") === true) {
        city.innerHTML = "Rostov-on-Don";
        place.innerHTML = "Patriotic";
        area.innerHTML = "93 m2";
        time.innerHTML = "3 months";
        second_circle.src = black;
        third_circle.src = white;
        sochi_thieves.classList.toggle("active");
        sochi_thieves.classList.toggle("not_active");
        patriotic.classList.toggle("active");
        patriotic.classList.toggle("not_active");
    }
    else{
        place.innerHTML = "LCD admiral";
        area.innerHTML = "81 m2";
        time.innerHTML = "3.5 months";
        first_circle.src = white;
        third_circle.src = black;
        patriotic.classList.toggle("active");
        patriotic.classList.toggle("not_active");
        admiral.classList.toggle("active");
        admiral.classList.toggle("not_active");
    }
}

function previousSlide() {
    hideSlide();
    index --;
    if(index < 0) {
        index = flats.length - 1;
    }
    showSlide();
    if(flat_three.classList.contains("block") === true) {
        place.innerHTML = "Patriotic";
        area.innerHTML = "93 m2";
        time.innerHTML = "3 months";
        first_circle.src = black;
        third_circle.src = white;
        patriotic.classList.toggle("active");
        patriotic.classList.toggle("not_active");
        admiral.classList.toggle("active");
        admiral.classList.toggle("not_active");
    }
    else if(flat_two.classList.contains("block") === true) {
        city.innerHTML = "Sochi";
        place.innerHTML = "Thieves";
        area.innerHTML = "105 m2";
        time.innerHTML = "4 months";
        second_circle.src = white;
        third_circle.src = black;
        sochi_thieves.classList.toggle("active");
        sochi_thieves.classList.toggle("not_active");
        patriotic.classList.toggle("active");
        patriotic.classList.toggle("not_active");
    }
    else{
        city.innerHTML = "Rostov-on-Don";
        place.innerHTML = "LCD admiral";
        area.innerHTML = "81 m2";
        time.innerHTML = "3.5 months";
        first_circle.src = white;
        second_circle.src = black;
        sochi_thieves.classList.toggle("active");
        sochi_thieves.classList.toggle("not_active");
        admiral.classList.toggle("active");
        admiral.classList.toggle("not_active");
}
}

arrow_right.addEventListener("click", nextSlide);
arrow_left.addEventListener("click", previousSlide);

