import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import vfmPlugin from 'vue-final-modal';

import 'animate.css';
// STYLE
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// HEADER - FOOTER - BREADCRUMB GLOBAL
import Header from '@/components/header_footer/Header/Header.vue'
import Footer from '@/components/header_footer/Footer/Footer.vue'
import naVrh from "@/components/Utils/NaVrh/NaVrh.vue"

const app = createApp(App)

// HEADER FOOTER GLOBAL
app.component('app-header',Header);
app.component('app-footer',Footer);
app.component('app-navrh',naVrh);

app.use(vfmPlugin)
app.use(router)
app.mount('#app')
