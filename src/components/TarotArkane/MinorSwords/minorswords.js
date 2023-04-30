import ace from '@/assets/swords/ace-of-swords.png'
import two from '@/assets/swords/two-of-swords.png'
import three from '@/assets/swords/three-of-swords.png'
import four from '@/assets/swords/four-of-swords.png'
import five from '@/assets/swords/five-of-swords.png'
import six from '@/assets/swords/six-of-swords.png'
import seven from '@/assets/swords/seven-of-swords.png'
import eight from '@/assets/swords/eight-of-swords.png'
import nine from '@/assets/swords/nine-of-swords.png'
import ten from '@/assets/swords/ten-of-swords.png'
import page from '@/assets/swords/page-of-swords.png'
import knight from '@/assets/swords/knight-of-swords.png'
import queen from '@/assets/swords/queen-of-swords.png'
import king from '@/assets/swords/king-of-swords.png'

export default {
    data () {
        return {
            meci: [
                {
                    id: 1,
                    ime: "As mečev",
                    img: ace,
                    pregled: "Zmagoslavje volje, začetek močnega odnosa...",
                    to: "/asmecev"
                },
                {
                    id: 2,
                    ime: "Dvojka mečev",
                    img: two,
                    pregled: "Odločitev, ki zahteva nepristranski odnos, intuitivno razumevanje, amnestija...",
                    to: "/dvojkamecev"
                },
                {
                    id: 3,
                    ime: "Trojka mečev",
                    img: three,
                    pregled: "Srčne bolečine, zlom, oddelek, zamuda...",
                    to: "/trojkamecev"
                },
                {
                    id: 4,
                    ime: "Štirica mečev",
                    img: four,
                    pregled: "Počitek, umik in samota; čas okrevanja...",
                    to: "/stiricamecev"
                },
                {
                    id: 5,
                    ime: "Petica mečev",
                    img: five,
                    pregled: "Sramota in izguba, izdaja s strani prijatelja...",
                    to: "/peticamecev"
                },
                {
                    id: 6,
                    ime: "Šestica mečev",
                    img: six,
                    pregled: "Potovanje ali počitnice, izogibanje težavam...",
                    to: "/sesticamecev"
                },
                {
                    id: 7,
                    ime: "Sedmica mečev",
                    img: seven,
                    pregled: "Kraja, prevara, zvijača, pazite sleparja...",
                    to: "/sedmicamecev"
                },
                {
                    id: 8,
                    ime: "Osmica mečev",
                    img: eight,
                    pregled: "Frustracija, zapor, kritika in bolezen...",
                    to: "/osmicamecev"
                },
                {
                    id: 9,
                    ime: "Devetica mečev",
                    img: nine,
                    pregled: "Skrb, obup in nevroza; slabe sanje in pereče težave...",
                    to: "/deveticamecev"
                },
                {
                    id: 10,
                    ime: "Desetica mečev",
                    img: ten,
                    pregled: "Neuspeh, solze, žalost ali bolezen; a najhujšega je konec in prihaja nova zora...",
                    to: "/deseticamecev"
                },
                {
                    id: 11,
                    ime: "Paž mečev",
                    img: page,
                    pregled: "Nezaupanja vredna mlajša oseba; vohun, ki ti bo zabodel nož v hrbet...",
                    to: "/pazmecev"
                },
                {
                    id: 12,
                    ime: "Vitez mečev",
                    img: knight,
                    pregled: "Neusmiljena oseba, deluje hitro in bo poskušal zasukati zakon sebi v prid...",
                    to: "/vitezmecev"
                },
                {
                    id: 13,
                    ime: "Kraljica mečev",
                    img: queen,
                    pregled: "Žalostna ženska na oblasti, razume bolečino in žalost...",
                    to: "/kraljicamecev"
                },
                {
                    id: 14,
                    ime: "Kralj mečev",
                    img: king,
                    pregled: "Kritičen človek na oblasti, njegova odločitev je dokončna...",
                    to: "/kraljmecev"
                }
            ],
            opis: '<p>Karte tarota Meči obravnavajo mentalno raven zavesti, ki je osredotočena na um in intelekt. Meči odsevajo kakovost uma, ki je prisotna v vaših mislih, stališčih in prepričanjih.</p> <p>Meči so pogosto dvorezni in na ta način Meči simbolizirajo fino ravnovesje med intelektom in močjo ter kako je mogoče ta dva elementa uporabiti za dobro ali zlo. Kot taki morajo biti Meči uravnoteženi z duhom (Palice) in občutkom (Kelihi), da imajo najbolj pozitiven učinek.</p><p>Meči so povezani z elementom zraka. Zrak je neoprijemljiv in neviden, a tudi v nenehnem gibanju. Zrak je lahko miren in večinoma neopazen, hitro pa lahko postane vetrič ali močan veter. Je močan, a osvežujoč in čisti. Simbolično se element zraka nanaša na znanje, delovanje, moč in spremembe. Je moška energija, ki lahko vodi s silo in močjo, čeprav ostaja nevidna.</p><p><b>Kaj v branju pomenijo tarot karte z meči?</b> Pomeni kart tarota Mečev so povezani z dejanji, spremembo, silo, močjo, zatiranjem, ambicijo, pogumom in konfliktom. Dejanje je lahko konstruktivno in/ali destruktivno.</p><p>Negativni vidiki Mečev vključujejo jezo, krivdo, ostro sodbo, pomanjkanje sočutja ter verbalno in duševno zlorabo.</p><p>Meči tarot kart pogosto predstavljajo astrološka znamenja zraka - Vodnar, Tehtnica in Dvojčka. Ko v branju tarota vidite karte z meči, se to pogosto nanaša na osebo z zvezdnim znamenjem Vodnar, Tehtnica in Dvojčka. Na splošno so ljudje Mečev inteligentni, premišljeni, racionalni, logični in odlični komunikatorji. So razumna bitja in radi izkušajo svet z razumevanjem in analizo dogajanja okoli njih. Na drugi strani so ljudje Mečev lahko neusmiljeni, prevladujoči, konfrontacijski in togi.</p><p><b>Kaj pomeni, ko so pri branju tarota prisotne večinoma tarot karta Mečev?</b> Če je branje tarota pretežno iz kart mečev, iščete rešitve za tisto, kar so predvsem duševni boji, konflikti in prepiri ter odločitve, ki jih je treba sprejeti. Prav tako je lahko trenutno veliko prepirov ali celo nasilja. Medtem ko lahko Meči s seboj nosijo številna negativna ali zelo močna, silovita sporočila, Meči služijo tudi kot opozorilo, da ste bolj previdni glede tega, kar se dogaja okoli vas.</p>'
        }
    }
}
