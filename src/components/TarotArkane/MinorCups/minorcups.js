import ace from '@/assets/cups/ace-of-cups.png'
import two from '@/assets/cups/two-of-cups.png'
import three from '@/assets/cups/three-of-cups.png'
import four from '@/assets/cups/four-of-cups.png'
import five from '@/assets/cups/five-of-cups.png'
import six from '@/assets/cups/six-of-cups.png'
import seven from '@/assets/cups/seven-of-cups.png'
import eight from '@/assets/cups/eight-of-cups.png'
import nine from '@/assets/cups/nine-of-cups.png'
import ten from '@/assets/cups/ten-of-cups.png'
import page from '@/assets/cups/page-of-cups.png'
import knight from '@/assets/cups/knight-of-cups.png'
import queen from '@/assets/cups/queen-of-cups.png'
import king from '@/assets/cups/king-of-cups.png'

export default {
    data () {
        return {
            skodelice: [
                {
                    id: 1,
                    ime: "As kelihov",
                    img: ace,
                    pregled: "Začetki čustvene sreče; nova ljubezen ali ponovni vžig zakona, veselje, zadovoljstvo, plodnost...",
                    to: "/askelihov"
                },
                {
                    id: 2,
                    ime: "Dvojka kelihov",
                    img: two,
                    pregled: "Čustvena in duhovna ljubezen; ljubezen, blagoslovljena z nebesi...",
                    to: "/dvojkakelihov"
                },
                {
                    id: 3,
                    ime: "Trojka kelihov",
                    img: three,
                    pregled: "Praznovanje, veselje, dobri prijatelji...",
                    to: "/trojkakelihov"
                },
                {
                    id: 4,
                    ime: "Štirica kelihov",
                    img: four,
                    pregled: "Nezadovoljstvo ali depresija lahko povzročita izgubo zlate priložnosti, utrujenost...",
                    to: "/stiricakelihov"
                },
                {
                    id: 5,
                    ime: "Petica kelihov",
                    img: five,
                    pregled: "Jok nad prelitim mlekom; priložnost je na dosegu roke in čakajo se novi mostovi...",
                    to: "/peticakelihov"
                },
                {
                    id: 6,
                    ime: "Šestica kelihov",
                    img: six,
                    pregled: "Spomini na otroštvo ali prijatelji prinašajo srečo; srečno otroštvo...",
                    to: "/sesticakelihov"
                },
                {
                    id: 7,
                    ime: "Sedmica kelihov",
                    img: seven,
                    pregled: "Fantazija in iluzija zamotita iskalca...",
                    to: "/sedmicakelihov"
                },
                {
                    id: 8,
                    ime: "Osmica kelihov",
                    img: eight,
                    pregled: "Pustiti preteklost za seboj; pogumna, a težka odločitev...",
                    to: "/osmicakelihov"
                },
                {
                    id: 9,
                    ime: "Devetica kelihov",
                    img: nine,
                    pregled: "Zadovoljstvo zagotovljeno, vendar pazite na samozadovoljstvo...",
                    to: "/deveticakelihov"
                },
                {
                    id: 10,
                    ime: "Desetica kelihov",
                    img: ten,
                    pregled: "Ekstatična osebna in družinska srečo...",
                    to: "/deseticakelihov"
                },
                {
                    id: 11,
                    ime: "Paž kelihov",
                    img: page,
                    pregled: "Občutljiv mladenič, svetla ideja, novice...",
                    to: "/pazkelihov"
                },
                {
                    id: 12,
                    ime: "Vitez kelihov",
                    img: knight,
                    pregled: "Vitez grala, romantičnost, umetniškost, domiselnost, sporočilo ljubezni...",
                    to: "/vitezkelihov"
                },
                {
                    id: 13,
                    ime: "Kraljica kelihov",
                    img: queen,
                    pregled: "Občutljiva, vizionarska ženska; časih lahko postane depresiven...",
                    to: "/kraljicakelihov"
                },
                {
                    id: 14,
                    ime: "Kralj kelihov",
                    img: king,
                    pregled: "Občutljiv in ustvarjalen očetovski mož...",
                    to: "/kraljkelihov"
                }
            ]
        }
    }
}
