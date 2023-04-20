export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "Paž pentakljev",
                    rekDesno: "Iskanje znanja<br>Strast do vaših interesov<br>Veliko se je treba naučiti",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>Paž pentakljev prikazuje mladeniča, ki stoji na travnatem polju s cvetočimi rožami. V daljavi za njim je nekaj dreves in na novo zorana njiva, ki obeta obilno letino. Gorovje na obzorju pomeni prihajajoče izzive in ovire, ki jih mora Paž premagati na svoji poti. Paž v roki drži zlatnik in ga skrbno pregleduje, kot da bi odkril, kako manifestirati še več zlata in obilja.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Paž pentakljev, tako kot Paž vseh ostalih tarot kart, prinaša dobrodošlo sporočilo o novih začetkih, navdihu in začetnih fazah ustvarjalnega projekta ali podviga. Ker pentaklji vladajo materialnemu svetu in ustrezajo elementu zemlje, ta Paž simbolizira rastoče zavedanje o vrednosti denarja, bogastva, imetja, kariere in fizičnega zdravja ter o tem, kako manifestirati več teh materialnih blagoslovov. Pozdravljate nove priložnosti v svojem materialnem življenju – novo službo, nov posel ali finančni izkupiček – in želite odkriti, kako svoje sanje spremeniti v resničnost.</p><p>Ko se Paž pentakljev pojavi v branju tarota, izkoriščate svojo sposobnost manifestiranja osebnega cilja ali sanj in ste morda sredi novega projekta, kot je hobi, poslovni podvig ali začetek nove izobraževalne izkušnje. Navdušeni ste nad možnostmi in potencialom tega, čemur se posvetite, saj veste, da lahko z osredotočenim namenom in dejanjem ustvarite, kar želite.</p><p>Kljub temu ta Paž ne določa toliko izpolnitve sanj kot začetno motivacijo in energijo za začetek procesa spreminjanja teh sanj v resničnost. Postaviti morate jasne načrte za doseganje svojih sanj in ciljev. Ostanite osredotočeni na praktične in oprijemljive elemente, ostanite trdno na tleh in se ne odnesite, vedno iščite naslednji realen in dosegljiv korak naprej. Vaša zdrava pamet in pragmatičen pristop vas bosta pripeljala do rešitve, ki deluje.</p><p>V prizadevanju, da bi uresničil svoje sanje, je Paž pentakljev navdušen študent in se želi naučiti veščin, ki mu bodo zagotovile dolgoročni uspeh. Paž pentakljev se pogosto pojavi, ko ste pripravljeni nadgraditi svoje sposobnosti in se naučiti nekaj novega, da lahko uresničite svoje sanje. Na to karto glejte kot na povabilo k predavanju, nadaljevanju izobraževanja ali začetku vajeništva. Tudi če ste že uspešni na svojem trenutnem področju, vas Paž pentakljev spodbuja, da poskusite nekaj novega in odkrijete drug vidik sebe. Več veščin kot prinesete v svoj portfelj, več ciljev in sanj lahko dosežete.</p><p>Paž pentakljev lahko kaže na to, da razmišljate o novem poslu ali podjetniškem podvigu ali da ste v začetnih fazah ustanavljanja podjetja, ki bo dolgoročno finančno uspešno in bogato. Morda ste novi v tem, vendar imate navdušenje in predanost, da projekt izpeljete do konca.</p>',
                    besedePokoncna: 'Manifestacija, finančna priložnost, razvoj veščin, učenjak, velikodušnost, prijaznost, skrbna oseba, učenje novih idej/mnenj, dobra novica glede zemeljskih zadev (denar, posel, izobrazba, kariera), soliden začetek.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Obrnjen Paž pentakljev pomeni, da raziskujete nov projekt ali poslovno idejo, vendar še niste pripravljeni nadaljevati z njo. Morda še vedno razmišljate o idejah in bi to za zdaj raje ohranili kot skrivnost. Lahko pa vas skrbi, da nimate spretnosti ali virov, da bi uspelo, zato zamisel odlagate ali z njo odlašate. Če se vam priložnost še naprej ponuja in želite napredovati, verjemite, da imate zdaj tisto, kar potrebujete, ostalo pa se bo razvilo, ko boste napredovali.</p><p>Obrnjen Paž pentakljev lahko nakazuje, da poskušate uresničiti določen projekt ali idejo, vendar se vsakič, ko poskusite, zdi, da to ne pomeni nič ali pa vas odpelje še dlje od mesta, kjer želite biti. Morda niste dovolj načrtovali, ste izgubili izpred oči svoj prvotni navdih ali se preveč trudite. Dajte si nekaj prostora in se za kratek čas odmaknite od projekta, da si lahko znova napolnite energijo in se osredotočite, preden poskusite znova.</p><p>Morda ste tudi preveč zaposleni s sanjarjenjem o novih ciljih, ne da bi kar koli ukrepali v zvezi s prvotnimi. Zato morate pregledati svoje cilje in znova razmisliti, zakaj ste bili prvotno motivirani, da jih dosežete. Predstavljajte si, kako bo, ko boste izpolnili ta cilj in se ponovno zavezali dejanjem, ki so potrebna za uresničitev vaših sanj.</p><p>Končno, vas obrnjen Paž pentakljev vabi, da se učite iz svojih preteklih napak. Tudi če se situacija ni izšla tako, kot ste pričakovali, lahko odkrijete nove vidike sebe, ki vam lahko pomagajo v prihodnosti. Če se trudite ugotoviti, kje ste morda naredili napako, se vprašajte: "Kaj se lahko naučim iz teh izkušenj? In kako naj se izognem ponavljanju istih napak?" Bodite odprti in radovedni ter verjemite, da bodo današnji neuspehi vodili k jutrišnjim uspehom.</p>',
                    besedeObrnjena: 'Pomanjkanje napredka, odlašanje, učite se iz neuspeha, zapravljivost, razkošje, uporništvo, nasprotujoče si ideje/mnenja, slabe novice, pomanjkanje napredka, pomanjkanje fokusa, raztresen.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Semena, ki jih posadim, bodo zrasla.\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Poza",
                    opis: "Zdi se, da skrbno preverja, ali je pentakelj (kovanec) pristen. Ali pa ga videti kot krhek čudež, ki ga drži skoraj tako, kot da bi bil nežen mehurček – prizor eterične lahkotnosti."
                },
                {
                    simbol: "Položaj rok",
                    opis: "Pozitivno: veliko spoštovanje, skrbno ravnanje z dragocenostmi in talenti, ne nazadnje z lastno samozavestjo, talenti in nalogami. Negativno: biti pretirano previden, zares ne dojeti bistvenega."
                },
                {
                    simbol: "Barva rumena",
                    opis: "Sonce, pa tudi čutno hrepenenje in zavist, zlato in pohlep. Nevarnost: preveč približevanje soncu lahko povzroči padec (v fantazijo ali zablodo). Pozitivno: tudi skrita stran je osvetljena = zanesljiva podzavest."
                },
                {
                    simbol: "Pentaklj in nebo",
                    opis: "Imata enak odtenek. Pentakelj je razločljiv le zaradi njegove konture. Samo izkušnje in preizkušanje lastnih meja nam omogočijo razločiti lastne talente. Naloga postavljanja lastnih meja."
                },
                {
                    simbol: "Travnata pokrajina",
                    opis: "Modre gore, kos obdelovalne zemlje in množica travniškega cvetja predstavljajo zaklade, ki čakajo, da jih odkrijete. So kot zlato, ki po starem pregovoru tlakuje ulice."
                },
                {
                    simbol: "Drevesa",
                    opis: "Na sliki za Viteza pentakljev stojita ovb robu samo dve drevesi; tukaj vidimo grupo. Pozitivno: raznolikost, držanje skupaj, skupnost. Negativno: prevelika potreba po pripadnosti, preveč ali premalo samovolje."
                },
                {
                    simbol: "Modre gore",
                    opis: "Vrh predstavlja povezavo med nebom in zemljo. Na splošno je modra barva neba, zato modrina gora ponovno naznanja poroko med nebom in zemljo."
                },
                {
                    simbol: "Obdelovalna zemlja",
                    opis: "Simbol za polje življenja, polje izkušenj. Naloga: delati na sebi. \"Kaj želite požeti?\""
                },
                {
                    simbol: "Barva zelena",
                    opis: "Pozitivno: rast, narava, naravnost, svežina, upanje, postopna rast. Negativno: veliko nezrelosti, lažni upi (idealizem), ni popolnoma razvit, novorojenček."
                },
                {
                    simbol: "Rdeče pokrivalo",
                    opis: "Pozitivno: volja, vnema, strast, \"srčnost\" in čustvenost. Opozorilo: aroganca, vročeglavost. Spodbuda: ponos, samozavest, radovednost, vizije."
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "DA",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "11",
                },
                {
                    ime: "Element:",
                    vrednost: "Zemlja zemlje",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Bik, devica, kozorog",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Malkuth (Kraljestvo)",
                },
                {
                    ime: "Čas:",
                    vrednost: "Zgodi se še preden ste pripravljeni"
                }
            ],
        }
    }
}
