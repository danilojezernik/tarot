import fool from '@/assets/majorarcana/the-fool.png'
import foolDown from '@/assets/majorarcana/the-fool-down.png'
import magician from '@/assets/majorarcana/the-magician.png'
import magicianDown from '@/assets/majorarcana/the-magician-down.png'
import priestess from '@/assets/majorarcana/the-high-priestess.png'
import priestessDown from '@/assets/majorarcana/the-high-priestess-down.png'

export default {
    data() {
        return {
            karta: {},
            slike: [fool, foolDown, magician, magicianDown, priestess, priestessDown],
            selectedImage: '',
            imageName: 'death-down.png'
        }
    },
    computed: {
        imageSrc() {
            return `http://localhost:5000/images/${this.imageName}`;
        },
    },
    created () {
            const idx = Math.floor(Math.random() * this.slike.length)
            this.selectedImage = this.slike[idx]
    },
    methods: {
        currentDate() {
            const current = new Date();
            return `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        }
    }

}
