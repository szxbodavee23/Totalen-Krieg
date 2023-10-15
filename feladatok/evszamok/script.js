const $ = (selector) => {
    return document.querySelector(selector);
}

const $all = (selector) => {
    return document.querySelectorAll(selector);
}

const taskInputs = $all(".task-input");
const btn = $("#ellenorzes");
const displayPanel = $(".display-panel");

taskInputs.forEach(ti => ti.value = "");

const setDisplayPanelVisibility = (visibility) => {
    if (visibility && window.innerHeight >= 1000) {
        displayPanel.style = "display: block; position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%); background-color: gray;" +
            "padding: 1rem; border-radius: 25px; box-shadow: 10px 10px 15px black;";
        $(".link-back").style = "display: none";
    }
    else if (visibility && window.innerHeight < 1000) {
        displayPanel.style = "display: block; position: absolute; left: 50%; top: 0%; transform: translate(-50%, 0%); background-color: gray;" +
            "padding: 1rem; border-radius: 25px; box-shadow: 10px 10px 15px black;";
        $(".link-back").style = "display: none";
    }
    else {
        displayPanel.style = "display: none;";
        $(".link-back").style = "display: inline";
    }

    displayPanelVisibility = visibility;
}

setDisplayPanelVisibility(false);

const closeButton = "<button type='button' onclick='setDisplayPanelVisibility(false)' style='position: absolute; top: 1%; right: 3%; transform: translate(-1%, -1%); background-color: rgba(0,0,0,0); color: crimson; border: none; font-size: 1.3rem;'>X</button><br>";

const solutions = [1939, 1940, 1941, 1942, 1945, 1945];

const evaluateTasks = () => {
    setDisplayPanelVisibility(false);

    let points = 0;

    taskInputs.forEach((ti, ind) => {
        if (ti.value == solutions[ind]) 
            points++;
    });

    displayPanel.innerHTML = closeButton + `Elért pontok száma: ${points}<br>Teljesítmény: ${Math.floor(points/6*100)}%`;
    setDisplayPanelVisibility(true);
    window.scrollTo(0, 0);

}

btn.addEventListener("click", () => {
    let emptys = 0;
    taskInputs.forEach(ti => {if (ti.value == "") emptys++;});

    if (emptys > 0) {
        displayPanel.innerHTML = closeButton + `${emptys} beviteli mező üresen maradt!<br>Szeretnéd így beküldeni?<br>` +
        "<button style='background-color: rgba(0,0,0,0); color: white; border: none; margin-right: 1rem; cursor: pointer;' onclick='evaluateTasks()'>Igen</button>" +
        "<button style='background-color: rgba(0,0,0,0); color: white; border: none; margin-left: 1rem; cursor: pointer;' onclick='setDisplayPanelVisibility(false)'>Nem</button>";
        setDisplayPanelVisibility(true);
        window.scrollTo(0, 0);
    }
    else {
        evaluateTasks();
    }
});

window.addEventListener("keyup", (e) => {if (e.key == "Escape") setDisplayPanelVisibility(false);});