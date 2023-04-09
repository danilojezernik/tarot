export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "Trojka pentakljev",
                    rekDesno: "Proces navdiha<br>Sledi svojim sanjam<br>Sodelovanje v timu",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>Trojka pentakljev prikazuje mladega kamnoseka, ki s svojim orodjem dela na delu katedrale. Pred njim dva arhitekta držita načrte za zasnovo. Visoki stropi in zapletene gravure pomenijo, da sta obe strani vešči svojih obrti. Zdi se, da se kamnosek o svojem dosedanjem napredku pogovarja z arhitekti, in čeprav je manj izkušen, cenijo njegovo mnenje in strokovno znanje. Njihova govorica telesa namiguje, da ta mladenič bistveno prispeva k dokončanju katedrale in arhitekti želijo zagotoviti, da so vsi na isti strani.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Kamnosek ni mogel zgraditi katedrale brez pomoči arhitektov in oni je ne bi mogli zgraditi brez njega. Vsaka oseba ima pomembno vlogo in ko se združijo kot ekipa, lahko ustvarijo nekaj veliko pomembnejšega, kot če bi se projekta lotili sami. Torej, ko se Trojka pentakljev pojavijo v branju tarota, vzemite to kot znak za sodelovanje z drugimi, ustvarjanje sinergij za doseganje velikih rezultatov.</p><p>Trojka pentakljev predstavlja vrednost različnih idej in ravni izkušenj v sodelovanju. Arhitekti spoštujejo specializirano znanje kamnoseka, kamnosek pa ceni modrost in izkušnje arhitektov. Čeprav so njihova ozadja, ravni izkušenj in strokovno znanje zelo različni, se lahko združijo in delijo svoje vpoglede na način, ki ustvari sinergijo in izboljša končni izdelek. Ni "mi in oni" ali kakršnega koli občutka večvrednosti. Namesto tega lahko vsaka oseba nekaj ponudi in se je pripravljena učiti od drugih, ki sodelujejo v projektu. Vsi skupaj opravljajo delo in prispevajo k skupini z aktivnim poslušanjem in deljenjem. Ko delate na projektih z drugimi, priznajte vrednost, ki jo vsaka oseba prinese k mizi. Prav tako se boste učili od vsakega člana ekipe, ko boste videli njegov edinstven prispevek.</p><p>Trojka pentakljev, tako kot trojke v drugih barvah, označuje začetne faze izvajanja, ki sledijo idejni fazi asa in koraku načrtovanja dvojke. Veste, kaj želite ustvariti; postavili ste načrte, zbrali svoje vire (denar, ljudi in čas) in se lotili dela – morda ste že dosegli svoj prvi pomemben mejnik. Seveda še niste blizu ciljne črte, vendar ste začeli iti in poskrbite, da se stvari zgodijo.</p><p>Ko boste izvajali svoje načrte, boste spoznali, da imate spretnosti, sposobnosti in vire, ki jih potrebujete za doseganje svojih ciljev. Na Trojkao pentakljev glejte kot spodbudo, da ste na pravi poti. Ste kompetentni v tem, kar počnete, in napredujete. Nadaljujte! Tudi ustrezna priprava, vodenje in organizacija so sestavni del Trojka pentakljev. Doseganje pomembnih ciljev, kot je gradnja velike katedrale, zahteva podrobno načrtovanje. Ta karta vam torej sporoča, da ustvarite celovit načrt in sledite urniku. Zdaj se bo dobro vodenje projektov obrestovalo.</p>',
                    besedePokoncna: 'Timsko delo, sodelovanje, učenje, izvajanje, nagrada za spretnosti ali sposobnosti, odobravanje, uspeh skozi trud, nadaljuj, prava pot, cenjen, skupni cilji.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Obrnjena Trojka pentakljev nakazuje, da se morda spopadate s pomanjkanjem harmonije s sodelavci, zaradi česar je težko dokončati projekt. Niste na isti strani drug z drugim ali pa ne poslušate ali ne cenite mnenj in idej drug drugega. Če to odmeva, se morate uskladiti s prvotnimi cilji projekta in skleniti nove dogovore o tem, kako boste sodelovali pri doseganju teh ciljev. Morda se boste morali ponovno pogajati o časovnici, virih in količini energije, ki jo vsak vloži v projekt. Glede na to, da se pokončna Trojka pentakljev nanaša na pravilno načrtovanje in organizacijo, lahko obrat te karte pomeni, da morate v svoje delo vnesti več sistematične energije. Če nimate jasnega pogleda na to, kako boste dosegli svoje cilje, bo koristno, da za trenutek prekinete delo in podrobno načrtujete naslednje korake.</p><p>Lahko pride tudi do pomanjkanja spoštovanja med člani ekipe, pri čemer se posamezniki poskušajo dokazati in pridobiti premoč nad drugimi. Če je temu tako, postavite jasne smernice za ekipo, zlasti glede spoštovanja in sodelovanja. Priznajte edinstven prispevek vsake osebe, ne glede na njene izkušnje ali znanje.</p><p>Obrnjena Trojka pentakljev lahko tudi pokaže, da delate v razmeroma vsakdanji službi, v kateri so vaši prispevki in izkušnje necenjeni in podcenjeni. Ni veliko možnosti za rast in napredovanje in počutite se, kot da vaše sposobnosti niso izkoriščene. Morda je pravi čas, da naredite korak v karieri in poiščete organizacijo, ki ceni vaše talente.</p><p>Včasih lahko obrnjena Trojka pentakljev pomeni, da raje delate sami in delo opravite sami. Morda ste siti čakanja na druge ali čutite željo, da bi vse naredili sami. Mogoče imate prav. Če pa se znajdete v težavah, bodite pripravljeni prositi za pomoč.</p>',
                    besedeObrnjena: 'Disharmonija, neusklajenost, samostojno delo, kakovost izdelave je zanemarjena, pomanjkanje timskega dela, delati drug proti drugemu, spodkopavanje projekta.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Odprt/a sem za učenje novih veščin in na sodelovanje z drugimi.\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Karta kot ogledalo",
                    opis: "Samo ta karta prikazuje črne pentaklje. Opozorilo pred osebami, ki so upodobljeni kot voluharji in krti. Spodbuda: poglobiti se, najti zakopan zaklad in razkriti nove načine. Poiščite se in stopite na plan!"
                },
                {
                    simbol: "Kipar / zidar",
                    opis: "Dleta v levi roki, kladivo v desni. Dela na kamnu, morda olajšanje. Michelangelo je poudaril, da pri svojem delu ni ničesar vložil v kamen, ampak namesto tega je preprosto osvobodil ..."
                },
                {
                    simbol: "Neoklesan kamen",
                    opis: "... kip, ki je že viden iz balasta, ki ga obdaja. Neoklesan kamen je človek s svojim potencialom in žlindro."
                },
                {
                    simbol: "Kripta / klet",
                    opis: "Tu gre za temelje, osnovne vrednote, temelje na področju pentakljev (denar, vrednote, talenti). Na podlagi teh obokov se bo dvignila mogočna konstrukcija: Kako bo vaše delo prispevalo k temu?"
                },
                {
                    simbol: "Črni pentaklji I",
                    opis: "Črni pentaklji/kovanci: osebne potrebe, finance in talenti ostanejo napačno ocenjeni, pozabljeni ali prezrti. Ali pa se preprosto še niso razgalili, še niso bili prepoznani: latentni talenti!"
                },
                {
                    simbol: "Črni pentaklji II",
                    opis: "Negativno: \"Imeti talent in ga ne uporabiti, pomeni zlorabiti ga.\" (Vojvoda Clemens August Weimarski) Pozitivno: prinašaš luč v temo. Ne bojite se srečanja z neznanim."
                },
                {
                    simbol: "Menih",
                    opis: "Osnovne vrednote in vrhunska uspešnost: imeti poklic lahko vodi do velikih dosežkov, ker je človek bolj predan. Članstvo v redu = živeti notranji klic. In: vsak pravi poklic ima tudi svojo duhovno plat."
                },
                {
                    simbol: "Nuna / norec / plemkinja",
                    opis: "Kot redovnica = poklicanost, kot z redovnikom poleg nje. Kot norec, lik poudari vidika svobode in absolutnega. Kot plemkinja = lepota in pomen osebnih vrednot in osnovnih načel."
                },
                {
                    simbol: "Dvojni načrt",
                    opis: "Lika na desni držita dva izvoda načrta, skice ali risbe. Ti so povezani s projekti, povezanimi s kariero. Duhovno: načrt stvarjenja – kaj ima Bog pripravljeno za vas."
                },
                {
                    simbol: "Klop",
                    opis: "Osmica pentakljev in ta karta prikazujeta človeka s kladivom in dletom ter klopjo. Tu je njen namen povzdigniti (povzdigniti, odpraviti prepoved itd.) osebo v svojem delu in skozi svoje delo."
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "DA",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "3",
                },
                {
                    ime: "Element:",
                    vrednost: "Zemlja",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Mars v kozorogu",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Binah (Razumevanje)",
                },
                {
                    ime: "Čas:",
                    vrednost: "December 31 - januar 9"
                }
            ],
        }
    }
}
