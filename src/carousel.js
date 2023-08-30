// This is a playground for webdevelopment

// 1. Create a simple carousel

export default class carousel {
    static loadPage = ()=>{
        document.getElementById("load-content").appendChild(this.carousel1());
        document.getElementById("load-content").appendChild(this.carousel2());
        
        this.loadCarousel1Function();
        this.loadCarousel2Function();
    }

    static carousel1 = () =>{
        const section = document.createElement("section");
        section.setAttribute("id", "news");

        section.innerHTML = `
        <section id="news">
        <div class="carousel">
            <div class="carousel-items">
                <div class="carousel-item" id="item-1">
                    <h2>Welcome to my website</h2>
                </div>
                <div class="carousel-item" id="item-2">
                    <h2>About me</h2>
                </div>
                <div class="carousel-item" id="item-3">
                    <h2>Projects</h2>
                </div>
                <div class="carousel-item" id="item-4">
                    <h2>Personality</h2>
                </div>
            </div>

            <button id="next">&#8594;</button>
            <button id="prev">&#8592;</button>

            <div class="carousel-nav">
                <button class="carousel-nav-item" id ="carousel-item-1"></button>
                <button class="carousel-nav-item" id="carousel-item-2"></button>
                <button class="carousel-nav-item" id="carousel-item-3"></button>
                <button class="carousel-nav-item" id="carousel-item-4"></button>
            </div>
    
        </div>
    </section>`;
    return section;

    }
    static carousel2 = () =>{
        const section = document.createElement("section");
        section.innerHTML = `
        <section id="carousel-2">
        <div class="carousel-2">
            <div class="carousel-2-items">
                <div class="carousel-2-item visible" id="item-1">
                    <h2>My Todo list</h2>
                </div>
                <div class="carousel-2-item hidden" id="item-2">
                    <h2>Battleship</h2>
                </div>
                <div class="carousel-2-item hidden" id="item-3">
                    <h2>Dictionary</h2>
                </div>
                <div class="carousel-2-item hidden" id="item-4">
                    <h2>Tic Tac Toe</h2>
                </div>
            </div>

            <button class="carousel-2-btn" id="carousel-2-next">&#8594</button>
            <button class="carousel-2-btn" id="carousel-2-prev">&#8592</button>

            <div class="carousel-nav">
                <button class="carousel-2-nav-item" id ="carousel-2-item-1"></button>
                <button class="carousel-2-nav-item" id="carousel-2-item-2"></button>
                <button class="carousel-2-nav-item" id="carousel-2-item-3"></button>
                <button class="carousel-2-nav-item" id="carousel-2-item-4"></button>
            </div>
    
        </div>
    </section>`;
    return section;
    }
    static loadCarousel1Function = () =>{
        const getCarousel = document.querySelector(".carousel-items");
        const numberSlides = document.querySelectorAll(".carousel-item").length - 1;
        const getWidth = document.querySelector("#item-1").clientWidth;
        let slide = 0;

        const buttons = document.querySelectorAll("button");
        buttons.forEach((button) =>{
            button.addEventListener(("click"), e =>{
                if(e.currentTarget.id === "next"){
                    next();
                }
                else if(e.currentTarget.id ==="prev")
                {
                    prev();
                }
            });
        });

        const next = () =>{
            slide < numberSlides ? slide++ : slide = 0;
            getCarousel.style.transform = `translateX(${-getWidth * slide}px)`;
        }
        const prev = () =>{
            slide > 0 ? slide-- : slide = numberSlides;
            getCarousel.style.transform = `translateX(${-getWidth * slide}px)`;
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

        setInterval(next, 10000);
    }
    static loadCarousel2Function = () =>{
// //Goal: use class "hidden"
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
            setInterval(next, 3000);
        }    
    }
