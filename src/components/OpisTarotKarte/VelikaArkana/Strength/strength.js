export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "VIII - Strength (Moč)",
                    rekLevo: "Če nekdo moli za potrpljenje, mislite, da mu Bog daje potrpljenje? Ali pa jim daje možnost, da so potrpežljivi? Če molite za pogum, ali vam Bog daje pogum ali vam daje priložnosti, da ste pogumni? Če je nekdo molil, da bi mu bila družina bližje, ali mislite, da ga Bog navdaja s toplimi zamegljenimi občutki ali jim daje priložnost, da se radostijo?",
                    rekDesno: "Ne potrebujemo nekega čudeža ali neke posebne magije, da spremenimo svet okoli sebe ali v nas, kajti vso moč, ki jo potrebujemo, že nosimo v sebi: imamo moč, da si vse predstavljamo bolje in tudi naredimo vse bolje.",
                },
            ],
            opisKarte: [
                {
                    opisKarte: "<p>V tarot karti Moč ženska nežno boža leva po čelu in čeljusti. Čeprav je znana po svoji divjosti, je ženska to divjo zver ukrotila s svojo pomirjujočo, ljubečo energijo. Lev je simbol surovih strasti in želja, z ukrotitvijo leva pa ženska pokaže, da se lahko živalski nagon in surova strast izrazita na pozitivne načine, če uporabimo notranjo moč in odpornost. Ne uporablja sile ali prisile; usmerja svojo notranjo moč, da bi podredila in subtilno nadzorovala leva.</p><p>Ženska nosi belo obleko, kar kaže na njeno čistost duha, ter pas in krono iz rož, ki predstavljajo najpolnejši, najlepši izraz narave. Nad njeno glavo je simbol neskončnosti, ki predstavlja njen neskončni potencial in modrost.</p>",

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Karta Moč predstavlja odločnost in moč – kot Kočija. Medtem ko Kočija pomeni zunanjo moč in voljo, karta Moč govori o notranji moči in sposobnosti človeškega duha, da premaga vsako oviro. Moč je vedeti, da lahko zdržiš življenjske ovire. Imate veliko vzdržljivost in vztrajnost, uravnoteženo s potrpežljivostjo in notranjo mirnostjo. Predani ste temu, kar morate storiti, in se tega lotite na način, ki kaže vašo zbranost in zrelost.</p><p>Ko se v branju pojavi tarot karta Moč, vas napaja vaša notranja moč, osebna moč, močna volja in odločnost. Ne vladate tako, da poskušate nadzorovati druge; tiho vplivate in prepričujete. Drugi morda podcenjujejo vašo moč, ker je tako "nevidna" - vendar bi morali to videti kot prednost. Situacijo lahko nadzorujete brez pretirane, zunanje sile. Nihče ne ve, da ste vi glavni.</p><p>Vaša moč vam daje samozavest, da premagate vse naraščajoče strahove, izzive ali dvome. Občutite strah in to vseeno storite! Če ste preživljali težke čase in ste izgoreli ali pod stresom, vas karta Moč spodbuja, da v sebi najdete moč za vztrajanje. Imate vse, kar je potrebno, da vodite to situacijo do konca. Ste zvesti prijatelj in trdna podpora, pripravljeni stopiti naprej in biti prisotni, ko so drugi v stiski, in morda se boste tudi počutili prisiljeni dati prostor nekomu, ki potrebuje vašo moč in podporo.</p><p>Karta Moč vas poziva, da "ukrotite" svoje živalske nagone, intuitivne reakcije in surova čustva ter konstruktivno usmerite te začetne odzive. Običajno je, da se v določenih situacijah pojavijo občutki, kot so jeza, bes, žalost, krivda ali sram. Vendar je razlika v tem, kaj počnete s temi čustvi. Zdaj je čas, ko se morate zavedati svojih instinktivnih nagonov in jih uskladiti z večjim dobrim. To ni čas za izkazovanje besa ali sovraštva. K svoji situaciji pristopite z vidika odpuščanja, ljubezni in sočutja. Delo s terapevtom vam lahko pomaga tudi pri oblikovanju strategij spoprijemanja s tem, kar se pojavi.</p>',
                    besedePokoncna: "Moč, pogum, prepričljivost, vpliv, sočutje, odlično zdravje, vztrajnost, drznost, koncentracija, dobrohotnost, samozavest, imeti kontrolo, odločnost, moškost, junaštvo, akcija.",

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: "<p>Ko se v branju tarota pojavi obrnjena karta Moč, se prilagodite svojim trenutnim ravnem notranje moči, samozavesti in vere vase. Ali prekipevate od samozavesti ali ste izčrpani? In kako lahko te vidike spravite nazaj v ravnovesje?</p><p>Če ste pred kratkim doživeli neuspeh, ste sedaj morda ranljivi in vam manjka samozavesti. Zavedajte se, da bo vaša temeljna moč vedno z vami in zdaj je pravi čas, da se ponovno povežete s to močjo. Pravzaprav imate morda več moči in odpornosti, kot si pripisujete – zato bodite prijazni do sebe. Prav tako lahko znova okrepite svojo samozavest in samospoštovanje z vpogledom v preteklost, ki dokazuje, da imate vse, kar je potrebno za uspeh in premagovanje teh začasnih izzivov.</p><p>Takoj preverite svojo raven energije. Morda ste počasni, zlasti če ste se posvetili služenju drugim ali ste si močno prizadevali, da bi dosegli cilj. Obrnjena karta Moč je vaše povabilo, da naredite analizo in obnovite svojo raven energije s počitkom in umikom za začasno obdobje. Pomembno je, da poskrbite zase, da boste lahko poskrbeli za druge.</p><p>V svoji senčni obliki lahko obrnjena karta Moč signalizira, da ste nagnjeni k eksplozivnemu vedenju, da napadate druge in postanete agresivni. Morda boste ukrepali brez razmišljanja in na koncu storili nekaj, kar boste kasneje obžalovali. Ključno je, da ne potlačite surovega čustva, ampak da se ga naučite usmeriti, da ne bo škodilo drugim ali sebi. Poiščite strokovnjaka, ki vam bo pomagal bolje obvladati ta čustva.</p>",
                    besedeObrnjena: "Izkoriščanje notranje moči, dvom vase, nizka energija, surova čustva, ranljivost, negotovost, pomanjkanje samozavesti, tesnoba, šibkost, strah, malenkost, tiranija, pomanjkanje vere, notranja moč.",

                    podnaslovMeditacija: "Meditacija",
                    opisMeditacija: "\"Ker v svojem življenju združujem pravičnost in ljubezen, vem,<br>da potrebujem trdnost, da nadaljujem svojo pot.<br>Da bi se soočil s strogostjo duha, moram obdati svoje zaledje z neizrekljivo in veliko močjo.<br>Nežno bom ukrotil veliko zver,<br>ki prebiva v moji naravi, zavedajoč se, da je tudi moj prijatelj.<br>Levji kremplji bodo moji pomočniki na poti:<br>Prestrašili bodo moje sovražnike in odprli vrata pred menoj.<br>Naučil se bom poti moči kače znotraj svojih strasti,<br>da bom lahko pridobil njeno pomoč.<br>S pomočjo leva in kače se ne bom bal zla in nobena ovira me ne bo motila.<br>Zmagovalna moč je moja, ko sem ukrotil leva moči.\"<br>",

                    kljucnaVpr: '<p><b>Ključna vprašanja:</b> Kako definirate moč? Na kakšen način vas vaši telesni nagoni motivirajo? Kako se lahko približate sindromu "potreba po hranjenju" in ga spravite pod nadzor? Kako izkazujete ljubezen do sebe in sočutje do sebe? Kakšne so vaše notranje bitke in kako lahko dosežeš ravnotežje? Katero področje v vašem življenju zahteva, da imate največ moči in kakšne različne vrste moči lahko uporabite tukaj?</p>',

                }
            ],
            opisSimbolov: [
                {
                    simbol: "Simbol neskončnosti",
                    opis: "Predstavlja večno energijo narave, vedno prisotno in vedno se premikajočo, vidno kot nevidno. Predstavlja tudi ravnotežje, vibracije in vitalnost in tudi, da smo del večnosti. V negativnem smilu pa lovljenje repa, nemir, ponavljanje brez napredka."
                },
                {
                    simbol: "Ženska v beli obleki",
                    opis: "Predstavlja modrost narave, nedolžnost, ki kroti divjino. Bela obleka predstavlja čistost, ki nakazuje na to, da je naša notranja moč čista po naravi."
                },
                {
                    simbol: "Rdečkast lev",
                    opis: "Starodavni simbol ne le impulzivne moči in ognja, temveč tudi volje in še posebej prave volje. Eden najvišjih simbolov moderne alkimije."
                },
                {
                    simbol: "Ženska drži čeljust leva",
                    opis: "Medtem ko lev prav tako predstavlja naš"
                },
                {
                    simbol: "Vrtnice in krona iz vrtnic",
                    opis: "Vrtnice predstavljajo lepoto vsakega posameznega človeškega bitja. Predstavljajo vrt na zemlji (življenje), kjer lahko vsaka roža (človek) sveti in sije v vsej svoji veličini."
                },
                {
                    simbol: "Modre gore",
                    opis: "Kaže na to, da so višja področja, ki jih je potrebno raziskati, kot tudi ovire, ki jih je potrebno preplezati. Gore lahko predstavljajo tudi naše želje."
                },
                {
                    simbol: "Rumeno ozadje",
                    opis: "Rumena zadaj predstavlja sonce in pa tudi iskanje smisla. Prav tako nakatuje na mentalno radovednost in intelektualni pristop."
                },
                {
                    simbol: "Zelena trava",
                    opis: "Zelena barva pod nogami leva in ženske je povezana s plodnostjo."
                },
            ],
            modrostiKarte: [
                {
                    modrost: "\"Nič ni tako močnega kot nežnost in nič tako nežnega kot prava moč.\""
                },
                {
                    modrost: "\"Lev, ki zlomi sovražnikove vrste, je manjši junak v primerjavi z levom, ki premaga samega sebe.\""
                },
                {
                    modrost: "\"Edina stvar, ki je vas je vredna je sočutje, nepremagljivost, brezmejnost, brezpogojnost. Sovraštvo vam nikoli ne bo dovolilo, da se soočite z zverjo v človeku.\""
                },
                {
                    modrost: "\"Priložnosti, da najdemo globlje moči v sebi, pridejo takrat, ko se življenje zdi najbolj zahtevno.\""
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "Da",
                },
                {
                    ime: "Barve:",
                    vrednost: "Zlata, rumena, oranžna, bela.",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "8",
                },
                {
                    ime: "Čakre:",
                    vrednost: "Anahata",
                },
                {
                    ime: "Element:",
                    vrednost: "Ogenj",
                },
                {
                    ime: "Zodiak:",
                    vrednost: "Lev",
                },
                {
                    ime: "Planet:",
                    vrednost: "Sonce",
                },
                {
                    ime: "Čas:",
                    vrednost: "Julij 23 - Avgust 22"
                },
                {
                    ime: "Kristali:",
                    vrednost: "Rubin, tigrovo oko."
                },
                {
                    ime: "Telo:",
                    vrednost: "Srce, hrbtenjača, hrbet, vranica."
                }
            ],
            background: "bg",
        }
    }
}
