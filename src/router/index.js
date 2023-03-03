import {createRouter, createWebHistory} from 'vue-router'

import IndexComp from '@/components/Index/IndexComp.vue'
import KabalaComp from '@/components/Kabala/KabalaComp.vue'
import MeditacijaComp from '@/components/Meditacija/MeditacijaComp.vue'
import TarotComp from '@/components/Tarot/TarotComp.vue'
import TarotVajeComp from '@/components/TarotVaje/TarotVajeComp.vue'
import SadhanaComp from '@/components/Sadhana/SadhanaComp.vue'
import LiteraturaComp from '@/components/Literatura/LiteraturaComp.vue'
import KontaktComp from '@/components/Kontakt/KontaktComp.vue'

// Arkane
import GlavnaArcana from '@/components/TarotArkane/GlavnaArkana/GlavnaArkana.vue';
import MinorCups from '@/components/TarotArkane/MinorCups/MinorCups.vue';
import MinorPentacles from '@/components/TarotArkane/MinorPentacles/MinorPentacles.vue';
import MinorSwords from '@/components/TarotArkane/MinorSwords/MinorSwords.vue';
import MinorWands from '@/components/TarotArkane/MinorWands/MinorWands.vue';

// Karte Opis: Velika Arkana
import TheFool from '@/components/OpisTarotKarte/TheFool/TheFool.vue'
import TheMagician from '@/components/OpisTarotKarte/TheMagician/TheMagician.vue'
import TheHighPriestess from '@/components/OpisTarotKarte/TheHighPriestess/TheHighPriestess.vue'
import TheEmpress from '@/components/OpisTarotKarte/TheEmpress/TheEmpress.vue'
import TheEmperor from '@/components/OpisTarotKarte/TheEmperor/TheEmperor.vue'
import TheHierophant from '@/components/OpisTarotKarte/TheHierophant/TheHierophant.vue'
import TheWorld from '@/components/OpisTarotKarte/TheWorld/TheWorld.vue'
import Thelovers from "@/components/OpisTarotKarte/TheLovers/TheLovers.vue";
import TheChariot from "@/components/OpisTarotKarte/TheChariot/TheChariot.vue";
import Strength from "@/components/OpisTarotKarte/Strength/Strength.vue";
import TheHermit from "@/components/OpisTarotKarte/TheHermit/TheHermit.vue";
import WheelOfFortune from "@/components/OpisTarotKarte/WheelOfFortune/WheelOfFortune.vue";
import Justice from "@/components/OpisTarotKarte/Justice/Justice.vue";
import TheHangedMan from "@/components/OpisTarotKarte/TheHangedMan/TheHangedMan.vue";
import Death from "@/components/OpisTarotKarte/Death/Death.vue";
import Temperance from "@/components/OpisTarotKarte/Temperance/Temperance.vue";
import TheDevil from "@/components/OpisTarotKarte/TheDevil/TheDevil.vue";
import TheTower from "@/components/OpisTarotKarte/TheTower/TheTower.vue";
import TheStar from "@/components/OpisTarotKarte/TheStar/TheStar.vue";
import TheMoon from "@/components/OpisTarotKarte/TheMoon/TheMoon.vue";
import TheSun from "@/components/OpisTarotKarte/TheSun/TheSun.vue";
import Judgement from "@/components/OpisTarotKarte/Judgement/Judgement.vue";

import NotFound from '@/components/404/404.vue'

const routes = [
    {
        path: '/',
        component: IndexComp
    },
    {
        path: '/tarot',
        component: TarotComp,
    },
    {
        path: '/kabala',
        component: KabalaComp,
    },
    {
        path: '/meditacija',
        component: MeditacijaComp,
    },
    {
        path: '/vaje',
        component: TarotVajeComp,
    },
    {
        path: '/sadhana',
        component: SadhanaComp,
    },
    {
        path: '/literatura',
        component: LiteraturaComp,
    },
    {
        path: '/kontakt',
        component: KontaktComp,
    },
    {
        path: '/glavna-arkana',
        component: GlavnaArcana,
    },
    {
        path: '/kelihi',
        component: MinorCups,
    },
    {
        path: '/pentakli',
        component: MinorPentacles,
    },
    {
        path: '/meci',
        component: MinorSwords,
    },
    {
        path: '/palice',
        component: MinorWands,
    },
    {
        path: "/the-fool",
        component: TheFool,
    },
    {
        path: "/the-world",
        component: TheWorld,
    },
    {
        path: "/the-magician",
        component: TheMagician,
    },
    {
        path: "/the-high-priestess",
        component: TheHighPriestess,
    },
    {
        path: "/the-empress",
        component: TheEmpress,
    },
    {
        path: "/the-emperor",
        component: TheEmperor,
    },
    {
        path: "/the-hierophant",
        component: TheHierophant,
    },
    {
        path: "/the-lovers",
        component: Thelovers,
    },
    {
        path: "/the-chariot",
        component: TheChariot,
    },
    {
        path: "/strength",
        component: Strength,
    },
    {
        path: "/the-hermit",
        component: TheHermit,
    },
    {
        path: "/wheel-of-fortune",
        component: WheelOfFortune,
    },
    {
        path: "/justice",
        component: Justice,
    },
    {
        path: "/the-hanged-man",
        component: TheHangedMan,
    },
    {
        path: "/death",
        component: Death,
    },
    {
        path: "/temperance",
        component: Temperance,
    },
    {
        path: "/the-devil",
        component: TheDevil,
    },
    {
        path: "/the-tower",
        component: TheTower,
    },
    {
        path: "/the-star",
        component: TheStar,
    },
    {
        path: "/the-moon",
        component: TheMoon,
    },
    {
        path: "/the-sun",
        component: TheSun,
    },
    {
        path: "/judgement",
        component: Judgement,
    },
    {
        path: '/:notFound(.*)',
        component: NotFound
    }
]

const router = createRouter({
    scrollBehavior() {
        return {
            top: 0
        }
    },
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: `active`
})

export default router
