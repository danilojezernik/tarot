import {createRouter, createWebHistory} from 'vue-router'

import IndexComp from '@/components/Index/IndexComp.vue'

import KabalaComp from '@/components/Kabala/Kabala/KabalaComp.vue'
import KabalaOpisComp from '@/components/Kabala/KabalaOpis/KabalaOpisComp.vue'
import KabalaMeditacijaComp from '@/components/Kabala/KabalaMeditacija/KabalaMeditacijaComp.vue'
import PentagramComp from '@/components/Kabala/Pentagram/PentagramComp.vue'

import KliphotComp from '@/components/Kliphot/KliphotComp.vue'
import MeditacijaComp from '@/components/Meditacija/MeditacijaComp.vue'
import TarotComp from '@/components/Tarot/TarotComp.vue'
import TarotVajeComp from '@/components/TarotVaje/TarotVajeComp.vue'
import SadhanaComp from '@/components/Sadhana/Sadhana/SadhanaComp.vue'
import LiteraturaComp from '@/components/Literatura/LiteraturaComp.vue'
import KontaktComp from '@/components/Kontakt/KontaktComp.vue'
import TarotBranje from '@/components/TarotBranje/TarotBranje.vue'
import VprInOdg from '@/components/VprInOdg/VprInOdgComp.vue'

// Blog
import BlogComp from '@/components/Blog/BlogComp.vue'
import BlogObjavaComp from '@/components/BlogObjava/BlogObjavaComp.vue'
import LoginComp from '@/components/Login/LoginComp.vue'
import AdminComp from '@/components/Admin/AdminComp.vue'
import ObjaviComp from '@/components/Admin/Objavi/ObjavaComp.vue'
import PregledComp from '@/components/Admin/Pregled/PregledComp.vue'
import EditComp from '@/components/Admin/Edit/EditComp.vue'


// Sadhana
import FoolSadhana from '@/components/Sadhana/Fool/FoolSadhanaComp.vue'
import MagicianSadhana from '@/components/Sadhana/Magician/MagicianSadhanaComp.vue'
import PriestessSadhana from '@/components/Sadhana/Priestess/PriestessSadhanaComp.vue'
import EmpressSadhana from '@/components/Sadhana/Empress/EmpressSadhanaComp.vue'
import EmperorSadhana from '@/components/Sadhana/Emperor/EmperorSadhanaComp.vue'
import HierophantSadhana from '@/components/Sadhana/Hierophant/HierophantSadhanaComp.vue'
import LoversSadhana from '@/components/Sadhana/Lovers/LoversSadhanaComp.vue'
import ChariotSadhana from '@/components/Sadhana/Chariot/ChariotSadhanaComp.vue'
import StrengthSadhana from '@/components/Sadhana/Strength/StrengthSadhanaComp.vue'
import HermitSadhana from '@/components/Sadhana/Hermit/HermitSadhanaComp.vue'
import WheelSadhana from '@/components/Sadhana/Wheel/WheelSadhanaComp.vue'
import JusticeSadhana from '@/components/Sadhana/Justice/JusticeSadhanaComp.vue'
import HangedSadhana from '@/components/Sadhana/Hanged/HangedSadhanaComp.vue'
import DeathSadhana from '@/components/Sadhana/Death/DeathSadhanaComp.vue'
import TemperanceSadhana from '@/components/Sadhana/Temperance/TemperanceSadhanaComp.vue'
import DevilSadhana from '@/components/Sadhana/Devil/DevilSadhanaComp.vue'
import TowerSadhana from '@/components/Sadhana/Tower/TowerSadhanaComp.vue'
import StarSadhana from '@/components/Sadhana/Star/StarSadhanaComp.vue'
import MoonSadhana from '@/components/Sadhana/Moon/MoonSadhanaComp.vue'
import SunSadhana from '@/components/Sadhana/Sun/SunSadhanaComp.vue'
import JudgementSadhana from '@/components/Sadhana/Judgement/JudgementSadhanaComp.vue'
import WorldSadhana from '@/components/Sadhana/World/WorldSadhanaComp.vue'

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
import KraljicaPalic from "@/components/OpisTarotKarte/Palice/Kraljica/Kraljica.vue";
import KraljPalic from "@/components/OpisTarotKarte/Palice/Kralj/Kralj.vue";

