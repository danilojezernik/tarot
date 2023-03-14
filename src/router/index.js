import {createRouter, createWebHistory} from 'vue-router'

import IndexComp from '@/components/Index/IndexComp.vue'
import KabalaComp from '@/components/Kabala/KabalaComp.vue'
import MeditacijaComp from '@/components/Meditacija/MeditacijaComp.vue'
import TarotComp from '@/components/Tarot/TarotComp.vue'
import TarotVajeComp from '@/components/TarotVaje/TarotVajeComp.vue'
import SadhanaComp from '@/components/Sadhana/SadhanaComp.vue'
import LiteraturaComp from '@/components/Literatura/LiteraturaComp.vue'
import KontaktComp from '@/components/Kontakt/KontaktComp.vue'
import TarotBranje from '@/components/TarotBranje/TarotBranje.vue'

// Arkane
import GlavnaArcana from '@/components/TarotArkane/GlavnaArkana/GlavnaArkana.vue';
import MinorCups from '@/components/TarotArkane/MinorCups/MinorCups.vue';
import MinorPentacles from '@/components/TarotArkane/MinorPentacles/MinorPentacles.vue';
import MinorSwords from '@/components/TarotArkane/MinorSwords/MinorSwords.vue';
import MinorWands from '@/components/TarotArkane/MinorWands/MinorWands.vue';

// Karte Opis: Velika Arkana
import TheFool from '@/components/OpisTarotKarte/VelikaArkana/TheFool/TheFool.vue'
import TheMagician from '@/components/OpisTarotKarte/VelikaArkana/TheMagician/TheMagician.vue'
import TheHighPriestess from '@/components/OpisTarotKarte/VelikaArkana/TheHighPriestess/TheHighPriestess.vue'
import TheEmpress from '@/components/OpisTarotKarte/VelikaArkana/TheEmpress/TheEmpress.vue'
import TheEmperor from '@/components/OpisTarotKarte/VelikaArkana/TheEmperor/TheEmperor.vue'
import TheHierophant from '@/components/OpisTarotKarte/VelikaArkana/TheHierophant/TheHierophant.vue'
import Thelovers from "@/components/OpisTarotKarte/VelikaArkana/TheLovers/TheLovers.vue";
import TheChariot from "@/components/OpisTarotKarte/VelikaArkana/TheChariot/TheChariot.vue";
import Strength from "@/components/OpisTarotKarte/VelikaArkana/Strength/Strength.vue";
import TheHermit from "@/components/OpisTarotKarte/VelikaArkana/TheHermit/TheHermit.vue";
import WheelOfFortune from "@/components/OpisTarotKarte/VelikaArkana/WheelOfFortune/WheelOfFortune.vue";
import Justice from "@/components/OpisTarotKarte/VelikaArkana/Justice/Justice.vue";
import TheHangedMan from "@/components/OpisTarotKarte/VelikaArkana/TheHangedMan/TheHangedMan.vue";
import Death from "@/components/OpisTarotKarte/VelikaArkana/Death/Death.vue";
import Temperance from "@/components/OpisTarotKarte/VelikaArkana/Temperance/Temperance.vue";
import TheDevil from "@/components/OpisTarotKarte/VelikaArkana/TheDevil/TheDevil.vue";
import TheTower from "@/components/OpisTarotKarte/VelikaArkana/TheTower/TheTower.vue";
import TheStar from "@/components/OpisTarotKarte/VelikaArkana/TheStar/TheStar.vue";
import TheMoon from "@/components/OpisTarotKarte/VelikaArkana/TheMoon/TheMoon.vue";
import TheSun from "@/components/OpisTarotKarte/VelikaArkana/TheSun/TheSun.vue";
import Judgement from "@/components/OpisTarotKarte/VelikaArkana/Judgement/Judgement.vue";
import TheWorld from '@/components/OpisTarotKarte/VelikaArkana/TheWorld/TheWorld.vue'

// Karte Opis: Palice
import AsPalic from "@/components/OpisTarotKarte/Palice/As/As.vue";
import DvojkaPalic from "@/components/OpisTarotKarte/Palice/Dvojka/Dvojka.vue";
import TrojkaPalic from "@/components/OpisTarotKarte/Palice/Trojka/Trojka.vue";
import StiricaPalic from "@/components/OpisTarotKarte/Palice/Stirica/Stirica.vue";
import PeticaPalic from "@/components/OpisTarotKarte/Palice/Petica/Petica.vue";
import SesticaPalic from "@/components/OpisTarotKarte/Palice/Sestica/Sestica.vue";
import SedmicaPalic from "@/components/OpisTarotKarte/Palice/Sedmica/Sedmica.vue";
import OsmicaPalic from "@/components/OpisTarotKarte/Palice/Osmica/Osmica.vue";
import DeveticaPalic from "@/components/OpisTarotKarte/Palice/Devetica/Devetica.vue";
import DeseticaPalic from "@/components/OpisTarotKarte/Palice/Desetica/Desetica.vue";
import PazPalic from "@/components/OpisTarotKarte/Palice/Paz/Paz.vue";
import VitezPalic from "@/components/OpisTarotKarte/Palice/Vitez/Vitez.vue";


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
        path: '/tarotbranje',
        component: TarotBranje,
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
        path: "/aspalic",
        component: AsPalic,
    },
    {
        path: "/dvojkapalic",
        component: DvojkaPalic,
    },
    {
        path: "/trojkapalic",
        component: TrojkaPalic,
    },
    {
        path: "/stiricapalic",
        component: StiricaPalic,
    },
    {
        path: "/peticapalic",
        component: PeticaPalic,
    },
    {
        path: "/sesticapalic",
        component: SesticaPalic,
    },
    {
        path: "/sedmicapalic",
        component: SedmicaPalic,
    },
    {
        path: "/osmicapalic",
        component: OsmicaPalic,
    },
    {
        path: "/deveticapalic",
        component: DeveticaPalic,
    },
    {
        path: "/deseticapalic",
        component: DeseticaPalic,
    },
    {
        path: "/pazpalic",
        component: PazPalic,
    },
    {
        path: "/vitezpalic",
        component: VitezPalic,
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
