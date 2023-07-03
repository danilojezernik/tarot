import axios from 'axios'

export default {
    data() {
        return {
            blogPost: [],
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            axios.get('http://localhost:8004/api/blog')
                .then(response => {
                    const data = response.data;
                    this.blogPost = data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        truncateText(text, maxLength) {
            if (text && text.length <= maxLength) {
                return text;
            } else if (text) {
                const truncatedText = text.substring(0, maxLength);
                return truncatedText + '...';
            } else {
                return '';
            }
        },
        deleteBlog(_id) {
            axios.delete(`http://localhost:8004/api/blog/delete/${_id}`)
                .then(response => {
                    console.log(response.data);
                    this.fetchData();
                })
                .then(() => {
                    this.$toast.warning(`Objava ${_id} je bila odstranjena`, {
                        position: "bottom-right",
                        duration: 5000
                    })
                })
                .catch(error => {
                    this.$toast.error(error, {
                        position: "bottom-right",
                        duration: 5000
                    })
                });
        },
    }
};
