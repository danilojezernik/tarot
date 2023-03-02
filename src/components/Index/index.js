export default {
    data() {
        return {
            karta: {},
        }
    },
    mounted() {
        this.axios.get(`http://localhost:3000/velika-arkana/`).then((response) => {
            this.karta = response.data
        })
    }
}
