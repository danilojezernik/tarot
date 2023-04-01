export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "As mečev",
                    rekDesno: "Ukvarjajte se z zadevami pred sabo<br>Moč logike uma<br>Nehajte se zavajati",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>As meča prikazuje bleščečo roko, ki se pojavlja iz belega oblaka, predstavitev božanskega. Drži pokončen meč, ki simbolizira um in intelekt, na konici meča pa je krona, pokrita z vencem, znakom uspeha in zmage. Medtem ko je ta as znak zmage, nazobčane gore v ozadju nakazujejo, da bo pot pred vami zahtevna. Za krmarjenje po tej poti boste potrebovali duševno odpornost.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>As mečev označuje val nove energije iz intelektualnih področij. Morda ste na robu pomembnega preboja ali novega načina razmišljanja, ki vam omogoča, da na svet gledate z jasnimi očmi. Ali pa imate nenadno spoznanje ali zavestno razumevanje težave, ki vas je mučila, in lahko končno vidite pot pred seboj. Redno meditirajte, da se znebite miselnega klepetanja in kar najbolje izkoristite ta intelektualni potencial.</p><p>To karto glejte kot znak spodbude. Pravi, da je vaš um v "razširitvenem načinu". Odprti ste za sprejemanje novih idej, hrepenite po stimulaciji in poskočili boste ob naslednji priložnosti, da se naučite nekaj novega. Uspevate zaradi novih idej, navdiha, izvirnega razmišljanja in vizije ter ste navdušeni nad iskanjem novih priložnosti, ki temeljijo na vaših ustvarjalnih in intelektualnih sposobnostih.</p><p>Ko se As mečev pojavi v branju tarota, vam pove, da je zdaj odličen čas za začetek novega projekta – takega, ki zahteva vaš intelekt, komunikacijske sposobnosti in mentalno moč. Morda se boste počutili navdihnjene, da se udeležite tečaja pisanja, vadite svoje sposobnosti javnega nastopanja ali se vključite v dejavnosti, ki zahtevajo več možganske moči kot običajno.</p><p>Kako bi lahko črpali iz motivacije tega Asa in ukrepali pri svojih novih idejah? Kot As ste na začetku poti, vendar lahko zaznate, kako se energija kopiči, in komaj čakate, da začnete. Če boste to energijo usmerili v prave poteze, boste v svojih prizadevanjih uspešni. Ne pozabite le, da je pot pred vami lahko nerodna in lahko pričakujete izzive na njej. Ohranite miselnost o uspehu in z lahkoto boste premagali te ovire.</p><p>Kot pri vseh kartah mečev, As mečev predstavlja moč; vendar je meč dvorezno rezilo, kar pomeni, da lahko ustvarja in uničuje. Sporočilo je jasno: z močjo pride odgovornost. Od vas bo odvisno, kako boste izkoristili priložnost za dobro vseh in ne za sebično ali agresivno moč. Potrebovali boste močno srce in um in morali boste videti, kako najbolje uporabiti svojo moč za služenje drugim in sebi.</p><p>As mečev vas prav tako spodbuja k iskanju resnice o zadevi in ​​iskanju pravice. Lahko se zavzemate za kak cilj ali se zavzamete za svoje pravice ali pravice drugih. Lahko pa imate novo idejo, za katero ste se pripravljeni boriti, ali pa ste navdušeni nad temo, ki vas zanima, kot so človekove pravice. Situacija vam je zelo jasna in zdaj lahko z resnico in prepričanjem argumentirate svoje stališče. Z drugimi besedami, pripravljeni ste na boj.</p>',
                    besedePokoncna: 'Surova moč, zmaga, začetek zmage, sposobnost goreče ljubiti in sovražiti, lahko se rodi pogumen vodja, preboji, mentalna jasnost, nove ideje, uspeh.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Obrnjen As mečev pomeni, da se iz vas pojavlja nova ideja ali preboj, vendar tega še niste pripravljeni deliti z drugimi. Morda še vedno raziskujete, kaj ta ideja pomeni za vas in kako jo najbolje izraziti in manifestirati v zunanjem svetu. Morda boste želeli tudi večjo jasnost glede tega, ali je to ideja, ki ji želite bolj slediti, morda zato, ker niste prepričani, ali bo prinesla rezultate, ki si jih resnično želite. Ko se ta karta pojavi v branju tarota, je pomembno, da si daste čas in prostor za meditacijo in zbistrite svoj um, da lahko to idejo \'rodite\' na najbolj učinkovit način.</p><p>Včasih je obrnjen As mečev lahko signal, da imate idejo, ki se ne uresniči tako, kot ste upali, in čas je, da se vrnete k risalni deski. Morda še vedno sledite ideji, ki za vas nima več nobenega pomena. Ali pa imate na poti preveč idej in se ne morete zavezati enemu dejanju. Ta karta vas vabi, da porabite več časa za jasno opredelitev, kaj si želite v življenju. Zastavite si nekaj PAMETNIH ciljev (specifičnih, merljivih, dosegljivih, realističnih in časovno omejenih), da boste lahko jasno vedeli, za kaj si prizadevate. Osredotočite se na osnove in bolje načrtujte. Jasno določite svoje želje in cilje.</p><p>Obrnjen As mečev lahko nakazuje tudi zamegljeno presojo in pomanjkanje mentalne jasnosti glede določene situacije. Pogrešate ustrezne informacije ali dokaze, ki bi vam pomagali pri odločitvi, zato vložite svoj čas in energijo v iskanje resnice, namesto da stvari jemljete za samoumevne.</p>',
                    besedeObrnjena: 'Zmeda, kaos, pomanjkanje jasnosti, ponovno razmišljanje o ideji, zamegljena presoja, ovire, tiranija; previdnost pri poskušanju uporabite moči za doseganje konca.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Svojo resnico govorim s prepričanjem in močjo.\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Karta kot ogledalo",
                    opis: "Smo kot Meč. Oster intelekt je dvorezen. Človeštvo in njegova raven zavesti lahko predstavlja krono stvarstva, ne pa še vrhunec napredka."
                },
                {
                    simbol: "Modro-beli meč",
                    opis: "Občutek in neprilagodljivost, duhovnost in intelekt so vodilni vidiki meča. Naloga: prepoznati in obvladati njegov dvojni značaj. Da bi preprečili poškodbe in da bi zdravili, da bi olajšati težave."
                },
                {
                    simbol: "Roka, ki uhaja iz oblaka",
                    opis: "Meč je darilo za vas. Sami ste darilo – zase in za svet. Sprejmite to in naredite nekaj iz tega. Zgrabite ga, upravljajte z njim in pustite, da vaš intelekt zasije."
                },
                {
                    simbol: "Šest zlatih kapljic",
                    opis: "Božanska iskra, iskra zavesti – v verskem smislu Sveti Duh. Število 6 je tudi referenca na karto VI - Ljubimca: zgodba o izgubljenem raju in ponovno pridobljeni raj!"
                },
                {
                    simbol: "Sivo nebo",
                    opis: "Pozitivno: nevtralno, objektivno, uravnoteženo, brez predsodkov, pravično. Negativno: motno razmišljanje, nezavedno, apatično, brezizrazno."
                },
                {
                    simbol: "Zlata krona",
                    opis: "Vidimo štiri-krako krono: konica meča tvori peto, kar simbolizira kvintesenca – peta moč – duh, ki zdravi, je kvintesenca izkušnje, ki smo jih doživeli!"
                },
                {
                    simbol: "Vejice",
                    opis: "Negativno: odtujenost in uničenje. Meč ropa naravo. Pozitivno: povzdigovanje, kronanje in slavljenje narave skozi dar zavesti. Spoštovanje naših naravnih virov."
                },
                {
                    simbol: "Modro-vijolične gore",
                    opis: "Tukaj kažejo na abstrakcijo, miselni pregled. Negativno: teorija je pomembnejši od praktičnega počutja. Pozitivno: nihče ni palica v blatu, vendar je pripravljen videti drugo stran."
                },
                {
                    simbol: "Vrh",
                    opis: "Meja med nebesi in zemljo. Simbolni dom človeštva kot državljanov dveh svetov. Naloga: razjasnite svoje cilje v življenju, zavestno se odločite do katerega vrha želite priti."
                },
                {
                    simbol: "Višine / vzdušje",
                    opis: "\"V nebesih in na zemlji je več stvari, Horatio, kot jih lahko sanja tvoja filozofija.\" (William Shakespeare). Vsi asi nas spomnijo, da je dobra ideja spoznati ta vmesni svet – in to zmoremo!"
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
                    vrednost: "Zrak",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Dvojčka, tehtnica, vodnar",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Kether (Krona)",
                },
                {
                    ime: "Čas:",
                    vrednost: "December 22 - marec 20"
                }
            ],
        }
    }
}
