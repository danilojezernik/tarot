import axios from 'axios'

import {Editor, EditorContent} from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

export default {
    components: {
        EditorContent,
    },
    data() {
        return {
            naslov: '',
            podnaslov: '',
            vsebina: '',
            editor: null,
        };
    },
    methods: {
        updateData() {
            const data = {
                naslov: this.naslov,
                podnaslov: this.podnaslov,
                vsebina: this.editor.getHTML(),
            };

            const blogId = this.$route.params.id;

            axios.post(`https://backend-tarot-b7395cc53fac.herokuapp.com/api/blog/edit/${blogId}`, data, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then(() => {
                    this.$toast.success('Odlično, nove spremembe so bile objavljene', {
                        position: "bottom-right",
                        duration: 5000
                    })
                    this.$router.push(`/blog/${blogId}`);
                })
                .catch(error => {
                    this.$toast.error(error, {
                        position: "bottom-right",
                        duration: 5000
                    })
                })
                .finally(() => {
                    this.naslov = '';
                    this.vsebina = '';
                    this.podnaslov = '';
                    this.editor.destroy()
                });
        },
    },
    mounted() {
        this.editor = new Editor({
            content: this.vsebina,
            extensions: [StarterKit],
            autofocus: true,
            onUpdate: () => {
                this.$emit('update', this.editor.getHTML());
            },
        });

        const blogId = this.$route.params.id;

        axios.get(`https://backend-tarot-b7395cc53fac.herokuapp.com/api/blog/${blogId}`)
            .then(response => {
                const blogPost = response.data;
                this.naslov = blogPost.naslov;
                this.podnaslov = blogPost.podnaslov;
                this.vsebina = blogPost.vsebina;
                this.editor.commands.setContent(this.vsebina);
            })
            .catch(error => {
                this.$toast.error(error, {
                    position: "bottom-right",
                    duration: 5000
                })
            });
    },
};
