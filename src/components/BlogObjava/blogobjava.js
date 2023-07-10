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
            axios.get(`http://localhost:8004/api/blog/${postId}`, {
                headers: {
                    'Authorization': `${localStorage.getItem("token")}`
                }
            })
                .then(res => {
                    localStorage.setItem("token", JSON.stringify(res.data.access_token))

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
