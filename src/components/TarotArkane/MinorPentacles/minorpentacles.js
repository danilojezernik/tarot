import ace from '@/assets/pentacles/ace-of-pentacles.png'
import two from '@/assets/pentacles/two-of-pentacles.png'
import three from '@/assets/pentacles/three-of-pentacles.png'
import four from '@/assets/pentacles/four-of-pentacles.png'
import five from '@/assets/pentacles/five-of-pentacles.png'
import six from '@/assets/pentacles/six-of-pentacles.png'
import seven from '@/assets/pentacles/seven-of-pentacles.png'
import eight from '@/assets/pentacles/eight-of-pentacles.png'
import nine from '@/assets/pentacles/nine-of-pentacles.png'
import ten from '@/assets/pentacles/ten-of-pentacles.png'
import page from '@/assets/pentacles/page-of-pentacles.png'
import knight from '@/assets/pentacles/knight-of-pentacles.png'
import queen from '@/assets/pentacles/queen-of-pentacles.png'
import king from '@/assets/pentacles/king-of-pentacles.png'


export default {
    data () {
        return {
            pentakli: [
                {
                    id: 1,
                    ime: "As pentakljev",
                    img: ace,
                    pregled: "Zlata priložnost; obilje in izboljšane finančne obeti...",
                    to: "/aspentakljev"
                },
                {
                    id: 2,
                    ime: "Dvojka pentakljev",
                    img: two,
                    pregled: "Čustveni vzponi in padci, žongliranje s financami...",
                    to: "/dvojkapentakljev"
                },
                {
                    id: 3,
                    ime: "Trojka pentakljev",
                    img: three,
                    pregled: "Cenjene veščine, spoštovanje, čast in nagrada...",
                    to: "/trojkapentakljev"
                },
                {
                    id: 4,
                    ime: "Štirica pentakljev",
                    img: four,
                    pregled: "Varčevanje denarja, previdnost pri denarju, požrešnost...",
                    to: "/stiricapentakljev"
                },
                {
                    id: 5,
                    ime: "Petica pentakljev",
                    img: five,
                    pregled: "Revščina in stiska, materialne težave, zapleten odnos, duhovna revščina...",
                    to: "/peticapentakljev"
                },
                {
                    id: 6,
                    ime: "Šestica pentakljev",
                    img: six,
                    pregled: "Darila, pomoč pri roki in velikodušnost; naj vam denar ne gre skozi prste...",
                    to: "/sesticapentakljev"
                },
                {
                    id: 7,
                    ime: "Sedmica pentakljev",
                    img: seven,
                    pregled: "Nestrpnost, stvari bodo prišle s časom, zaskrbljenost zaradi denarja...",
                    to: "/sedmicapentakljev"
                },
                {
                    id: 8,
                    ime: "Osmica pentakljev",
                    img: eight,
                    pregled: "Uspeh dosežen s trdim delom, obrtne in poslovne veščine, izboljšave delovnih mest...",
                    to: "/osmicapentakljev"
                },
                {
                    id: 9,
                    ime: "Devetica pentakljev",
                    img: nine,
                    pregled: "Zapuščina, nezasluženi denar, materialno zadovoljstvo, nagrade, užitek...",
                    to: "/deveticapentakljev"
                },
                {
                    id: 10,
                    ime: "Desetica pentakljev",
                    img: ten,
                    pregled: "Stabilen dom, bogastvo, družinsko življenje, dosežen uspeh...",
                    to: "/deseticapentakljev"
                },
                {
                    id: 11,
                    ime: "Paž pentakljev",
                    img: page,
                    pregled: "Ambiciozna mlada oseba; uspeh v študiju in karieri; vodstvene sposobnosti...",
                    to: "/pazpentakljev"
                },
                {
                    id: 12,
                    ime: "Vitez pentakljev",
                    img: knight,
                    pregled: "Zanesljiv, odgovoren človek; upravitelj banke ali vlagatelj; trdo delo, vztrajnost...",
                    to: "/vitezpentakljev"
                },
                {
                    id: 13,
                    ime: "Kraljica pentakljev",
                    img: queen,
                    pregled: "Resna, inteligentna, materinska ženska; razkošje, varnost, velikodušnost...",
                    to: "/kraljicapentakljev"
                },
                {
                    id: 14,
                    ime: "Kralj pentakljev",
                    img: king,
                    pregled: "Bogat inteligenten človek; pogum, stabilnost...",
                    to: "/kraljpentakljev"
                }
            ]
        }
    }
}
