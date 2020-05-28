
//import "./slider";
import modals from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer'
import images from './modules/images'

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let modalState = {};

    changeModalState(modalState);
    modals();
    tabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);
    timer('2021-01-01', 'timer');
    images();
});


//set flex for tabs containers(better use css)

function setFlex(selector,display,justify){
    const container = document.querySelector(selector);
    container.style.display = display;
    container.style.justifyContent = justify
}

setFlex('.glazing_slider', 'flex', 'space-around');
setFlex('.decoration_slider', 'flex', 'space-between');