// Karte Opis: Kelihi
import AsKelihov from "@/components/OpisTarotKarte/Kelihi/As/As.vue";
import DvojkaKelihov from "@/components/OpisTarotKarte/Kelihi/Dvojka/Dvojka.vue";
import TrojkaKelihov from "@/components/OpisTarotKarte/Kelihi/Trojka/Trojka.vue";
import StiricaKelihov from "@/components/OpisTarotKarte/Kelihi/Stirica/Stirica.vue";
import PeticaKelihov from "@/components/OpisTarotKarte/Kelihi/Petica/Petica.vue";
import SesticaKelihov from "@/components/OpisTarotKarte/Kelihi/Sestica/Sestica.vue";
import SedmicaKelihov from "@/components/OpisTarotKarte/Kelihi/Sedmica/Sedmica.vue";
import OsmicaKelihov from "@/components/OpisTarotKarte/Kelihi/Osmica/Osmica.vue";
import DeveticaKelihov from "@/components/OpisTarotKarte/Kelihi/Devetica/Devetica.vue";
import DeseticaKelihov from "@/components/OpisTarotKarte/Kelihi/Desetica/Desetica.vue";
import PazKelihov from "@/components/OpisTarotKarte/Kelihi/Paz/Paz.vue";
import VitezKelihov from "@/components/OpisTarotKarte/Kelihi/Vitez/Vitez.vue";
import KraljicaKelihov from "@/components/OpisTarotKarte/Kelihi/Kraljica/Kraljica.vue";
import KraljKelihov from "@/components/OpisTarotKarte/Kelihi/Kralj/Kralj.vue";

// Karte Opis: Meči
import AsMecev from "@/components/OpisTarotKarte/Meci/As/As.vue";
import DvojkaMecev from "@/components/OpisTarotKarte/Meci/Dvojka/Dvojka.vue";
import TrojkaMecev from "@/components/OpisTarotKarte/Meci/Trojka/Trojka.vue";
import StiricaMecev from "@/components/OpisTarotKarte/Meci/Stirica/Stirica.vue";
import PeticaMecev from "@/components/OpisTarotKarte/Meci/Petica/Petica.vue";
import SesticaMecev from "@/components/OpisTarotKarte/Meci/Sestica/Sestica.vue";
import SedmicaMecev from "@/components/OpisTarotKarte/Meci/Sedmica/Sedmica.vue";
import OsmicaMecev from "@/components/OpisTarotKarte/Meci/Osmica/Osmica.vue";
import DeveticaMecev from "@/components/OpisTarotKarte/Meci/Devetica/Devetica.vue";
import DeseticaMecev from "@/components/OpisTarotKarte/Meci/Desetica/Desetica.vue";
import PazMecev from "@/components/OpisTarotKarte/Meci/Paz/Paz.vue";
import VitezMecev from "@/components/OpisTarotKarte/Meci/Vitez/Vitez.vue";
import KraljicaMecev from "@/components/OpisTarotKarte/Meci/Kraljica/Kraljica.vue";
import KraljMecev from "@/components/OpisTarotKarte/Meci/Kralj/Kralj.vue";

