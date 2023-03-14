export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "Kralj palic",
                    rekDesno: "Moč nad vsako situacijo<br>Podpora in zaščita<br>Lahko je nepotrpežljiv, impulziven",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>Kralj palic sedi na svojem prestolu in v roki drži cvetočo palico, simbol življenja in ustvarjalnosti. Njegov prestol in ogrinjalo krasita leva in salamandra, oba simbola ognja in moči. Salamanderji, ki si grizejo lastne repe, predstavljajo neskončnost in stalno željo po premikanju naprej proti vsem oviram.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Kralj palic predstavlja čisto energijo ognja v svoji moški obliki. Za razliko od drugih dvornih kart palic, kralj ni toliko zainteresiran za ustvarjanje in ustvarjalnost ali za sanjarjenje o idejah in o njihovem izvajanju. Namesto tega je bolj nagnjen k temu, da prevzame idejo in nato privabi druge, da mu jo pomagajo uresničiti. Torej, ko se kralj palic pojavi v branju tarota, je to znak, da stopate v vlogo vizionarskega voditelja, ki je pripravljen svoje ljudi usmeriti k skupnemu cilju. Imate jasno vizijo, kam želite iti, in zdaj to vizijo manifestirate s podporo tistih okoli sebe. Drugi seveda težijo k vam, ker ste karizmatični, osredotočeni in odločni ter verjamejo v vas in vašo vizijo. Želijo biti del tega, kar manifestirate, in so tukaj, da vas stoodstotno podpirajo. Prav tako ste mojstrski v pridobivanju drugih ljudi, da opravijo vaše delo namesto vas, medtem ko jih ves čas držite ob strani.</p><p>Kralj palic vas opominja, da vodite svoje življenje z namenom, vizijo in dolgoročnim pogledom. Imate veličastno predstavo o tem, kaj je resnično mogoče, in ne boste se ustavili pred ničemer, da bi to dosegli. Za razliko od Viteza, ki zna biti nekoliko impulziven pri svojih dejanjih, ste vi dovolj zreli, da svojo vizijo vidite do konca in naprej. Veliko dosežete, ker vam je jasna prihodnja usmeritev in način, kako jo boste dosegli – in ne zapravljate časa za dejavnosti ali odnose, za katere mislite, da ne bodo pripeljali nikamor. Nikoli se ne prepustite toku; namesto tega se raje lotite neposrednega in robustnega ukrepanja. Navdihuje vas dolgoročni, trajnostni uspeh in želite imeti trajen učinek. Tukaj ste, da zapustite dediščino.</p><p>Pojav Kralja palic tudi nakazuje, da se vam ponuja priložnost in da imate zdaj moč, da sprejmete izziv. Vi ste odločilni dejavnik v tej situaciji. Če želite, da bo uspešno, bo. In prav tako, če se temu ne boste popolnoma posvetili, bo to seme težko zacvetelo in raslo. Ustvarite lahko kateri koli rezultat, ki ga želite, zato bodite pozorni na svoje namene in vizijo. Vi imate moč.</p>',
                    besedePokoncna: 'Rojeni vodja, vizija, vizionar, podjetnik, čast, odprt in pozitiven, moder, pustolovski, odločnost, zasledovanje ciljev, velika slika, šarm, pogum, drzen vodja, gospod, oče, strasten, radodaren, plemenit.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Obrnjen Kralj palic nakazuje, da medtem ko ste na vodilnem položaju, niste pripravljeni stopiti v to vlogo. Morda ste kreativna ali vizionarska oseba pri svojem delu, vendar še niste razvili občutka ugodja, ko vodite druge k svoji viziji. Morda boste morali delati na svojih vodstvenih sposobnostih ali pridobiti podporo nekoga, ki ima naravni talent za usmerjanje drugih k skupnemu cilju. Druga možnost je, da upravljate druge, vendar ne vodite drugih; dodeljujete naloge in spremljate uspešnost, vendar ne sporočate vizije in ne pritegnete svoje ekipe, da prevzame odgovornost za uresničitev koncepta. Morda mislite, da ste edina oseba, ki lahko to vizijo uresniči, tudi ko vas vaša ekipa podpira.</p><p>Včasih je obrnjeni Kralj palic lahko agresiven in celo aroganten pri zasledovanju svojih ciljev. Zavedajte se, da ko stremite k svojim sanjam, drugih ne postavljate na stran, jim ne odrekate moči ali njihovih prispevkov ne jemljete za samoumevne. Njihovo podporo potrebujete stoodstotno. Prav tako ne dovolite, da vam uspeh stopi v glavo, če mislite, da ste nad vsemi samo zato, ker ste vodja. Razmislite o tem, da bi sprejeli koncept "sledilstva" – sposobnost sprejemanja usmeritev, biti del ekipe in doseči tisto, kar se od vas pričakuje, tudi kot uradni vodja skupine.</p><p>Na osebni ravni vas obrnjen Kralj palic svari pred postavljanjem nerealnih pričakovanj sebi in drugim. Čeprav ste zelo ambiciozni, se morda pripravljate na neuspeh, če si zastavite cilje, ki so precej nedosegljivi, in se nato močno trudite doseči te nedosegljive cilje. Morda ste tudi nagnjeni k temu, da vas zavzame navdušenje nad cilji drugih ljudi, da bi "10-krat povečali svojo prodajo!" ali "ustvarili naslednji milijonski posel!" Ni vam treba kupovati sanj in vizij drugih ljudi (in navdušenja). Ostanite zvesti temu, kar je za vas pomembno, in se osredotočite na svojo osebno vizijo in usmeritev.</p>',
                    besedeObrnjena: 'Impulzivnost, naglica, neusmiljenost, visoka pričakovanja, prenagljen, prepotenten, brezobzirnost, nasilnež, spolne težave, šibkost, hudoben, nepopustljiv, strog, nestrpen, predsodki, prepiri.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Vodim s strastjo in pogumom.\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Poza",
                    opis: "Kombinacija sproščenosti in koncentracije. Telo se rahlo obrača, izražanje notranjih čustev. Če pogledamo od blizu, je leva roka / pest indikator njegove budne pripravljenosti – morda tudi njegovega nemira."
                },
                {
                    simbol: "Močeradi",
                    opis: "Po legendi je močerad žival, ki lahko gre skozi ogenj brez da bi se poškodoval. Tudi nam se ni treba bati preizkušnje z ognjem. Pravzaprav potrebujemo takšne teste, da bi ugotovili, kaj si res želimo!"
                },
                {
                    simbol: "Močeradi v obliki kroga",
                    opis: "Sklenjen krog poudarja motiv ponovnega rojstva, tipično povezan z močeradi. Prav tako je opozorilo pred ponavljajočimi se argumenti in ponavljanjem, vrtenje v krogu."
                },
                {
                    simbol: "Črni lev",
                    opis: "Volja, vitalna moč in energično vzvišeno razpoloženje. Ker pa sta lev in močerad črna in tudi na hrbtni strani Kralja, obstaja nevarnost zatiranja."
                },
                {
                    simbol: "Rdeče-oranžna obleka / lasje",
                    opis: "Popolnoma – tj. od vrha do dna - uglašen na: ogenj, voljo, strast, libido, poželenje, hrepenenje (vendar z bistrim umom - rumeno / sonce) - ali na drugi strani z zavistjo ali manija (zaslepljen od sonca)."
                },
                {
                    simbol: "Rumen plašč s črnimi močeradi",
                    opis: "Plašč s soncem in temo je pomemben dejavnik, ki določa uspeh oziroma neuspeh projektov. Naloga sprijazniti se s svetlobo in senco, zoreti skozi izkušnje."
                },
                {
                    simbol: "Zeleni čevlji / Zeleno naramno oblačilo",
                    opis: "Stopala nakazujejo na prave korake, ki jih delamo. Ramena simbolizira našo odgovornost. Zelena pomeni plodnost, rast, naravnost, pa tudi nezrelost."
                },
                {
                    simbol: "Ognjena krona",
                    opis: "Naprej vneto z vnemo, veliko močjo volje, na ognju za vzrok. Negativno: pregret idealizem, pretiran intelekt. Tako kot ta Kralj lahko tudi mi dosežemo velike stvari. Ogenj kliče po velikem cilju — vendar plemenitem, dobro premišljenem."
                },
                {
                    simbol: "Prestol, ki sega do neba",
                    opis: "Naloga in sposobnost vzpostaviti vez med nebom in zemljo, med teorijo in prakso, željo in realnostjo."
                },
                {
                    simbol: "Svetlo modro nebo",
                    opis: "Pozitivno: lahkotnost, brezbrižnost, namen volje, luciden um. Negativno: naivnost, pobožne želje, opitost."
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "DA",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "14",
                },
                {
                    ime: "Element:",
                    vrednost: "Ogenj",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Strelec",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Chokmah (modrost)",
                },
                {
                    ime: "Čas:",
                    vrednost: "Konec jeseni in pomlad"
                }
            ],
        }
    }
}
