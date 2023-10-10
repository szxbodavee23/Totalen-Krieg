const $ = (selector) => {
    return document.querySelector(selector);
}

const $all = (selector) => {
    return document.querySelectorAll(selector);
}

const setDisplayPanelVisibility = (visibility) => {
    if (visibility) {
        displayPanel.style = "display: block; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); background-color: gray;" +
            "padding: 1rem; border-radius: 25px;";
    }
    else {
        displayPanel.style = "display: none;";
    }
}

const displayPanel = $(".display-panel");
displayPanel.style = "display: none;";

const closeButton = "<button type='button' onclick='setDisplayPanelVisibility(false)' style='position: absolute; top: 1%; right: 1%; transform: translate(-1%, -1%); background-color: rgba(0,0,0,0); color: crimson; border: none; font-size: 1.3rem;'>X</button><br>";

const lis = $all("li");

lis.forEach(li => {
    li.addEventListener("click", (e) => {
        if (e.target.innerHTML.startsWith("1939")) {
            displayPanel.innerHTML = closeButton +
            "Lengyelország volt az az ország, amelynek területén a Harmadik Birodalom támadásával elkezdődött a második világháború. " +
            "A lengyel állam 123 év után, 1918-ban szerezte vissza a függetlenségét együtt azokkal a földterületekkel, amelyek a 18." +
            "század végén, az ország három felosztásának folyamatában Németország és Oroszország uralma alá kerültek." +
            " Ezek az államok azonban soha nem ismerték el a régi-új helyzetet és a megfelelő pillanatra vártak, hogy revánsot vegyenek. " +
            "1939. szeptember 1-jén Németország megtámadta Lengyelországot nyugatról, 17-én pedig a Szovjetunió keletről. Szeptember 3-án a" + 
            "Németország elleni háborúba belépett Franciaország és Nagy-Britannia, amelyek azután, hogy Németország és a Szovjetunió elfoglalták a" +
            "lengyel területet, nem kötöttek békét, így a helyi háború előbb európaivá, azután pedig világháborúvá szélesedett. " +
            "Annak ellenére, hogy Lengyelország a Hitler-ellenes koalícióban, azaz a győztes oldalon állt, a világháború után nem szerezte vissza" + 
            "teljes függetlenségét. Ahogyan a közép-európai államok többsége, úgy Lengyelország is a Szovjetunió fennhatósága alá került." + "<br>" +
            "<img src='../../pics/lengyel_hadjarat.jpg' style='margin-top: 2rem;'>"; // Itt a kep

            setDisplayPanelVisibility(true);
        }
    });
});