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
            axios.get('https://backend-tarot-b7395cc53fac.herokuapp.com/api/blog_pregled', {
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
            axios.delete(`https://backend-tarot-b7395cc53fac.herokuapp.com/api/blog/delete/${_id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then(() => {
                    this.$toast.warning(`Objava ${_id} je bila odstranjena`, {
                        position: "bottom-right",
                        duration: 5000
                    })
                })
                .then(() => {
                    this.fetchData();
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
