export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "Paž mečev",
                    rekDesno: "V toku s stvarmi<br>Pripravljen uresničiti svoje sanje<br>Imate, kar potrebujete",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>Paž mečev prikazuje mladeniča, ki stoji z mečem, obrnjenim navzgor proti nebu. Njegovo telo in meč se nagibata v eno smer, on pa gleda v drugo stran, kot da bi hotel videti, kaj se še dogaja okoli njega. Skozi mladeničeve lase pihlja vetrič in zdi se, da oblaki za njim drvijo po nebu in karti prinašajo dinamično energijo. Tla, na katerih stoji, so zelena in rodovitna, kar nakazuje, da bodo ideje Paža verjetno prinesle pozitivne spremembe in premik naprej.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Paž mečev je poln energije, strasti in entuziazma. Ko se ta karta pojavi v branju tarota, ste polni novih idej in načrtov za prihodnost. Morda ste navdušeni nad začetkom novega projekta, iskanjem novega pristopa ali učenjem česa novega. Imate toliko energije, da se počutite, kot da bi lahko naredili skoraj vse – in zmorete! Izziv pa je, ali ga lahko obdržite. Kot pri vseh straneh, je začetek vedno videti obetaven, vendar potrebujete nekaj drugega, da sledite in ohranite tempo.</p><p>Paž mečev se pogosto pojavi, ko raziskujete nov način razmišljanja – novo idejo, novo perspektivo, novo znanje ali novo tehniko. Imate radoveden um in žejo po znanju. Ko raziskujete ta svež način razmišljanja, postavljate veliko vprašanj in zbirate čim več informacij. Prav tako ste zelo v fazi raziskovanja in ne obvladovanja. Morda ste nagnjeni k napakam na poti, vendar vaša radovednost pomeni, da se želite učiti iz svojih spodrsljajev.</p><p>Ker so meči povezani s komunikacijo, Paž mečev predlaga, da raziskujete drugačen način izražanja sebe z drugimi in sporočanja svojih idej in mnenj. Morda vas bo pritegnilo javno nastopanje, pisanje knjige ali spletnega dnevnika, ustvarjanje podcasta ali več glasnosti na družbenih omrežjih. Ste naravni komunikator in pripravljeni narediti naslednji korak, da svoje sporočilo delite s svetom. Še enkrat, to je raziskovalna faza, zato bodite odprti za nove načine izražanja in odkrivanja vaših notranjih talentov.</p><p>Če iščete znak, da nadaljujete z novim projektom, Paž mečev pravi: "Izvolite!" Vedno bodo izzivi, ne glede na način, ki ga izberete, in ne bodo vsi navdušeni nad vašimi odločitvami, toda ko pride do tega, morate slediti svojim strastem in iti tja, kjer leži vaša prava energija. Ta Paž vas spodbuja, da se premaknete naprej in poženete kolesje v pogon, kljub kakršnim koli izzivom ali neuspehom, ki bi lahko stali na poti.</p><p>Paž mečev lahko predstavlja tudi vaš odnos z osebo, ki raziskuje svojo sposobnost komuniciranja, izmenjave idej in zbiranja informacij. Morda boste imeli svoje trenutke s tem Pažem, saj meči pogosto izražajo stopnjo napetosti ali konflikta in ta skupek energije se lahko včasih izkaže za prevelikega, da bi ga lahko obvladali. Če je potrebno, si privoščite oddih od te osebe in se vrnite s svežimi očmi. Imajo veliko za deliti z vami in kljub svoji neizkušenosti vas lahko naučijo nekaj o sebi. Morate ostati odprti za njihov entuziazem, če želite izvedeti več o svetu.</p>',
                    besedePokoncna: 'Nove ideje, radovednost, želja po znanju, novi načini komuniciranja, spretnost, milost, diplomacija, razumevanje, razburljivo sporočilo, mentalna agilnost, uporablja svojo glavo, resnicoljuben, neposreden.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Obrnjen Paž mečev se lahko pojavi v branju tarota, ko se zadržujete pri izražanju svoje resnice, zlasti na javnem forumu. Svoje misli in mnenja raje izražate zasebno ali anonimno. Morda radi vodite zasebni dnevnik ali pa pišete knjigo samo zase in za nikogar drugega. Ali pa imate stališče o javnem vprašanju, vendar niste opredelili svojega sporočila. Če potrebujete malo spodbude, da objavite svoje ideje in mnenja, je obrnjen Paž mečev morda to. Opustite strah in širite svoje sporočilo na ves glas!</p><p>Včasih lahko obrnjen Paž mečev pomeni, da samo govorite in ne ukrepate. Bodite previdni pri obljubah, za katere veste, da jih ne boste mogli izpolniti, ali pri besedah, ki jih boste pozneje obžalovali. Preden daste določeno obljubo ali zavezo, se prepričajte, da jo lahko in boste izpolnili, da ohranite svojo integriteto in ugled. Prav tako bodite previdni glede zavez drugih ljudi do vas in uvedite ukrepe za zagotovitev, da bodo izpolnili, kar obljubijo. Ta obrnjen Paž je lahko "vseved" in vas lahko poskuša impresionirati z velikimi zgodbami o svoji preteklosti in dosežkih (za katere pozneje ugotovite, da so v resnici velika pretiravanja).</p><p>Obrnjen Paž mečev lahko tudi nakazuje, da delujete prenagljeno, ne da bi dobro premislili. Za seboj imate veliko energije, a je ne uporabljate učinkovito. Lotite se stvari eno za drugim, namesto da poskušate upravljati vse naenkrat. S tem boste dosegli večje rezultate.</p><p>Ker ta Paž rad postavlja VELIKO vprašanj, je lahko obrnjena karta znak, da motite druge s svojim nenehnim spraševanjem in izzivanjem idej. Čeprav morda samo poskušate bolje razumeti situacijo ali koncept, obstajajo bolj konstruktivni in nenevarni načini za to. Uporabite stavke, kot je: "Pomagaj mi razumeti..." Zavedajte se, kako se lahko križate z drugimi, in izpodbijajte ali postavljajte pod vprašaja samo tistih idej ali tem, ki so vam pomembne.</p>',
                    besedeObrnjena: 'Samo-izražanje, samo govorjenje in nič dejanj, naključno delovanje, naglica, zvita oseba, prevara, slabo zdravje, nepričakovani dogodki, preveč misli, preveč motenj, ogovarjanje.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Resnica je moje orožje.\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Poza",
                    opis: "Tudi paž popolnoma obvlada meč, orožje uma. Ena noga je trdno na tleh, druga pa skoraj visi v zraku. Gleda v veter in se obrača z njim, bodisi drži meč zadaj ali pa namerava udariti."
                },
                {
                    simbol: "Nebo / oblaki",
                    opis: "Nebo se jasni in veter odganja oblake. Torej je tudi lik predstavnik dihanja svežega zraka in intelektualne razjasnitve."
                },
                {
                    simbol: "Noga na kateri stoji / prosta noga",
                    opis: "Pozitivno: menjavanje igre in delavnosti, lahkotno jemanje in vztrajnost. Negativno: neodločnost, zapletanje in spogledljivost."
                },
                {
                    simbol: "Meč je večji od podobe",
                    opis: "Veliki meč presega meje podobe. Pozitivno: razumemo stvari daleč onkraj lastnega obzorja. Negativno: ne vemo, kaj smo izpustili (\"Čarovnikov vajenec\")."
                },
                {
                    simbol: "Rdeči škornji",
                    opis: "Negativno: vročina, fanatizem. Pozitivno: moč volje, podjetnost."
                },
                {
                    simbol: "Vijolično oblačilo",
                    opis: "Vijolična označuje eno od meja vidne svetlobe (poleg ultravijoličnega sevanja, nevidna). Pozitivno: mejni duh. Negativno: pomanjkanje spoštovanja, kršitev meja."
                },
                {
                    simbol: "Rumeno-zelena pokrajina",
                    opis: "Zelena: rast, narava, naravnost, svežina, upanje, postopen razvoj. Malo zelene: iskanje smisla, a tudi zavist. Zlato, a tudi pohlep."
                },
                {
                    simbol: "Modre gore",
                    opis: "\"Duhovna pokrajina\": potrebni so vsi deli prizora — hribi, doline, blizu in daleč. Tako uspe tisto, kar nakazujejo modre gore: poroka med nebom in zemljo, željo in resničnostjo."
                },
                {
                    simbol: "Jata ptic",
                    opis: "Pozitivno: viharjenje možganov, kreativno in večplastno razmišljanje. Negativno: malikovanje, odsotnost, zanemarjanje, pomanjkanje osredotočenosti."
                },
                {
                    simbol: "Svetlo modro nebo",
                    opis: "Nebesa = božansko kraljestvo in kraljestvo volje. Svetlo modra = (odprto) nebo; čista voda. Pozitivno: lahkotnost, duhovno veselje, namen volje, luciden um. Negativno: pretirano občudovanje, pobožne želje."
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "DA",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "11",
                },
                {
                    ime: "Element:",
                    vrednost: "Zemlja zraka",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Dvojčka, tehtnica, vodnar",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Malkuth (Kraljestvo)",
                },
                {
                    ime: "Čas:",
                    vrednost: "Se zgodi, še preden ste pripravljeni"
                }
            ],
        }
    }
}
