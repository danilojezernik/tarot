export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "Vitez mečev",
                    rekDesno: "S polno hitrostjo naprej<br>Prihajajo velike spremembe<br>Hitro razmišljanje je pri roki",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>Vitez mečev prikazuje viteza v oklepu, ki z veliko energije drvi naprej na svojem močnem belem konju. Vitezov meč je visoko dvignjen, simbol njegove predanosti svojemu namenu in poslanstvu. Beli konj simbolizira čistost intelektualne energije, ki motivira viteza. V ozadju se začnejo delati nevihtni oblaki, drevesa pa se upogibajo v močnem vetru. Veter pa viteza ne ustavi; odpravi se naravnost vanj, nestrpen, da bi dokončal svojo nalogo.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Kot pri vseh vitezih tarota je tudi Vitez mečev oseba na misiji – ko se nekaj odloči, ga nič ne ustavi. Kot karta mečev ta vitez aktivno uporablja moč svojega intelekta za dosego svojih ciljev.</p><p>Ko se Vitez mečev pojavi v branju tarota, je to znak, da ste zelo zagnani, ambiciozni in usmerjeni v akcijo. Ste tako močno motivirani za uspeh, da se ne boste ustavili pred ničemer, da bi sledili svojim sanjam. Izzivi, težave in ovire na poti vas ne motijo, saj veste, kam želite. Naprej s čisto močjo in odločnostjo, da se stvari zgodijo.</p><p>Vitez mečev predlaga, da ste hitri pri ukrepanju in da ne načrtujete vnaprej, temveč se raje takoj potopite. Uspevate na visoki ravni energije, ki vas žene naprej in vas navdihuje, da ukrepate za uresničitev svojih ciljev.</p><p>Vitez mečev vas opominja, da morate odločno doseči, kar želite. Ne čaka in ne čaka, da se kaj zgodi. Vedno naredi prvi korak in aktivno sledi svojim ciljem. To energijo lahko izkoristite tudi v svojem življenju, če ste proaktivni in napredno misleči. Vidite se kot kreatorja svoje prihodnosti in bodite pripravljeni sprejeti potrebne korake, da to uresničite.</p><p>Slaba stran hitro razmišljajočega in hitro delujočega Viteza mečev je, da včasih ukrepate prehitro in niste temeljito premislili stvari. Morda se ne zavedate potencialnih izzivov in težav, ki vas bodo ovirale, ali nenamernih posledic vaših dejanj. Morda ste nagnjeni k prehitevanju stvari ali omejevanju, da bi opravili delo. Ali pa si lahko prizadevate za določen cilj in mislite, da je to tisto, kar želite, vendar pozneje ugotovite, da ni usklajen ali da je v slepi ulici. Včasih lahko malo načrtovanja in priprav zelo pomaga.</p><p>Vitez mečev predstavlja tudi vašo potrebo po razumevanju sveta z intelektualnega vidika. Imate dobro razvite komunikacijske sposobnosti in zlahka oblikujete trdne argumente in mnenja o aktualnih zadevah in pomembnih zadevah. Radi sodelujete z drugimi, ki imajo podobne sposobnosti, da lahko delite svoje ideje in razvijete nova stališča. Morda ste najbolj primerni za razpravne skupine s podobno mislečimi posamezniki, kjer se lahko medsebojno podžigate in motivirate.</p>',
                    besedePokoncna: 'Ambiciozen, odločen, drzen, usmerjen v akcijo, usmerjen k uspehu, hitro misleč, brezglavo hitenje v življenje, močan človek, pogum, spretna in pametna oseba, nepričakovan prihod ali konec neke zadeve.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Obrnjen Vitez mečev se lahko pojavi v branju tarota, ko ste polni energije in motivacije, vendar te energije ne morete učinkovito usmeriti in sprostiti. Postajate nemirni in razočarani, ker želite ukrepati, vendar vas nekaj ovira. Morda čas ni pravi, nimate dovolj sredstev ali se zanašate na nekoga drugega, ki ni pripravljen. Najti morate alternativne načine za sprostitev te energije. V nasprotnem primeru boste počili.</p><p>Podobno obrnjen Vitez mečev nakazuje, da nimate dovolj smeri in da sprejemate nepremišljene in impulzivne odločitve, s čimer potegnete druge za sabo. Vaše misli so razpršene in nenehno si premišljate. Če vodite druge, je to lahko zelo zmedeno in frustrirajoče za vse vpletene. Tudi če delate sami, boste morda ugotovili, da vaš moteči "opičji um" ovira vaš splošni uspeh. Morda boste morali uporabiti en fokus; izberite idejo in se je nato držite, dokler ni dokončana. Potrebna bo miselna disciplina, da se bo končalo – ste kos nalogi?</p><p>Obrnjen Vitez mečev lahko tudi nakazuje, da morate upočasniti; v nasprotnem primeru tvegate hudo izgorelost in izčrpanost. Želite sodelovati pri vsem, a vam zaradi te potepuške energije nič ne uspe. Kot taki dosežete zelo malo in ste iz dneva v dan bolj utrujeni. Vzemite si čas, da se najprej prizemljite, zberete misli in se osredotočite le na glavne prioritete.</p><p>Končno, obrnjen Vitez mečev nakazuje, da morate iti naprej sami, če želite pridobiti dragocene življenjske izkušnje in zrelost. Ko iščete svobodo in neodvisnost, je verjetno, da boste na svoji poti delali napake zaradi svoje nepremišljene in nepotrpežljive narave, vendar je vse to del potovanja.</p>',
                    besedeObrnjena: 'Nemiren, neosredotočen, razpršene misli, impulziven, izgorel, tiranija, povzročitelj težav, pretkana in skrivnostna oseba, jemanje kredita pri "drugih", neupoštevanje posledic.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Govorim svojo resnico, vendar še vedno spoštujem resnico drugih ljudi.\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Poza",
                    opis: "Visoka osebnost, ki drvi v levo (z vidika opazovalca) z visoko dvignjenim mečem - torej v področje podzavesti."
                },
                {
                    simbol: "Oklep",
                    opis: "Dobro je opremljen za spopad: ali se bori proti podzavesti, kar ga bo spremenilo v fanatika ali pa je radikalec: dobesedno tisti, ki išče svoje korene in jih hiti najti."
                },
                {
                    simbol: "Konj in jezdec",
                    opis: "Siv konj svari pred brezbrižnostjo do instinktov, telesa in njegovih vzgibov. Ali: pomaga nam sprejeti držo zavestne nevtralnosti, ko gre za racionalno razprava o nagonih."
                },
                {
                    simbol: "Metulji",
                    opis: "Lahkotnost. Tudi: metafora za dušo (dih življenja, psiha). Simbol za uspešno preobrazbo iz gosenice v metulja: od navadne osebe do zavedanja in vitalnosti."
                },
                {
                    simbol: "Rdeče ptice",
                    opis: "Pozitivno: strastne misli, visokoleteči cilji. Negativno: opozorilo pred lažno vnemo in ljubeznijo (rdeča), ki človeka zaslepi."
                },
                {
                    simbol: "Proti vetru",
                    opis: "Ta vitez juriša proti vetru: On kljubuje (starim) močem, ustvarja svoj lasten svež zrak. Pozitivno: mentalna gibčnost, navdušenje dobi krila. Negativno: fanatizem, radikalizem."
                },
                {
                    simbol: "Meč je večji od podobe",
                    opis: "Veliki meč presega meje podobe. Pozitivno: razumemo stvari daleč onkraj lastnega obzorja. Negativno: ne vemo, kaj smo izpustili (\"Čarovnikov vajenec\")."
                },
                {
                    simbol: "Rdeče perje / rdeča tkanina",
                    opis: "Temno rdeča, globoka čustva, visoka strast! Pozitivno: velika ljubezen, ki premaga velike stvari! Negativno: opozorilo pred nezavestnimi čustvi, ki vas lahko speljejo s poti."
                },
                {
                    simbol: "Široko odprto polje",
                    opis: "Prikazano skoraj brez vegetacije: opozorilo pred odtujenostjo od Zemlje. Naloga: počastiti in pokloniti stvarstvu z uporabo meča, orožja intelekta (glejte As meča)."
                },
                {
                    simbol: "Pet ptic",
                    opis: "Pozitivno: večplasten in najpomembnejši um. Negativno: pomanjkanje enotnosti, pomanjkanje skladnosti."
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "DA",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "12",
                },
                {
                    ime: "Element:",
                    vrednost: "Zrak zraka",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Vodnar",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Tiphareth (Lepota, Harmonija)",
                },
                {
                    ime: "Čas:",
                    vrednost: "Zima, poletje"
                }
            ],
        }
    }
}
