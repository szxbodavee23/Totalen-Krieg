const $ = (selector) => {
    return document.querySelector(selector);
}

const $all = (selector) => {
    return document.querySelectorAll(selector);
}

const displayPanel = $(".display-panel");
const cover = $(".cover");
let displayPanelVisibility = false;

const displayCover = (display) => {
    if (display) {
        cover.style = "display: block; position: absolute; top: 0%, left: 0%; width: 100%; height: 100%; background-color: rgba(0,0,0,0.77); z-index: -10;";
        $("a[href='../../index.html'").style = "display: none";
    }
    else {
        cover.style = "display: none;";
        $("a[href='../../index.html'").style = "display: inline";
    }
}

const setDisplayPanelVisibility = (visibility) => {
    if (visibility) {
        displayPanel.style = "display: block; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); background-color: gray;" +
            "padding: 1rem; border-radius: 25px;";

            displayCover(true);
            window.onscroll = () => {
                window.scrollTo(0, 0);
            }
    }
    else {
        displayPanel.style = "display: none;";
        displayCover(false);
        window.onscroll = () => {
            window.scrollTo(window.pageYOffset, winow.pageXOffset);
        }
    }

    displayPanelVisibility = visibility;
}

setDisplayPanelVisibility(false);
displayCover(false);

const closeButton = "<button type='button' onclick='setDisplayPanelVisibility(false)' style='position: absolute; top: 1%; right: 1%; transform: translate(-1%, -1%); background-color: rgba(0,0,0,0); color: crimson; border: none; font-size: 1.3rem;'>X</button><br>";

$("#szovetseges").addEventListener("click", () => {
    displayPanel.innerHTML = closeButton + 
    "<img src='../../pics/szovjet.jpg' style='max-width: 50%; min-width: 100px; height: 15vh;'>";

    setDisplayPanelVisibility(true);
});

$("#tengely").addEventListener("click", () => {
    displayPanel.innerHTML = closeButton + "<p>" + "" + "</p>";
    setDisplayPanelVisibility(true);
});

window.addEventListener("keyup", (e) => {
    if (e.key == "Escape") setDisplayPanelVisibility(false);
});