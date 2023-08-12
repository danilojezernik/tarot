import axios from 'axios'

export default {
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            axios.get('https://backend-tarot-b7395cc53fac.herokuapp.com/api/admin', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then(res => {
                    console.log(res.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
};
