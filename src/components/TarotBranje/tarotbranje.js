import fool from '@/assets/majorarcana/the-fool.png'
import foolDown from '@/assets/majorarcana/the-fool-down.png'
import magician from '@/assets/majorarcana/the-magician.png'
import magicianDown from '@/assets/majorarcana/the-magician-down.png'
import priestess from '@/assets/majorarcana/the-high-priestess.png'
import priestessDown from '@/assets/majorarcana/the-high-priestess-down.png'


export default {
    data() {
        return {
            slike: [fool, foolDown, magician, magicianDown, priestess, priestessDown],
            selectedImage: '',
            threeSpread: 3,
        }
    },
    created () {
        const idx = Math.floor(Math.random() * this.slike.length)
        this.selectedImage = this.slike[idx]
    },
    computed: {
        randomImageUrls() {
            const numImages = this.slike.length
            const randomIndexes = []

            while (randomIndexes.length < this.threeSpread) {
                const randomIndex = Math.floor(Math.random() * numImages)
                if (!randomIndexes.includes(randomIndex)) {
                    randomIndexes.push(randomIndex)
                }
            }
            return randomIndexes.map(index => this.slike[index])
        }
    }
}
