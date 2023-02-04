import GlavnaArcana from '@/components/TarotArkane/GlavnaArkana/GlavnaArkana.vue';
import MinorCups from '@/components/TarotArkane/MinorCups/MinorCups.vue';
import MinorPentacles from '@/components/TarotArkane/MinorPentacles/MinorPentacles.vue';
import MinorSwords from '@/components/TarotArkane/MinorSwords/MinorSwords.vue';
import MinorWands from '@/components/TarotArkane/MinorWands/MinorWands.vue';

export default {
    components: {
        GlavnaArcana,
        MinorCups,
        MinorSwords,
        MinorWands,
        MinorPentacles
    },
    data() {
        return {
            aktiven: 'GlavnaArcana',
            showModal: false,
        }
    }
}
