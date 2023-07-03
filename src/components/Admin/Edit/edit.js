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

            axios.post(`http://localhost:8004/api/blog/edit/${blogId}`, data)
                .then(response => {
                    console.log(response.data);
                    this.$toast.success('Odlično, objava je bila dodana', {
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

        axios.get(`http://localhost:8004/api/blog/${blogId}`)
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
