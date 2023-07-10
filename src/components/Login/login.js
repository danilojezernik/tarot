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

            axios.post('http://localhost:8004/auth', {
                username: this.username,
                password: this.password,
            })
                .then((res) => {
                    localStorage.setItem("token", res.data.access_token)
                    console.log(res)
                    // this.isLoggedIn = true;
                    this.$router.push('/admin');
                })
                .catch(error => {
                    console.error(error);
                });
        }

    },
    created() {
        axios
            .get('http://localhost:8004/auth')
            .then(response => {
                this.isLoggedIn = response.data.isLoggedIn;
            })
            .catch(error => {
                console.error(error);
            });
    },
};
