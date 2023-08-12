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
            axios.get('https://backend-tarot-b7395cc53fac.herokuapp.com/api/blog')
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
        }
    }
};
