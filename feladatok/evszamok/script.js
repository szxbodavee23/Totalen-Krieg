const $ = (selector) => {
    return document.querySelector(selector);
}

const $all = (selector) => {
    return document.querySelectorAll(selector);
}

const taskInputs = $all(".task-input");
const btn = $("#ellenorzes");
const displayPanel = $(".display-panel");

let vis = false;

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
    else if (!visibility) { 
        displayPanel.style = "display: none;";
        $(".link-back").style = "display: inline";

        taskInputs.forEach(ti => {
            ti.style = "background-color: white;"
        });
    }

    vis = visibility;
}

const disableDisplayPanel = () => {
    setDisplayPanelVisibility(false);
}

setDisplayPanelVisibility(false);

const closeButton = "<button type='button' onclick='setDisplayPanelVisibility(false)' style='position: absolute; top: 1%; right: 3%; transform: translate(-1%, -3%); background-color: rgba(0,0,0,0); color: crimson; border: none; font-size: 1.3rem;'>X</button><br>";

const solutions = [1939, 1940, 1941, 1942, 1945, 1945];

const evaluateTasks = () => {
    let points = 0;

    taskInputs.forEach((ti, ind) => {
        if (ti.value == solutions[ind]) {
            points++;
            ti.style = "background-color: green; border-color: darkgreen";
        }
        else 
        ti.style = "background-color: red; border-color: crimson;";
    });

    displayPanel.innerHTML = closeButton + `Elért pontok száma: ${points}/6<br>Teljesítmény: ${Math.floor(points/6*100)}%<br><br>`;

    const a = document.createElement("a");
    a.classList.add("navlink");
    a.classList.add("line");
    
    if (points == 6) {
        a.innerHTML = "Ugrás a következő tananyagra!";
        a.href = "../../tananyagok/helyszinek/helyszinek.html";
    }
    else {
        a.innerHTML = "Vissza a tananyaghoz";
        a.href = "../../tananyagok/evszamok/evszamok.html";
    }

    displayPanel.appendChild(a);

    setDisplayPanelVisibility(true);
    window.scrollTo(0, 0);

}

btn.addEventListener("click", () => {
    let emptys = 0;
    taskInputs.forEach(ti => {if (ti.value == "") emptys++;});

    if (emptys > 0) {
        displayPanel.innerHTML = closeButton + `${emptys} beviteli mező üresen maradt!<br>Szeretnéd így beküldeni?<br>`;

        const by = document.createElement("button");
        by.innerHTML = "Igen";
        by.id = "white-fg-button";
        
        const bn = document.createElement("button");
        bn.innerHTML = "Nem";
        bn.id = "white-fg-button";
        
        displayPanel.appendChild(by);
        displayPanel.appendChild(bn);
        
        by.addEventListener("click", evaluateTasks);
        bn.addEventListener("click", disableDisplayPanel);

        setDisplayPanelVisibility(true);
        window.scrollTo(0, 0);
    }
    else {
        evaluateTasks();
    }
});


taskInputs.forEach(ti => {
    ti.addEventListener("click", () => {
        if (vis) {
            setDisplayPanelVisibility(false);
        }
    });
});

window.addEventListener("keyup", (e) => {if (e.key == "Escape") setDisplayPanelVisibility(false);});