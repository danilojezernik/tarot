import thefool from '@/assets/majorarcana/the-fool.png'
import wands from '@/assets/wands/ace-of-wands.png'
import cups from '@/assets/cups/ace-of-cups.png'
import sword from '@/assets/swords/ace-of-swords.png'
import pentacles from '@/assets/pentacles/ace-of-pentacles.png'

export default {
    data() {
        return {
            arkane: [
                {
                    id: 1,
                    image: thefool,
                    opis: 'Velika Arkana',
                    to: '/glavna-arkana'
                },
                {
                    id: 2,
                    image: wands,
                    opis: 'Mala Arkana:<br>Palice',
                    to: '/palice'
                },
                {
                    id: 3,
                    image: cups,
                    opis: 'Mala Arkana:<br>Kelihi',
                    to: '/kelihi'
                },
                {
                    id: 4,
                    image: sword,
                    opis: 'Mala Arkana:<br>Meči',
                    to: '/meci'
                },
                {
                    id: 5,
                    image: pentacles,
                    opis: 'Mala Arkana:<br>Pentakli',
                    to: '/pentakli'
                }
            ]
        }
    }
}
