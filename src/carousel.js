import "../styles/styles.css";
// This is a playground for webdevelopment

// 1. Create a simple carousel

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>{
    button.addEventListener(("click"), e =>{
        if(e.currentTarget.id === "next"){
            nextSlide();
        }
        else if(e.currentTarget.id ==="prev")
        {
            prevSlide();
        }
    })
})
const getCarousel = document.querySelector(".carousel-items");
const numberSlides = document.querySelectorAll(".carousel-item").length - 1;
const getWidth = document.querySelector("#item-1").clientWidth;

let slide = 0; //It will know which slide the div is on.
const nextSlide = () =>{
    slide < numberSlides ? slide++ : slide = 0;
    getCarousel.style.transform = `translateX(${-getWidth * slide}px)`

}
const prevSlide = () =>{
    slide > 0 ? slide-- : slide = numberSlides;
    getCarousel.style.transform = `translateX(${-getWidth * slide}px)`
}

//Carousel Navigation
const navItems = document.querySelectorAll(".carousel-nav-item");
navItems.forEach((element, index) =>{
    element.addEventListener(("click"), () =>{
        carouselNav(index);
    });
})

const carouselNav = (slideNumber) =>{
    slide = slideNumber;
    getCarousel.style.transform = `translateX(${-getWidth * slide}px)`
}

setInterval(function (){
    slide < numberSlides ? slide++ : slide = 0;
    getCarousel.style.transform = `translateX(${-getWidth * slide}px)`
}, 10000);

// ------------------------ carousel-2 -----------------------------------------
//Goal: use class "hidden"

const getItems2 = document.querySelectorAll(".carousel-2-item");
const getBtns2 = document.querySelectorAll(".carousel-2-btn");
getBtns2.forEach(button =>{
    button.addEventListener(("click"), (e) =>{
        if (e.currentTarget.id === "carousel-2-next")
        {
            carouselNav2("next");
        }
        else if(e.currentTarget.id === "carousel-2-prev"){
            carouselNav2("prev");
        }
    })
})
const getSlides2 = getItems2.length;
let carousel2Counter = 0;

    //Functions
    const hidesElement = (slideNum) =>{
        getItems2[slideNum].classList.remove("visible");
        getItems2[slideNum].classList.add("hidden");
    }
    const displayElement = (slideNum) =>{
        getItems2[slideNum].classList.remove("hidden");
        getItems2[slideNum].classList.add("visible");
    }
    const next = () =>{
        if (carousel2Counter < getSlides2 - 1)
        {
            hidesElement(carousel2Counter);
            carousel2Counter++;
            displayElement(carousel2Counter);
        }
        else{
            hidesElement(carousel2Counter);
            carousel2Counter = 0; //resets counter
            displayElement(carousel2Counter);
        }
    }
    const prev = () =>{
        if (carousel2Counter > 0){
            hidesElement(carousel2Counter);
            carousel2Counter--;
            displayElement(carousel2Counter);
        //unhide the prev slide
        }
        else{
            hidesElement(carousel2Counter);
            carousel2Counter = getSlides2 - 1;
            displayElement(carousel2Counter);
        }
    }
const carouselNav2 = (item) =>{
    //code starts here
    if(item === "next")
    {
        next();
    }
    else if(item === "prev"){
        prev();
    }
}
setInterval(function(){
    next();
}, 3000)