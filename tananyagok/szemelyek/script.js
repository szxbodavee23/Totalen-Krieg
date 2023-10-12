const $ = (selector) => {
    return document.querySelector(selector);
}

const $all = (selector) => {
    return document.querySelectorAll(selector);
}

const displayPanel = $(".display-panel");
let displayPanelVisibility = false;

const setDisplayPanelVisibility = (visibility) => {
    if (visibility && window.innerHeight >= 1080) {
        displayPanel.style = "display: block; position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%); background-color: gray;" +
            "padding: 1rem; border-radius: 25px; max-width: 50%; min-width: 350px;";
            $(".link-back").style = "display: none";
    }
    else if (visibility && window.innerHeight < 1080) {
        displayPanel.style = "display: block; position: absolute; left: 50%; top: 0%; transform: translate(-50%, 0%); background-color: gray;" +
            "padding: 1rem; border-radius: 25px; max-width: 50%; min-width: 350px;";
            $(".link-back").style = "display: none";
    }
    else {
        displayPanel.style = "display: none;";
        $(".link-back").style = "display: inline";
    }

    displayPanelVisibility = visibility;
}

setDisplayPanelVisibility(false);

const closeButton = "<button type='button' onclick='setDisplayPanelVisibility(false)' style='position: absolute; top: 1%; right: 1%; transform: translate(-1%, -1%); background-color: rgba(0,0,0,0); color: crimson; border: none; font-size: 1.3rem;'>X</button><br>";

$("#szovetseges").addEventListener("click", () => {
    displayPanel.innerHTML = closeButton + 
    "<img src='../../pics/szovjet.jpg' style='max-width: 50%; height: auto; margin: 5px;'>" +
    "<img src='../../pics/britanniazaszlo.svg' style='max-width: 50%; height: auto; margin: 5px;'>" +
    "<img src='../../pics/usazaszlo.svg' style='max-width: 50%; height: auto; margin: 5px;'>" + 
    "<img src='../../pics/freefrancezaszlo.png' style='max-width: 50%; height: auto; margin: 5px;'>";

    setDisplayPanelVisibility(true);
});

$("#tengely").addEventListener("click", () => {
    displayPanel.innerHTML = closeButton +
    "<img src='../../pics/nemetzaszlo.png' style='max-width: 50%; height: auto; margin: 5px;' class='lightblue'>" +
    "<img src='../../pics/japanzaszlo.png' style='max-width: 50%; height: auto; margin: 5px;' class='lightblue'>" +
    "<img src='../../pics/olaszzaszlo.png' style='max-width: 50%; height: auto; margin: 5px;' class='lightblue'>" + 
    "<img src='../../pics/magyarzaszlo.png' style='max-width: 50%; height: auto; margin: 5px;' class='lightblue'>";
    setDisplayPanelVisibility(true);
});

window.addEventListener("keyup", (e) => {
    if (e.key == "Escape") setDisplayPanelVisibility(false);
});