import "./styles.css";
import home from "./content_pages/home.js";
import menu from "./content_pages/menu.js";

let content = document.querySelector('#content')
home.loadHome(content)
function selectPage(buttonID) {
    content.innerHTML = ''
    if (buttonID === 'homeBtn'){
        home.loadHome(content)
    }else if (buttonID === 'menuBtn') {
        menu.loadMenu(content)
    } else {
        content.innerHTML = ''
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('nav button')
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            selectPage(btn.id)
        })
    });
})