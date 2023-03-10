export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "As Palic",
                    rekDesno: "Pomembna materialna sprememba<br>Nova pobuda<br>Začetek nove strasti",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>V Asu palic se roka, ki drži palico, izteguje iz oblaka, kot da bi ponudila novo priložnost ali idejo s potencialom rasti. Bogata, zelena pokrajina je dodatna potrditev te sposobnosti rasti. V daljavi na levi stoji grad, ki predstavlja obljubo prihodnjih priložnosti, hribi in gore pa se vrstijo na obzorju. Njihovi valoviti vrhovi nas opominjajo, da bodo na poti vedno izzivi, ki pa so z dovolj truda premagljivi.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Karta As palic prinaša čisti potencial – tokrat na duhovnem, energijskem področju. Ideje tečejo k vam, vas motivirajo in navdihujejo, da greste na novo pot. Odprti ste za prejemanje novih priložnosti, ki so v skladu z vašim višjim jazom. Na voljo vam je cel svet možnosti.</p><p>As palic vas spodbuja, da sledite svojemu srcu in živite svojo strast. Če čutite močno željo po novem projektu ali poti, vendar se sprašujete, ali bo uspelo, vas ta karta nežno spodbudi, da sledite svoji strasti. Vedno lahko začnete z majhnim, projekt ali idejo pa obravnavate kot poskus. Potem, če se vam zdi dobro, nadaljujte s tem; in če se ne, prilagodite in poskusite znova. Naj bodo vaše vodilo energija, predanost in motivacija.</p><p>Če ste iskali znak o tem, ali je to pravi projekt, potem je As palic jasen DA! Brsteča palica in rodovitna pokrajina v ozadju sta pozitivna znaka, da ima ta ideja potencial, da se spremeni v nekaj izpolnjujočega in energičnega. Uporabite svojo ustvarjalno energijo in strast, da naredite prve korake. Tudi če raje vse načrtujete, preden začnete po določeni poti, As palic želi, da poslušate svoje instinkte in sledite svojemu občutku. Če se zdi dobra ideja, verjetno je. Torej, začnite z nekaj osnovami, da se stvari začnejo izvajati, nato pa nadaljujte z rastjo in razvojem svojih zamisli skozi bolj zapletene dejavnosti pozneje. Pomembno je, da ukrepate zdaj, namesto da porabite več časa za načrtovanje ali raziskovanje.</p><p>Ne pozabite pa, da asi predstavljajo možne, vendar ne zajamčene rezultate. As palic (ali kateri koli as) je seme, ki mora šele zrasti v nekaj pomembnejšega ali trajnostnega. Priložnost, ki je v ponudbi, obeta veliko, a od vas bo odvisno, ali jo boste dolgoročno izkoristili. Na to karto glejte kot na iskro, ki je potrebna za podžig velikega požara, vendar ne pozabite, da sam blisk ne zadostuje za ohranjanje plamena.</p><p>As palic se lahko pojavi, ko imate priložnost rasti na osebni ali duhovni ravni. Morda vas bo zanimalo predavanje ali vlaganje v tečaj, da boste lahko sledili svojemu ustvarjalnemu duhu. Lahko se na primer vpišete v tečaj fotografije, tečaj tarota ali program za samoizboljšanje. Verjemite, da vam bo ta izkušnja odprla še več možnosti.</p>',
                    besedePokoncna: 'Navdih, nove priložnosti, nova kariera, rast, potencial, kreativna iskra, entuziazem, spontanost, nov poslovni podvig, donosna pot, dediščina, rojstvo v družini.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Obrnjen As palic nakazuje, da lahko začutite idejo, ki se poraja od znotraj, vendar niste prepričani, kakšno obliko bo imela ali kako jo boste manifestirali v svetu. Morda imate veliko energije in strasti, vendar še nimate jasnega pretoka, da bi ju izrazili. Morda čakate, da se zgodi kaj drugega, preden nadaljujete s to idejo. Lahko pa raje obdržite svojo idejo v zasebnosti, dokler ne vzkali vaša samozavest. Vse te čudovite ideje brbotajo, zdaj pa morate najti način, kako izkoristiti to ustvarjalno energijo, da se boste dolgoročno postavili.</p><p>Obrnjen As palic lahko nakazuje, da vam je težko opredeliti svoj življenjski namen in kaj želite ustvariti. To pomanjkanje usmeritve vam lahko izčrpa energijo in vas pusti nemotivirane in brez navdiha. Posledično se pogosto sprašujete, ali je to tisto, kar si želite v življenju in ali je morda kje drugje kaj boljšega. Vendar ko razmišljate o tem, katere druge priložnosti bi vas lahko pritegnile, stežka veste, kaj si želite. Da bi odpravili to stagnacijo, se morate najprej osredotočiti na to, kje so vaše prave strasti; nima smisla nadaljevati proti cilju, če te ne motivira. Zato si vzemite čas za premislek, k čemu si prizadevate in kaj želite doseči iz te situacije.</p><p>Obrnjen as palic je lahko znak, da frustrirajoče zamude ovirajo napredek vaših projektov in idej. Verjetno se boste počutili zelo nepotrpežljive, še posebej, če ste usmerjeni v akcijo in ste šele začeli pridobivati zagon v svojih dejavnostih. Ključno sporočilo tukaj je: "Ne zdaj, ampak morda kasneje." Čas je bistvenega pomena za uspeh, zato bodite potrpežljivi in počakajte na najboljšo priložnost za nadaljevanje.</p>',
                    besedeObrnjena: 'Nastajajoča ideja, pomanjkanje smeri, motnje, zamude, potovanje se lahko odloži, pomanjkanje energije, pomanjkanje odločnosti, dolgočasje, sebičnost lahko pokvari podvig, neuspehi za novo podjetje.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Pripravljen sem in željan sprejeti novo priložnost!\"",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Karta, kot ogledalo",
                    opis: "Smo kot palica: porojeni s silami zemlje in svetlobe, dragulj življenjske sile, odcep preteklosti, energija sedanjosti, korenina prihodnosti. če poganjki manjkajo - togost, suha kot kost, mrtva."
                },
                {
                    simbol: "Palica",
                    opis: "Falični simbol, čarovniška metla, bergla, opora. Predstavlja tudi rast, staranje, zorenje, potomstvo. Simbolizira tudi les, ki hrani ogenj. Je ogenj življenja, ki prebiva v nas. Predstavlja dejanja in moč volje iz sokov rastočega lesa. Ogenj predstavlja tudi čiščenje in prečiščevanje volje. Ogenj pa predstavlja tudi pretvorbo mase v energijo, grobe snovi v eterično snov."
                },
                {
                    simbol: "Roka, ki sega iz oblakov",
                    opis: "Palica je darilo za vas. Vi sami ste darilo – zase in za svet. Sprejmite to darilo in naredite nekaj iz njega. Zgrabite ga, dobro ravnajte z njim in naredite tako, da bo vaš ogenj močno gorel."
                },
                {
                    simbol: "Sivi oblak",
                    opis: "V pozitivnem smislu predstavlja nevtralno, objektivno, umirjeno, nepristransko, brez predsodkov. V negativnem pa nezavesten, apatičen, nezainteresiran."
                },
                {
                    simbol: "Tri drevesa",
                    opis: "Predstavljajo človeka kot državljana dveh svetov (glava v nebesih, korenine v zemlji) in rast, staranje, zorenje, potomstvo. Starši in otrok, samouresničitev in razmnoževanje, neodvisnost in skupnost."
                },
                {
                    simbol: "Reka/pokrajina",
                    opis: 'Širokao podeželje, velike naloge, veliko se je treba lotiti in doseči. Reka pomeni kontinuiteto v spremembi, povezavo med izvirom in odtokom. Biti in ostati energijsko "v toku".'
                },
                {
                    simbol: "Grad/palača",
                    opis: "Dom, zaščita, varnost, srce, jasna identifikacija, nadzor nad širokim prostranstvom ozemlja, ohranjanje miru, stalnost. Po negativni strani pa predstavlja zaprtost vase, pod nadzorom, ujetost, agresijo."
                },
                {
                    simbol: "18 zelenih listov in 8 padajočih",
                    opis: "Zelena je barva je barva narave, vitalnosti in rasti ter tudi upanja. Ampak lahko pomeni tudi nezrelost, pomanjkanje uglajenosti in stvari, o katerih niste razmišljali skozi pravilno. 18 listov se nanaša na karto Luna v tarotu in predstavljajo: prenova življenja in emancipacija, rast onstran sebe. Od teh 18ih listov jih je 8 tistih, ki padajo ali letijo, kar poudarja prehod med nebom in zemljo."
                },
                {
                    simbol: "Beli žarki",
                    opis: "Predstavljajo upanje in so pozitiven znak."
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "DA",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "1",
                },
                {
                    ime: "Element:",
                    vrednost: "Ogenj",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Oven, lev, strelec",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Kether (Krona)",
                },
                {
                    ime: "Čas:",
                    vrednost: "Junij 21 - september 22"
                }
            ],
        }
    }
}
