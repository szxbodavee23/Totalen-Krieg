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
        let ihtml = e.target.innerHTML;
        
        if (ihtml.startsWith("1939")) {
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
            "<img src='../../pics/lengyel_hadjarat.jpg' style='margin-top: 2rem; width: 50%; min-width: 300px;'>"; // Itt a kep
        }
        else if (ihtml.startsWith("1940. május 10.")) {
            displayPanel.innerHTML = closeButton + 
            "A hadjáratot két nagyobb szakaszra lehet osztani: az első szakaszban („Fall Gelb”) a német páncélos ékek átkeltek az Ardennek hegységen " +
            "és hátulról bekerítették a szövetséges főerőket, amelyek Franciaország északi részén és Belgiumban harcoltak. A harcok eredményeként a " +
            "Brit Expedíciós Haderő a tengerpartra szorult vissza és a Dinamó hadművelet keretében több mint 300 000 brit, francia és más nemzetiségű " +
            "katonát kellett kimenteni Dunkerque-ből. A hadjárat következő szakaszában, amely június 5-én kezdődött („Fall Rot”), a német csapatok áttörték " +
            "a sebtében kiépített francia védelmi állásokat, hátulról megkerülték a fő francia védelmi állást, a Maginot-vonalat, és mélyen benyomultak " +
            "Franciaország területére. Június 10-én Olaszország is hadat üzent Franciaországnak és támadást indított az ország déli részén." + 
            "<img src='../../pics/parizs_terkep.jpg' style='margin-top: 2rem; width: 50%; min-width: 300px;'>";
        }
        else if (ihtml.startsWith("1940. június 22.")) {
            displayPanel.innerHTML = closeButton +
            "A hadjárat a tengelyhatalmak döntő győzelmével zárult: Franciaországot két, északi és nyugati megszállási zónára osztották fel, " +
            "délen az olasz csapatok tartottak megszállva egy kis részt, míg a maradékon – az ún. zone libre – megalakult a Vichy-kormány, " +
            "amely elvileg polgári fennhatóságot gyakorolt mindhárom zónában. 1942 novemberében a német csapatok megszállták a zone libre-t is, " +
            "és Franciaország német megszállás alatt maradt egészen 1944 júniusáig, amikor a szövetségesek partra szálltak Normandiában. " +
            "Franciaország területének nagy része csak 1944 szeptemberére szabadult fel." + "<br>" +
            "<img src='../../pics/francia_hadjarat.jpg' style='margin-top: 2rem; width: 50%; min-width: 300px;'>";
        }

        setDisplayPanelVisibility(true);
    });
});