export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "Sedmica mečev",
                    rekDesno: "Prejeti krivdo za nekaj<br>Biti prevaran s strani nekoga<br>Nič dobrega",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>Sedmica mečev prikazuje moškega, ki se izmuzne iz vojaškega tabora s petimi meči v rokah. Čez ramo pogleda dva pokončna meča, ki ju je pustil za sabo. Nasmeh na njegovem obrazu nakazuje, da je ponosen nase, ker se je izmuznil, ne da bi ga opazili.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Tradicionalno Sedmica mečev označuje krajo, izdajo, prevaro in zvijačo. Morda se poskušate nečemu izogniti in se prikradete za hrbtom drugih ljudi v upanju, da boste ostali neopaženi. Če boste imeli srečo, se boste morda izognili nedotaknjeni. Če pa nimate sreče, bodo drugi kmalu izvedeli, kaj ste storili, kar vam bo povzročilo sram in zadrego. Zavedajte se, da kadar koli uporabite zvijačo ali prevaro, da bi pridobili prednost pred nekom ali nečim drugim, tvegate, da vas odkrijejo. In tudi če niste, bo prikrivanje zahtevalo ogromno truda in morda vse skupaj ne bo vredno tega.</p><p>Druga možnost je, da ste žrtev izdaje nekoga drugega. Drugi niso odkriti z vami in morda se ne zavedate njihovih laži in prevar. Morda zaupate nekomu, za katerega se nato izkaže, da vodi svoje načrte, zaradi česar ste na suhem. Bodite pozorni na kakršno koli zahrbtno vedenje in poslušajte svojo intuicijo, ko se vam nekaj ne zdi prav ali se zdi prelepo, da bi bilo res.</p><p>Kar je bolj pozitivno, Sedmica mečev poudarja, da morate biti strateški pri tem, kar počnete. Veste, da ne morete narediti vsega naenkrat – niti ne bi smeli. Namesto tega morate dati prednost tistemu, kar je za vas pomembno, in svojo osredotočenost in pozornost usmeriti na nekaj nalog, ki vas bodo približale vašim ciljem. To je pravilo 80-20: 20 % vašega dela bo predstavljalo 80 % vaših rezultatov, zato se osredotočite na 20 %. Morda boste lahko sprejeli nekatere odgovornosti ali dolžnosti, vendar ne vseh. Lahko pa rečete "da" nekaterim projektom na račun drugih.</p><p>Sedmica mečev tudi nakazuje, da boste morda morali uporabiti bližnjice ali "vrata zdaj", da dobite, kar želite. Namesto da vestno sledite postopku, boste morda morali poiskati načine za hitro rešitev težave, da se boste lahko premaknili proti svojim ciljem. Na primer, če ste zamudili vstop v želeni predmet, lahko napišete pismo dekanu ali črpate iz svojih omrežij, da dobite vpis med letom. Morda boste morali razmišljati na svojih nogah in delovati na način, ki ni povsem "nad krovom".</p><p>Včasih Sedmica mečev nakazuje, da boste morda morali postaviti sebe na prvo mesto, da boste dobili, kar želite, tudi če to pomeni, da boste druge razočarali ali druge postavili na stran. Na primer, morda vas bodo prosili, da potujete zaradi službe, da bi se udeležili pomembnega dogodka, vendar bi to pomenilo, da bi zamudili otrokov rojstni dan, zato zavrnete možnost potovanja, čeprav veste, da bo to razburilo vašega šefa. Tukaj je stvar: ne morete biti vsem vse in včasih morate svoje potrebe in prioritete postaviti na prvo mesto, tudi če se drugi morda ne strinjajo z vami ali razumejo, od kod prihajate.</p><p>Sedmica mečev bi lahko pomenila tudi, da poskušate pobegniti iz situacije, ki vam ne ustreza več, namesto da bi se z njo spopadli neposredno. Morda boste poskušali pobegniti od obveznosti, odgovornosti, trdega dela ali ljubezni. Morda boste odlašali in pustili, da težave zdrsnejo in postanejo hujše, ker se ne želite ukvarjati z njimi. Včasih se morate soočiti s tistim, s čimer se morate soočiti.</p>',
                    besedePokoncna: 'Izdaja, prevara, umikati se nečemu, strateško ravnanje, nespameten poskus, nezanesljivost, predrznost, vohunjenje, možna okvara, pomanjkanje vesti, zavajanje, ne zavedajoč se polnega potenciala, opozorilo.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Sedmica mečev se pogosto pojavi obrnjena, ko se počutite kot prevarant in trpite za "sindromom prevaranta". Morda boste dvomili vase in v svoje sposobnosti. Na primer, če ste ustanovili novo podjetje, se lahko vprašate: "Kdo sem jaz, da to počnem?" Vedite, da je to govorjenje strahu. Pojdite iz glave in verjemite, da imate vse, kar potrebujete za uspeh vašega novega podviga.</p><p>Podobno lahko obrnjena Sedmica mečev nakazuje, da zavajate sami sebe, se poskušate pretentati, da bi verjeli nečemu, čeprav ni v skladu z vašim resničnim jazom. Morda se poskušate zavajati, da je vse v redu, čeprav ni. Zdaj je čas, da se zresnite s tem kje ste, in se neposredno soočite s svojo situacijo.</p><p>Kot karta notranje prevare obrnjena Sedmica mečev predstavlja skrivanje skrivnosti pred drugimi. Morda skrivate temno skrivnost, za katero upate, da ne bo nikoli razkrita. Zadrževanje te skrivnosti vam lahko prinese stres in napetost, skupaj z globljimi občutki krivde in sramu. Čeprav je misel na priznanje morda grozljiva, vas bo osvobodila negativnih čustev, ki jih doživljate. Najprej odpustite sebi, nato pa se zaupajte nekomu, ki mu zaupate. Brez dvoma se boste zaradi tega počutili veliko bolje in lažji.</p><p>Če ste vpleteni v afero ali zunajzakonsko razmerje, obrnjena Sedmica mečev kaže vse večji odpor do nadaljevanja. Vi ali vaš partner se morda počutite vse bolj neprijetno zaradi tega razmerja in bi raje vse skupaj priznali.</p>',
                    besedeObrnjena: 'Sindrom prevaranta, samoprevara, zadrževanje skrivnosti, pretirana pomoč, dober nasvet, svetovanje, ukradeni predmeti se vrnejo, obračanje novega lista, biti prelisičen, brez hrbtenice.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Odločen sem, da bom naredil pravo stvar, tudi če se zdi drugačen način lažji.\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Poza",
                    opis: "Nenavadna drža lika je hkrati uganka in odgovor: tek naprej in pogled nazaj. S previdnimi gibi, ki se morda vrtijo v krogu."
                },
                {
                    simbol: "Pet in dva meča",
                    opis: "Delujete v skladu/s tem, kar lahko dojamete. Negativno: za seboj pustite nekaj pomembnega (dva meča), ki vam pripadata. Pozitivno: odidejo dvomi (dva meča) za vami."
                },
                {
                    simbol: "Drža lika I",
                    opis: "Tek naprej in pogled nazaj: znak notranjega konflikta, nezavednega, nezanesljivosti: ko nakažete na levo, zavijete desno. Osebno protislovje, življenje kot uganka."
                },
                {
                    simbol: "Na prstih",
                    opis: "Bistveno je razviti način skrbnega početja – tempo hoje. Hoja lika – hoja po prstih – nakazuje to zavedanje. Poleg tega je slika svarilo pred prikritostjo in presenečenji, ki lahko prihajajo z mehko nogo."
                },
                {
                    simbol: "Šotori",
                    opis: "Negativno: nemir, brezdomstvo, nomadsko življenje, vedno v teku in nikoli domov. Pozitivno: življenje se nadaljuje, mir in kontinuiteta v kontekstu sprememb, kjerkoli se počutite kot doma."
                },
                {
                    simbol: "Skupina ljudi",
                    opis: "Negativno: glaven lik gleda navzdol (prizanesljivo?) na svoje bližnje. Pozitivno: biti jasen glede lastne vloge/naloge. Veliko časa porabimo za prepire z drugimi, ker nimamo poguma, da bi živeli svoje sanje."
                },
                {
                    simbol: "Rdeči čevlji/rdeči klobuk",
                    opis: "Rdeča pomeni voljo, strast, življenjsko moč. Negativno: samovoljnost od glave do prstov. Pozitivno: srčna afera, a srčna želja, ki jo uresničujemo z močjo volje in gorečnostjo."
                },
                {
                    simbol: "Rumena",
                    opis: "Svetla sončna svetloba, a tudi zavist in iskanje smisla. Nevarnost: tudi pričajoča bližina sonca lahko povzroči padec (v manijo ali zablodo). Pozitivno: tudi osvetlitev nasprotne strani = močna, zanesljiva zavest."
                },
                {
                    simbol: "Peščena/zemeljska barva",
                    opis: "Prizemljeno, materialno, snovno. Zavestno zavedanje pozna svoje naravne temelje; nezavedni obstoj slepi."
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "NE",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "7",
                },
                {
                    ime: "Element:",
                    vrednost: "Zrak",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Luna v vodnarju",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Netzach (Zmaga)",
                },
                {
                    ime: "Čas:",
                    vrednost: "Februar 9 - februar 18"
                }
            ],
        }
    }
}
