import axios from 'axios'

export default {
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            axios.get('http://localhost:8004/api/admin', {
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