// Karte Opis: Pentaklji
import AsPentaklji from "@/components/OpisTarotKarte/Pentaklji/As/As.vue";
import DvojkaPentaklji from "@/components/OpisTarotKarte/Pentaklji/Dvojka/Dvojka.vue";
import TrojkaPentaklji from "@/components/OpisTarotKarte/Pentaklji/Trojka/Trojka.vue";
import StiricaPentaklji from "@/components/OpisTarotKarte/Pentaklji/Stirica/Stirica.vue";
import PeticaPentaklji from "@/components/OpisTarotKarte/Pentaklji/Petica/Petica.vue";
import SesticaPentaklji from "@/components/OpisTarotKarte/Pentaklji/Sestica/Sestica.vue";
import SedmicaPentaklji from "@/components/OpisTarotKarte/Pentaklji/Sedmica/Sedmica.vue";
import OsmicaPentaklji from "@/components/OpisTarotKarte/Pentaklji/Osmica/Osmica.vue";
import DeveticaPentaklji from "@/components/OpisTarotKarte/Pentaklji/Devetica/Devetica.vue";
import DeseticaPentaklji from "@/components/OpisTarotKarte/Pentaklji/Desetica/Desetica.vue";
import PazPentaklji from "@/components/OpisTarotKarte/Pentaklji/Paz/Paz.vue";
import VitezPentaklji from "@/components/OpisTarotKarte/Pentaklji/Vitez/Vitez.vue";
import KraljicaPentaklji from "@/components/OpisTarotKarte/Pentaklji/Kraljica/Kraljica.vue";
import KraljPentaklji from "@/components/OpisTarotKarte/Pentaklji/Kralj/Kralj.vue";

