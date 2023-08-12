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
            vsebina: '',
            podnaslov: '',
            slika: '',
            editor: null,
        };
    },
    methods: {
        sendData() {
            const data = {
                naslov: this.naslov,
                podnaslov: this.podnaslov,
                vsebina: this.editor.getHTML(),
                slike: this.slika,
            };

            axios.post('https://backend-tarot-b7395cc53fac.herokuapp.com/api/blog', data, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then(() => {
                    this.$toast.success('Odlično, objava je bila dodana', {
                        position: "bottom-right",
                        duration: 5000
                    })
                    this.$router.push(`/pregled`);
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
                })
        },
    },
    mounted() {
        this.editor = new Editor({
            content: this.vsebina,
            extensions: [
                StarterKit,
            ],
            autofocus: true,
            onUpdate: () => {
                this.$emit("update", this.editor.getHTML())
            }
        })
    },

    beforeUnmount() {
        this.editor.destroy()
    },

};
