import ace from '@/assets/wands/ace-of-wands.png'
import two from '@/assets/wands/two-of-wands.png'
import three from '@/assets/wands/three-of-wands.png'
import four from '@/assets/wands/four-of-wands.png'
import five from '@/assets/wands/five-of-wands.png'
import six from '@/assets/wands/six-of-wands.png'
import seven from '@/assets/wands/seven-of-wands.png'
import eight from '@/assets/wands/eight-of-wands.png'
import nine from '@/assets/wands/nine-of-wands.png'
import ten from '@/assets/wands/ten-of-wands.png'
import page from '@/assets/wands/page-of-wands.png'
import knight from '@/assets/wands/knight-of-wands.png'
import queen from '@/assets/wands/queen-of-wands.png'
import king from '@/assets/wands/king-of-wands.png'

export default {
    data () {
        return {
            palice: [
                {
                    id: 1,
                    ime: "As palic",
                    img: ace,
                    pregled: "Novo delo ali podjetje, pobuda, ideje, izum...",
                    to: "/ace-of-wands"
                },
                {
                    id: 2,
                    ime: "Dvojka palic",
                    img: two,
                    pregled: "nezadovoljstvo z materialnimi stvarmi, nemirnost, razmišljanje o dogodkih, ki se dogajajo drugje...",
                    to: ""
                },
                {
                    id: 3,
                    ime: "Trojka palic",
                    img: three,
                    pregled: "Prekomorska trgovina, načrtovana potovanja, trgovina, uveljavljena moč...",
                    to: ""
                },
                {
                    id: 4,
                    ime: "Štirica palic",
                    img: four,
                    pregled: "Praznovanje, življenje na podeželju, druženje, blaginja, mir in soglasje...",
                    to: ""
                },
                {
                    id: 5,
                    ime: "Petica palic",
                    img: five,
                    pregled: "Majhni prepiri med skupinami ljudi, lažni boj, prepiri...",
                    to: ""
                },
                {
                    id: 6,
                    ime: "Šestica palic",
                    img: six,
                    pregled: "Dosežena zmaga, dobre novice, podpora drugih, priznanje...",
                    to: ""
                },
                {
                    id: 7,
                    ime: "Sedmica palic",
                    img: seven,
                    pregled: "Pogum, zmaga proti vsem, premagovanje opozicije, stopiti na vrh svojih težav...",
                    to: ""
                },
                {
                    id: 8,
                    ime: "Osmica palic",
                    img: eight,
                    pregled: "Komunikacija, sporočilo ali pismo, hitrost, hiter zaključek...",
                    to: ""
                },
                {
                    id: 9,
                    ime: "Devetica palic",
                    img: nine,
                    pregled: "Neprijetno čakanje, zbiranje moči; težave, ki jih je treba še rešiti...",
                    to: ""
                },
                {
                    id: 10,
                    ime: "Desetica palic",
                    img: ten,
                    pregled: "Zatiranje; breme, ki ga je težko nositi, prekomerno delo, čustveni pritisk, neprijetna novica...",
                    to: ""
                },
                {
                    id: 11,
                    ime: "Paž palic",
                    img: page,
                    pregled: "Objavljena dobra novica, zvesta mlada oseba ali otrok...",
                    to: ""
                },
                {
                    id: 12,
                    ime: "Vitez palic",
                    img: knight,
                    pregled: "Sprememba prebivališča, podjetna mlada oseba...",
                    to: ""
                },
                {
                    id: 13,
                    ime: "Kraljica palic",
                    img: queen,
                    pregled: "Pronicljiva ženska z dobrim poslovnim občutkom...",
                    to: ""
                },
                {
                    id: 14,
                    ime: "Kralj palic",
                    img: king,
                    pregled: "Pameten, pošten, človek, ki daje dobre nasvete...",
                    to: ""
                }
            ]
        }
    }
}
