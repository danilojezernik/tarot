import axios from 'axios'

export default {
    data() {
        return {
            blogPost: {},
        };
    },
    mounted() {
        const postId = this.$route.params.id;
        this.fetchData(postId);
    },
    methods: {
        fetchData(postId) {
            axios.get(`https://backend-tarot-b7395cc53fac.herokuapp.com/api/blog/${postId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then((res) => {
                    const data = res.data;
                    this.blogPost = data;
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
};