// 404
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
        path: '/kabala-opis',
        component: KabalaOpisComp,
    },
    {
        path: '/kabala-meditacija',
        component: KabalaMeditacijaComp,
    },
    {
        path: '/ritual-pentagram',
        component: PentagramComp,
    },
    {
        path: '/kliphot',
        component: KliphotComp,
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
        path: '/blog',
        component: BlogComp,
    },
    {
        path: '/blog/:id',
        component: BlogObjavaComp,
    },
    {
        path: '/literatura',
        component: LiteraturaComp,
    },
    {
        path: '/vpr-odg',
        component: VprInOdg,
    },
    {
        path: '/kontakt',
        component: KontaktComp,
    },
    {
        path: '/login',
        component: LoginComp,
    },
    {
        path: '/objavi',
        component: ObjaviComp,

    },
    {
        path: '/pregled',
        component: PregledComp,

    },
    {
        path: '/admin',
        component: AdminComp,

    },
    {
        path: '/edit/:id',
        component: EditComp,

    },
    // SADHANE ARKANA
    {
        path: '/the-fool-sadhana',
        component: FoolSadhana,
    },
    {
        path: '/the-magician-sadhana',
        component: MagicianSadhana,
    },
    {
        path: '/the-high-priestess-sadhana',
        component: PriestessSadhana,
    },
    {
        path: '/the-empress-sadhana',
        component: EmpressSadhana,
    },
    {
        path: '/the-emperor-sadhana',
        component: EmperorSadhana,
    },
    {
        path: '/the-hierophant-sadhana',
        component: HierophantSadhana,
    },
    {
        path: '/the-lovers-sadhana',
        component: LoversSadhana,
    },
    {
        path: '/the-chariot-sadhana',
        component: ChariotSadhana,
    },
    {
        path: '/strength-sadhana',
        component: StrengthSadhana,
    },
    {
        path: '/the-hermit-sadhana',
        component: HermitSadhana,
    },
    {
        path: '/wheel-of-fortune-sadhana',
        component: WheelSadhana,
    },
    {
        path: '/justice-sadhana',
        component: JusticeSadhana,
    },
    {
        path: '/the-hanged-man-sadhana',
        component: HangedSadhana,
    },
    {
        path: '/death-sadhana',
        component: DeathSadhana,
    },
    {
        path: '/temperance-sadhana',
        component: TemperanceSadhana,
    },
    {
        path: '/the-devil-sadhana',
        component: DevilSadhana,
    },
    {
        path: '/the-tower-sadhana',
        component: TowerSadhana,
    },
    {
        path: '/the-star-sadhana',
        component: StarSadhana,
    },
    {
        path: '/the-moon-sadhana',
        component: MoonSadhana,
    },
    {
        path: '/the-sun-sadhana',
        component: SunSadhana,
    },
    {
        path: '/judgement-sadhana',
        component: JudgementSadhana,
    },
    {
        path: '/the-world-sadhana',
        component: WorldSadhana,
    },
    // AKRANE
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
    // VELIKA ARKANA
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
    // Palice
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
        path: "/kraljicapalic",
        component: KraljicaPalic,
    },
    {
        path: "/kraljpalic",
        component: KraljPalic,
    },
    // Kelihi
    {
        path: "/askelihov",
        component: AsKelihov,
    },
    {
        path: "/dvojkakelihov",
        component: DvojkaKelihov,
    },
    {
        path: "/trojkakelihov",
        component: TrojkaKelihov,
    },
    {
        path: "/stiricakelihov",
        component: StiricaKelihov,
    },
    {
        path: "/peticakelihov",
        component: PeticaKelihov,
    },
    {
        path: "/sesticakelihov",
        component: SesticaKelihov,
    },
    {
        path: "/sedmicakelihov",
        component: SedmicaKelihov,
    },
    {
        path: "/osmicakelihov",
        component: OsmicaKelihov,
    },
    {
        path: "/deveticakelihov",
        component: DeveticaKelihov,
    },
    {
        path: "/deseticakelihov",
        component: DeseticaKelihov,
    },
    {
        path: "/pazkelihov",
        component: PazKelihov,
    },
    {
        path: "/vitezkelihov",
        component: VitezKelihov,
    },
    {
        path: "/kraljicakelihov",
        component: KraljicaKelihov,
    },
    {
        path: "/kraljkelihov",
        component: KraljKelihov,
    },
    // Meči
    {
        path: "/asmecev",
        component: AsMecev,
    },
    {
        path: "/dvojkamecev",
        component: DvojkaMecev,
    },
    {
        path: "/trojkamecev",
        component: TrojkaMecev,
    },
    {
        path: "/stiricamecev",
        component: StiricaMecev,
    },
    {
        path: "/peticamecev",
        component: PeticaMecev,
    },
    {
        path: "/sesticamecev",
        component: SesticaMecev,
    },
    {
        path: "/sedmicamecev",
        component: SedmicaMecev,
    },
    {
        path: "/osmicamecev",
        component: OsmicaMecev,
    },
    {
        path: "/deveticamecev",
        component: DeveticaMecev,
    },
    {
        path: "/deseticamecev",
        component: DeseticaMecev,
    },
    {
        path: "/pazmecev",
        component: PazMecev,
    },
    {
        path: "/vitezmecev",
        component: VitezMecev,
    },
    {
        path: "/kraljicamecev",
        component: KraljicaMecev,
    },
    {
        path: "/kraljmecev",
        component: KraljMecev,
    },
    // Pentaklji,
    {
        path: "/aspentakljev",
        component: AsPentaklji,
    },
    {
        path: "/dvojkapentakljev",
        component: DvojkaPentaklji,
    },
    {
        path: "/trojkapentakljev",
        component: TrojkaPentaklji,
    },
    {
        path: "/stiricapentakljev",
        component: StiricaPentaklji,
    },
    {
        path: "/peticapentakljev",
        component: PeticaPentaklji,
    },
    {
        path: "/sesticapentakljev",
        component: SesticaPentaklji,
    },
    {
        path: "/sedmicapentakljev",
        component: SedmicaPentaklji,
    },
    {
        path: "/osmicapentakljev",
        component: OsmicaPentaklji,
    },
    {
        path: "/deveticapentakljev",
        component: DeveticaPentaklji,
    },
    {
        path: "/deseticapentakljev",
        component: DeseticaPentaklji,
    },
    {
        path: "/pazpentakljev",
        component: PazPentaklji,
    },
    {
        path: "/vitezpentakljev",
        component: VitezPentaklji,
    },
    {
        path: "/kraljicapentakljev",
        component: KraljicaPentaklji,
    },
    {
        path: "/kraljpentakljev",
        component: KraljPentaklji,
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
