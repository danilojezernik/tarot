import fool from '@/assets/majorarcana/the-fool.png'
import foolDown from '@/assets/majorarcana/the-fool-down.png'
import magician from '@/assets/majorarcana/the-magician.png'
import magicianDown from '@/assets/majorarcana/the-magician-down.png'
import priestess from '@/assets/majorarcana/the-high-priestess.png'
import priestessDown from '@/assets/majorarcana/the-high-priestess-down.png'


export default {
    data() {
        return {
            slike: [
                {
                    id: 1,
                    name: '0 - Norec',
                    src: fool,
                    to: "/the-fool"
                },
                {
                    id: 1,
                    name: '0 - Norec',
                    src: foolDown,
                    to: "/the-fool"
                },
                {
                    id: 2,
                    name: 'Magik',
                    src: magician,
                    to: "/the-magician"
                },
                {
                    id: 2,
                    name: 'Magik obrnjen',
                    src: magicianDown,
                    to: "/the-magician"
                },
                {
                    id: 3,
                    name: 'Svečenica',
                    src: priestess,
                    to: "/the-high-priestess"
                },
                {
                    id: 3,
                    name: 'Svečenica obrnjen',
                    src: priestessDown,
                    to: "/the-high-priestess"
                }
            ],
            selectedImage: '',
            threeSpread: 3,
            showModal1: false,
            showModal2: false,

        }
    },
    created() {
        const idx = Math.floor(Math.random() * this.slike.length)
        this.selectedImage = this.slike[idx]
        this.selectedImage = {
            src: this.selectedImage.src,
            name: this.selectedImage.name,
            to: this.selectedImage.to
        }
    },
    computed: {
        randomImageUrls() {
            const numImages = this.slike.length
            const randomIds = []

            while (randomIds.length < this.threeSpread) {
                const randomId = this.slike[Math.floor(Math.random() * numImages)].id
                if (!randomIds.includes(randomId)) {
                    randomIds.push(randomId)
                }
            }

            return randomIds.map(id => {
                const matchingImages = this.slike.filter(image => image.id === id)
                const randomImage = matchingImages[Math.floor(Math.random() * matchingImages.length)]
                return randomImage
            })
        }
    }
}
