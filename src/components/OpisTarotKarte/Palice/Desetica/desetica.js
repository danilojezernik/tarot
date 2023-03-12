export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "Desetica palic",
                    rekDesno: "Odločen in ambiciozen<br>Več, kot lahko preneseš<br>Strog do sebe",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>Desetica palic prikazuje moškega, ki nosi velik sveženj palic proti majhnemu mestu, ki je nedaleč stran. Njegov hrbet je upognjen in zdi se, kot da ga obteži težko breme, ki ga nosi, vendar ve, da je skoraj na cilju in da se bo kmalu lahko znebil velike teže, ki jo nosi.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Desetica palic ugotavlja, da prevzemate dodatno breme, težjo delovno obremenitev ali večjo odgovornost. Čeprav vas obremenjuje in vam otežuje stvari, razumete, da je le začasno, zato ste pripravljeni zdaj vložiti ogromno truda, da dosežete svoj cilj, in pozneje požeti nagrade. Na primer, lahko delate dodatne ure, da prihranite za družinske počitnice. Lahko pa pomagate prijatelju pri selitvi, saj veste, da vam bo vrnil uslugo, ko se boste morda vi pozneje v letu preselili. Lahko pa skrbite za bolnega družinskega člana, s čimer povečate svoje obveznosti doma, vendar veste, da vaša ljubljena oseba to zelo ceni.</p><p>Včasih se Desetica palic pojavi, ko nezavedno prevzemate dodatno odgovornost in se počutite obremenjene, izčrpane in izgorele. Morda boste poskušali narediti vse naenkrat, čeprav veste, da je to dodaten pritisk v vaše vsakdanje življenje. Desetica palic vas prosi, da se ustavite in preučite svoj trenutni življenjski slog ali delo. Ocenite, katere dejavnosti ali naloge so nujne ali pomembne, zlasti glede vaših širših ciljev. Morda boste morali uporabiti različne metode upravljanja s časom ali določanja prednosti, da ugotovite, kje najbolje porabiti svoj čas in katere naloge lahko opustite. Vaš cilj mora biti večja učinkovitost, hkrati pa si vzemite čas za počitek in sprostitev, ko to potrebujete.</p><p>Dobra novica je, da desetice v tarotu predstavljajo zaključek cikla, pri desetici palic pa je konec na vidiku! Prignali ste se do svojih meja in se zelo trudili za dosego svojega cilja. Zdaj delate zadnje korake na poti do uresničitve svojih sanj. Seveda, ko pridete tja, se lahko zgrudite od izčrpanosti, vendar veste, da bo vse vredno in dobro zasluženo!</p><p>Desetica palic lahko tudi pokaže, da tudi z doseganjem cilja pride nekaj pomembnih odgovornosti in zavez. Ko dosežete točko zaključka, se močno zavedate, da morate zdaj nadaljevati z nalogami, ki ste si jih zadali, da zagotovite stalen uspeh. Težava pa je v tem, da lahko te odgovornosti postanejo prevelike in jih težko opustite. To je kot lastnik podjetja, ki ustvari cvetoče podjetje, vendar ni pripravljen prenesti nekaterih svojih odgovornosti na osebje in na koncu dela sedemdeset do osemdeset ur na teden. Navdih in kreativnost, ki sta prišla s prvotnim ciljem ali vizijo, izgineta in vse prehitro postane težko delo. Zato je bistveno, da opustite ali prenesete nekatere svoje odgovornosti, da boste lahko še vedno uživali življenje.</p>',
                    besedePokoncna: 'Breme, trdo delo, dokončanje, prositi za pomoč, stres, preveč odgovornosti, uničeni vsi načrti ali projekti, popoln neuspeh.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Ko se pri branju tarota pojavi obrnjena Desetica palic, je to pogosto znak, da poskušate preveč narediti sami. V vašem prizadevanju, da bi bili vsem vse, ste se znašli v težavah pod težo vsega tega. Delegirajte in delite delo – ni vam treba, da ga opravite sami. In bodite odločni pri temu, da rečete ne stvarem, za katere veste svojo kisikovo masko, preden pomagate drugim".</p><p>Podobno obrnjena Desetica palic nakazuje, da na svojih ramenih nosite veliko breme, vendar to skrivate in svojega bremena ne želite deliti z drugimi. Morda se spopadate s čustveno travmo, nosite temno skrivnost ali se ukvarjate s povečanimi odgovornostmi. Vendar se ne počutite udobno, če to delite z drugimi, tako da o tem govorite ali prosite za pomoč. Pravzaprav odrivate ljudi, ki vam lahko pomagajo. Morda vam bo tudi v veliko olajšanje, če del tega bremena vendarle delite z drugimi, saj so vas pripravljeni podpreti.</p><p>Včasih obrnjena Desetica palic kaže, da se oklepate tega bremena, čeprav vam tega ni treba. Če se počutite obremenjene zaradi trenutnih okoliščin, poiščite načine, kako bi lahko olajšali breme. Ali lahko prenesete določene naloge in odgovornosti? Vas skrbijo stvari, ki vas ne zadevajo ali jih ni mogoče spremeniti? Ne postanite mučenik in prevzemite več, kot realno zmorete. Pozitivno pa je, da če greste skozi čas, ki je težak, vam Desetica obrnjenih palic zagotavlja, da bo ta čas kmalu minil in da boste lahko zmanjšali to težo.</p><p>Morda tudi aktivno prepoznavate tiste dejavnosti, ki vam v življenju ne prinašajo nobene vrednosti, in se osvobajate teh dodatnih odgovornosti. Razmislite o postopku čiščenja, pospravite stara oblačila in prodajte staro pohištvo, da razčistite in poenostavite svoje življenje. Koristila vam bo boljša organizacija in prednostno razvrščanje ter uživanje v lahkotnosti, ki jo prinaša takšna sprostitev.</p>',
                    besedeObrnjena: 'Delati vse, prenašati breme, delegiranje, sprostitev, vzeti si odmor, končno reči ne, svoboda, moč, energija, želja po uničevanju sreče drugih, a pametna oseba.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Trdo delam za svoje cilje in ne pozabim si vzeti odmora, ko je moje delo opravljeno!\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Poza",
                    opis: "Negativno: preobremenjen. Pozitivno: ko človek (dobesedno) sledi svojemu nagnjenja z vsem srcem, potem je mogoče veliko doseči. Padec naprej, dati vse od sebe, prinaša zadovoljstvo."
                },
                {
                    simbol: "Palice v svežnju",
                    opis: "Vaša sposobnost in vaša naloga sta razlikovati med številnimi različnimi palicami (nagonov, dejanj, energije, interesov), pa tudi združevati jih kot tudi jih združiti v eno: Veliko palic? Ne, vse palice!"
                },
                {
                    simbol: "Palice v svežnju II",
                    opis: "Deset palic predstavlja zavoj energije, poln energije pa mora biti tudi tisti, ki jih nosi in prenaša! To je povezano s 100% trudom!"
                },
                {
                    simbol: "Palice v svežnju III",
                    opis: "Človek se loti dela pred sabo, se osredotoči na to, kar je treba narediti. Pogon (palica) in intelekt (glava) rasteta skupaj."
                },
                {
                    simbol: "Nagnjena poza",
                    opis: "Negativno: težave pri opuščanju. Pozitivno: boljši način za napredovanje naprej. Korak naprej, napredovanje."
                },
                {
                    simbol: "Hiša I",
                    opis: "Hiša pomeni varnost, zaščito, dom, bogastvo, zasebnost. In: identiteta, a lastno mesto. Hiša je po eni strani cilj prizadevanj, ki te pripeljejo vse bližje in bližje..."
                },
                {
                    simbol: "Hiša II",
                    opis: "… in po drugi strani: kamor vlagamo vso svojo energijo, tam naš vrt raste. Občutek domačnosti je tudi energijsko stanje."
                },
                {
                    simbol: "Umazano rumena zemlja",
                    opis: "Mešanica sonca in teme, svetlobe in sence. Negativno: mešani motivi, nejasne ali motene osnove. Pozitivno: občutek za realnost z zavedanjem nevarnosti in tistega, kar se skriva v senci."
                },
                {
                    simbol: "Rdeče-rjava tunika",
                    opis: "Ista barva kot konj v Vitezu palic. Pozitivno: bistroumnost nagonov in instinktov. Negativno: izkoriščanje drugih. In: izigravanje samega sebe!"
                },
                {
                    simbol: "Modro nebo",
                    opis: "Pozitivno: lahkotnost, duhovno veselje, namen volje, luciden um. Negativno: naivnost, pobožne želje, opitost."
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "NE",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "10",
                },
                {
                    ime: "Element:",
                    vrednost: "Ogenj",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Saturn v strelcu",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Malkuth (kraljestvo)",
                },
                {
                    ime: "Čas:",
                    vrednost: "December 13 - december 21"
                }
            ],
        }
    }
}
