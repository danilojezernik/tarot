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
            ]
        }
    }
}
