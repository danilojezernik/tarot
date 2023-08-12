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

            axios.post('https://backend-tarot-b7395cc53fac.herokuapp.com/api/login', {
                username: this.username,
                password: this.password,
            })
                .then((res) => {
                    localStorage.setItem("token", res.data.access_token)
                    this.$router.push('/admin');
                })
                .catch(error => {
                    console.error(error);
                });
        }

    },
    created() {
        axios
            .get('https://backend-tarot-b7395cc53fac.herokuapp.com/api/login')
            .then(response => {
                this.isLoggedIn = response.data.isLoggedIn;
            })
            .catch(error => {
                console.error(error);
            });
    },
};
