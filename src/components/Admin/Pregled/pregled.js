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
            axios.get('http://localhost:8004/api/blog_pregled', {
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
            axios.delete(`http://localhost:8004/api/blog/delete/${_id}`, {
                headers: {
                    'Authorization': `${localStorage.getItem("token")}`
                }
            })
                .then(res => {
                    localStorage.setItem("token", res.data.access_token)
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
