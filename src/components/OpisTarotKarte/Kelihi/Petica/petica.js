export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "Petica kelihov",
                    rekDesno: "Izguba nečesa pomembnega<br>Prebivanje v preteklosti<br>Temnejši pogled",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>Petica kelihov prikazuje moškega v dolgem črnem plašču, ki gleda navzdol na tri prevrnjene kelihe – kar simbolizira njegova razočaranja in neuspehe. Za njim stojita dva keliha, ki predstavljata nove priložnosti in potencial, a ker je tako osredotočen na svoje izgube (prevrnjeni kelihi), zamudi priložnosti, ki so mu na voljo.</p><p>V ozadju most prečka veliko, tekočo reko in vodi do varovanega gradu ali doma na nasprotni strani rečnega brega – če se le lahko premakne od prevrnjenih skodelic. Most nosi sporočilo "najti pot skozi".</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Petica kelihov se pogosto pojavi v branju tarota, ko se situacija ni izšla tako, kot ste pričakovali, in ste žalostni, obžalujete in ste razočarani. Namesto da bi nadaljevali s svojim življenjem, se odločate potapljati v samo-pomilovanju. Trenutno se lahko osredotočite le na to, kaj je šlo narobe in kako vam ni uspelo. Seveda, začutite občutke, vendar si določite časovno omejitev za samopomilovanje in se nato zberite in pojdite naprej.</p><p>Petica kelihov nakazuje, da ste obtičali v preteklosti in je ne morete izpustiti. Stare rane in grenki spomini preplavijo vaše misli, ko razmišljate o tem, kaj se je zgodilo. Lahko se krivite ali verjamete, da ste žrtev življenjskih okoliščin. Ta negativna čustva vas ovirajo pri vašem največjem potencialu – osvobodite jih, da lahko nadaljujete in ustvarite pozitivne spremembe.</p><p>Pri Petici kelihov je odpuščanje ključnega pomena, tako sebi kot drugim. Če vas je nekdo razočaral, poiščite v srcu moč, da tej osebi odpustite in se osvobodite razočaranja. In če ste razočarani sami nad seboj, vedite, da ste v danih okoliščinah naredili najboljše, kar ste lahko, in da ste se učili iz svojih napak.</p><p>Ne pozabite tudi, da je pogled za nazaj veliko jasnejši od predvidevanja in da modrost v sedanjem trenutku izvira iz napak iz preteklosti. Razmislite o tem, kaj vas je pripeljalo do te točke, in ugotovite, katere dragocene lekcije se lahko naučite iz te izkušnje. Tudi ko gredo stvari narobe, lahko iz tega vedno odnesete nekaj pozitivnega s premislekom o pridobljenih izkušnjah.</p><p>Petica kelihov vam pokaže, da vas kljub temu, da vam ne gre najbolje, čakajo nove priložnosti in možnosti – vendar šele, ko boste pripravljeni. Čas je, da spremenite svojo miselnost in se osredotočite na to, kaj lahko gre prav od te točke naprej. Bodite odprti za svetlejšo plat življenja in vedite, da so številni blagoslovi trenutno prikriti. Namesto da se prepustite perspektivi "kozarec je napol prazen", glejte na to kot na "kozarec je napol poln".</p>',
                    besedePokoncna: 'Osredotočenost na negativno, obžalovanje, neuspeh, ni to kar je bilo pričakovano, razočaranje, žalost, izguba ljubljene osebe, razpadla zakonska zveza, prazno obžalovanje.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Obrnjena Petica kelihov nakazuje, da ste pred kratkim doživeli osebni neuspeh ali razočaranje. Morda vas skrbi, da ste "neuspeh" in ne želite drugim povedati, da ste ubrali napačno pot. Ali pa tega morda niste pripravljeni priznati drugim in se namesto tega odločite, da boste svoja čustva obdržali zase. Vendar je zdaj morda čas, da se odprete. Ljudje okoli vas morda ne vidijo, kako močno vas trenutno muči, zato naj vas ne bo strah prositi za pomoč ali se pogovoriti z nekom, ki mu zaupate; morda boste ugotovili, da to zmanjšuje čustveno bolečino. Ugotovili boste, da boste z delitvijo svojih občutkov z drugimi spoznali, da lahko premagate to začasno oviro.</p><p>Če se počutite krive ali sram zaradi tega, kar se je zgodilo, in se krivite za napake, ki ste jih naredili, vas obrnjena Petica kelihov spodbuja, da si odpustite in greste naprej. Vedite, da ste naredili najboljše, kar ste lahko. To je lahko odlična priložnost za vas, da si oprostite, prosite za odpuščanje, izrazite hvaležnost in se premaknete v ljubezen.</p><p>Ko se ta karta prikaže pri branju tarota, se zavedate vseh posledic preteklosti in cenite lekcije, pridobljene iz izkušenj. Morda celo prepoznate vrednost boleče izkušnje v širši shemi stvari.</p><p>Petica obrnjenih kelihov služi kot opomnik, da ne morete razveljaviti preteklosti – kar se je zgodilo, se je zgodilo. Zdaj je čas, da opustite tisto, kar vam čustveno ne služi več, in se odprite novim priložnostim, ki so vam na voljo. Odkrivate, kako biti odprt in znova tvegati, še posebej srčno. Če ste utrpeli neuspehe, boste ugotovili, da boste bolj upali na prihodnost in se znova vključili v razburljivo, ustvarjalno plat življenja.</p>',
                    besedeObrnjena: 'Iti naprej, samo-odpuščanje, sprejemanje, iskanje miru, vrnitev upanja, začenjajo se nova razmerja, vrnitev ljubljene osebe, pogum pride iz notranjosti.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Pripravljen sem se soočiti s svojimi izgubami in obžalovanjem na zdrav način.\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Poza",
                    opis: "Črna je barva žalosti, a tudi neznanega, nepoznanega. Kdo je upodobljena oseba? Bi to lahko bili vi? Nekdo od vaših bližnjih? Tukaj tudi vi doživite črno noč duše!"
                },
                {
                    simbol: "Črni lik I",
                    opis: "Včasih se počutimo prazne kot prevrnjeni kelihi in izgorele; pogosto je edini izhod ta, da sprejmemo svojo žalost, damo svojim občutkom prosto pot in pustimo solzam, da tečejo."
                },
                {
                    simbol: "Črni lik II",
                    opis: "Toda pogosto črna figura nima nič skupnega z žalovanjem ali izgorelostjo. V pozitivnem smislu je tudi simbol prehoda. Ko se v življenju začne nekaj zares novega, moramo najprej iti skozi tunel."
                },
                {
                    simbol: "Črni lik III",
                    opis: "Ko pride na obzorje nekaj, kar je za nas povsem novo, precej presega naše prejšnjo izkušnjo, potem naša duša - notranji glas - pravi: \"Tema - nimam pojma!\" Še vedno je temno, kot neosvetljen film."
                },
                {
                    simbol: "Prevrnjeni kelihi",
                    opis: "Predstavljajo pretekle izkušnje srca (rdeča), za katerimi je treba žalovati ali jih pusti. Naučite se odpuščati, ne da bi pozabili, in naučite se spominjati, ne da bi obtičali v preteklosti."
                },
                {
                    simbol: "Stoječi kelihi",
                    opis: "Nekaj je odšlo, je steklo naprej - a nekaj novega vas tudi čaka. Novi kelihi, nove kapacitete za vaše želje in strahove! Nove duhovne možnosti in resnice. Obrnite se in jih nagovorite!"
                },
                {
                    simbol: "Reka",
                    opis: "Samo tisti, ki ostane v stanju spremembe, ostane zvest samemu sebi. Reka je stari simbol za kontinuiteto in zanesljivost na eni strani – in stalen pretok, nenehne spremembe na drugi strani. Ob enem in istem času!"
                },
                {
                    simbol: "Most",
                    opis: "Imejte vero v prihodnost. Pojdi čez most, in potem kar je novo, ni več nepoznano. Tako kot lik na sliki se lahko obrnete na novo. To je pot skozi tunel - čez most."
                },
                {
                    simbol: "Pogled od zadaj",
                    opis: "Hrbet je območje senc, nevidnega in torej nezavednega. Obstaja pa tudi opozorilo: ne obračajte se stran od sebe. Pridi v odnos do sebe in tistih okoli sebe."
                },
                {
                    simbol: "(Podrt?) grad",
                    opis: "Ta grad kot ruševina kaže na pretekel časa, kot prevrnjeni kelihi. Če nanj gledamo kot na nedotaknjen grad, potem je to lahko posameznikov cilj, zaščita in dom, kar lahko dosežemo s prečkanjem mostu."
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "NE",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "5",
                },
                {
                    ime: "Element:",
                    vrednost: "Voda",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Mars v škorpijonu",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Geburah (Resnost, Moč)",
                },
                {
                    ime: "Čas:",
                    vrednost: "Oktober 23 - november 1"
                }
            ],
        }
    }
}
