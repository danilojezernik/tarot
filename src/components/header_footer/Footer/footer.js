export default {
    data() {
        return {
            showModalSlike: false,
            showModalPomoc: false,
        }
    },
    methods: {
        thisYear() {
            const date = new Date();
            return date.getFullYear();
        }
    }
}
