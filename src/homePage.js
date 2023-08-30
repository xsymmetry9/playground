import carousel from "./carousel";
import forms from "./forms";

export default class UI{
    static loadPage =() =>{
        document.getElementById("content").appendChild(this.loadHeader());
        document.getElementById("content").appendChild(this.loadNav());
        document.getElementById("content").appendChild(this.loadSection());


       this.loadButtons();

    }

    static loadHeader =() =>{
        const div = document.createElement("div");
        div.innerHTML = `
        <h1 class="text-align-centered">My playground</h1>
        <p class="text-align-centered">By: Gary Lei</p>`;
        return div;
    }
    static loadNav = () =>{
        const list = document.createElement("ul");
        list.classList.add("nav-menu");
        list.innerHTML = `
        <li class="nav-item"><a id="carousel">Carousel</a></li>
        <li class="nav-item"><a id="forms">Forms</a></li>
        <li class="nav-item"><a id="dropdown">Dropdown</a></li>`

        return list;
    }

    static loadSection = () =>{
        const div = document.createElement("div");
        div.setAttribute("id", "load-content")

        return div;

    }
    static loadButtons = () =>{
        const getContent = document.getElementById("load-content");
        const removeContent = () =>{
            while(getContent.hasChildNodes()){
                getContent.lastChild.remove();
            }
        }
        document.getElementById("carousel").addEventListener(("click"), () => {
            //load carousel.js
            removeContent();
            carousel.loadPage();
        });
        document.getElementById("forms").addEventListener(("click"), () => {
            removeContent();
            forms.loadPage();
        });
        document.getElementById("dropdown").addEventListener(("click"), () => {
            removeContent();
            console.log("dropdown");
        });
    }
}
