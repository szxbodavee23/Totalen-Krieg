const $ = (selector) => {
    return document.querySelector(selector);
}

const $all = (selector) => {
    return document.querySelectorAll(selector);
}

window.sessionStorage.key("ev");
window.sessionStorage.key("szemely");