import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import vfmPlugin from 'vue-final-modal';
import { MotionPlugin } from '@vueuse/motion'
import { TroisJSVuePlugin } from 'troisjs';
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'animate.css';
// STYLE
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// HEADER - FOOTER - BREADCRUMB GLOBAL
import Header from '@/components/header_footer/Header/Header.vue'
import Footer from '@/components/header_footer/Footer/Footer.vue'
import goBack from "@/components/Utils/Nazaj/Nazaj.vue"
import naVrh from "@/components/Utils/NaVrh/NaVrh.vue"


const app = createApp(App)

app.config.globalProperties.api = 'http://127.0.0.1:5000/'
// HEADER FOOTER GLOBAL
app.component('app-header',Header);
app.component('app-footer',Footer);
app.component('app-goback',goBack);
app.component('app-navrh',naVrh);

app.use(VueAxios, axios)
app.use(TroisJSVuePlugin);
app.use(MotionPlugin)
app.use(vfmPlugin)
app.use(router)
app.mount('#app')
