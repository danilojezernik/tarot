export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "Dvojka Palic",
                    rekDesno: "Naprej z idejami<br>Sprememba v življenjskem slogu<br>Volja vas žene",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>Dvojica palic prikazuje moškega, oblečenega v rdečo obleko s klobukom, kateri drži majhen globus. Svet je dobesedno v njegovih rokah, kar označuje, da je pred njim ogromen potencial, če pravilno razširi svoja obzorja. Stoji v mejah svojega gradu in nakazuje, da medtem ko razmišlja o pomembnih priložnostih, on še vedno ni zapustil svojega območja udobja, da bi sledil ciljem; je še v fazi načrtovanja. Njegova roka počiva na pokončni palici, druga palica pa je pritrjena na grajsko steno, kar nakazuje na to, da še vedno ni pripravljen na odhod. V ozadju je zemlja rodovitna, a tudi kamnita, kar obljublja, da ima dobre možnosti za uspeh, če le lahko premaga izzive, ki se bodo pojavili.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Dvojka palic vzame iskrico navdiha iz asa palic in jo spremeni v jasen načrt. Šli ste skozi fazo odkrivanja in veste, kaj želite manifestirati – zdaj morate ugotoviti, kako. Raziskujete svoje možnosti in skrbno načrtujete prihodnjo pot ter upoštevate vse možnosti in potencialne izzive. Odprti ste za rast in raziskovanje novih ozemelj, dokler ohranjate stopnjo gotovosti, da se bodo vaša prizadevanja na koncu obnesla.</p><p>Ko se dvojka palic pojavi v branju tarota, še niste pripravljeni na potezo – bolj pomembno je, da pred nadaljevanjem pripravite jasen načrt. Ta karta je tudi odkrivanje, zlasti ko stopite izven svojega območja udobja in raziskujete nove svetove. Morda boste potrebovali pogum, da se odpravite na pot, vendar vam ta karta daje samozavest in samospoznanje. Veste, kaj je vaš cilj in ste prepričani v njegovo morebitno izpolnitev. Naj vas vodita intuicija in strast, ko potrdite svoje naslednje korake.</p><p>Dvojka palic pomeni, da razmišljate o svojih dolgoročnih ciljih in željah ter ste pripravljeni načrtovati, kaj morate storiti, da jih dosežete. Tako daleč ste že prišli in zdaj se počutite pripravljeni na spremembo – tokrat z mislijo na svojo dolgoročno prihodnost. Morda razmišljate o potovanju v tujino, nadaljnjem izobraževanju ali pomembni zamenjavi kariere, da bi razširili svoja obzorja izven svojega neposrednega okolja. S skrbnim načrtovanjem in zmernim pristopom si boste zagotovili uspeh.</p><p>Dvojke v tarotu pogosto predstavljajo neke vrste odločitve. Pri teh se lahko odločite, ali boste vztrajali pri tem, kar veste, ali boste tvegali. Razumete, da vam svet lahko ponudi nekaj večjega ali pomembnejšega, vendar se tudi zavedate, da morate zapustiti svoja znana področja, da izkoristite to priložnost. Čeprav ste že veliko vložili v svoje trenutne okoliščine, je nujno, da stopite ven in raziščete svoje možnosti.</p>',
                    besedePokoncna: 'Načrtovanje prihodnosti, napredek, odločitve, odkritja, prijazna in velikodušna oseba, zanimanje za znanost, potrpežljivost, ustvarjalne sposobnosti, dobre stvari, ki prihajajo.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Obrnjena dvojka palic vas spodbuja, da svojo pozornost usmerite navznoter in se osredotočite na svoje osebne cilje. Razmislite, kaj je za vas resnično pomembno in kaj vas razsvetli. Morda ste se usmerili v eno smer, a ste ugotovili, da ni v popolni usklajenosti z vašimi globljimi vrednotami in namenom. Ta karta vas vabi, da se vrnete k načrtovanju in se ponovno povežete s svojimi sanjami in ambicijami, nato pa naredite potrebne prilagoditve na svoji poti naprej.</p><p>Včasih obrnjena dvojka palic lahko pomeni, da imate plodno idejo, vendar nimate jasne strategije, da bi jo premaknili naprej. Posledično delate naključno in neučinkovito ter ne dosežete želenega cilja tako hitro, kot bi želeli. Kot pravi francoski pesnik Antoine de Saint-Exupéry: "Cilj brez načrta je le želja," zato poskrbite, da boste imeli jasen načrt za uresničitev svojih ciljev. Vrnite se k svojemu prvotnemu namenu ter energiji in navdušenju, ki ste ju čutili na začetku. Naj vas vodijo do naslednjega koraka.</p><p>Če ste na razpotju, katero smer ubrati, da bi izpolnili svoje sanje, se vprašajte: Kaj si pravzaprav želim? In kaj mi preprečuje, da bi to dosegel? Morda ste se odločili za lažjo pot, v resnici pa je tista težja najboljša možnost za rast.</p><p>Podobno lahko obrnjena dvojka palic poudari, da kljub ogromnemu potencialu neradi stopite na neznana ozemlja, namesto tega raje vztrajate pri tem, kar veste. Morda ste "velika riba v majhnem ribniku" in uživate v občutku uspeha v tem varnem okolju. Ponovno se povežite s svojo vizijo in zakaj ste tukaj ter vedite, da boste morali raziskati nova področja, da boste dosegli najvišjo raven.</p>',
                    besedeObrnjena: 'Osebni cilji, notranja usklajenost, strah pred neznanim, pomanjkanje načrtovanja, svetujemo previdnost pred nepotrpežljivostjo, možna prevlada drugih.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Jaz obvladujem svoj svet!\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Poza",
                    opis: "Dve palici odražata pomembne energije, nagone ali plamene – nasprotja v vas ali med vami in svetom. Tiste, ki jih je treba ločiti drug od drugega in tiste, ki jih je treba uskladiti."
                },
                {
                    simbol: "Dve palici",
                    opis: "Osnovne zadeve na področju volje in nagonov, npr. načelo ugodja / a občutek dolžnosti, poklic / družina, samoodločnost / predanost - dve osebi enega ljubiš, dve poti, po katerih lahko hodiš..."
                },
                {
                    simbol: "Globus",
                    opis: "Žoga je na vašem igrišču! Opazujte, kako se stvari ujemajo v svetu, poskusite to dojeti. Opozorilo: vsega ne morete meriti z istim merilom. Model kaže le del resnice."
                },
                {
                    simbol: "Vodno prostranstvo",
                    opis: "Mislite globalno – delujte lokalno! Obala v ozadju predstavlja ogromne (oceanski) občutke in naša povezanost z vsem in da ne obstanemo z enostranskim pogledom na stvari (da ne upoštevamo samo eno palico)."
                },
                {
                    simbol: "Pokrajina / velik zaliv",
                    opis: "Po drugi strani pa je treba razpoložljive energije uporabljati previdno. Človek mora poznati obe strani (palice) in se potem jasno odločiti za pot naprej."
                },
                {
                    simbol: "Modra gora",
                    opis: "Gledano kot duhovna pokrajina, ozadje kaže, da ima vse svoje mesto — višave, doline, blizu in daleč. Skrivnost poroke nebes in zemlje – upanje in resničnost – simbolizirana modra gora."
                },
                {
                    simbol: "Obzidje",
                    opis: "Visoka izhodiščna točka, pregled, nadzor, oblast, mirnost, ravnodušnost — do sebe ali drugih, odvisno od primera. Iskati, najti in zavzeti svoje mesto v svetu."
                },
                {
                    simbol: "Križ, lilija in vrtnica",
                    opis: "Pokažite tri klasične barve alkimije: od grobega materiala (črna) preko čiščenja/utekočinjenja (bela) do eteričnega/višje energijskega materiala (rdeča). Preoblikovanje energije, spretno obvladovanje nalog."
                },
                {
                    simbol: "Oblačilo",
                    opis: "Pokažite tri klasične barve alkimije: od grobega materiala (črna) preko čiščenja/utekočinjenja (bela) do eteričnega/višje energijskega materiala (rdeča). Preoblikovanje energije, spretno obvladovanje nalog."
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "DA",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "2",
                },
                {
                    ime: "Element:",
                    vrednost: "Ogenj",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Mars v Ovnu ",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Chokmah (Modrost)",
                },
                {
                    ime: "Čas:",
                    vrednost: "od 21 do 30 marca"
                }
            ],
        }
    }
}
