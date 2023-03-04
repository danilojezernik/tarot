export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "XXI - Svet (The World)",
                    rekLevo: "Ne dovolite drugim, da vam govorijo, česa ne zmorete. Ne dovolite, da omejitve drugih omejijo vašo vizijo. Če lahko odpravite dvom vase in verjamete vase, lahko dosežete tisto, za kar nikoli niste mislili, da je mogoče.",
                    rekDesno: "Videti svet v zrnu peska in nebesa v divji roži, drži neskončnost na dlani in večnost v eni uri.",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>Karta Sveta prikazuje golo žensko, zavito v vijolično tkanino, ki pleše znotraj velikega lovorovega venca. Pogled ima usmerjen nazaj v preteklost, njeno telo pa se premika naprej v prihodnost. V rokah ima dve palici, kot tisti, ki jo drži Mag. To je simbol, da se je to, kar je bilo manifestirano s strani Maga, zdaj zaključilo s Svetom. Venec je okoli nje, kar simbolizira neprekinjen cikel uspešnih zaključkov in novih začetkov, saj ženska, ko stopi skozi venec, zaključuje eno fazo, skoraj takoj pa začne drugo.</p> <p>Okoli venca so štiri figure (lev, bik, angel in orel), podobne tistim v Kolesu sreče. Tako Svet kot Kolo sreče govorita o ciklični naravi vašega življenja in vašem napredovanju skozi njegove cikle. Štiri figure predstavljajo štiri fiksna znamenja zodiaka - Lev, Bik, Vodnar in Škorpijon. Simbolični so za štiri elemente, štiri barve tarota, štiri točke kompasa, štiri letne čase in štiri vogale vesolja. Tukaj so, da vas vodijo iz ene faze v drugo ter vnesejo ravnovesje in harmonijo na vaše potovanje.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Ko se v branju tarota pojavi karta Sveta, zažarite od občutka celovitosti, dosežka, izpolnjenosti in dokončanosti. Dolgoročni projekt, obdobje študija, razmerja ali kariere je zaokrožil in zdaj uživate v občutku zaključka in dosežka. Ta karta lahko predstavlja diplomo, poroko, rojstvo otroka ali doseganje dolgoletnih sanj ali želja. Končno ste dosegli svoj cilj ali namen. Vse se je združilo in vi ste na pravem mestu, delate pravo stvar, dosegate tisto, kar ste si zamislili. Počutiš se celega in popolnega.</p><p>Zdaj vas karta Svet vabi, da razmislite o svojem potovanju, počastite svoje dosežke in se uglasite v svojih duhovnih lekcijah. Praznujte svoje uspehe in uživajte v veselju, da ste uresničili svoje cilje. Vsi zmagovi in stiske na vaši poti so vas naredili v močno, modro, bolj izkušeno osebo, kot ste zdaj. Izrazite hvaležnost za to, kar ste ustvarili in pospravili. Končno poskrbite, da ne boste hiteli z naslednjim velikim projektom; praznovanje vaše poti vas bo pripravilo na uspeh, ko boste pripravljeni na naslednji izziv.</p><p>Če še niste dosegli te točke zaključka, ste zelo blizu! Morda boste še vedno potrebovali dodatno raven razumevanja, da boste diplomirali na višjo raven in uživali v resničnem uspehu. Poglejte nazaj na svoje pretekle izkušnje in priznajte, kako daleč ste prišli in kaj ste se na tej poti naučili. Morda vas bo presenetilo, če se ozrete nazaj na svoj napredek in vidite, koliko ste dosegli. Ta razmislek je lahko tudi tisto, kar potrebujete, da svoj projekt pripeljete do končne faze.</p><p>Če še vedno ostanejo ohlapni deli, vas Svetovna kartica prosi, da jih dokončate. S tem boste očistili prostor za nove začetke in priložnosti za nastajanje.</p><p>Bolj dobesedno, Svet lahko pomeni svetovno potovanje, zlasti v velikem obsegu. Morda boste imeli srečo, da se odpravite na šestmesečno potovanje v tujino ali pa delate, študirate ali živite v tujini dalj časa. Ta kartica krepi univerzalno razumevanje in globalno zavest, in našli boste novo spoštovanje do ljudi in kultur z vsega sveta.</p>',
                    besedePokoncna: 'Dokončanje, integracija, dosežek, potovanje, uspeh, praznovanje, konec cikla, premor pred novim, izpolnitev, popolnost, priznanje, čast, končni rezultat, večno življenje, zmagoslavje.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Svet obrnjen nakazuje, da iščete zaključek osebnega vprašanja. Morda ste še vedno čustveno navezani na preteklo razmerje in želite nadaljevati. Ali pa sanjate o dnevu, ko se boste lahko vtaknili v svoje stare skinny kavbojke, a se zdaj zavedate, da sta se vaša presnova in oblika telesa spremenili v zadnjih desetih letih. Globoko v sebi veste, da morate opustiti preteklost in iti naprej, če želite sprejeti in sprejeti to, kar ste zdaj. Iskanje zaključka je lahko intenzivno osebno potovanje – nekaj, kar obvladate z beleženjem, vizualizacijo, energijskim delom in terapijo.</p><p>Obrnjen svet lahko pomeni, da želite izpolniti velik cilj ali dokončati velik projekt, vendar ne naredite vseh korakov, potrebnih za dosego tega cilja. Lahko se odločite za najlažjo ali najhitrejšo pot za dosego cilja, vendar to ne bo pripeljalo do želenega rezultata. Plezanje na goro od spodaj navzgor je povsem drugačna izkušnja kot vožnja s helikopterjem na vrh, čeprav je cilj enak. Na tej poti morate doživeti preizkušnje in stiske, da se lahko učite in rastete. In ko boste dosegli svoj cilj, boste uživali v tako fantastičnem občutku dosežkov. Naj vas ne bo strah postaviti si dolge cilje, tudi če to pomeni prenašati stiske ali izzive na poti; bo zmaga še slajša.</p><p>Obrnjeni svet lahko nakazuje tudi čas, ko ste blizu zaključka projekta ali cilja, vendar iz kakršnega koli razloga izgubite fokus in na koncu opustite. Pred vami je le še kratka pot, zakaj bi se ustavili zdaj? Napolnite se z energijo in se spomnite, kako čudovito bo življenje, ko boste dobili stvar, ki ste si jo tako dolgo želeli.</p><p>Včasih lahko Obrnjen svet pomeni frustrirajočo zamudo pri dokončanju vaših projektov. Morda boste zamudili bistveni del in ne boste našli zaključka, dokler ga ne uredite. Morda boste morali postati bolj ustvarjalni, da ugotovite, kako se dotakniti ciljne črte.</p>',
                    besedeObrnjena: 'Iskanje osebnega zaključka, bližnjice, zamude, neizpolnjeno, nekaj manjka, nedokončanost, brez zaključka, razočaranje, pomanjkanje vizije.',

                    podnaslovMeditacija: "Meditacija",
                    opisMeditacija: "\"Nisem od tega sveta, ampak sem otrok onstranstva.<br>Moj dom je daleč in hrepenim po hiši svojega Očeta.<br>Naj upravičeno začnem pot nazaj.<br>Svoje fizične, čustvene, mentalne in intuitivne sposobnosti posvečam izvedbi velikega dela.<br>Naj čutila mojega telesa, občutki mojih čustev, misli mojega uma in vpogledi moje intuicije služijo velikemu delu.<br>Ni dela mene, ki ne bi bil božanski.<br>Odločam se, da bom vse dogodke v svojem življenju obravnaval kot del dialoga med menoj in Jazom.<br>Naj bo vsak del mojega bitja in vsako dejanje mojega življenja posvečeno namenu vrnitve v dom Božanskega.\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Poza",
                    opis: "Ženska se obrača tako proti opazovalcu kot stran od njega in je mirna in vznemirjena, napol oblečena in napol naga. Prepušča se toku in mi"
                },
                {
                    simbol: "Dve palici",
                    opis: 'Magik nosi eno palico ("Jaz"). Svet pa nosi dve ("Jaz" in "Ti"). Z dvema se lahko štirje elementi združijo (znamenje križa). V negativnem smislu pa pomenijo, da nedoslednosti ostajajo.'
                },
                {
                    simbol: "Rdeči pasovi",
                    opis: "Oba rdeča trakova sta znak neskončnosti. V pozitivnem smislu predstavljata ravnovesje, neskončnost, vitalnost. V negativnem smislu pa ponavljanje brez rasti in zrelosti."
                },
                {
                    simbol: "Zeleni venec",
                    opis: "Lovorjev venec in nagrobni venec. Kot nagrobni venec poudarja prostorske in časovne meje našega bivanja v tem življenju. Kot lovorjev venec pa pomeni trajen uspeh, ko se naučimo uporabljati ta okvir."
                },
                {
                    simbol: "Elipsa",
                    opis: "Elipsa nakazuje, da se ponovno povežemo z Božanskim v vsakem od nas, da ponovno odkrijemo svoje strasti, svojo vrednost, svojo moč in postanemo sprememba, ki jo iščemo."
                },
                {
                    simbol: "Šal",
                    opis: "Vsak vzpon v višave poteka po spiralnem stopnišču. Predstavlja tudi simbol za evolucijo, DNK, neskončno tkan pas. Je tudi znak osebnega razvoja ina prav tako predstavlja, da vas zemeljska prizadevanja ne obremenjujejo."
                },
                {
                    simbol: "Štirje elementi",
                    opis: "Angel, orel, bik in lev prav tako predstavljajo štiri elemente in nakazujejo na to, da ima vsak človek dostop do možnosti vseh štirih elementov. To kar on ali ona naredi iz njih tvori peti element - kvintesenca."
                },
                {
                    simbol: "Delna golota",
                    opis: "Opozorilo pred pomanjkanjem kulture. Podpira človekovo voljo, da se sooči z golo resnico. Predstavlja tudi rojstvo, poroko, smrt - bistvene točke v krogu življenja, ki so prav tako vedno povezane z goloto."
                },
                {
                    simbol: "Kot legenda Barbarosse",
                    opis: "Številne legende pripovedujejo o princesi ali velikanu, zaprtem v zemljo, v gori, ki se tam premetava in obrača v pričakovanju svoje izpustitve. Ta karta pomeni tudi to."
                },
                {
                    simbol: "Svet ženske",
                    opis: "Vsota števil XXI je III, kar predstavlja Cesarico. Med njima je 18 stopnic in XVIII je Luna - odrešitev med drugimi. Tako svet prikazuje tudi Cesarico, veliko Mati Zemljo, v stanju odrešitve."
                },
                {
                    simbol: "Angel, orel, bik in lev",
                    opis: "Angel simbolizira vodstvo in zaščito in element zraka. Orel simbolizira vizijo in moč in element vode. Bik simbolizira fizično in element zemlje. Lev pa simbolizira pogum in budnost in element ognja."
                },
            ],
            modrostiKarte: [
                {
                    modrost: "\"Vsi živimo s ciljem biti srečni; naša življenja so različna, a vendar enaka.\""
                },
                {
                    modrost: "\"Dosezi razsvetljenje, nato se vrni v ta svet običajnega človeštva.\""
                },
                {
                    modrost: "\"Celotno vesolje je le en ogromen simbol Božanskega.\""
                },
                {
                    modrost: "\"Dobri ljudje, ki vas obdajajo, so pravi dosežki; ne posesti.\""
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "DA",
                },
                {
                    ime: "Barve:",
                    vrednost: "Modra, vijolična, zelena",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "3",
                },
                {
                    ime: "Čakre:",
                    vrednost: "Muladhara",
                },
                {
                    ime: "Element:",
                    vrednost: "Zemlja",
                },
                {
                    ime: "Zodiak:",
                    vrednost: "Kozorog",
                },
                {
                    ime: "Planet:",
                    vrednost: "Saturn",
                },
                {
                    ime: "Čas:",
                    vrednost: "Počasi, dolgoročno"
                },
                {
                    ime: "Kristali:",
                    vrednost: "Hematit, črni turmalin, dimljeni kremen"
                },
                {
                    ime: "Telo:",
                    vrednost: "Dolgoživost, fizični simptomi iz preteklih življenj"
                }
            ],
            background: "bg",
        }
    }
}
