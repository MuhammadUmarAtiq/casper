// document.addEventListener("DOMContentLoaded", function() {
//     const sliderContent = document.querySelector(".slider-content");
//     const slides = document.querySelectorAll(".slide");
//     const prevBtn = document.querySelector(".prev");
//     const nextBtn = document.querySelector(".next");

//     let currentIndex = 0;

//     function slideTo(index) {
//         if (index < 0) {
//             index = slides.length - 1;
//         } else if (index >= slides.length) {
//             index = 0;
//         }

//         const slideWidth = slides[0].offsetWidth;
//         const translateX = -index * slideWidth;

//         sliderContent.style.transform = `translateX(${translateX}px)`;
//         currentIndex = index;
//     }

//     prevBtn.addEventListener("click", function() {
        
//         slideTo(currentIndex - 1);
//     });

//     nextBtn.addEventListener("click", function() {
//         slideTo(currentIndex + 1);
//     });

//     slideTo(currentIndex);
// });




$('.tiktok_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        520:{
            items:2
        },
        1000:{
            items:4
        }
    }
})


$('.custom-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})




$('.card-sliders').owlCarousel({
    loop:true,
    margin:10,
    
    responsive:{
        0:{
            items:1,
            nav:"true",
        },
        800:{
            items:2
        },
        1100:{
            items:3,
        }
    }
})


// JavaScript to handle the fixed navbar on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >0) {
        navbar.style.position = 'sticky';
        navbar.style.top = '0';
        
    } else {
        navbar.style.position = 'static';
        navbar.style.top = 'auto';
    }
});



var hambur =document.getElementById("hambur");
var cross =document.getElementById("cross");


var middle_nav =document.getElementById("middle-nav");
var hambur =document.getElementById("hambur");
var cross =document.getElementById("cross");
var right_navbar=document.getElementById("right-navbar")
var left_navbar=document.getElementById("left-navbar")
hambur.addEventListener("click",()=>{
    middle_nav.style.display="block";
    hambur.style.display="none";
    cross.style.display="block";
    right_navbar.style.display="none";
    cross.style.paddingBottom="18rem"
    left_navbar.style.paddingBottom="18rem"
});

var middle_nav =document.getElementById("middle-nav");
var hambur =document.getElementById("hambur");
var cross =document.getElementById("cross");
cross.addEventListener("click",()=>{
    middle_nav.style.display="none";
    hambur.style.display="block";
    cross.style.display="none";
    right_navbar.style.display="block";
    cross.style.paddingBottom="0"
    left_navbar.style.paddingBottom="0"
    // left_navbar.style.display="none";

});

// var hambur =document.getElementById("hambur");


// var middle_nav =document.getElementById("middle-nav");
// hambur.addEventListener("click",()=>{
//     middle_nav.style.display="none";
// });

