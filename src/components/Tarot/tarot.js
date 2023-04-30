import thefool from '@/assets/majorarcana/the-fool.png'
import wands from '@/assets/wands/ace-of-wands.png'
import cups from '@/assets/cups/ace-of-cups.png'
import sword from '@/assets/swords/ace-of-swords.png'
import pentacles from '@/assets/pentacles/ace-of-pentacles.png'

export default {
    data() {
        return {
            modrost: '"Cilj je, da Tarot spregovori, vendar arkane govorijo samo s tistimi, ki so se jih naučili razumeti!"',
            arkane: [
                {
                    id: 1,
                    image: thefool,
                    opis: 'Velika Arkana',
                    to: '/glavna-arkana'
                },
                {
                    id: 2,
                    image: wands,
                    opis: 'Mala Arkana:<br>Palice',
                    to: '/palice'
                },
                {
                    id: 3,
                    image: cups,
                    opis: 'Mala Arkana:<br>Kelihi',
                    to: '/kelihi'
                },
                {
                    id: 4,
                    image: sword,
                    opis: 'Mala Arkana:<br>Meči',
                    to: '/meci'
                },
                {
                    id: 5,
                    image: pentacles,
                    opis: 'Mala Arkana:<br>Pentakli',
                    to: '/pentakli'
                }
            ],
            opis: '<p>22 kart velike arkane predstavlja življenjske karmične in duhovne lekcije. Predstavljajo pot do duhovnega samozavedanja in prikazujejo različne stopnje, s katerimi se srečujemo, ko iščemo večji pomen in razumevanje. Na ta način imajo karte Velike arkane globoke in pomembne lekcije na ravni duše.</p><p>56 kart male arkane odraža preizkušnje in stiske, ki jih doživljamo vsak dan. Te karte tarota poudarjajo bolj praktične vidike življenja in se lahko nanašajo na trenutna vprašanja, ki imajo začasen ali manjši vpliv.</p><p>Znotraj kart male arkane je 16 tarot dvornih kart, od katerih vsaka predstavlja 16 različnih osebnostnih značilnosti, ki jih lahko kadar koli izrazimo. Obstaja tudi 40 oštevilčenih kart, organiziranih v 4 barve – kelihi, pentakli, meči in palice – vsaka z 10 kartami, ki predstavljajo različne situacije, s katerimi se srečujemo vsak dan.</p><p>Nekateri bodo morda rekli, da so karte tarot preprosto črnilo na papirju. Vendar pa sem ugotovil naslednje, medtem, ko sem se poglabljal v njih:</p><p class="fw-bold">Tarot je knjiga zgodb našega življenja, ogledalo naše duše in ključ do naše notranje modrosti.</p><p>Vsako duhovno lekcijo, s katero se srečamo v življenju, lahko najdemo v 78 kartah tarota. In ko se posvetujemo s tarotom, nam bodo pokazane natančne lekcije, ki se jih moramo naučiti in obvladati, da bomo živeli navdihnjeno življenje. To je, kot da bi sebi postavili ogledalo, da bi lahko dostopali do svoje podzavesti in se dotaknili modrosti (in odgovorov), ki živi v vseh nas.</p>'
        }
    }
}
