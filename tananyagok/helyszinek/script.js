const $ = (selector) => {
    return document.querySelector(selector);
}

const $all = (selector) => {
    return document.querySelectorAll(selector);
}

const displayPanel = $(".display-panel");
const cover = $(".cover");
let displayPanelVisibility = false;

const setDisplayPanelVisibility = (visibility) => {
    if (visibility && window.innerHeight >= 540) {
        displayPanel.style = "display: block; position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%); background-color: gray;" +
            "padding: 1rem; border-radius: 25px; box-shadow: 10px 10px 15px black;";
        $(".link-back").style = "display: none";
    }
    else if (visibility && window.innerHeight < 540) {
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

const closeButton = "<button type='button' onclick='setDisplayPanelVisibility(false)' style='position: absolute; top: 1%; right: 1%; transform: translate(-1%, -1%); background-color: rgba(0,0,0,0); color: crimson; border: none; font-size: 1.3rem;'>X</button><br>";

const lis = $all("li");

const data = [ // Ez igy eleg csoves megoldas, de VS codeban igy tudtam a leggyorsabban megcsinalni
    {Normandia: "A D-nap, vagyis a Normandiai partraszállás 1944 júniusában történt, és a szövetségesek ezzel megkezdték az európai partraszállást a náci Németország ellen."},
    {Sztalingrad: "A Sztálingrádi csata (1942-1943) a legnagyobb földi csata volt a háborúban, és végül a szovjeteknek sikerült megfordítaniuk a német előrenyomulást, ami jelentős fordulópontot jelentett a háborúban."},
    {PearlHarbor: "A japán támadás a Pearl Harbori haditengerészeti bázison 1941 decemberében vezetett az Egyesült Államok részvételéhez a háborúban."},
    {Auswitz: "Ez volt az egyik legnagyobb náci koncentrációs és haláltábor, ahol milliók veszítették életüket a holokauszt során."},
    {Berlin: "Berlin a háború végén a szövetséges erők által elfoglalt főváros volt, és Adolf Hitler 1945-ben Berlinben öngyilkos lett."},
    {HirosimaEsNagaszaki: "Az amerikaiak 1945 augusztusában két atombombát dobtak le ezekre a városokra, ami Japán kapitulációját eredményezte, és befejezte a háborút."},
    {ElAlamein: "Az El-Alameini csata (1942) az Észak-Afrikában folytatott harcok egyik döntő összecsapása volt, ahol a szövetségesek megállították a német-olasz erőket."},
    {IwoJimaEsOkinawa: "Ezek a szigetek fontos helyszínek voltak a Csendes-óceáni hadszíntéren, és a szövetségeseknek sikerült elfoglalni őket a japánoktól."},
    {Dunkirk: "A Dunkirki menekülés (1940) során a szövetségesek kivonták csapataikat a németek elől, hogy megmenthessék őket az angliai partra való szállításhoz."},
    {Leningrad: "A németek 1941-ben kezdett ostroma alatt a város lakossága hosszú szenvedéseken ment keresztül, de Leningrádot végül sikerült megőrizni az ellenség előrenyomulása ellen."},
    {MidwaySzigetek: "A Midway-szigeti csata (1942) az egyik legfontosabb tengeri csata volt, ahol az amerikai flotta sikerrel szembesült a japán flottával és megtörte japán haditervüket."},
    {Kurszk: "A Kurszki csata (1943) a legnagyobb tankcsata volt a háború során, ahol a német és a szovjet erők között nagy csata zajlott le a németek által tervezett offenzíva ellen."},
    {PeleliuSzigetek: "A Peleliu-szigeteki csata (1944) az Egyesült Államok és Japán közötti harcok egyik része volt a Csendes-óceáni hadszíntéren, és a szövetségeseknek sikerült elfoglalni a szigetet."},
    {MonteCassio: "A monte cassinoi csata (1944) során az amerikai és szövetséges erők megküzdöttek a németekkel a monte cassinoi kolostor ellenőrzéséért, amely stratégiai fontosságú pont volt az olasz hadszíntéren."},
    {Moszkva: "Moszkva a háború kezdetén a német támadásnak volt kitéve, de a szovjetek sikerrel védték meg a várost, és ez hozzájárult a szovjet ellenállás megerősítéséhez."}
];

lis.forEach((li, ind) => {
    li.addEventListener("click", () => {
        data.forEach((d, index) => {
            if (ind == index && !displayPanelVisibility) {
                displayPanel.innerHTML = closeButton + "<p>" + Object.values(d)[0] + "</p>";
                setDisplayPanelVisibility(true);
            }
        });
    });
});

window.addEventListener("keyup", (e) => {
    if (e.key == "Escape") setDisplayPanelVisibility(false);
});