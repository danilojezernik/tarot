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
                    ime: "Ace of Cups",
                    img: ace,
                    pregled: "Začetki čustvene sreče; nova ljubezen ali ponovni vžig zakona, veselje, zadovoljstvo, plodnost...",
                    to: "/ace-cups"
                },
                {
                    id: 2,
                    ime: "Two of Cups",
                    img: two,
                    pregled: "Čustvena in duhovna ljubezen; ljubezen, blagoslovljena z nebesi...",
                    to: ""
                },
                {
                    id: 3,
                    ime: "Three of Cups",
                    img: three,
                    pregled: "Praznovanje, veselje, dobri prijatelji...",
                    to: ""
                },
                {
                    id: 4,
                    ime: "Four of Cups",
                    img: four,
                    pregled: "Nezadovoljstvo ali depresija lahko povzročita izgubo zlate priložnosti, utrujenost...",
                    to: ""
                },
                {
                    id: 5,
                    ime: "Five of Cups",
                    img: five,
                    pregled: "Jok nad prelitim mlekom; priložnost je na dosegu roke in čakajo se novi mostovi...",
                    to: ""
                },
                {
                    id: 6,
                    ime: "Six of Cups",
                    img: six,
                    pregled: "Spomini na otroštvo ali prijatelji prinašajo srečo; srečno otroštvo...",
                    to: ""
                },
                {
                    id: 7,
                    ime: "Seven of Cups",
                    img: seven,
                    pregled: "Fantazija in iluzija zamotita iskalca...",
                    to: ""
                },
                {
                    id: 8,
                    ime: "Eight of Cups",
                    img: eight,
                    pregled: "Pustiti preteklost za seboj; pogumna, a težka odločitev...",
                    to: ""
                },
                {
                    id: 9,
                    ime: "Nine of Cups",
                    img: nine,
                    pregled: "Zadovoljstvo zagotovljeno, vendar pazite na samozadovoljstvo...",
                    to: ""
                },
                {
                    id: 10,
                    ime: "Ten of Cups",
                    img: ten,
                    pregled: "Ekstatična osebna in družinska srečo...",
                    to: ""
                },
                {
                    id: 11,
                    ime: "Page of Cups",
                    img: page,
                    pregled: "Občutljiv mladenič, svetla ideja, novice...",
                    to: ""
                },
                {
                    id: 12,
                    ime: "Knight of Cups",
                    img: knight,
                    pregled: "Vitez grala, romantičnost, umetniškost, domiselnost, sporočilo ljubezni...",
                    to: ""
                },
                {
                    id: 13,
                    ime: "Queen of Cups",
                    img: queen,
                    pregled: "Občutljiva, vizionarska ženska; časih lahko postane depresiven...",
                    to: ""
                },
                {
                    id: 14,
                    ime: "King of Cups",
                    img: king,
                    pregled: "Občutljiv in ustvarjalen očetovski mož...",
                    to: ""
                }
            ]
        }
    }
}
