export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "As pentaklov",
                    rekDesno: "Nov začetek, zemeljske zadeve<br>Potencial za obilje<br>Obljuba uspeha",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>As pentaklov prikazuje roko, ki se dviga iz oblakov, podobno kot asi drugih kart. Velik kovanec sedi na dlani, prosto dostopen vsem, ki ga imajo s čim vzeti. Kot da bi se nova priložnost, povezana z bogastvom, poslom in manifestacijo, pojavila od nikoder in se vam zdaj ponuja v vsem svojem sijaju. Spodbuda je zdaj na vas, da sprejmete to ponudbo in jo spremenite v nekaj smiselnega in trajnostnega.</p><p>Pokrajina na tej karti je bujna in bogata: vrt, poln zelene trave in belih lilij. Majhna pot vodi do loka, ovitega v čudovito listje in cvetje, za lokom pa se na obzorju dvigajo gorski vrhovi. Ta zelena podoba sporoča, da je napočil čas, da nadaljujete s svojo kariero in finančnimi ambicijami. Čeprav bo zahtevalo trdo delo in odločnost (preplezati gore ni lahka naloga), vas As pentaklov spodbuja, da kar najbolje izkoristite to priložnost, medtem ko je v svojem najbolj bogatem stanju.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>As pentaklov, tako kot drugi asi tarota, predstavlja nove začetke, priložnosti in potencial – in kot karta pentaklov so ti novi začetki povezani z materialnim svetom: finance, bogastvo, kariera, fizično zdravje in manifestacija vaših ciljev. Morda boste prejeli novo ponudbo za delo, nepričakovano vsoto denarja, priložnost za nov posel ali naložbo ali pa boste imeli priložnost uresničiti idejo. Ne glede na priložnost, As pentaklov napoveduje občutek blaginje in obilja na materialnem ali finančnem področju vašega življenja. Nedvomno pride kot dobrodošlo povabilo – ni pa brezplačna vožnja. Kot pri vseh asih v tarotu ta karta ponazarja možnost novega podviga, vendar ne zagotavlja njegove manifestacije ali uspeha. Ta del je na tebi.</p><p>Glejte Asa pentaklov kot svojo "zeleno luč". Označuje začetne stopnje uresničevanja vaših ciljev in vam zagotavlja, da lahko resnično dosežete, kar ste si zadali. Svet je vaša ostriga in s skrbnim načrtovanjem in odločnim prizadevanjem lahko manifestirate svoje cilje in želje. Vaše ideje so pripravljene, da se spremenijo v nekaj oprijemljivega in resničnega! Ta karta vas spodbuja, da načrtujete, kako boste dosegli svoje ambicije, ustvarite ciljno usmerjene načrte in začnete s temi dejanji. Imejte odprte oči za možnosti, da uresničite svoje cilje in uresničite svoj notranji potencial.</p><p>As pentaklov simbolizira tudi bogastvo, ne le za vaš bančni račun, ampak tudi v celovitem smislu. Morda boste odkrili priložnosti za ustvarjanje novega vira dohodka ali prejeli finančno darilo ali nepričakovan dobiček. Morda pa imate priložnost ustvariti bogastvo v širšem smislu – srečo, izpolnitev, potencial in ljubezen. Ta as pomeni obilje na vseh področjih vašega življenja. Uživajte! Počutite se blagoslovljeni in vredni vsega, kar vam pride naproti. Če želite povečati ta občutek blaginje, živite po zakonu privlačnosti in pošljite svojo pozitivno energijo in namen v vesolje, da boste v zameno prejeli več.</p>',
                    besedePokoncna: 'Nova finančna ali karierna priložnost, manifestacija, obilje, nov poslovni podvig, začetek blaginje, začetek sreče ali užitka.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Ko se obrnjen As pentaklov pojavi v branju tarota, se morda počutite neodločni glede napredovanja s ponudbo, povabilom ali priložnostjo, zlasti tisto, ki je povezana z vašo kariero, financami ali poslom. Morda se boste ujeli, kako ugibate o času ali dvomite, ali imate vse, kar je potrebno, da to izpeljete do konca. Ne pomikajte se naprej, dokler niste pripravljeni. Ocenite izvedljivost vaše ideje in njene možne rezultate. Opravite svojo skrbnost in ugotovite, ali je ta priložnost namenjena vam ali ne.</p><p>Obrnjen As pentaklov je lahko tudi opozorilo, da bi lahko finančna priložnost – povišanje plače, nova služba, posojilo ali poslovna ponudba – nepričakovano padla v vodo ali pa bi jo druga stran umaknila brez pojasnila. Kot pravi pregovor: "Ne štejte svojih piščancev, dokler se ne izležejo!" Torej, če prejmete ponudbo, počakajte, da je denar na vašem bančnem računu, preden ga porabite.</p><p>Poleg tega vam obrnjen As pentaklov svetuje, da ste zelo previdni pri svojih izdatkih. Ko je karta obrnjena, je videti, kot da bo kovanec padel iz čarobne roke. Zdaj ni čas, da bi se spuščali čez glavo ali prevzemali kakršne koli obveznosti z velikimi mesečnimi odplačili. Prav tako se ne zanašajte na obljubo o finančni priložnosti v prihodnosti (kot je povišanje plače ali darilo). Bodite pragmatični in dovolite malo "maščobe" v proračunu, če ste brez zaposlitve ali imate velike in nepričakovane finančne izdatke.</p><p>Včasih obrnjeni As pentaklov nakazuje, da poskušate uresničiti svoje cilje, a vedno znova naletite na zamude in druge ovire. Če imate omejen uspeh, boste morda morali pregledati predlagani pristop. Ali morate svoje cilje prilagoditi nečemu bolj realističnemu? Morda bo potreben finančni ali drug strokovni nasvet, da se boste vrnili na pravo pot.</p><p>Če želite ustanoviti nov posel ali sprejeti novo ponudbo za delo, obrnjen As pentaklov opozarja na veliko tveganje zaradi pomanjkanja načrtovanja in predvidevanja. Ne zaračunavajte vnaprej, ne da bi preverili, ali trg potrebuje vaše storitve. Preživite nekaj več časa v fazi načrtovanja in dobro razmislite o finančnih vidikih vašega novega podviga.</p>',
                    besedeObrnjena: 'Izgubljena priložnost, pomanjkanje načrtovanja in predvidevanja, neuravnotežen proračun, pomanjkanje načrtovanja in predvidevanja, skrbi glede denarja, možen pohlep ali beda, denar morda le ni vse, ',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Odprt sem, da prejmem najboljše, kar mi ponuja vesolje.\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Karta kot ogledalo",
                    opis: "Ste kot kovanec z dvema vidikoma – svetlečo stranjo in senčno stranjo. Kakšna vrsta zemlje vas je oblikovala? In druga stran: Kaj je tisto, kar boste ukalupili in oblikovali?"
                },
                {
                    simbol: "Pentagram",
                    opis: "Starodavni magični simbol. Vibracija energije (atomov) v zemlji. Predstavnik upodobitve človeka (točke, ki označujejo roke, noge in glavo). Štirje elementi in njihov vrhunec v kvintesenci."
                },
                {
                    simbol: "Dvojni rob kovanca",
                    opis: "Slika uspe prenesti sklicevanje na pregovorno dve plati kovanca pomenov dvojnega roba: pozitivne in negativne vtise, sposobnosti in pomanjkljivosti ter mnoga druga nasprotja."
                },
                {
                    simbol: "Pentakli I",
                    opis: "Pentakel = element zemlje: vse kar je materialno, tako v finančnem kot v smislu materialne vrednosti kot tudi snov, fizično (mati, matrica). Pentakli/kovanci so povezani s praktičnimi nalogami in rezultati."
                },
                {
                    simbol: "Pentakli II",
                    opis: "Ključne besede za pentakle: materialne vrednote in talenti. Denar in veljavnost. In talenti v smislu osebnih sposobnosti in nalog, ki čakajo, da jih odkrijemo in realiziramo."
                },
                {
                    simbol: "Roka, ki vzhaja iz oblaka",
                    opis: "Pentakel je darilo za vas. Vi sami ste darilo - zase in za svet. Sprejmite to darilo in naredite nekaj iz njega. Vzemite ga v roke in pustite da se pomnoži."
                },
                {
                    simbol: "Sivo nebo",
                    opis: "Siva je povezana z nevzdržnostjo, samoobvladovanjem. Pozitivno: pomanjkanje pristranskosti, nevtralnost, potrpežljivost. Negativno: pomanjkanje zavedanja, brezbrižnost. Vse to glede na vrednost in uporabnost vašega talenta."
                },
                {
                    simbol: "Vrt / bele lilije",
                    opis: "Svet kot prostor za življenje, obdelana zemlja. Bela - barva za začetke in zaključke. Vrt otroštva, človeški raj, ki smo ga zapustili zadaj in h kateremu se želimo vrniti."
                },
                {
                    simbol: "Modre gore",
                    opis: "Vrh predstavlja povezovalni člen med nebom in zemljo – tudi modra je barva neba. In: \"Naredi nekaj iz svojih talentov!\" Povzpnite se na svojo goro, dovolite, da iz vašega potenciala nastane nekaj koristnega!"
                },
                {
                    simbol: "Vrtna vrata",
                    opis: "Meja med realnostjo in drugim svetom. Ponavljajoča se izkušnja: prestopiti prag, stopiti na novo stopnjo v življenju. Odidete zato da bi prispeli. Izgubljeni in ponovno pridobljeni raj!"
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
                    vrednost: "Zemlja",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Bik, devica, kozorog",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Kether (Krona)",
                },
                {
                    ime: "Čas:",
                    vrednost: "Maj 21 - Junij 20"
                }
            ],
        }
    }
}
