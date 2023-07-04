import axios from 'axios';

export default {
    data() {
        return {
            isLoggedIn: false,
            username: '',
            password: '',
        };
    },
    methods: {
        login(event) {
            event.preventDefault();

            axios.post('http://localhost:8004/api/login', {
                username: this.username,
                password: this.password,
            })
                .then(() => {
                    this.isLoggedIn = true;
                    this.$router.push('/admin');
                })
                .catch(error => {
                    console.error(error);
                });
        }

    },
    created() {
        axios
            .get('http://localhost:8004/api/login')
            .then(response => {
                this.isLoggedIn = response.data.isLoggedIn;
            })
            .catch(error => {
                console.error(error);
            });
    },
};
