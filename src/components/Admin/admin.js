import axios from 'axios'

export default {
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            axios.get('http://localhost:8004/api/admin', {
                headers: {
                    'JWT': `${localStorage.getItem("token")}`
                }
            })
                .then(res => {
                    localStorage.setItem("token", res.data.access_token)
                    console.log(res.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
};
