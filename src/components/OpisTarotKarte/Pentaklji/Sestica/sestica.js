export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "Šestica pentakljev",
                    rekDesno: "Vesolje je v izobilju<br>Ravnovesje sredstev<br>Dajanje in sprejemanje",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>Šestica pentakljev prikazuje bogatega moškega, oblečenega v rdečo obleko, ki deli kovance dvema beračema, ki klečita pred njegovimi nogami. V levi roki drži uravnoteženo tehtnico, ki predstavlja pravičnost in enakost. Ta karta odraža stanje finančne varnosti in velikodušnosti, kar nakazuje, da lahko velikodušno uporabite svoje bogastvo in obilje v korist drugih. Govori pa tudi o velikodušnosti in občutku olajšanja, ki spremlja prepotrebno pomoč. Šestica pentakljev je karta dajanja in sprejemanja. Včasih ste na koncu dajanja; drugič ste na koncu sprejema. To je stalen življenjski cikel in ta karta služi kot opomnik, da se lahko ravnovesje kadar koli spremeni. Tudi če ste obkroženi z bogastvom, boste kdaj potrebovali pomoč in podporo drugih, zato bodite radodarni s svojimi sredstvi, saj boste podporo morda potrebovali v prihodnosti.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Morda ste kot bogataš na tej karti, ki svoje bogastvo in obilje delite z drugimi. Nabrali ste veliko bogastvo in zdaj lahko nudite finančno pomoč tistim v stiski. Velikodušno dajete z dobrodelnimi donacijami, desetino ali zbiranjem sredstev in uživate v dobrih občutkih, povezanih s pomočjo drugim. Tudi če niste finančno premožni, ponudite svoj čas, energijo, ljubezen in podporo tistim, ki jo potrebujejo, saj veste, da bo to cenjeno. Dajanje svojega časa ali modrosti je pogosto prav tako duhovno izpolnjujoče kot dajanje denarja ali daril, nematerialno darilo vaše prisotnosti pa je sprejeto prav tako dobro, če ne bolje. Včasih se lahko sprašujete, ali si res lahko privoščite velikodušno dajanje drugim – in moder nasvet Šestice pentakljev je, da zaupate, da je vsak vaš prispevek cenjen in se vam bo trojno povrnil.</p><p>Morda ste tudi nagnjeni k temu, da nekomu daste posojilo ob predpostavki, da vam bo na koncu vrnil, ko bo spet na nogah. To je posojilo, ki temelji na zaupanju in dobri veri, ob zavedanju, da če nekaj daste, se vam bo to vrnilo. Ne pozabite pa, da gre pri tej izmenjavi bolj za kratkoročno rešitev in ne za trajno rešitev. Zato razmislite, kako lahko finančno podprete svojo družino ali prijatelje na način, ki jih bo spodbudil k samooskrbi.</p><p>Po drugi strani pa ste morda na udaru velikodušnosti drugih ljudi in ta darila sprejemate s hvaležnostjo. To vam bo pomagalo, da se znova postavite na noge in se sčasoma oddolžite dobrodelni organizaciji ali posamezniku, bodisi s svojim časom bodisi z obnovljenim premoženjem. Prav tako boste morali prepoznati načine, kako lahko dolgoročno postanete bolj samozadostni. Tveganje sprejemanja dobrodelnosti je, da postanete odvisni od nje in ne morete poskrbeti zase. Bodite pozorni, da ne postajate podrejeni ali opazno obupani zaradi dobrodelnosti, ki vam jo nudi nekdo drug.</p><p>Končno je Šestica pentakljev karta, ki predstavlja finančno harmonijo. Zneski, ki pritekajo in odtekajo, so v ravnovesju, vi pa ste hvaležni za to, kar imate, in z veseljem delite z drugimi v stiski.</p>',
                    besedePokoncna: 'Dajanje, prejemanje, deljenje bogastva, velikodušnost, dobrodelnost; nekdo bo kmalu prejel tisto, kar mu pripada; darila, filantropija, delitev blaginje, obrniti na bolje predvsem glede denarja, splošen občutek sreče.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Obrnjena Šestica pentakljev vas opominja, da poskrbite, da dajete tudi sebi. Malo samooskrbe bo veliko pripomoglo, še posebej, če ste že dolgo v načinu dajanja. Razmislite o nakupu majhnega darila, s katerim si izkažete hvaležnost za vse, kar ste storili; morda masažo, čudovito škatlo dobrot ali pa si preprosto napišite ljubezensko sporočilo, v katerem bi rekli "Hvala za vse".</p><p>Obrnjena Šestica pentakljev lahko nakazuje, da medtem ko drugim dajete brezplačno, vam oni ne vračajo. Prijatelju lahko na primer posodite denar, vendar vam ne vrne. Ali pa nekomu pomagate, pa vam ne vrne usluge in pokaže pomanjkanje hvaležnosti in spoštovanja. To je enosmerna ulica in morda se vam zdi, da vas izkoriščajo. Čeprav ne morete spremeniti odziva druge osebe ali jo prisiliti, da vrne uslugo (ali dolgovani denar), se lahko iz izkušenj učite in zavrnete pomoč v prihodnosti. Ali pa, če se odločite, da boste ponovno ponudili pomoč, predlagajte alternativni način poplačila, da bo še vedno zdrava izmenjava energije – morda vam skuhajo obrok ali vam v zameno ponudijo storitev.</p><p>Če se sami spopadate s težavami, pazite, da se ne boste preveč zavezali drugim, ki iščejo vašo pomoč. Morda ste nagnjeni k porabi ali razdajanju več, kot si lahko privoščite. Čeprav je velikodušnost čudovita lastnost, morate zagotoviti, da lahko podpirate sebe in hkrati pomagate drugim.</p><p>Obrnjena Šestica pentakljev vas prosi, da ste previdni glede zadolževanja. Nagnjeni ste k temu, da se spravite čez glavo in lahko se vam vrne, da vas ugrizne z naraščajočimi obrestnimi merami ali osebnimi grožnjami, če tega ne boste mogli pravočasno odplačati.</p><p>Obrnjena Šestica pentakljev včasih odraža sebično plat dobrodelnosti. Pazite, da drugim ne poskušate dokazati, da ste radodarni, ker lahko dajete revnim ali potrebnim. Prizadevajte si dajati nesebično in ne sebično.</p><p>V branju partnerstva obrnjena Šestica pentakljev nakazuje, da en partner veliko jemlje, a ne veliko daje, kar ustvarja neenakost v odnosu. Paziti morate, da vaš velikodušni duh ne bo izkoriščen in da ne boste vedno vi tisti, ki delate kompromise v korist svojega partnerja.</p>',
                    besedeObrnjena: 'Skrb zase, neplačani dolgovi, enostranska dobrodelnost, podkupnine, nepravičnost, blaginja je ogrožena, ljubosumje, skopuh, v življenju primanjkuje harmonije.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Hvaležen/na sem za darove in blagoslove, ki jih imam.\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Karta kot ogledalo",
                    opis: "Ne da bi prej razmišljali: v kateri od treh likov se takoj vidite? Vsi trije skupaj ali posamezno so lahko ogledalo vaše osebnosti. Primerjajte tudi V - Svečenik."
                },
                {
                    simbol: "Bogataš",
                    opis: "Velik lik pomeni vaše prednosti, bogate izkušnje in talente – vaše sposobnosti, ki so vedno prisotne in jih imate dovolj, da jih lahko delite. Ne glede na to, kako trenutno izgleda vaše bančno stanje."
                },
                {
                    simbol: "Dva prosjača",
                    opis: "Zavzemajte se za lastne slabosti. Eden od njih prejema miloščino, drugi nič. Tudi ta dva berača sta pomembna dela vaše osebnosti in izraz dragocenih izkušenj."
                },
                {
                    simbol: "Tehtnica I",
                    opis: "Tehtnica kot podoba za tehtanje prednosti in slabosti: katere prošnje so smiselne in jih je treba ugoditi, katere nesmiselne in jih je treba zavrniti? Dobro premislite, katere potrebe so za vas pomembne."
                },
                {
                    simbol: "Tehtnica II",
                    opis: "Ko sta dajanje in jemanje uravnotežena, obstajata dva možna — in nasprotujoča si — razloga: ali je tisto, kar je bilo vzeto, in tisto, kar je bilo dano, nepomembno, nima teže. Ali pa imamo zmagovalno situacijo."
                },
                {
                    simbol: "Štirje majhni kovanci I",
                    opis: "Ko se darovalec ob dajanju počuti obogatenega, namesto da bi nekaj izgubil, in ko se prejemnik ob prejemanju počuti utemeljeno v svoji človeški vrednosti, namesto da bi ga bilo sram ..."
                },
                {
                    simbol: "Štirje majhni kovanci II",
                    opis: "... potem se ustvari dodana vrednost, ker se obe strani počutita bogatejši kot prej. To dodano vrednost predstavljajo štirje majhni kovanci, ki tvorijo vez med dajajočo in prejemajočo roko."
                },
                {
                    simbol: "Znamenje blagoslova",
                    opis: "Prsti bogataša ponavljajo kretnjo Svečenika. Pozitivno: res je nekaj posvečenega v tej situaciji, v kateri zmagajo vsi. Negativno: aroganca, moraliziranje, socialna pomoč."
                },
                {
                    simbol: "Pentaklji na nebu",
                    opis: "Negativno: prava blaginja ne doseže ljudi spodaj. Pozitivno: kjer dajanje in jemanje tvorita resnično harmonično ravnovesje, ustvarimo majhen košček nebes na zemlji."
                },
                {
                    simbol: "Mesto / grad",
                    opis: "Leži nekoliko oddaljeno v ozadju. Človek se mora ločiti od natrpane rutine in vrveža, da bi se sprijaznil sam s sabo ter s svojimi močmi in slabostmi. Negativno: utapljanje v lastnem soku."
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "DA",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "6",
                },
                {
                    ime: "Element:",
                    vrednost: "Zemlja",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Luna v biku",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Tipareth (Lepota)",
                },
                {
                    ime: "Čas:",
                    vrednost: "Maj 1 - maj 10"
                }
            ],
        }
    }
}
