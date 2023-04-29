export default {
    data() {
        return {
            showModalSlike: false,
            showModalPomoc: false,
            showModalOdpuscanje: false,
            showModalZivljenje: false,
            showModalTarot: false,
            showModalTarotUcenje: false,
            showModalFearless: false,
            showModalNasveti: false,
        }
    },
    methods: {
        thisYear() {
            const date = new Date();
            return date.getFullYear();
        }
    }
}
