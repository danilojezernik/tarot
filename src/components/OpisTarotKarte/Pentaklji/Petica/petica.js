export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "Petica pentakljev",
                    rekDesno: "Temna noč duše<br>Najbolj temno pred zoro<br>Pustiti zunaj na hladnem",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>V Petici pentakljev dva hodita skozi ledeni veter in sneg; oba sta revna in živita v revščini. En moški je poškodovan in na berglah, drugi pa je bos in ima le tanko odejo, ki ga ščiti pred mračnim zimskim vremenom. Za njimi stoji cerkev z razsvetljavo in izžarevanjem topline, simbol upanja, vere in duhovne podpore. Ker pa sta človeka tako osredotočena na svojo stisko, ne vidita, da jima je pomoč na voljo, in nadaljujeta svojo obupano pot.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Petica pentakljev je karta finančne izgube in revščine. Zadeli ste težke čase, zlasti ko gre za vaše delo, kariero, finance in materialne dobrine. Morda ste pred kratkim izgubili službo, dom ali finančno varnost. Ne počutite se več varnega, ker vam je bilo vse odvzeto z enim udarcem. Tudi vaš ego je lahko prizadet, zlasti ker je uspeh pogosto povezan s finančnim bogastvom; izguba enega ali drugega je lahko ponižujoč udarec za vašo samozavest in občutek lastne vrednosti. Dobra stran je, da je to karta male arkane z začasnimi učinki (namesto karte velike arkane, ki ima dolgoročnejši učinek). Tudi to bo minilo.</p><p>V tem času stiske Petica pentakljev nakazuje, da se počutite izolirani in sami. Počutite se tako kot dve osebi na karti, kot da bi vas pustili na hladnem. Morda se sprašujete: "Zakaj mi nihče ne pride pomagati!?" Morda se zdi, kot da nikomur ni več mar. Ker pa so okna v cerkvi razsvetljena, je pomoč blizu; vendar ste preveč osredotočeni na svoje težave, da bi jih opazili. Morda čakate na nekoga, ki vam bo prišel pomagat, ko pa morate biti v resnici proaktivni in prositi za pomoč. Morate pogoltniti svoj ponos ali opustiti strah pred zavrnitvijo. Ljudje so tukaj, da vas podpirajo. Poiščite jih in jim sporočite, da jih potrebujete.</p><p>Včasih Petica pentakljev poudarja "pomanjkanje miselnosti". Sabotirate svojo sposobnost ustvarjanja obilja, ker se osredotočate le na tisto, kar vam primanjkuje. Vse kar lahko vidite je, kaj gre narobe. Če želite preusmeriti to energijo, poiščite dokaze o tem, kaj imate, tudi če so zelo majhni ali na videz nepomembni, in izrazite svojo hvaležnost za te blagoslove v svojem življenju. Sčasoma bodo pozitivni vidiki še naprej rasli in kmalu bosta "pomanjkanje" in "ne imeti" stvar preteklosti.</p><p>Podobno Petica pentakljev nakazuje, da se bojite, da nimate "dovolj" ali da lahko izgubite nekaj za vas pomembnega - tudi če se to še ni zgodilo ali je malo verjetno. Na primer, lahko živite v strahu, da boste izgubili službo in boste ostali na ulici brez doma in podpore. Če ostanete osredotočeni na vse negativne stvari, ki se lahko zgodijo, potem bodite previdni, saj lahko vaše manifestne moči začnejo ustvarjati rezultate, ki si jih ne želite. Namesto tega preusmerite svojo pozornost na to, kar imate zdaj in kaj želite v prihodnosti, tako da se bodo vaše manifestne moči uporabile za vedno.</p>',
                    besedePokoncna: 'Finančna izguba, finančna stiska, potencialno obdobje slabe sreče, neuspeh, revščina, pomanjkanje miselnosti, izolacija, zaskrbljenost, osamljenost, izguba imetja, slabo zdravje, obup zaradi duhovne obubožanosti.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Obrnjena Petica pentakljev nakazuje konec težkih časov, zlasti če ste pred kratkim utrpeli velik finančni udar ali izgubo službe. Morda boste našli nove vire dohodka, novo službo ali pa vam je nekdo ponudil pomoč, ko se boste postavili na noge. Morda se začenjate počutiti, kot da je življenje vredno življenja in ponovno pridobili samozavest. Končno lahko vidite izhod iz svojih finančnih težav in vaše upanje je obnovljeno.</p><p>Obrnjena Petica pentakljev lahko včasih osvetli vztrajnost notranje, duhovne revščine. Morda se vam zdi, da nekaj manjka ali da ni na svojem mestu, vendar se trudite ugotoviti, kaj bi to lahko bilo. Lahko se tudi počutite osamljene, tudi če ste v družbi številnih ljudi. Ob globljem premisleku boste morda ugotovili, da ste preveč poudarjali svoje materialno bogastvo in zanemarili svoje duhovno blagostanje.</p><p>Morda vas skrbi, da nimate "dovolj", zlasti ko gre za denar in materialne dobrine, in da niste vredni, ker niste premožni. Morda menite, da si ne zaslužite dragih, luksuznih predmetov ali da si ne morete privoščiti stvari, ki si jih resnično želite. Morda vas skrbi, da če denar zapravite zdaj, ga ne boste imeli dovolj za pozneje. Ali pa morda svoj denar zapravljate za nepomembne stvari in vam ostane malo za tisto, kar si resnično želite. Kakor koli že, ta negativni cikel vas bo le pripeljal do tega, da se boste počutili še bolj duhovno neizpolnjene in "prazne". Kako se lahko rešiš iz tega?</p><p>Če ugotovite, da vaša fiksacija na materialne stvari povzroča škodo vašemu duhu in vaši miselnosti, potem je čas, da prenehate. Tudi če imate le nekaj centov na svoje ime, imate morda še vedno ljubečo družino ali utripajoče srce. Da, morda so trenutno stvari zanič, toda če v svojih mislih slišite miselnost o revščini, se za trenutek ustavite in se vprašajte, ali je "tega si ne morem privoščiti" resnica ali omejujoče prepričanje. Zaupajte, da je vesolje tukaj, da vas finančno podpira, še posebej, ko sledite svojemu klicu in svojemu duševnemu namenu. Ko nekaj resnično cenite, boste to tudi uresničili.</p>',
                    besedeObrnjena: 'Okrevanje po finančni izgubi, duhovna revščina, zaposlitev, obujen pogum, novo zanimanje, pozitivna sprememba, premagovanje stiske, sreča.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Lahko prebrodim to.\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Karta kot ogledalo",
                    opis: "Ta karta zagotovo ni avtomatično karta stiske in nesreče - je tudi srečna, saj (med drugim) pomeni premagovanje vseh vrst stisk in polnost vsega, kar nam je drago."
                },
                {
                    simbol: "Slepec in hroma oseba I",
                    opis: "Stara zgodba o slepcu in hromcu, ki sta združila svoje vire, se natančno prilega temu prizoru. Združeni vztrajamo — in najhujše težave so rešene."
                },
                {
                    simbol: "Lajšanje potreb",
                    opis: "Slepota in šepavost predstavljata kakršno koli invalidnost ali težavo. Največja potreba je olajšana (na primer s palico pri hromi osebi). Splošno sporočilo kartice je torej: obravnavajte svoje potrebe, upoštevajte, kaj potrebujete."
                },
                {
                    simbol: "Slepec in hroma oseba II",
                    opis: "Glavni pomen je v njunem sodelovanju. Kot dodatek: sprejemanje naše drugačnosti. Vsak se lahko razvija in išče izpolnitev na svoj način."
                },
                {
                    simbol: "Bergle",
                    opis: "Na eni strani nazorno poudarjanje težke situacije, potreba po tem kar potrebuje je prisotna ali pa je že presežena. Toda bergle so tudi znak, da obstaja rešitev problema, na voljo sta pomoč in podpora."
                },
                {
                    simbol: "Kužni zvon okoli vratu",
                    opis: "Izobčenci so morali nositi takšen zvon, da so druge ljudi opozorili na nevarnost okužbe. Toda zvonec ima tudi pozitiven vidik: Tukaj sem, izjemen človek. Vsaka kriza je tudi priložnost."
                },
                {
                    simbol: "Bela tla",
                    opis: "Očitno: sneg, led in mraz. Pozitivno: opomnik, da je treba nekaj razjasniti, razčistiti, zaceliti in obnoviti stvari med seboj in drugimi ali samo zase. Opozorilo pred neutemeljenim (ne)ravnanjem."
                },
                {
                    simbol: "Snežinke / črna stena",
                    opis: "Očitno: sneg, led in mraz. Simbolično tudi za zamegljen kontrast med črno in belo, stene, ki postanejo prepustne, prozorne: znotraj in zunaj sta dve plati istega kovanca."
                },
                {
                    simbol: "Luč sveti v temi",
                    opis: "Svetloba, toplina, bogastvo na eni strani, tema, mraz, revščina na drugi. Gre za vpletenost in sprejemanje deleža odgovornosti, notranjih in zunanjih stisk drugih ljudi ter vaših."
                },
                {
                    simbol: "Pet pentakljev kot kvintesenca",
                    opis: "Največji talenti so koristni le, če koristijo drugim, in kjer je potreba največja, sta pomoč in podpora najbolj dragoceni. Pomoč drugim in pomoč sebi kot komplementarni par."
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
                    vrednost: "Zemlja",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Merkur v biku",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Geburah (Resnost, moč)",
                },
                {
                    ime: "Čas:",
                    vrednost: "April 21 - april 30"
                }
            ],
        }
    }
}
