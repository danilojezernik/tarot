import Muladhara from '@/assets/chakre/muladhara.png'
import Swadhisthana from '@/assets/chakre/swadhisthana.png'
import Manipura from '@/assets/chakre/manipura.png'
import Anahata from '@/assets/chakre/anahata.png'
import Vishuddhi from '@/assets/chakre/vishuddhi.png'
import Ajna from '@/assets/chakre/ajna.png'
import Bindu from '@/assets/chakre/bindu.png'
import Sahasrara from '@/assets/chakre/sahasrara.png'

export default {
    data() {
        return {
            // NASLOV
            meditacijaPrva: 'Meditacija na telo in tratak',
            meditacijaDruga: 'Meditacija na dih in na čakre',
            meditacijaTretja: 'Meditacija ponovnega rojstva',

            //KRATKA RAZLAGA
            meditacijaTelo: 'Če ste začetnik in še nikoli niste zares meditirali, potem sledite navodilom tukaj. Meditacija na telo sprosti celotno telo in ga naredi negibnega, kar pa je potrebno, če želimo doseči globoka stanja. Pri meditaciji, ki sledi, se osredotočamo na različne dele telesa, jih sproščamo in pripravljamo fizično telo, da ostane ves čas prakse mirno um pa osredotočen in miren. Po meditaciji na telo lahko naredite še kratko tratako, ki pomaga čistiti čustvene blokade in znatno izboljša fokus.',
            meditacijaDih: 'Če že imate izkušnje z meditacijo in je vaše telo med celotno prakso že mirno in lahko sedite v izbranem položaju več kot 15 minut, potem je ta meditacija tista, s katero lahko začnete. Pri tej se osredotočimo najprej na telo in potem na dih in mantro diha. Po končani meditaciji na dih lahko dodate še meditacijo na vseh 7 čaker. S to temi tehnikami se pripravimo, da se lahko spustimo dovolj globoko, da resnično izkusimo vsako karto v celoti in, da si naberemo kar se da izkušenj.',
            meditacijaRojstvo: 'Ta meditacija je za tiste, ki so zdravi v vseh pomenih in so sposobni sedeti pri miru 30 minut ali več. Meditacija je namenjena popolni prenovi vas v celoti. Če osvojite to meditacijo potem ste pripravljeni za bolj napredne tehnike in ste odprti za modrosti tarota in/ali kabale.',

            // TEHNIKA
            meditacijaNaTelo: '<p>Usedite se v udoben meditacijski položaj, dlani postavite na kolena in zaprite oči. Začnite se zavedati svojega globokega diha in štejte 5 globokih dihov. Sedaj se začnite zavedati vsega telesa. Zavedajte se svojega telesa, ki sedi v meditacijskem položaju.<ul><li>Zavedajte se položaja rok in položaja nog. <b>( . . . )</b></li><li>Zavedajte hrbtenice, ki podpira glavo. Zavedajte se celotnega telesa in hrbtenice.<b>( . . . )</b></li><li>Začnite se zavedati svojega telesa v pravilnem položaju in z glavo nagnjeno malo nazaj. <b>( . . . )</b></li><li>Zavedajte se stičnih toč telesa s tlemi, zavedajte se stičnih točk rok z nogami, zavedajte se stičnih točk telesa z oblačili. <b>( . . . )</b></li><li>Zavedajte se telesa v prostoru in prostora v katerem ste. Vizualizirajte se kako sedite iz vseh smeri. <b>( . . . )</b></li><li>Zavedajte se celotnega telesa in vseh občutkov, ki jih čutite od prijetnih, do neprijetnih in do tistih nevtralnih. Zavedajte se tega. <b>( . . . )</b></li><li>Začnite se sedaj zavedati desne roke. Zavedajte se samo desne roke in nič drugega. Naj bo vso vaše zavedanje in veš vas fokus na desni roki. Čutite kakršne koli občutke v desni roki. <b>( . . . )</b></li><li>Sedaj nadaljujte z istim zavedanjem k desni nogi in se zavedajte samo desne noge in nič drugega. Zaznajte kakršne koli občutke v desni nogi.<b>( . . . )</b></li><li>Nadaljujte z enakim zavedanjem do leve roke in nato leve noge. Potem na zadnji del trupa, glava, vrat, ramena, prsni koš in nato trebuh.</li><li>Spet se zavedajte vsega telesa in nič drugega. Zavedajte se telesa v celoti. Naj bo to zavedanje telesa še močnejše kot prej. Sedaj ponovite del zavedanja posameznih delov telesa in ko naredite krog se spet zavedajte celotnega dela telesa in naj bo zavedanje telesa še močnejše kot prej.<b>( . . . )</b></li><li></li></ul></p>',
            tratak: '',

            MeditacijaNaDih: '',
            chakraShuddhi: '',

            meditacijaPonovnegaRojstva: '',

            muladhara: Muladhara,
            swadhisthana: Swadhisthana,
            manipura: Manipura,
            anahata: Anahata,
            vishuddhi: Vishuddhi,
            ajna: Ajna,
            bindu: Bindu,
            sahasrara: Sahasrara,

            // MODAL
            showModalTelo: false,
            showModalDih: false,
            showModalMeditacija: false,
       }
    }
}
