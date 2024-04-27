var swiper = new Swiper (".mySwiper-1", {
    slidesPerView:1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }

});

var swiper = new Swiper (".mySwiper-2", {
    slidesPerView:3,
    spaceBetween: 20,
    loop:true,
   loopFillGroupWithBlank:true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints : {
        0: {
            slidesPerView:1,
        },
        520: {
            slidesPerView:2,
        },
        
        950: {
            slidesPerView:3,
        }

    }
    

});

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input) {

    input.addEventListener('change', function() {
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();

    })
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('changeColorButton').addEventListener('click', function() {
        var selectedColor = document.getElementById('colorPicker').value;
        document.body.style.backgroundColor = selectedColor;
    });
});


function trackPreference(foodType) {

    const data = {
        preference: foodType,
        time: new Date().toLocaleString()
    };
    
    console.log('Tracking food preference:', data);
    const trackedDataElement = document.getElementById('trackedData');
    trackedDataElement.textContent = `Preference tracked: ${data.preference} (${data.time})`;
}
const hamburgerButton = document.getElementById('hamburgerButton');
const sandwichButton = document.getElementById('sandwichButton');

hamburgerButton.addEventListener('click', function() {
    trackPreference('Hamburger');
});

sandwichButton.addEventListener('click', function() {
    trackPreference('Sandwich');
});



