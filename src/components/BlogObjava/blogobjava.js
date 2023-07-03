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
            axios.get(`http://localhost:8004/api/blog/${postId}`)
                .then(response => {
                    const data = response.data;
                    this.blogPost = data;
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
};
