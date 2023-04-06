export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "XIX - Sonce (The Sun)",
                    rekLevo: "Ljudje smo kot vitražna okna. Lesketajo se in sijejo, ko je sonce zunaj, ko pa se spusti tema, se njihova prava lepota pokaže le, če je od znotraj prisotna svetloba.",
                    rekDesno: "Sonce je okusno, dež je osvežujoč, veter nas krepi, sneg razveseljuje; res ni slabega vremena, le različne vrste dobrega vremena.",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>Karta Sonce izžareva optimizem in pozitivnost. Na nebu sije veliko, svetlo sonce, ki predstavlja vir vsega življenja na Zemlji. Spodaj štiri sončnice rastejo visoko nad opečno steno in predstavljajo štiri barve male arkane in štiri elemente.</p><p>V ospredju na umirjenem belem konju sedi mlad, gol otrok. Otrok predstavlja veselje do povezanosti s tvojim notranjim duhom, njegova golota pa je znak, da nima česa skrivati in ima vso nedolžnost in čistost otroštva. Beli konj je tudi znak čistosti in moči.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Sonce predstavlja uspeh, sijaj in obilje. Sonce vam daje moč in vam sporoča, da ne glede na to, kam greste in kaj počnete, vas bo vaša pozitivna in žareča energija spremljala in vam prinašala srečo in veselje. Ljudje vas privlačijo, ker lahko vedno vidite svetlo plat in vnesete toplino v življenja drugih ljudi. Ta čudovita, topla energija je tisto, kar vas bo popeljalo skozi težke čase in vam pomagalo uspeti. Prav tako ste v položaju, ko lahko svoje najvišje kvalitete in dosežke delite z drugimi. Izžarevajte, kdo ste in za kaj se zavzemate; osvetlite svojo ljubezen na tiste, za katere vam je mar.</p><p>Če preživljate težke čase, vam Sonce prinaša sporočilo, ki ste ga dolgo čakali: da se bodo stvari izboljšale, veliko bolje! Skozi izzive na vaši poti ste odkrili, kdo ste in zakaj ste tukaj. Zdaj ste polni energije in elana za prihodnost in že zaznavate uspeh in obilje, ki tečeta k vam. Prekipevate od samozavesti, ker veste, da se bo vse izšlo – vedno se! Življenje je dobro!</p><p>Sonce vas povezuje z vašim virom moči – ne s strahom vodeno egoistično močjo, ampak z obilno notranjo energijo, ki trenutno seva skozi vas. Začutili jo boste v svoji čakri solarnega pleksusa, ki vas kliče, da se pristno izražate in ste polno prisotni v svetu okoli sebe. Imate, kar si drugi želijo, in od vas se zahteva, da svojo energijo in svoje darove v veliki meri izžarevate v svet. Izkoristite svojo moč in uporabite svojo božansko voljo, da to moč izrazite na pozitivne načine.</p><p>Sonce je tudi energetska karta. Odraža čas, ko lahko pričakujete povečanje telesne energije, vitalnosti in splošne pozitivnosti. Prekipevate od navdušenja in uživate v čudovitem občutku dobrega zdravja.</p>',
                    besedePokoncna: 'Sreča, uspeh, napredek, materialna sreča, veselje, pozitivnost, toplina, zabava, vitalnost, zadovoljstvo, dosežek, ljubezen, zaroka ali srečen zakon.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Obrnjena karta Sonca kliče vašega notranjega otroka, naj pride ven in se igra! Kot odrasli se tako izgubimo v vrvežu vsakdanjega življenja, da pozabimo, kako se zabavati. Toda le nekaj minut opazujte otroka, ki se igra, in spoznali boste, kako čudovito in brezskrbno je lahko življenje, ko se naučite opustiti svoje skrbi. Ko v branju tarota vidite obrnjeno Sonce, si to predstavljajte kot dovoljenje, da vsaj za trenutek opustite svoje delo in obveznosti ter se igrate. Plešite, kot da vas nihče ne gleda, pojte, kot da vas nihče ne posluša, in pustite svojemu srcu in duši prosto pot.</p><p>Obrnjeno Sonce lahko pomeni, da se trudite videti svetlo stran življenja. Morda ste doživeli neuspehe, ki so škodovali vašemu navdušenju in optimizmu ter vas morda pripeljali do vprašanja, ali lahko dosežete, kar ste si zadali. Morda se počutite depresivno ali odmaknjeno in ne uživate več v tem, kar počnete. Vaša smer in pot pred vami sta morda zamegljeni ali popačeni.</p><p>Kljub temu Sonce ni nikoli negativna karta, zato je to le začasno. Ovire, ki jih vidite, je mogoče zlahka odstraniti, če se na to osredotočite. Morda bo potrebno le malo več truda kot običajno.</p><p>Po drugi strani pa ste morda preveč samozavestni ali preveč optimistični. Čeprav ste samozavestni, ste morda postali egoistični in nimate pojma o tem, kaj lahko dosežete. Ste pravični do sebe in do drugih? Ali pa se poskušate pregovoriti, ko veste, da ne morete nekaj doseči? Če vam to ustreza, prosite druge za povratne informacije in preverite kako in kaj. Ste nerealni? Je to, kar ste si zadali, uresničljivo? Ste res tako dobri, kot mislite, da ste?</p>',
                    besedeObrnjena: 'Notranji otrok, prevelik optimizem, naivnost, nezmožnost ceniti, žalost, depresija, dolgočasje, nerealna prepričanja, odpovedani načrti, razpadla zaroka ali zakon/zveza, zamegljena prihodnost, pomanjkanje prijateljev.',

                    podnaslovMeditacija: "Meditacija",
                    opisMeditacija: "\"Na belem konju čiste zavesti jezdim v sonce.<br>Sem otrok večnega. Napolnjen sem s sijajem, svetlobo in močjo.<br>Nič mi ne more škodovati razen lastne nevednosti.<br>Modrost bo zasijala moj obraz.<br>Jaz sem zmagoviti vpogled.<br>Zmagal bom in zmagal bom vedno znova in znova.<br>Sem žarek žarečega sonca vseh vesolj.<br>Zdaj naredim svoj prvi korak k popolni svobodi.<br>Svoboden bom, ker bom prebival v večnem.\"<br>",

                    kljucnaVpr: '<p><b>Ključna vprašanja:</b> Kako naj začnem odstranjevati blokade v svojem življenje? Ali obstaja področje v mojem življenju za katerega potrebujem pojasnilo? Ali sem zgradil/a nekaj zidov okoli svojega srca oziroma proti drugim? Ali dopuščam najvišji in najboljši energijo da teče skozi mene? Kaj bi bilo treba od mene, da bi izpostavil/a svoj pravi jaz in lepoto, ki jo predstavljam? Ali se obrnem svoj obraz k stvarem resnice, lepote in vitalnosti ali pa zabredem v blato?</p>',

                }
            ],
            opisSimbolov: [
                {
                    simbol: "Otrok",
                    opis: "Otrokov odnos izraža odprtost, svobodo, nedolžnost, radovednost in pripravljenost zaupati, da bo sonce vedno osvetljevalo naše poti. V tarotu je tudi namen ta, da odrasel postane ponovno kot otrok."
                },
                {
                    simbol: "Sončev obraz",
                    opis: "Tako kot luna predstavlja kolektivno nezavedno, Sonce predstavlja kolektivno znanje, vest in zavest. Predstavlja tisto središče, iz katerega (bi morali) organiziramo svoje življenje."
                },
                {
                    simbol: "21 žarkov",
                    opis: "21 žarkov prikazuje preostale elemente velike arkane, kar kaže, da je ta karta povezana z več kot sončnimi časi na plaži, ampak je opomnik, da vsi življenjski položaji zahtevajo našo zavestno pozornost."
                },
                {
                    simbol: "Rdeče pero",
                    opis: "Plamen življenja in plamen veselja. Predstavlja tudi vitalnost, potenco in živahnost. Prav tako rdeče pero kaže, kako resnično je duša živa in nas spominja na naše bistveno, najgloblje bitje."
                },
                {
                    simbol: "Rdeči prapor",
                    opis: "Prapor, ki zgleda skoraj kot velik tobogan, nas opominja, da smo bitja, polna vitalne energije. Je povezava med visokim in nizkim."
                },
                {
                    simbol: "Sivi konj",
                    opis: "Siva predstavlja pomanjkanje predsodkov ali nekaj neopaženega, nezavednega. Morda se ne zavedamo sonca za nami in moči, ki nas nosi (konj)."
                },
                {
                    simbol: "Zid ali škarpa",
                    opis: "Sonce predstavlja tudi svet Najvišjega in tisto, kar je sveto. Svoje žarke seva tudi v naš svet, vendar je ta ločne od kraljestva absolutnega. Pametno postavite meje in se jih držite."
                },
                {
                    simbol: "Sončnice",
                    opis: "Sončnice se usmerijo proti soncu, tako kot se tudi mi. Tradicionalno predstavljajo dolgoživost in lojalnost. So štiri sončnice za katere pravijo, da predstavljajo štiri manjše arkane."
                },
                {
                    simbol: "Svetlo modro nebo",
                    opis: "Svetlo modra predstavlja veselje, lahkotnost, bistro voljo, luciden um."
                },
            ],
            modrostiKarte: [
                {
                    modrost: "\"Obrni obraz proti soncu in sence bodo padle za teboj.\""
                },
                {
                    modrost: "\"Priložnosti se množijo, ko so izkoriščene.\""
                },
                {
                    modrost: "\"Razsvetli ljudi na splošno in tiranija ter zatiranje telesa in duha bodo izginili kot zli duhovi ob zori.\""
                },
                {
                    modrost: "\"Potrebujemo veliko manj, kot mislimo, da potrebujemo.\""
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "DA",
                },
                {
                    ime: "Barve:",
                    vrednost: "Rumena, oranžna, bela.",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "1",
                },
                {
                    ime: "Čakre:",
                    vrednost: "Manipura",
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
                    vrednost: "Poletje & lepo vreme"
                },
                {
                    ime: "Kristali:",
                    vrednost: "Citrin, rumeni kalcit, pirit"
                },
                {
                    ime: "Telo:",
                    vrednost: "vitalnost, splošno zdravje in dobro počutje"
                }
            ],
            background: "bg",
        }
    }
}
