export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "Osmica palic",
                    rekDesno: "Gibanje in hitrost<br>Nič vas ne ustavi<br>Prispeli boste hitreje, kot si mislite",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>Osmica palic prikazuje osem brstečih palic, ki letijo po zraku z veliko hitrostjo. Njihov let nakazuje spremembe, gibanje in potovanje. Nebo je jasno in čudovita reka prosto teče in daje življenje okoliški pokrajini.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Osmica palic pravi, da so se boji pri Sedmici palic skorajda končali in imate svobodo in prostor, da znova nadaljujete s svojimi načrti. Osmica palic je dinamična karta, ki vsebuje visoko raven energije, ki vas žene naprej, da dosežete svoje cilje veliko hitreje kot kdaj koli prej. Lahko pričakujete, da boste zelo zaposleni, vendar je to eno tistih obdobij, ko ste "dobro zaposleni", v katerem ste navdušeni nad napredkom, ki ga dosegate.</p><p>Osmica palic vas spodbuja, da se prepustite toku; ne upirajte se. Trenutno se vse odvija hitro, zato čim bolje izkoristite ta zagon za uresničitev svojih ciljev in sanj. Dovolite energiji vesolja, da teče skozi vas in vas popelje bližje cilju. Če poskušate stvari upočasniti, ker niste pripravljeni ali se bojite neznanega, boste samo zapravili to priložnost. Namesto tega uporabite energijo za spodbujanje pozitivnih sprememb in doseganje pomembnih rezultatov.</p><p>Osmica palic vas tudi vabi, da ste lasersko osredotočeni na svoje namere in dejanja. Določite, kaj želite manifestirati, in nato uskladite vse svoje vire in energijo, da se osredotočite na ta edini cilj. Odstranite vse motnje in se nalogi posvetite s popolno koncentracijo, odločnostjo in voljo. Ta izkušnja je lahko zelo produktivna, saj vam omogoča, da v kratkem času dosežete veliko.</p><p>Z Osmico palic se lahko veselite hitrega zaključka projekta, ki je trenutno v teku, lahko pa tudi pričakujete, da vas bo kmalu zasedlo nekaj novega in še bolj razburljivega. Trenutno vas ni mogoče ustaviti, saj kar pokate od energije in idej ter komaj čakate, da dosežete eno nalogo in se lotite druge. Če želite povečati to energijo, poskrbite, da bodo vaše dejavnosti usklajene z vašimi širšimi cilji in vlagajte v prave stvari ob pravem času. Prepričajte se tudi, da je vaša prejšnja naloga dokončana, preden se premaknete na naslednjo.</p><p>Ta karta je znak za "udarjanje, dokler je železo vroče". Vsekakor je karta, usmerjena v akcijo, ki vas spodbuja, da se hitro premaknete in izkoristite najboljše razpoložljive priložnosti. Dokler je Osmica palic prisotna, ni čakanja, zato določite, kam naj gre vaša energija, in nadaljujte z njo!</p><p>Osmica palic pogosto predlaga potovanje z letalom, kratkotrajno ali burno potovanje, kot je poslovno potovanje ali počitnice. Morda boste celo uživali, ko ste del turistične skupine, ki obišče deset držav v prav toliko dneh!</p>',
                    besedePokoncna: 'Hitro, nenadna akcija, napredek, vznemirjenje, sprememba, svoboda, bliža se cilj, nove ideje, potovanje po zraku, ljubezen do neba, vrtov, travnikov, poravnava, gibanje.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Obrnjena Osmica palic nakazuje, da napredujete z idejo ali načrtom, vendar se morate upočasniti in razmisliti o naslednjih korakih, preden nadaljujete. Morda boste v naglici, kaj zamudili in boste nagnjeni k napakam ali slabim odločitvam. Lahko pa hitite s stvarmi brez jasnega načrta v katero smer ste namenjeni. Bodite previdni pri "sindromu svetlečega predmeta", pri katerem takoj, ko začnete uresničevati eno idejo, pride na misel druga in zamenjate fokus. Težava je v tem, da s tem pristopom nikoli ne dosežete ničesar, ker skačete z ene ideje na drugo in nobene ne dokončate.</p><p>Obrnjena Osmica palic vas lahko opozarja, da se upirate spremembam, poskušate ustaviti pretok energije in gibanja. To bo samo otežilo stvari, zato se prepustite in bodite v toku. Če se počutite, kot da ste obtičali, počnite stvari drugače (nove rutine, lokacije, dejavnosti,...) in znova spravite energijo v tek.</p><p>Obrnjena Osmica palic lahko pomeni znatne zamude, zlasti v zvezi s potovanji ali hitrimi načrti. Čeprav imate veliko energije in entuziazma, da stvari spravite naprej, se zdaj na svoji poti soočate s številnimi ovirami. To je neverjetno frustrirajoče in morda ste iz dneva v dan bolj nepotrpežljivi. Še naprej iščite alternativne načine za rešitev predstavljenih izzivov, da boste lahko izpeljali svoje načrte. Če je Merkur retrograden, pričakujte, da bodo vaši načrti dvakrat zamaknjeni!</p><p>Podobno je lahko ta karta znak, da za kratek čas zadržite svoje dejavnosti, dokler situacija ne postane bolj stabilna in predvidljiva.</p><p>Po drugi strani pa je lahko obrnjena Osmica palic znak, da usklajujete svoje vire, tako da lahko aktivno sledite svojemu cilju. Urejate svoje življenje – fizično zdravje, čustveno dobro počutje, raven energije ali duhovnost – tako da ste v odličnem položaju, da nadaljujete s svojimi načrti.</p>',
                    besedeObrnjena: 'Čakanje, zamude, upiranje spremembam, upočasni, frustracija, ljubosumje, nasilje, prepiri, družinski spori, sila poguma ali drznosti se nenadoma uporabi.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Naprej grem hitro in natančno!\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Brez lika",
                    opis: "Ena redkih kart, ki je brez ljudi. Pozitivno: preseganje lastnih omejitev, skok čez svojo senco, predanost brez ega. Negativno: izguba samega sebe, ne jemati se resno, veliko hrupa za nič."
                },
                {
                    simbol: "Perspektiva I",
                    opis: "Osem palic prihaja na kopno. Nekaj se vam približuje. Ali osem palic vzleti kot osem sulic, puščic. Nekaj se hoče premakni, vstani in pojdi!"
                },
                {
                    simbol: "Perspektiva II",
                    opis: "Oktava, lestvica energij. Podoba Jakobove lestve v Stari zavezi: Angeli za Jakoba zgradijo lestev, ki mu omogoča, da pleza gor in dol med nebesi in zemljo."
                },
                {
                    simbol: "Perspektiva III",
                    opis: "Osem palic, ki tvorijo ograjo ali oviro, ki blokira pot do hiše na daljnem bregu reke. Ampak tudi: krila vzvišenosti, dobre vibracije. Pripnite se pred vzletom!"
                },
                {
                    simbol: "Perspektiva IV",
                    opis: "Start in pristanek sta nepomembna; glavno da so palice v gibanju, na poti. V tem primeru pomenijo: iti po svoje, prevzeti odgovornost, uporabi svoja krila."
                },
                {
                    simbol: "Poravnava palic",
                    opis: "Usklajevanje številnih različnih nalog, nagnjenj in interesov. Ste kot a dirigent ali trener, ki zna sestaviti zelo različne stvari. Negativno: dolgočasna monotonost, pomanjkanje ustvarjalnosti."
                },
                {
                    simbol: "Pokrajina zadaj",
                    opis: "Široka država, velike naloge, veliko se je treba lotiti in doseči. The reka pomeni kontinuiteto v spremembi, povezavo med izvirom in odtokom. Biti in ostati energijsko v toku."
                },
                {
                    simbol: "Grad / hiša",
                    opis: "Iskanje doma. Po eni strani hiša kot cilj človekovih naporov oz človekov trud, ki je most do cilja. Pa tudi: kje lahko realizirate svoj potencial, tam je vedno vaš dom."
                },
                {
                    simbol: "Rumena in zelena barva",
                    opis: "Rodovitnost in rast, pa tudi svarilo pred nezrelostjo in zavistjo. Osem palic bi lahko bila metafora za naše projekcije (latinsko: tisto, kar je vrženo naprej)"
                },
                {
                    simbol: "Modro nebo / modra reka",
                    opis: "Modra: občutki, duša, um, hladnokrvnost, hrepenenje, intenzivnost, naivnost. Pozitivno: dobrosrčnost, lahkotnost, jasna volja, bister um. Negativno: malikovanje nekoga, poln želja, omamljenost."
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "DA",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "8",
                },
                {
                    ime: "Element:",
                    vrednost: "Ogenj",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Merkur v strelcu",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Hod (sijaj)",
                },
                {
                    ime: "Čas:",
                    vrednost: "November 23 - december 2"
                }
            ],
        }
    }
}
