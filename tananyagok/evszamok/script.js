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

const lis = $all("li");

lis.forEach(li => {
    li.addEventListener("click", (e) => {
        let ihtml = e.target.innerHTML;
        
        if (!displayPanelVisibility) {
            if (ihtml.startsWith("1939")) {
                displayPanel.innerHTML = closeButton + "<p>" +
                "Lengyelország volt az az ország, amelynek területén a Harmadik Birodalom támadásával elkezdődött a második világháború. " +
                "A lengyel állam 123 év után, 1918-ban szerezte vissza a függetlenségét együtt azokkal a földterületekkel, amelyek a 18." +
                "század végén, az ország három felosztásának folyamatában Németország és Oroszország uralma alá kerültek." +
                " Ezek az államok azonban soha nem ismerték el a régi-új helyzetet és a megfelelő pillanatra vártak, hogy revánsot vegyenek. " +
                "1939. szeptember 1-jén Németország megtámadta Lengyelországot nyugatról, 17-én pedig a Szovjetunió keletről. Szeptember 3-án a " + 
                "Németország elleni háborúba belépett Franciaország és Nagy-Britannia, amelyek azután, hogy Németország és a Szovjetunió elfoglalták a " +
                "lengyel területet, nem kötöttek békét, így a helyi háború előbb európaivá, azután pedig világháborúvá szélesedett. " +
                "Annak ellenére, hogy Lengyelország a Hitler-ellenes koalícióban, azaz a győztes oldalon állt, a világháború után nem szerezte vissza" + 
                "teljes függetlenségét. Ahogyan a közép-európai államok többsége, úgy Lengyelország is a Szovjetunió fennhatósága alá került." + "</p>" +
                "<img src='../../pics/lengyel_hadjarat.jpg' style='margin-top: 2rem; width: 50%; min-width: 300px;'>"; // Itt a kep
            }
            else if (ihtml.startsWith("1940. május 10.")) {
                displayPanel.innerHTML = closeButton + "<p>" + 
                "A hadjáratot két nagyobb szakaszra lehet osztani: az első szakaszban („Fall Gelb”) a német páncélos ékek átkeltek az Ardennek hegységen " +
                "és hátulról bekerítették a szövetséges főerőket, amelyek Franciaország északi részén és Belgiumban harcoltak. A harcok eredményeként a " +
                "Brit Expedíciós Haderő a tengerpartra szorult vissza és a Dinamó hadművelet keretében több mint 300 000 brit, francia és más nemzetiségű " +
                "katonát kellett kimenteni Dunkerque-ből. A hadjárat következő szakaszában, amely június 5-én kezdődött („Fall Rot”), a német csapatok áttörték " +
                "a sebtében kiépített francia védelmi állásokat, hátulról megkerülték a fő francia védelmi állást, a Maginot-vonalat, és mélyen benyomultak " +
                "Franciaország területére. Június 10-én Olaszország is hadat üzent Franciaországnak és támadást indított az ország déli részén." + "</p>" +
                "<img src='../../pics/parizs_terkep.jpg' style='margin-top: 2rem; width: 50%; min-width: 300px;'>"; // Itt a kep
            }
            else if (ihtml.startsWith("1940. június 22.")) {
                displayPanel.innerHTML = closeButton + "<p>" +
                "A hadjárat a tengelyhatalmak döntő győzelmével zárult: Franciaországot két, északi és nyugati megszállási zónára osztották fel, " +
                "délen az olasz csapatok tartottak megszállva egy kis részt, míg a maradékon – az ún. zone libre – megalakult a Vichy-kormány, " +
                "amely elvileg polgári fennhatóságot gyakorolt mindhárom zónában. 1942 novemberében a német csapatok megszállták a zone libre-t is, " +
                "és Franciaország német megszállás alatt maradt egészen 1944 júniusáig, amikor a szövetségesek partra szálltak Normandiában. " +
                "Franciaország területének nagy része csak 1944 szeptemberére szabadult fel."+"</p>" + "<br>" +
                "<img src='../../pics/francia_hadjarat.jpg' style='margin-top: 2rem; width: 50%; min-width: 300px;'>"; // Itt a kep
            }
            else if (ihtml.startsWith("1940(szeptember 7.)")) {
                displayPanel.innerHTML = closeButton + "<p>" +
                "Az angliai csata alatt a második világháború során a német légierő (Luftwaffe) és a brit " +
                "légierő (Royal Air Force) között a levegőben, a La Manche csatorna ellenőrzéséért vívott küzdelemsorozatot értjük. A " +
                "náci hadvezetés a légtér ellenőrzését előfeltételnek tekintette Nagy-Britannia megszállásához. A csata dátumát a brit, " +
                "illetve német források eltérően adják meg: az angolok 1940. július 10. és október 31. között, míg a németek 1940. " +
                "augusztus közepétől 1941. május végéig tartott." +
                "A Blitz kifejezés a villámháborút jelentő német Blitzkriegből került át az angolba. Az angolszász szakirodalomban ezen " +
                "a néven, de London Blitzként vagy Big Blitzként is hivatkoznak a német légierő brit célpontok ellen 1940–1941-ben végrehajtott éjszakai légitámadásainak időszakára."+"</p>" + "<br>" +
                "<img src='../../pics/angliai_csata.jpg' style='margin-top: 2rem; width: 50%; min-width: 300px;'>";
            }
            else if (ihtml.startsWith("1941. június 22")) {
                displayPanel.innerHTML = closeButton + "<p>" + 
                "A hadművelet fedőneve Fall Barbarossa lett, Barbarossa Frigyes, a Német-római Birodalom egykori uralkodója után. " +
                "A név kiválasztását hosszú mérlegelés előzte meg, felmerült az Otto név is, de a Rőtszakállú mint példakép jobbnak " +
                "bizonyult. Az előkészületekkel együtt majdnem egy évig, 1941 tavaszától 1941 teléig tartó hadművelet kidolgozását " +
                "Paulus tábornok vezetésével végezték, célja pedig a Szovjetunió európai részének a gyors elfoglalása volt, " +
                "egészen az Arhangelszktől Asztrahánig húzott képzeletbeli vonalig, melyet gyakran csak A–A-vonalként említettek. " +
                "A hadművelet előkészítése során Németország és szövetségesei – a tartalékokkal együtt – kb. 3,9 millió katonát " +
                "vezényeltek a keleti frontra, és 1941. június 22-én mintegy 3,5 millió katona indított támadást a Szovjetunió " +
                "ellen egy kb. 2900 kilométer széles harcvonalon. A támadók 3600 harckocsival, 4389 harci repülőgéppel, " +
                "600 000 egyéb gépjárművel és 750 000 lóval rendelkeztek. Kezdeti német sikerek után – jelentős veszteségeket " +
                "okoztak a Vörös Hadseregnek, elfoglalták a Szovjetunió európai felének nagy részét, elsősorban a fejlett ipari és " +
                "mezőgazdasági területeket – azonban a Vörös Hadsereg sikerrel állította meg a Wehrmacht legerősebb támadásait, és " +
                "megakadályozta, hogy a németek elfoglalják Moszkvát, illetve Leningrádot."+"</p>" + "<br>" + 
                "<img src='../../pics/barbarossa_map.jpg' style='margin-top: 2rem; width: 50%; min-width: 300px;'>";
            }
            else if (ihtml.startsWith("1941. december 7")) {
                displayPanel.innerHTML = closeButton + "<p>" + 
                "A Pearl Harbor elleni japán támadás – avagy Pearl Harbor-i csata – a Japán Császári Haditengerészet által végrehajtott " +
                "rajtaütésszerű légicsapás volt az Egyesült Államok Csendes-óceáni Flottájának Hawaii-szigeteken lévő fő támaszpontja " +
                "ellen 1941. december 7-én. A japán támadás az amerikai Csendes-óceáni Flotta nagy részét harcképtelenné tette, ami " +
                "legfőképpen azért történhetett meg, mert a Pearl Harbor-i katonai parancsnokok nem készültek fel egy ilyen támadásra. " +
                "Válaszul az Egyesült Államok másnap, 1941. december 8-án hadat üzent a Japán Császárságnak." +
                "A kódnevén Ai hadművelet névvel illetett akcióval Japán az 1937 óta folytatott csendes-óceáni háborúját terjesztette ki. " +
                "A hadművelet célja az volt, hogy az amerikai Csendes-óceáni Flottát átmenetileg kiiktassák és ezáltal zavartalan hozzáférésük " +
                "lehessen Délkelet-Ázsia nyersanyagkincseihez. Az Egyesült Államok részéről Japánnak küldött hadüzenetet követően pár nappal, " +
                "december 11-én Németország és Olaszország hadat üzent az Egyesült Államoknak. A Pearl Harbor elleni támadás ennek révén a " +
                "második világháború egyik döntő fordulópontja lett. Habár az Egyesült Államok már december 11. előtt is nagy támogatást nyújtott " +
                "a kölcsönbérleti törvény (Lend-Lease) révén Nagy-Britanniának és a Szovjetuniónak, de ezidáig még formálisan független maradt. " +
                "A támadás időpontjában az amerikai repülőgép-hordozók nem voltak a támaszponton, ezért őket nem érték károk. A japánok nem " +
                "támadták az üzemanyagtárolókat, hajógyárakat és dokkokat, ami később súlyos mulasztásnak bizonyult. A Pearl Harbor elleni " +
                "támadás előtt pár órával kezdte meg Japán az offenzíváját a délkelet-ázsiai brit és holland gyarmatok ellen. A támadást " +
                "tekintik annak a csatának, mely a tengeri háborúban a csatahajó helyett a repülőgép-hordozót és magát a repülőgépet tette meg a meghatározó eszközzé. " +
                "Habár a támadás az Egyesült Államokat katonailag jelentősen gyengítette, a következményei Japán számára végzetesnek bizonyultak. " +
                "Az Egyesült Államokban „alattomosnak” tekintett rajtaütés után sikerült a kormányzatnak az eddig főként pacifista vagy " +
                "izolacionista beállítottságú lakosságot mozgósítania a háborúba való belépés érdekében, ami az USA hatalmas ipari potenciálja " +
                "miatt a szövetségesek győzelméhez vezetett a háborúban. Az Egyesült Államokban a Pearl Harbor név a minden előzetes figyelmeztetés " +
                "nélküli megsemmisítő támadás szinonímája lett."+"</p>" + "<br>" +
                "<img src='../../pics/pearl_harbour.jpg' style='margin-top: 2rem; width: 50%; min-width: 300px;'>";
            }
            else if (ihtml.startsWith("1942. június 4-7")) {
                displayPanel.innerHTML = closeButton + "<p>" + 
                "A midwayi csata a második világháború egyik döntő ütközete volt 1942 júniusában a Csendes-óceánon a Midway-atoll térségében. " +
                "1942 tavaszára Japán megszállta a Fülöp-szigeteket, Szingapúrt, Holland Kelet-Indiát, valamint Új-Guinea északi felét, " +
                "Új-Britanniát és a Salamon-szigeteket. Már a Csendes-óceán keleti és déli vizeit, Ausztrália északi partjait is veszélyeztette, " +
                "amelyek védelméről gondoskodni kellett. Jamamoto Iszoroku stratégiai terve az Amerikai Egyesült Államok repülőgép-hordozóinak " +
                "megsemmisítését tűzte ki célul, mivel ezeket tartotta a csendes-óceáni japán terjeszkedésre legveszélyesebb fegyvereknek. Ezt " +
                "húzta alá az 1942. április 18-án Doolittle ezredes vezette bombatámadás Tokió ellen. Mivel a japán főparancsnok a Hawaii-szigetekre " +
                "telepített amerikai repülőcsoportosítást immár túl erősnek ítélte ahhoz, hogy Pearl Harbort ismét megtámadhassák, a Midway-atollon " +
                "települő légi támaszpontot választotta célpontnak. Az amerikaiak azonban időközben megfejtették a japánok biztonságosnak hitt 97-es " +
                "típusú rejtjelező készülékét, az Enigmáéhoz hasonló rejtjelező géppel kódolt jelek túlnyomó részét, az MI hadművelet célját, ugyanakkor " +
                "a japánok, gyengén működő hírszerzésük miatt, lényegében semmit nem tudtak az amerikaiak felkészültségéről és helyzetéről."+"</p>" + "<br>" +
                "<img src='../../pics/midway.jpg' style='margin-top: 2rem; width: 50%; min-width: 300px;'>";
            }
            else if (ihtml.startsWith("1943. február 2")) {
                displayPanel.innerHTML = closeButton + "<p>" + 
                "A körülzárt német csapatok egyre inkább szorultak vissza a belvárosba. Január 25-ére elveszítették mindkét repülőterüket, ami teljesen "+
                "lehetetlenné tette a további utánpótlást és a sebesültek elszállítását. A németek éheztek, és fogytán volt a lőszer is. Ennek ellenére "+
                "folytatták a makacs ellenállást. Hittek abban, hogy a német hadsereg végül felmenti a várost, és általánosan elterjedt volt az a vélekedés "+
                "is, hogy a szovjetek kivégzik hadifoglyaikat. A szovjeteket kezdetben meglepte a bekerített katonák magas száma, és többször meg kellett "+
                "erősíteniük az ostromgyűrűt. Parlamenter útján tettek egy meglehetősen nagyvonalú ajánlatot Paulusnak a kapitulációra: garantálták volna "+
                "a foglyok normális ellátását és orvosi kezelését a háború végéig, utána pedig kiengedték volna őket egy tetszőleges harmadik országba. "+
                "Paulus, hűen a Hitlertől kapott parancshoz, az ajánlatot elutasította."+
                "Ezzel a 6. hadsereg sorsa megpecsételődött. Újrakezdődtek a véres utcai, házról házra folytatott harcok, ezúttal azonban felcserélődtek "+
                "a szerepek: a szovjetek támadtak, és a németek szorultak vissza a Volga felé."+
                "Január 30-án Hitler marsallá léptette elő Paulust. Mivel Paulus előtt még soha egyetlen német marsall sem adta meg magát, Hitler "+
                "feltételezte, hogy Paulus a végsőkig fog harcolni, vagy öngyilkos lesz. Másnap, amikor a szovjet csapatok megközelítették a GUM áruház "+
                "épületében berendezett főhadiszállását, Paulus megadta magát, amit február 2-án 91 000 további beteg, éhező, és reményvesztett német "+
                "katona kapitulációja követett. A foglyok között 22 tábornok volt. Hitler dühöngött: \"Paulus az örök dicsőség küszöbén csinált hátraarcot\" mondta."+"</p>" + "<br>" +
                "<img src='../../pics/stalingrad.jpg' style='margin-top: 2rem; width: 50%; min-width: 300px;'>";
            }
            else if (ihtml.startsWith("1944. június 6.")) {
                displayPanel.innerHTML = closeButton + "<p>" + 
                "A szövetségesek éjfél után nem sokkal három légi szállítású hadosztályt dobtak le a tervezett partraszállási övezet " +
                "két szárnyán, hogy megakadályozzák a németek ellentámadását. Az ejtőernyősök elfoglalták a kijelölt magaslatokat, " +
                "hidakat, töltéseket és ütegeket. Az angolok és amerikaiak sok helyen harcba bocsátkoztak a németekkel, akik megzavarodtak " +
                "az egymásnak ellentmondó, sokszor pontatlan információktól, és nem rendeltek el általános riadót. Hajnali öt óra " +
                "körül a több mint hatezer hajóból álló flotta felsorakozott Normandia előtt, majd a hajóágyúk lőni kezdték a parti védműveket, " +
                "a brit, kanadai és amerikai katonák pedig elindultak a partraszállító járművekkel az öt partszakasz – kódnevükön Utah, Omaha, Gold, Juno, Sword – felé. " +
                "A hadihajók tüze után a szövetséges légierő hatalmas támadást intézett a partokon kiépített védelmi állások és más, mélyebben " +
                "fekvő célpontok ellen. Június 6-án a szövetséges gépek 14 600 bevetést teljesítettek, amire a németek mindössze százzal " +
                "tudtak válaszolni. A rossz látási körülmények miatt azonban a gépek sok célpontot nem találtak el, az Omaha-parthoz rendelt " +
                "329 bombázó például öt kilométerre a célpontoktól dobta le 13 ezer bombáját. A légi előkészítés után öt gyalogoshadosztály " +
                "szállt partra Franciaországban. A németek ellenállása különböző erősségű volt, a leghevesebb csata az Omaha-szakaszon bontakozott ki." +
                "A németek hosszú ideig úgy gondolták, hogy a normandiai akció nem a valódi partraszállás, hanem egy elterelő támadás, ezért késve, " +
                "nehézkesen lendültek mozgásba. A Führer átaludta az invázió első óráit Berchtesgadenben, ugyanis utasításának megfelelően nem ébresztették fel. " +
                "1944. június 6-án a szövetséges erők megvetették a lábukat Normandiában, és 156 115 szövetséges katona lépett francia földre az öt " +
                "elfoglalt partszakaszon. Az angolszászok az invázió első hat napján 326 ezer embert, 54 ezer járművet, 104 ezer tonnányi hadianyagot " +
                "tettek partra a hídfőben. Az utánpótlást napi kétszáz hajó szállította Franciaországba. A június 6-ai harcokban mintegy tízezer szövetséges " +
                "katona esett el, sebesült meg vagy tűnt el. Több mint hatvan százalékuk amerikai volt. A pontos német adat nem ismert, a becslések szerint a veszteség 4-9 ezer főre rúgott."+"</p>" + "<br>" +
                "<img src='../../pics/dday.jpg' style='margin-top: 2rem; width: 50%; min-width: 300px;'>";
            }
            else if (ihtml.startsWith("1944. december 16")) {
                displayPanel.innerHTML = closeButton + "<p>" + 
                "Az ardenneki offenzíva (fedőneve: Wacht am Rhein, majd Herbstnebel) volt a Harmadik Birodalom utolsó ellentámadása a nyugati fronton, " +
                "amely a Wehrmacht oldalára hivatott billenteni az erőviszonyokat. Az ütközet Belgium, Luxemburg és Németország területén zajlott. " +
                "Az offenzíva 1944. december 16-án indult; a német csapatok 25–30 kilométer mélyen betörtek az amerikaiak vonalai mögé. Végül az " +
                "utánpótlási nehézségek és a légitámadások miatt a német hadsereg visszavonulásra kényszerült. Az offenzíva legismertebb filmes feldolgozása, " +
                "részben a valós események alapján, 1965-ben készült el A halál ötven órája (Battle of the Bulge) címmel. Az Arlingtoni Nemzeti Temetőben " +
                "emlékmű tiszteleg a német előrenyomulást megállító amerikai katonák előtt."+"</p>" + "<br>" +
                "<img src='../../pics/thebulge.webp' style='margin-top: 2rem; width: 50%; min-width: 300px;'>";
            }
            else if (ihtml.startsWith("1945. április 30")) {
                displayPanel.innerHTML = closeButton + "<p>" + 
                "<img src='../../pics/hitler.jpg' style='margin-top: 2rem; width: 50%; min-width: 300px;'>";
            }
            else if (ihtml.startsWith("1945. május 7-8.")) {
                displayPanel.innerHTML = closeButton + "<p>" + 
                "A jaltai konferencián a szövetségesek megállapodnak abban, hogy egyikük sem kezd külön tárgyalásokba a náci Németországgal, " +
                "valamint csak a feltétel nélküli megadást fogadják el. " +
                "1945. április 24-én Himmler megpróbálta kihasználni az amerikai és az angol politikában jelentkező szovjetellenességet, " +
                "és külön békejavaslatot tett nekik. Ajánlatát – Jalta szellemében – az amerikaiak és a britek is elutasították. " +
                "Dönitz később azon fáradozott, hogy a német hadsereg ne a szovjetek előtt tegye le a fegyvert. Eisenhower közölte, " +
                "hogy a német kapituláció csak egyidejűleg, valamennyi fronton történhet meg."+"</p>" + "<br>" +
                "<img src='../../pics/kapitulacio.jpg' style='margin-top: 2rem; width: 50%; min-width: 300px;'>";
            }
            else if (ihtml.startsWith("1945. augusztus 6.")) {
                displayPanel.innerHTML = closeButton + "<p>" + 
                "<p>"+"1945 augusztusára a szövetségesek Manhattan terve már túl volt az atombomba kifejlesztésén és tesztelésén, és " +
                "az amerikai légierő 509. összetett csoportja már rendelkezett olyan, a Silverplate fedőnév alatt felkészített " +
                "B–29-esekkel, amelyek képesek voltak azt el is juttatni a Mariana-szigeteki Tinianról Japánig. Mivel Japán nem " +
                "reagált, ezért Harry S. Truman amerikai elnök elrendelte a bombázást. Augusztus 6-án Hirosimára egy Little Boy " +
                "nevű, urán töltetű, majd 9-én Nagaszakira egy Fat Man típusú, plutónium töltetű atombombát dobtak le, előbbit az " +
                "Enola Gay, utóbbit a Bockscar bombázó fedélzetéről. A bombázások utáni négy hónapban Hirosimában 90 000-166 000, " +
                "Nagaszakiban 60 000-80 000 ember hunyt el a bombázások hatásainak következtében, nagyjából felük a bombázások napjain. " +
                "A következő hónapokban számtalan ember halt bele a sugárbetegségbe, az égési sérülésekbe, és az egyéb sebesülésekbe, " +
                "vagy a sugárzás következtében kialakult egyéb betegségekbe. Bár Hirosimának volt jókora helyőrsége is, mindkét városban " +
                "többségükben civilek vesztették életüket."+"</p>" + "<br>" +
                "<img src='../../pics/hirosima.jpg' style='margin-top: 2rem; width: 50%; min-width: 300px;'>";
            }
            else if (ihtml.startsWith("1945. szeptember 2")) {
                displayPanel.innerHTML = closeButton + "<p>" + 
                "Augusztus 15-én, hat nappal Nagaszaki bombázása után, és hét nappal a Szovjetunió hadüzenetének bejelentése után, " +
                "Japán feltétel nélkül megadta magát a szövetséges erőknek. A megadási nyilatkozatot szeptember 2-án írták alá, <p style='display: inline; color: black; text-shadow: 2px 2px 15px crimson;'>ezzel "+
                "hivatalosan is lezárva a második világháborút.</p> A bombázások szerepe a megadásban, és a felvetődő etikai, morális "+
                "kérdések máig heves viták tárgyát képzik."+"</p>" + "<br>" +
                "<img src='../../pics/japan_kapitulacio.jpg' style='margin-top: 2rem; width: 50%; min-width: 300px;'>";
            }
        }

        setDisplayPanelVisibility(true);
        window.scrollTo(0, 0);
    });
});

window.addEventListener("keyup", (e) => {
    if (e.key == "Escape") setDisplayPanelVisibility(false);
});