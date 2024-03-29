import axios from 'axios'

// Velika Arkana
import fool from '@/assets/majorarcana/the-fool.png'
import foolDown from '@/assets/majorarcana/the-fool-down.png'
import magician from '@/assets/majorarcana/the-magician.png'
import magicianDown from '@/assets/majorarcana/the-magician-down.png'
import priestess from '@/assets/majorarcana/the-high-priestess.png'
import priestessDown from '@/assets/majorarcana/the-high-priestess-down.png'
import empress from '@/assets/majorarcana/the-empress.png'
import empressDown from '@/assets/majorarcana/the-empress-down.png'
import emperor from '@/assets/majorarcana/the-emperor.png'
import emperorDown from '@/assets/majorarcana/the-emperor-down.png'
import hierophant from '@/assets/majorarcana/the-hierophant.png'
import hierophantDown from '@/assets/majorarcana/the-hierophant-down.png'
import lovers from '@/assets/majorarcana/the-lovers.png'
import loversDown from '@/assets/majorarcana/the-lovers-down.png'
import chariot from '@/assets/majorarcana/the-chariot.png'
import chariotDown from '@/assets/majorarcana/the-chariot-down.png'
import strength from '@/assets/majorarcana/strength.png'
import strengthDown from '@/assets/majorarcana/strength-down.png'
import hermit from '@/assets/majorarcana/the-hermit.png'
import hermitDown from '@/assets/majorarcana/the-hermit-down.png'
import wheel from '@/assets/majorarcana/wheel-of-fortune.png'
import wheelDown from '@/assets/majorarcana/wheel-of-fortune-down.png'
import justice from '@/assets/majorarcana/justice.png'
import justiceDown from '@/assets/majorarcana/justice-down.png'
import hanged from '@/assets/majorarcana/the-hanged-man.png'
import hangedDown from '@/assets/majorarcana/the-hanged-man-down.png'
import death from '@/assets/majorarcana/death.png'
import deathDown from '@/assets/majorarcana/death-down.png'
import temperance from '@/assets/majorarcana/temperance.png'
import temperanceDown from '@/assets/majorarcana/temperance-down.png'
import devil from '@/assets/majorarcana/the-devil.png'
import devilDown from '@/assets/majorarcana/the-devil-down.png'
import tower from '@/assets/majorarcana/the-tower.png'
import towerDown from '@/assets/majorarcana/the-tower-down.png'
import star from '@/assets/majorarcana/the-star.png'
import starDown from '@/assets/majorarcana/the-star-down.png'
import moon from '@/assets/majorarcana/the-moon.png'
import moonDown from '@/assets/majorarcana/the-moon-down.png'
import sun from '@/assets/majorarcana/the-sun.png'
import sunDown from '@/assets/majorarcana/the-sun-down.png'
import judgement from '@/assets/majorarcana/judgement.png'
import judgementDown from '@/assets/majorarcana/judgement-down.png'
import world from '@/assets/majorarcana/the-world.png'
import worldDown from '@/assets/majorarcana/the-world-down.png'

// Palice
import acewands from '@/assets/wands/ace-of-wands.png'
import acewandsDown from '@/assets/wands/ace-of-wands-down.png'
import twowands from '@/assets/wands/two-of-wands.png'
import twowandsDown from '@/assets/wands/two-of-wands-down.png'
import threewands from '@/assets/wands/three-of-wands.png'
import threewandsDown from '@/assets/wands/three-of-wands-down.png'
import fourwands from '@/assets/wands/four-of-wands.png'
import fourwandsDown from '@/assets/wands/four-of-wands-down.png'
import fivewands from '@/assets/wands/five-of-wands.png'
import fivewandsDown from '@/assets/wands/five-of-wands-down.png'
import sixwands from '@/assets/wands/six-of-wands.png'
import sixwandsDown from '@/assets/wands/six-of-wands-down.png'
import sevenwands from '@/assets/wands/seven-of-wands.png'
import sevenwandsDown from '@/assets/wands/seven-of-wands-down.png'
import eightwands from '@/assets/wands/eight-of-wands.png'
import eightwandsDown from '@/assets/wands/eight-of-wands-down.png'
import ninewands from '@/assets/wands/nine-of-wands.png'
import ninewandsDown from '@/assets/wands/nine-of-wands-down.png'
import tenwands from '@/assets/wands/ten-of-wands.png'
import tenwandsDown from '@/assets/wands/ten-of-wands-down.png'
import pagewands from '@/assets/wands/page-of-wands.png'
import pagewandsDown from '@/assets/wands/page-of-wands-down.png'
import knightwands from '@/assets/wands/knight-of-wands.png'
import knightwandsDown from '@/assets/wands/knight-of-wands-down.png'
import queenwands from '@/assets/wands/queen-of-wands.png'
import queenwandsDown from '@/assets/wands/queen-of-wands-down.png'
import kingwands from '@/assets/wands/king-of-wands.png'
import kingwandsDown from '@/assets/wands/king-of-wands-down.png'

// Kelihi
import acecups from '@/assets/cups/ace-of-cups.png'
import acecupsDown from '@/assets/cups/ace-of-cups-down.png'
import twocups from '@/assets/cups/two-of-cups.png'
import twocupsDown from '@/assets/cups/two-of-cups-down.png'
import threecups from '@/assets/cups/three-of-cups.png'
import threecupsDown from '@/assets/cups/three-of-cups-down.png'
import fourcups from '@/assets/cups/four-of-cups.png'
import fourcupsDown from '@/assets/cups/four-of-cups-down.png'
import fivecups from '@/assets/cups/five-of-cups.png'
import fivecupsDown from '@/assets/cups/five-of-cups-down.png'
import sixcups from '@/assets/cups/six-of-cups.png'
import sixcupsDown from '@/assets/cups/six-of-cups-down.png'
import sevencups from '@/assets/cups/seven-of-cups.png'
import sevencupsDown from '@/assets/cups/seven-of-cups-down.png'
import eightcups from '@/assets/cups/eight-of-cups.png'
import eightcupsDown from '@/assets/cups/eight-of-cups-down.png'
import ninecups from '@/assets/cups/nine-of-cups.png'
import ninecupsDown from '@/assets/cups/nine-of-cups-down.png'
import tencups from '@/assets/cups/ten-of-cups.png'
import tencupsDown from '@/assets/cups/ten-of-cups-down.png'
import pagecups from '@/assets/cups/page-of-cups.png'
import pagecupsDown from '@/assets/cups/page-of-cups-down.png'
import knightcups from '@/assets/cups/knight-of-cups.png'
import knightcupsDown from '@/assets/cups/knight-of-cups-down.png'
import queencups from '@/assets/cups/queen-of-cups.png'
import queencupsDown from '@/assets/cups/queen-of-cups-down.png'
import kingcups from '@/assets/cups/king-of-cups.png'
import kingcupsDown from '@/assets/cups/king-of-cups-down.png'

// Meči
import aceswords from '@/assets/swords/ace-of-swords.png'
import aceswordsDown from '@/assets/swords/ace-of-swords-down.png'
import twoswords from '@/assets/swords/two-of-swords.png'
import twoswordsDown from '@/assets/swords/two-of-swords-down.png'
import threeswords from '@/assets/swords/three-of-swords.png'
import threeswordsDown from '@/assets/swords/three-of-swords-down.png'
import fourswords from '@/assets/swords/four-of-swords.png'
import fourswordsDown from '@/assets/swords/four-of-swords-down.png'
import fiveswords from '@/assets/swords/five-of-swords.png'
import fiveswordsDown from '@/assets/swords/five-of-swords-down.png'
import sixswords from '@/assets/swords/six-of-swords.png'
import sixswordsDown from '@/assets/swords/six-of-swords-down.png'
import sevenswords from '@/assets/swords/seven-of-swords.png'
import sevenswordsDown from '@/assets/swords/seven-of-swords-down.png'
import eightswords from '@/assets/swords/eight-of-swords.png'
import eightswordsDown from '@/assets/swords/eight-of-swords-down.png'
import nineswords from '@/assets/swords/nine-of-swords.png'
import nineswordsDown from '@/assets/swords/nine-of-swords-down.png'
import tenswords from '@/assets/swords/ten-of-swords.png'
import tenswordsDown from '@/assets/swords/ten-of-swords-down.png'
import pageswords from '@/assets/swords/page-of-swords.png'
import pageswordsDown from '@/assets/swords/page-of-swords-down.png'
import knightswords from '@/assets/swords/knight-of-swords.png'
import knightswordsDown from '@/assets/swords/knight-of-swords-down.png'
import queenswords from '@/assets/swords/queen-of-swords.png'
import queenswordsDown from '@/assets/swords/queen-of-swords-down.png'
import kingswords from '@/assets/swords/king-of-swords.png'
import kingswordsDown from '@/assets/swords/king-of-swords-down.png'

// Pentaklji
import acepentacles from '@/assets/pentacles/ace-of-pentacles.png'
import acepentaclesDown from '@/assets/pentacles/ace-of-pentacles-down.png'
import twopentacles from '@/assets/pentacles/two-of-pentacles.png'
import twopentaclesDown from '@/assets/pentacles/two-of-pentacles-down.png'
import threepentacles from '@/assets/pentacles/three-of-pentacles.png'
import threepentaclesDown from '@/assets/pentacles/three-of-pentacles-down.png'
import fourpentacles from '@/assets/pentacles/four-of-pentacles.png'
import fourpentaclesDown from '@/assets/pentacles/four-of-pentacles-down.png'
import fivepentacles from '@/assets/pentacles/five-of-pentacles.png'
import fivepentaclesDown from '@/assets/pentacles/five-of-pentacles-down.png'
import sixpentacles from '@/assets/pentacles/six-of-pentacles.png'
import sixpentaclesDown from '@/assets/pentacles/six-of-pentacles-down.png'
import sevenpentacles from '@/assets/pentacles/seven-of-pentacles.png'
import sevenpentaclesDown from '@/assets/pentacles/seven-of-pentacles-down.png'
import eightpentacles from '@/assets/pentacles/eight-of-pentacles.png'
import eightpentaclesDown from '@/assets/pentacles/eight-of-pentacles-down.png'
import ninepentacles from '@/assets/pentacles/nine-of-pentacles.png'
import ninepentaclesDown from '@/assets/pentacles/nine-of-pentacles-down.png'
import tenpentacles from '@/assets/pentacles/ten-of-pentacles.png'
import tenpentaclesDown from '@/assets/pentacles/ten-of-pentacles-down.png'
import pagepentacles from '@/assets/pentacles/page-of-pentacles.png'
import pagepentaclesDown from '@/assets/pentacles/page-of-pentacles-down.png'
import knightpentacles from '@/assets/pentacles/knight-of-pentacles.png'
import knightpentaclesDown from '@/assets/pentacles/knight-of-pentacles-down.png'
import queenpentacles from '@/assets/pentacles/queen-of-pentacles.png'
import queenpentaclesDown from '@/assets/pentacles/queen-of-pentacles-down.png'
import kingpentacles from '@/assets/pentacles/king-of-pentacles.png'
import kingpentaclesDown from '@/assets/pentacles/king-of-pentacles-down.png'

export default {
    data() {
        return {
            blogPost: [],
            pozdravi: 'Naj bo vaše iskanje vedno polno čudes Norca, dosežkov Magika, čutnosti Visoke Svečenice, ljubezni Cesarice, pameti Cesarja, Svečenikovega verovanja, jasnosti Ljubimcev, moči Kočije, poguma Moči, Puščavnikove modrosti, sreče Kolesa Sreče, pravičnosti Resnice, pomoči Obešenca, osvoboditev Smrti, mirnosti Zmernosti, spoznanj Hudiča, varnosti Trdnjave, upanja Zvezde, intuicije Lune, veselja Sonca, svobode Presoje in enotnosti Sveta.',
            slike: [
                // Velika Arkana
                {
                    name: '0 - Norec',
                    text: '<p><b>Univerzalni arhetip:</b> Sonce za Norcu nakazuje na božanski duh, ki napolnjuje vse stvarstvo z življenjem. Norec stopi s pečine: Duša bo vzela novo telo in življenje. Božanski otrok je poslan od zgoraj, da prinese duhovni dvig človeštva. Norec je univerzalno življenjsko načelo imenovano nadzavest, nespremenljiva resničnost, ki se izraža skozi nenehno spreminjanje.</p><p>Ali se nenadoma počutite pustolovsko? Ali je čas, da sledite svojim notranjih vzgibov in ne pričakovanjem in vzgibom drugih? Ali sebe dojemate kot začetnika na nekem področju: kariera, odnos, ljubezen, skrb zase? Katero neraziskano področje svojega življenja želite raziskati? Ali ste nepričakovano videli sebe ali življenjske situacije iz večih zornih kotov? Ali čutite potiskanje "duha" in vas vleče k sebi usoda? Se počutite, kot da ste voden skozi življenje? Ali morda drugi obsojajo vaše brezskrbno vedenje kot neumno? Kakšno korist vam lahko prinese majhna neumnost? Kdo izkorišča vaše pomanjkanje izkušenj ali znanja? Čez kakšen prepad ali neznani sklop ali okoliščine greš brez strahu? Kje morate zaupati skoku v neznano? Ali bi vam lahko koristilo, če bi več pozornosti posvetili svoji intuiciji in manj svojemu racionalnemu umu?</p>',
                    src: fool,
                    to: "/the-fool"
                },
                {
                    name: '0 - Norec',
                    text: '<p><b>Univerzalni arhetip:</b> Sonce za Norcu nakazuje na božanski duh, ki napolnjuje vse stvarstvo z življenjem. Norec stopi s pečine: Duša bo vzela novo telo in življenje. Božanski otrok je poslan od zgoraj, da prinese duhovni dvig človeštva. Norec je univerzalno življenjsko načelo imenovano nadzavest, nespremenljiva resničnost, ki se izraža skozi nenehno spreminjanje.</p><p>Ali se nenadoma počutite pustolovsko? Ali je čas, da sledite svojim notranjih vzgibov in ne pričakovanjem in vzgibom drugih? Ali sebe dojemate kot začetnika na nekem področju: kariera, odnos, ljubezen, skrb zase? Katero neraziskano področje svojega življenja želite raziskati? Ali ste nepričakovano videli sebe ali življenjske situacije iz večih zornih kotov? Ali čutite potiskanje "duha" in vas vleče k sebi usoda? Se počutite, kot da ste voden skozi življenje? Ali morda drugi obsojajo vaše brezskrbno vedenje kot neumno? Kakšno korist vam lahko prinese majhna neumnost? Kdo izkorišča vaše pomanjkanje izkušenj ali znanja? Čez kakšen prepad ali neznani sklop ali okoliščine greš brez strahu? Kje morate zaupati skoku v neznano? Ali bi vam lahko koristilo, če bi več pozornosti posvetili svoji intuiciji in manj svojemu racionalnemu umu?</p>',
                    src: foolDown,
                    to: "/the-fool"
                },
                {
                    name: 'I - Magik',
                    text: '<p><b>Univerzalni arhetip:</b> Magikove roke sporočajo starodavni hermetični aksiom: "Kakor zgoraj, tako spodaj; kakor spodaj, tako zgoraj." Vsaka človeška osebnost ali ego je nosilec, medij ali kanal, skozi katerega se manifestira edini božanski duh. Magik je vaše zavestno zavedanje sebe kot posameznika. Njegova palica nakazuje dele, ki jim namen in pozornost služita pri oblikovanju vaših želja. Štiri orodja na njegovi mizi simbolizirajo štiridelni proces ustvarjanja: navdih (palica), domišljija (skodelica), razlikovanje (meč) in manifestacija (pentakle).</p><p>Kako lahko opazite in izkusiti več čarovnije v vsakdanjem življenju? Ali bi lahko zmanjšali veliko stresa, če bi živeli več v sedanjosti? Kaj želite manifestirati? Katera situacija zahteva vašo polno pozornost? Imate težave z osredotočanjem pozornosti? Bi vam lahko koristilo izboljšanje komunikacije? Znate ceniti in sprejemati svojo ali tujo osebnost? Kateri spremembi se upirate ali se ji predajate? Zaradi česa se počutite raztreseni in nemirni? Katero področje vašega življenja kličejo po spremembi? Je vaše razmišljanje zmedeno? Se počutite kot prenašalec sporočil? Ali podcenjujete svojo sposobnost učenja novih stvari? Kakšen cilj manifestirate s koncentracijo pozornosti? Katera orodja so pri roki? Ali se zavedate svojega višjega Jaza, ki prihaja skozi vašo osebnost? Ali veste, da imate popolno telo in osebnost za svoje duhovno delo?</p>',
                    src: magician,
                    to: "/the-magician"
                },
                {
                    name: 'I - Magik',
                    text: '<p><b>Univerzalni arhetip:</b> Magikove roke sporočajo starodavni hermetični aksiom: "Kakor zgoraj, tako spodaj; kakor spodaj, tako zgoraj." Vsaka človeška osebnost ali ego je nosilec, medij ali kanal, skozi katerega se manifestira edini božanski duh. Magik je vaše zavestno zavedanje sebe kot posameznika. Njegova palica nakazuje dele, ki jim namen in pozornost služita pri oblikovanju vaših želja. Štiri orodja na njegovi mizi simbolizirajo štiridelni proces ustvarjanja: navdih (palica), domišljija (skodelica), razlikovanje (meč) in manifestacija (pentakle).</p><p>Kako lahko opazite in izkusiti več čarovnije v vsakdanjem življenju? Ali bi lahko zmanjšali veliko stresa, če bi živeli več v sedanjosti? Kaj želite manifestirati? Katera situacija zahteva vašo polno pozornost? Imate težave z osredotočanjem pozornosti? Bi vam lahko koristilo izboljšanje komunikacije? Znate ceniti in sprejemati svojo ali tujo osebnost? Kateri spremembi se upirate ali se ji predajate? Zaradi česa se počutite raztreseni in nemirni? Katero področje vašega življenja kličejo po spremembi? Je vaše razmišljanje zmedeno? Se počutite kot prenašalec sporočil? Ali podcenjujete svojo sposobnost učenja novih stvari? Kakšen cilj manifestirate s koncentracijo pozornosti? Katera orodja so pri roki? Ali se zavedate svojega višjega Jaza, ki prihaja skozi vašo osebnost? Ali veste, da imate popolno telo in osebnost za svoje duhovno delo?</p>',
                    src: magicianDown,
                    to: "/the-magician"
                },
                {
                    name: 'II - Visoka Svečenica',
                    text: '<p><b>Univerzalni arhetip:</b> Svečenica predstavlja popolno nevtralnost, saj sedi med stebroma pozitivne in negativne polarnosti. Njen zvitek nakazuje, da nosi zapis o vsem, kar se je zgodilo vam in človeški rasi. Dojemljivost svečenice je vaša osebna podzavest in kolektivno nezavedno, združena v eno.</p><p>Kako vam lahko koristi, če ste nevtralni? Ste nagnjeni k življenju v preteklosti? Ali nehote prejemate čustva ali misli drugih? Na kaj reagirate? Kateri spomini/sanje se obujajo? Katera navada se ponovno aktivira? Kaj vam govori vaša intuicija? Ste bili preveč vsiljivi? Kje bi lahko bila dojemljivost koristna? Kaj bi lahko pridobili s samorefleksijo? So se vaši instinkti prebudili? Ali imate nezemeljske izkušnje? Kakšna situacija se nevtralizira? Se počutite neodvisni, deviški ali nepokvarjeni? Ali ste zvesti samemu sebi? Ste zazrli onkraj tančice fizične realnosti? Katere občutke ali spomine blokirate? Kje bi lahko bil pasiven odnos škodljiv? Katerega podzavestnega vzorca se začenjate zavedati? Ali nenadoma doživljate, da vaša podzavest odseva tisto, na kar je pozorna vaša zavest? Ali se vaša psihična občutljivost povečuje? Ali poskušate videti v prihodnost?</p>',
                    src: priestess,
                    to: "/the-high-priestess"
                },
                {
                    name: 'II - Visoka Svečenica',
                    text: '<p><b>Univerzalni arhetip:</b> Svečenica predstavlja popolno nevtralnost, saj sedi med stebroma pozitivne in negativne polarnosti. Njen zvitek nakazuje, da nosi zapis o vsem, kar se je zgodilo vam in človeški rasi. Dojemljivost svečenice je vaša osebna podzavest in kolektivno nezavedno, združena v eno.</p><p>Kako vam lahko koristi, če ste nevtralni? Ste nagnjeni k življenju v preteklosti? Ali nehote prejemate čustva ali misli drugih? Na kaj reagirate? Kateri spomini/sanje se obujajo? Katera navada se ponovno aktivira? Kaj vam govori vaša intuicija? Ste bili preveč vsiljivi? Kje bi lahko bila dojemljivost koristna? Kaj bi lahko pridobili s samorefleksijo? So se vaši instinkti prebudili? Ali imate nezemeljske izkušnje? Kakšna situacija se nevtralizira? Se počutite neodvisni, deviški ali nepokvarjeni? Ali ste zvesti samemu sebi? Ste zazrli onkraj tančice fizične realnosti? Katere občutke ali spomine blokirate? Kje bi lahko bil pasiven odnos škodljiv? Katerega podzavestnega vzorca se začenjate zavedati? Ali nenadoma doživljate, da vaša podzavest odseva tisto, na kar je pozorna vaša zavest? Ali se vaša psihična občutljivost povečuje? Ali poskušate videti v prihodnost?</p>',
                    src: priestessDown,
                    to: "/the-high-priestess"
                },
                {
                    name: 'III - Cesarica',
                    text: '<p><b>Univerzalni arhetip:</b> Bujna okolica nakazuje, da je Cesarica tako mati narava kot materinski ali negovalni del vas. Njeno nosečniško telo nakazuje, da je polna želje, da svoje otroke, ki simbolizirajo njene strasti, spravi v obliko. Cesarica je vaša ustvarjalna domišljija - ko ste napolnjeni z željo po ustvarjanju, bi morali biti pripravljeni to negovati do rojstva in po njem. Če tega ne storite, umre ali pa ostane v kraljestvu želja in fantazij. Je tudi božanska mati.</p><p>Ali je treba odnos z mamo ali drugimi ženskami v vašem življenju popraviti? Kje ste kot mati? Potrebujete pozornost? Se počutite čutno? Kako vladate svoji kraljici? Ali se počutite plodne ali ste brez ustvarjalnega soka? Kakšne sanje sadite? Kakšna semena obrodijo sadove? Katere ideje želite ustvariti, roditi ali prekiniti? Ali ste v stiku s svojo srčno željo? Ali doživljate neverjetno moč svoje ustvarjalne domišljije? Kako si predstavljate svojo prihodnost? Kako bi lahko obudili svojo ustvarjalnost? Do česa ali koga čutite zaščitniškost? Koga kaznujete z odrekanjem naklonjenosti? Kaj potrebuje več ali manj negovanja v vašem življenju? Kaj potrebuje ustvarjalni pridih? Želite boljše ženske vzornice? Ali bi vam lahko koristilo preživljanje več časa v naravi? Kako ohranjate okolje? Ali razvijate odnos s svojo žensko stranjo?</p>',
                    src: empress,
                    to: "/the-empress"
                },
                {
                    name: 'III - Cesarica',
                    text: '<p><b>Univerzalni arhetip:</b> Bujna okolica nakazuje, da je Cesarica tako mati narava kot materinski ali negovalni del vas. Njeno nosečniško telo nakazuje, da je polna želje, da svoje otroke, ki simbolizirajo njene strasti, spravi v obliko. Cesarica je vaša ustvarjalna domišljija - ko ste napolnjeni z željo po ustvarjanju, bi morali biti pripravljeni to negovati do rojstva in po njem. Če tega ne storite, umre ali pa ostane v kraljestvu želja in fantazij. Je tudi božanska mati.</p><p>Ali je treba odnos z mamo ali drugimi ženskami v vašem življenju popraviti? Kje ste kot mati? Potrebujete pozornost? Se počutite čutno? Kako vladate svoji kraljici? Ali se počutite plodne ali ste brez ustvarjalnega soka? Kakšne sanje sadite? Kakšna semena obrodijo sadove? Katere ideje želite ustvariti, roditi ali prekiniti? Ali ste v stiku s svojo srčno željo? Ali doživljate neverjetno moč svoje ustvarjalne domišljije? Kako si predstavljate svojo prihodnost? Kako bi lahko obudili svojo ustvarjalnost? Do česa ali koga čutite zaščitniškost? Koga kaznujete z odrekanjem naklonjenosti? Kaj potrebuje več ali manj negovanja v vašem življenju? Kaj potrebuje ustvarjalni pridih? Želite boljše ženske vzornice? Ali bi vam lahko koristilo preživljanje več časa v naravi? Kako ohranjate okolje? Ali razvijate odnos s svojo žensko stranjo?</p>',
                    src: empressDown,
                    to: "/the-empress"
                },
                {
                    name: 'IV - Cesar',
                    text: '<p><b>Univerzalni arhetip:</b> Cesar v levi roki drži globus, ki simbolizira, kako po naravi bdi – ljubeče vlada in ureja – svet, ki ga je ustvarila njegovo nasprotje, Cesarica. Njegova dolga bela brada namiguje na "Pradavnega", božanskega Očeta. Cesar je tisti del vas, ki je pozoren, razumen, organiziran in discipliniran, kar namiguje, da je brez teh lastnosti ustvarjalnost kratkotrajna in ne obrodi sadov.</p>Ali je treba vaš odnos z očetom ali drugimi moškimi v vašem življenju kaj popraviti? Kaj ste kot oče? Kdo vas je premagal? Kakšen boj za moč doživljate? Bi vam lahko koristila boljša pravila in predpisi? Katerim pravilom ali predpisom se upirate? Ali želite biti bolj samoregulativni? Bi vam lahko koristilo, če bi bili bolj organizirani? Ali je čas, da prevzamete odgovornost? Ali ste odločni ali agresivni? Kaj potrebuje vašo ljubečo zaščito? Bi vam lahko koristilo, če bi svoj um odprli za gledanje iz številnih zornih kotov? Kaj bi pridobili z obiskovanjem tečajev usposabljanja za vodenje? Imate težave pri ravnanju z avtoritetami? Morda bi morali biti bolj ali manj razumni? Zakaj puščate razloge ob strani? Ste bili v svojem razmišljanju preveč analitični? Kateremu projektu bi koristile vaše organizacijske sposobnosti? Si želite boljše moške vzornike? Kaj potrebuje nadzor in disciplino? Ali razvijate odnos s svojo moško stranjo?</p>',
                    src: emperor,
                    to: "/the-emperor"
                },
                {
                    name: 'IV - Cesar',
                    text: '<p><b>Univerzalni arhetip:</b> Cesar v levi roki drži globus, ki simbolizira, kako po naravi bdi – ljubeče vlada in ureja – svet, ki ga je ustvarila njegovo nasprotje, Cesarica. Njegova dolga bela brada namiguje na "Pradavnega", božanskega Očeta. Cesar je tisti del vas, ki je pozoren, razumen, organiziran in discipliniran, kar namiguje, da je brez teh lastnosti ustvarjalnost kratkotrajna in ne obrodi sadov.</p>Ali je treba vaš odnos z očetom ali drugimi moškimi v vašem življenju kaj popraviti? Kaj ste kot oče? Kdo vas je premagal? Kakšen boj za moč doživljate? Bi vam lahko koristila boljša pravila in predpisi? Katerim pravilom ali predpisom se upirate? Ali želite biti bolj samoregulativni? Bi vam lahko koristilo, če bi bili bolj organizirani? Ali je čas, da prevzamete odgovornost? Ali ste odločni ali agresivni? Kaj potrebuje vašo ljubečo zaščito? Bi vam lahko koristilo, če bi svoj um odprli za gledanje iz številnih zornih kotov? Kaj bi pridobili z obiskovanjem tečajev usposabljanja za vodenje? Imate težave pri ravnanju z avtoritetami? Morda bi morali biti bolj ali manj razumni? Zakaj puščate razloge ob strani? Ste bili v svojem razmišljanju preveč analitični? Kateremu projektu bi koristile vaše organizacijske sposobnosti? Si želite boljše moške vzornike? Kaj potrebuje nadzor in disciplino? Ali razvijate odnos s svojo moško stranjo?</p>',
                    src: emperorDown,
                    to: "/the-emperor"
                },
                {
                    name: 'V – Svečenik',
                    text: '<p><b>Univerzalni arhetip:</b> Tako kot Visoka svečenica tudi Svečenik sedi med dvema stebroma, kar pomeni nevtralnost. Ta simbolika je tako pomembna, da se ponovi, ko sedi nad črno-belimi ploščicami na tleh. Prositi za notranje vodstvo in biti nato odprt za njegovo sprejemanje - ne glede na to, kakšno vodstvo je - je načelo, ki ga označujejo menihi (zavestni in podzavestni deli vas), ki klečijo pred Svečenikovimi nogami. Svečenikova roka signalizira "bodite mirni in poslušajte," in vam s tem sporoča, da prisluhnete resnici v svojem srcu.</p><p>S katero višjo avtoriteto se uglašujete? Kateri avtoriteti ste se uprli? Ali bi bilo vredno pustiti ob strani, kar mislite, da veste, da bi nekaj res vedeli? Kako bi vam lahko koristilo, če bi bili mirni in poslušali, preden bi ukrepali? Vas vera odbija ali vznemirja? Ali razmišljate o iskanju učitelja? Kakšen moder nasvet ste prejeli od ugledne avtoritete? Se zavedate, da največji učitelj živi v vas? Kakšno resnico iščete (ali ste jo že našli)? Ali sprejemate novo duhovnost? Kako bi lahko bili boljši pri poslušanju sebe ali drugih? Kaj delate za druge, namesto da bi to delali zase? Ali veste, da ste vi zadnja avtoriteta glede tega, kaj je za vas prav ali narobe? Kaj vam preprečuje, da bi upoštevali resnico? Ali ste bolj samoobvladujoči ali vas oblegajo drugi? Ali hrepenite po novih oblikah religije ali duhovnosti? Ste v skladu s svojo intuicijo ali notranjim učiteljem?</p>',
                    src: hierophant,
                    to: "/the-hierophant"
                },
                {
                    name: 'V – Svečenik',
                    text: '<p><b>Univerzalni arhetip:</b> Tako kot Visoka svečenica tudi Svečenik sedi med dvema stebroma, kar pomeni nevtralnost. Ta simbolika je tako pomembna, da se ponovi, ko sedi nad črno-belimi ploščicami na tleh. Prositi za notranje vodstvo in biti nato odprt za njegovo sprejemanje - ne glede na to, kakšno vodstvo je - je načelo, ki ga označujejo menihi (zavestni in podzavestni deli vas), ki klečijo pred Svečenikovimi nogami. Svečenikova roka signalizira "bodite mirni in poslušajte," in vam s tem sporoča, da prisluhnete resnici v svojem srcu.</p><p>S katero višjo avtoriteto se uglašujete? Kateri avtoriteti ste se uprli? Ali bi bilo vredno pustiti ob strani, kar mislite, da veste, da bi nekaj res vedeli? Kako bi vam lahko koristilo, če bi bili mirni in poslušali, preden bi ukrepali? Vas vera odbija ali vznemirja? Ali razmišljate o iskanju učitelja? Kakšen moder nasvet ste prejeli od ugledne avtoritete? Se zavedate, da največji učitelj živi v vas? Kakšno resnico iščete (ali ste jo že našli)? Ali sprejemate novo duhovnost? Kako bi lahko bili boljši pri poslušanju sebe ali drugih? Kaj delate za druge, namesto da bi to delali zase? Ali veste, da ste vi zadnja avtoriteta glede tega, kaj je za vas prav ali narobe? Kaj vam preprečuje, da bi upoštevali resnico? Ali ste bolj samoobvladujoči ali vas oblegajo drugi? Ali hrepenite po novih oblikah religije ali duhovnosti? Ste v skladu s svojo intuicijo ali notranjim učiteljem?</p>',
                    src: hierophantDown,
                    to: "/the-hierophant"
                },
                {
                    name: 'VI – Ljubimca',
                    text: '<p><b>Univerzalni arhetip:</b> Nadangel Rafael, "Božji Zdravilec", dvigne roke v blagoslov, kar namiguje na celovitost, ki izhaja iz tega, da ženske sprejmejo svojo moškost in moški, ki sprejmejo svojo ženskost. Podobnost karte z rajskim vrtom pomeni, da je samozavedanje, zavedanje sebe kot posameznika, prvi korak k razsvetljenju. Moški pogleda žensko in nakazuje, kako se vaša osebnost za svoje odzive nagiba k vaši podzavesti. Ženska, ki gleda Raphaela, namiguje, da sta ljubezen do sebe in sprejemanje potrebna za ljubeče odnose. Karta namiguje, da imajo odnosi vzajemno lastnost, ki vodi do samozdravljenja. Ne glede na to, ali komunikacije izvirajo od vas ali drugih, so katalizatorji, ki lahko dvignejo vašo zavest in zavest drugih.</p><p>Kaj vam prinaša večjo ljubezen do sebe? Ali v vaše življenje vstopa nova ljubezen? Kako se spoprijatelji s sabo ali kako zdraviti moški in/ali ženski del sebe? Ali manj potrebe in več samozavesti izboljšujeta vaše odnose? Ali se zavedate, da je ljubezen do sebe predpogoj za uspešna razmerja? Ali sta vaša čutenja in razmišljanje sintetizirana? Ali se počutite blagoslovljene, ko veste, da ni napak, ampak le lekcije, ki se jih je treba naučiti? Ali se zavedate, da je vaša sorodna duša tista, s katerim ste, ne neka idealna oseba? Kaj si želite izkusiti, kljub posledicam? Ali čutite, da ljubite nekoga istega spola? Bi lahko začasna ločitev od ljubljene osebe pomagala ozdraviti vajin odnos?</p>',
                    src: lovers,
                    to: "/the-lovers"
                },
                {
                    name: 'VI – Ljubimca',
                    text: '<p><b>Univerzalni arhetip:</b> Nadangel Rafael, "Božji Zdravilec", dvigne roke v blagoslov, kar namiguje na celovitost, ki izhaja iz tega, da ženske sprejmejo svojo moškost in moški, ki sprejmejo svojo ženskost. Podobnost karte z rajskim vrtom pomeni, da je samozavedanje, zavedanje sebe kot posameznika, prvi korak k razsvetljenju. Moški pogleda žensko in nakazuje, kako se vaša osebnost za svoje odzive nagiba k vaši podzavesti. Ženska, ki gleda Raphaela, namiguje, da sta ljubezen do sebe in sprejemanje potrebna za ljubeče odnose. Karta namiguje, da imajo odnosi vzajemno lastnost, ki vodi do samozdravljenja. Ne glede na to, ali komunikacije izvirajo od vas ali drugih, so katalizatorji, ki lahko dvignejo vašo zavest in zavest drugih.</p><p>Kaj vam prinaša večjo ljubezen do sebe? Ali v vaše življenje vstopa nova ljubezen? Kako se spoprijatelji s sabo ali kako zdraviti moški in/ali ženski del sebe? Ali manj potrebe in več samozavesti izboljšujeta vaše odnose? Ali se zavedate, da je ljubezen do sebe predpogoj za uspešna razmerja? Ali sta vaša čutenja in razmišljanje sintetizirana? Ali se počutite blagoslovljene, ko veste, da ni napak, ampak le lekcije, ki se jih je treba naučiti? Ali se zavedate, da je vaša sorodna duša tista, s katerim ste, ne neka idealna oseba? Kaj si želite izkusiti, kljub posledicam? Ali čutite, da ljubite nekoga istega spola? Bi lahko začasna ločitev od ljubljene osebe pomagala ozdraviti vajin odnos?</p>',
                    src: loversDown,
                    to: "/the-lovers"
                },
                {
                    name: 'VII – Kočija',
                    text: '<p><b>Univerzalni arhetip:</b> Kočija simbolizira človeško telo ali vozilo, v katerem se podate na svoje duhovno potovanje skozi življenje. Voda v ozadju kaže, da mora kočijaš zapustiti dom ali kar je znano, da bi našel vašo višjo dušo, duha, Jaz. Kočijaš ima vtis, da on usmerja svoje življenje, toda baldahin nad glavo z zvezdami namiguje, da ima božanskost prednost pred vsem. Njegov položaj nad in med črno-belimi sfinge nakazuje, da se kočijaš uči na uspeh in neuspeh gledati kot na dve plati istega kovanca samospoznanja.</p><p>Čemu se odmikate in zakaj? Kako ste kot duhovni bojevnik? Kaj neradi zapustite? Vas vleče v dve smeri hkrati? Kako se lahko dvignete nad polarizirano situacijo? Ali se vam zdi, da vzamete kogar koli že, kamor koli greste? Na kaj se počutite preveč navezani ali česa se želite izogniti? Nad katerimi notranjimi napetostmi in protislovji se trudite ohraniti nadzor? Kako bi se lahko med potovanjem počutili bolj domače? V katerem porazu/zmagi je potencialna zmaga/poraz? Na katerem področju življenja uživate v zmagoslavju? Ali se počutite nestrpni glede svojega duhovnega razvoja? Ali razumete, da lahko nadzorujete le svoje misli in dejanja? Kako morda vaše strasti ukazujejo vam, namesto da bi vi ukazovali njim? Na kakšen način bi lahko bila samodisciplina koristna? Ali doživljate več samozaupanja in sprejemanja?</p>',
                    src: chariot,
                    to: "/the-chariot"
                },
                {
                    name: 'VII – Kočija',
                    text: '<p><b>Univerzalni arhetip:</b> Kočija simbolizira človeško telo ali vozilo, v katerem se podate na svoje duhovno potovanje skozi življenje. Voda v ozadju kaže, da mora kočijaš zapustiti dom ali kar je znano, da bi našel vašo višjo dušo, duha, Jaz. Kočijaš ima vtis, da on usmerja svoje življenje, toda baldahin nad glavo z zvezdami namiguje, da ima božanskost prednost pred vsem. Njegov položaj nad in med črno-belimi sfinge nakazuje, da se kočijaš uči na uspeh in neuspeh gledati kot na dve plati istega kovanca samospoznanja.</p><p>Čemu se odmikate in zakaj? Kako ste kot duhovni bojevnik? Kaj neradi zapustite? Vas vleče v dve smeri hkrati? Kako se lahko dvignete nad polarizirano situacijo? Ali se vam zdi, da vzamete kogar koli že, kamor koli greste? Na kaj se počutite preveč navezani ali česa se želite izogniti? Nad katerimi notranjimi napetostmi in protislovji se trudite ohraniti nadzor? Kako bi se lahko med potovanjem počutili bolj domače? V katerem porazu/zmagi je potencialna zmaga/poraz? Na katerem področju življenja uživate v zmagoslavju? Ali se počutite nestrpni glede svojega duhovnega razvoja? Ali razumete, da lahko nadzorujete le svoje misli in dejanja? Kako morda vaše strasti ukazujejo vam, namesto da bi vi ukazovali njim? Na kakšen način bi lahko bila samodisciplina koristna? Ali doživljate več samozaupanja in sprejemanja?</p>',
                    src: chariotDown,
                    to: "/the-chariot"
                },
                {
                    name: 'VIII – Moč',
                    text: '<p><b>Univerzalni arhetip:</b> Ženska, oblečena v belo, simbol čisto-srčnosti in razvitega dela vas, se ljubeče približa divji zveri, živalskemu ali nerazvitemu delu vas. Bitje se odzove z lizanjem njene roke. Moč nakazuje, kaj je potrebno, da se popolnoma sprejmeš. Vsakdo ima v sebi zver ali nezrele lastnosti. Karta nakazuje, da vas prijateljevanje, posedovanje in/ali priznavanje teh delov naredi popolno osebo. to ne pomeni, da pustite zver divjati; to pomeni, da ga zreli del vas ljubeče, a trdno vodi.</p><p>Katerega leva upravljate ali bežite pred njim? Ali morda v vas čaka rjoveč lev? Ste prišli v stik z željo po divjosti? Katere občutke poskušate utišati? Kako bi se lahko lotili krotenja zveri? Kdaj je vaša občutljivost prednost ali slabost? Kdaj je vaša moč šibkost ali moč? Koga ali kaj krotite s trdo ljubeznijo? Ali se ob soočanju z besnim levom ne počutite kot junak ali strahopetec? Vam izkušnja notranje moči daje občutek, da morate biti manj močni? Je morda čas, da se spoprijateljite z zverjo v sebi ali v drugi osebi? Kako bi se lahko oddolžili za divjost v sebi ali v drugi osebi? Kako bi nežnost pomagala v potencialno nevarni situaciji? Kam ste poklicani, da spregovorite? Kako bi lahko usmerjanje brezpogojne ljubezni v vse dele vaše osebnosti spremenilo vaše življenje?</p>',
                    src: strength,
                    to: "/strength"
                },
                {
                    name: 'VIII – Moč',
                    text: '<p><b>Univerzalni arhetip:</b> Ženska, oblečena v belo, simbol čisto-srčnosti in razvitega dela vas, se ljubeče približa divji zveri, živalskemu ali nerazvitemu delu vas. Bitje se odzove z lizanjem njene roke. Moč nakazuje, kaj je potrebno, da se popolnoma sprejmeš. Vsakdo ima v sebi zver ali nezrele lastnosti. Karta nakazuje, da vas prijateljevanje, posedovanje in/ali priznavanje teh delov naredi popolno osebo. to ne pomeni, da pustite zver divjati; to pomeni, da ga zreli del vas ljubeče, a trdno vodi.</p><p>Katerega leva upravljate ali bežite pred njim? Ali morda v vas čaka rjoveč lev? Ste prišli v stik z željo po divjosti? Katere občutke poskušate utišati? Kako bi se lahko lotili krotenja zveri? Kdaj je vaša občutljivost prednost ali slabost? Kdaj je vaša moč šibkost ali moč? Koga ali kaj krotite s trdo ljubeznijo? Ali se ob soočanju z besnim levom ne počutite kot junak ali strahopetec? Vam izkušnja notranje moči daje občutek, da morate biti manj močni? Je morda čas, da se spoprijateljite z zverjo v sebi ali v drugi osebi? Kako bi se lahko oddolžili za divjost v sebi ali v drugi osebi? Kako bi nežnost pomagala v potencialno nevarni situaciji? Kam ste poklicani, da spregovorite? Kako bi lahko usmerjanje brezpogojne ljubezni v vse dele vaše osebnosti spremenilo vaše življenje?</p>',
                    src: strengthDown,
                    to: "/strength"
                },
                {
                    name: 'IX – Puščavnik',
                    text: '<p><b>Univerzalni arhetip:</b> Puščavnik stoji na vrhu gore in namiguje, da ima objektiven ali moder pogled na to, kar se dogaja v svetu spodaj. Rade volje drži svetilko v desni ali zavestni roki, kar kaže na to, da se zaveda, da je nosilec luči modrosti in razumevanja v temi zmede in nevednosti. Palica v njegovi levi ali podzavestni roki nakazuje, da je asimiliral svoje življenjske izkušnje in služi kot navdih drugim. Poleg tega, da spodbuja tiste, ki prepotujejo goro, k višji zavesti, njegova prisotnost pove, da je pomoč, če jo poiščete, vedno na voljo.</p><p>Kateremu vodstvu duše sledite? Na katero goro se vzpenjate? Iščete luč upanja v temnem času? Je morda nekdo ali nekaj ta svetlo za vas? Ali obstaja način, kako lahko osvetlite svojo svetlobo, ne da bi bili navezani na to ali drugi to vidijo ali ne? Bi lahko uživali v umiku od sveta? Zakaj se upirate svoji potrebi biti puščavnik za nekaj časa? Katera orodja ali učenja so vam pri roki? Morda se počutite starejše in modrejše, čeprav ste mladi po letih? Se počutite udobno oz. neprijetno biti sami s seboj? Kakšen pregled ali medsebojno povezavo ste nenadoma videli? Ali vas skrbi prilagajanje v svet? Ste sami, ne da bi se počutili osamljeno? Katero lekcijo asimilirate? Katero modrost delite s svetom? Ste končno spoznali, da je poti do višje zavesti toliko, kolikor je ljudi? Ali bi morda želeli služiti manj srečnim od sebe?</p>',
                    src: hermit,
                    to: "/the-hermit"
                },
                {
                    name: 'IX – Puščavnik',
                    text: '<p><b>Univerzalni arhetip:</b> Puščavnik stoji na vrhu gore in namiguje, da ima objektiven ali moder pogled na to, kar se dogaja v svetu spodaj. Rade volje drži svetilko v desni ali zavestni roki, kar kaže na to, da se zaveda, da je nosilec luči modrosti in razumevanja v temi zmede in nevednosti. Palica v njegovi levi ali podzavestni roki nakazuje, da je asimiliral svoje življenjske izkušnje in služi kot navdih drugim. Poleg tega, da spodbuja tiste, ki prepotujejo goro, k višji zavesti, njegova prisotnost pove, da je pomoč, če jo poiščete, vedno na voljo.</p><p>Kateremu vodstvu duše sledite? Na katero goro se vzpenjate? Iščete luč upanja v temnem času? Je morda nekdo ali nekaj ta svetlo za vas? Ali obstaja način, kako lahko osvetlite svojo svetlobo, ne da bi bili navezani na to ali drugi to vidijo ali ne? Bi lahko uživali v umiku od sveta? Zakaj se upirate svoji potrebi biti puščavnik za nekaj časa? Katera orodja ali učenja so vam pri roki? Morda se počutite starejše in modrejše, čeprav ste mladi po letih? Se počutite udobno oz. neprijetno biti sami s seboj? Kakšen pregled ali medsebojno povezavo ste nenadoma videli? Ali vas skrbi prilagajanje v svet? Ste sami, ne da bi se počutili osamljeno? Katero lekcijo asimilirate? Katero modrost delite s svetom? Ste končno spoznali, da je poti do višje zavesti toliko, kolikor je ljudi? Ali bi morda želeli služiti manj srečnim od sebe?</p>',
                    src: hermitDown,
                    to: "/the-hermit"
                },
                {
                    name: 'X – Kolo sreče',
                    text: '<p><b>Univerzalni arhetip:</b> Štirje krilati varuhi obkrožajo kolo, kar nakazuje, da vsa sreča prihaja od zgoraj. Valovita kača znanja nakazuje, da življenjski vzponi in padci prinašajo potencial za popolnejše spoznavanje samega sebe. Varuh podzemlja s šakalovo glavo, Anubis, na katerem se zdi, da kolo počiva, vas spomni, da čeprav so temni časi naravni del življenjskega cikla, božanstvo vedno potuje z vami. Sfinga, varuhinja skrivnosti, sedi zunaj kolesa in opazuje, kako stvaritev kroži skozi stopnje rojstva, življenja, smrti in ponovnega rojstva - kolesa znotraj kolesa. Postavitev varuha nad kolesom nakazuje razvoj zavesti pričevalca, stanje, ki nosi umirjenost in perspektivo sredi tekočega življenja.</p><p>Se vedno bolj zavedate, da vsako dejanje nekje v času ustvari svoj odziv? Kateri cikel zaključujete ali začenjate? Kakšna priložnost je na dosegu roke? Bi vam lahko koristilo, če bi izstopili iz neke situacije in samo opazovali in čakali, namesto da bi v njej aktivno sodelovali? Kateri trenutek ujamete? Ste razmišljali o tem, da bi poiskali pomoč pri obvladovanju vaših duševnih in čustvenih vzponov in padcev? Katere nesrečne ali srečne okoliščine se lahko obrnejo? Ali doživljate posledice nekega dejanja? Ali se borite proti gibanju kolesa življenja? Zakaj se upirate biti tam, kjer ste? Za kakšno dejanje ste nagrajeni? Kako ostajate osredotočeni v času preobratov? Ali vse bolj sprejemate življenjske vzpone in padce? Na kakšen način vas življenje dela boljšega človeka?</p>',
                    src: wheel,
                    to: "/wheel-of-fortune"
                },
                {
                    name: 'X – Kolo sreče',
                    text: '<p><b>Univerzalni arhetip:</b> Štirje krilati varuhi obkrožajo kolo, kar nakazuje, da vsa sreča prihaja od zgoraj. Valovita kača znanja nakazuje, da življenjski vzponi in padci prinašajo potencial za popolnejše spoznavanje samega sebe. Varuh podzemlja s šakalovo glavo, Anubis, na katerem se zdi, da kolo počiva, vas spomni, da čeprav so temni časi naravni del življenjskega cikla, božanstvo vedno potuje z vami. Sfinga, varuhinja skrivnosti, sedi zunaj kolesa in opazuje, kako stvaritev kroži skozi stopnje rojstva, življenja, smrti in ponovnega rojstva - kolesa znotraj kolesa. Postavitev varuha nad kolesom nakazuje razvoj zavesti pričevalca, stanje, ki nosi umirjenost in perspektivo sredi tekočega življenja.</p><p>Se vedno bolj zavedate, da vsako dejanje nekje v času ustvari svoj odziv? Kateri cikel zaključujete ali začenjate? Kakšna priložnost je na dosegu roke? Bi vam lahko koristilo, če bi izstopili iz neke situacije in samo opazovali in čakali, namesto da bi v njej aktivno sodelovali? Kateri trenutek ujamete? Ste razmišljali o tem, da bi poiskali pomoč pri obvladovanju vaših duševnih in čustvenih vzponov in padcev? Katere nesrečne ali srečne okoliščine se lahko obrnejo? Ali doživljate posledice nekega dejanja? Ali se borite proti gibanju kolesa življenja? Zakaj se upirate biti tam, kjer ste? Za kakšno dejanje ste nagrajeni? Kako ostajate osredotočeni v času preobratov? Ali vse bolj sprejemate življenjske vzpone in padce? Na kakšen način vas življenje dela boljšega človeka?</p>',
                    src: wheelDown,
                    to: "/wheel-of-fortune"
                },
                {
                    name: 'XI – Pravica',
                    text: '<p><b>Univerzalni arhetip:</b> Tako kot Svečenica in Svečenik tudi Pravica stoji med dvema stebroma, ki nakazujeta nevtralnost in dobro uravnoteženo perspektivo. V desni roki drži tehtnico, v levici pa meč razsodnosti, Pravica tehta ali izračuna možne rezultate svojih dejanj, preden jih izvede. Potem ko se odloči, da je pripravljena prevzeti odgovornost za to, kar se lahko zgodi, deluje z vero, da se bo njeno izbrano dejanje sčasoma uravnovesilo. Pravicina iztegnjena noga kaže, da je vedno pripravljena ukrepati, pomagati ponovno uravnotežiti in spremeniti navidez nastavljen cikel dogodkov.</p><p>Ali prevzemate odgovornost za svoja dejanja? Kakšno pravico iščete? Katera navidezno nepravična situacija deluje pravilno? Katera neravnovesja popravljate? Kakšne ukrepe bi lahko sprejeli, da bi ublažili učinke škodljivega dejanja? Pri kateri situaciji bi pomagalo temeljito pretehtati prednosti in slabosti? Kako vas bolečina prisili, da spremenite svoje vedenje? Katera krivica vas vznemirja? Kako lahko vaša sedanja dejanja popravijo preteklo krivico? Ali vihtite meč pravice, da zaščitite sebe ali druge? O kateri nepravičnosti ste obsedeni? Čemu se težko prilagajate? Ali doživljate obdobje prilagajanja? Kaj vas spravlja iz ravnotežja? Kako pomanjkanje ravnotežja druge osebe vpliva na vas ali vaše okolje? Kaj bi lahko storili, da bi se ponovno uravnovesili? Ste šli predaleč, ko ste poskušali popraviti napako iz preteklosti? Katera izkušnja vam povrne vero v idejo, da se življenje vedno izkaže za najboljše?</p>',
                    src: justice,
                    to: "/justice"
                },
                {
                    name: 'XI – Pravica',
                    text: '<p><b>Univerzalni arhetip:</b> Tako kot Svečenica in Svečenik tudi Pravica stoji med dvema stebroma, ki nakazujeta nevtralnost in dobro uravnoteženo perspektivo. V desni roki drži tehtnico, v levici pa meč razsodnosti, Pravica tehta ali izračuna možne rezultate svojih dejanj, preden jih izvede. Potem ko se odloči, da je pripravljena prevzeti odgovornost za to, kar se lahko zgodi, deluje z vero, da se bo njeno izbrano dejanje sčasoma uravnovesilo. Pravicina iztegnjena noga kaže, da je vedno pripravljena ukrepati, pomagati ponovno uravnotežiti in spremeniti navidez nastavljen cikel dogodkov.</p><p>Ali prevzemate odgovornost za svoja dejanja? Kakšno pravico iščete? Katera navidezno nepravična situacija deluje pravilno? Katera neravnovesja popravljate? Kakšne ukrepe bi lahko sprejeli, da bi ublažili učinke škodljivega dejanja? Pri kateri situaciji bi pomagalo temeljito pretehtati prednosti in slabosti? Kako vas bolečina prisili, da spremenite svoje vedenje? Katera krivica vas vznemirja? Kako lahko vaša sedanja dejanja popravijo preteklo krivico? Ali vihtite meč pravice, da zaščitite sebe ali druge? O kateri nepravičnosti ste obsedeni? Čemu se težko prilagajate? Ali doživljate obdobje prilagajanja? Kaj vas spravlja iz ravnotežja? Kako pomanjkanje ravnotežja druge osebe vpliva na vas ali vaše okolje? Kaj bi lahko storili, da bi se ponovno uravnovesili? Ste šli predaleč, ko ste poskušali popraviti napako iz preteklosti? Katera izkušnja vam povrne vero v idejo, da se življenje vedno izkaže za najboljše?</p>',
                    src: justiceDown,
                    to: "/justice"
                },
                {
                    name: 'XII – Obešenec',
                    text: '<p><b>Univerzalni arhetip:</b> Udobno obešen na drevo v obliki hebrejske črke TAV je Obešenec začasno stopil iz običajnega časa v večni čas. Njegova poza nakazuje prakso dodajanja univerzalne perspektive vaši zemeljski perspektivi. Njegova svetilka in beli lasje kažejo, da je šel skozi vrata modrosti. Kljub temu, da je privezan, obešeni človek svobodno visi, kar nakazuje, da vas razširjeni odnos do življenjskih omejitev lahko osvobodi. Noge Obešenca kažejo v nebesa in simbolizirajo naše prave korenine.</p><p>Kakšen preobrat doživljate? Kaj vas je postavilo na glavo? Katera prepričanja opuščate? Ali morate počastiti sebe tako, da naredite nekaj nekonvencionalnega? Vas nekaj omejuje, vendar osvobaja? Ali prehajate iz enega stanja zavesti v drugega? Kako se spreminja vaša perspektiva? Je vaša najpomembnejša navezanost ta na višjo zavest? Ali si je vredno vzeti čas za samorefleksijo? Ali svoje načrte za nekaj časa odložite? Zakaj se obnašate kot mučenik? Bi lahko prisluhnili svojemu jazu, čeprav vam govori, da naredite tisto, kar je v nasprotju s tem, kar želite? Kako bi lahko ustvarili stabilnost sredi nestabilnosti? Kaj žrtvujete? Kje bi lahko bila opustitev nadzora dragocena? Kakšni resnici se predajate? Česa se bojite, da boste izgubili z obrnjenimi pogledi? Kakšno pomembno vprašanje je zdaj nepomembno zaradi spremembe vaše perspektive?</p>',
                    src: hanged,
                    to: "/the-hanged-man"
                },
                {
                    name: 'XII – Obešenec',
                    text: '<p><b>Univerzalni arhetip:</b> Udobno obešen na drevo v obliki hebrejske črke TAV je Obešenec začasno stopil iz običajnega časa v večni čas. Njegova poza nakazuje prakso dodajanja univerzalne perspektive vaši zemeljski perspektivi. Njegova svetilka in beli lasje kažejo, da je šel skozi vrata modrosti. Kljub temu, da je privezan, obešeni človek svobodno visi, kar nakazuje, da vas razširjeni odnos do življenjskih omejitev lahko osvobodi. Noge Obešenca kažejo v nebesa in simbolizirajo naše prave korenine.</p><p>Kakšen preobrat doživljate? Kaj vas je postavilo na glavo? Katera prepričanja opuščate? Ali morate počastiti sebe tako, da naredite nekaj nekonvencionalnega? Vas nekaj omejuje, vendar osvobaja? Ali prehajate iz enega stanja zavesti v drugega? Kako se spreminja vaša perspektiva? Je vaša najpomembnejša navezanost ta na višjo zavest? Ali si je vredno vzeti čas za samorefleksijo? Ali svoje načrte za nekaj časa odložite? Zakaj se obnašate kot mučenik? Bi lahko prisluhnili svojemu jazu, čeprav vam govori, da naredite tisto, kar je v nasprotju s tem, kar želite? Kako bi lahko ustvarili stabilnost sredi nestabilnosti? Kaj žrtvujete? Kje bi lahko bila opustitev nadzora dragocena? Kakšni resnici se predajate? Česa se bojite, da boste izgubili z obrnjenimi pogledi? Kakšno pomembno vprašanje je zdaj nepomembno zaradi spremembe vaše perspektive?</p>',
                    src: hangedDown,
                    to: "/the-hanged-man"
                },
                {
                    name: 'XIII – Smrt',
                    text: '<p><b>Univerzalni arhetip:</b> Smrt jaha konja, ki predstavlja povišanje statusa in simbolizira, kako je smrt izkušnja, ki dviguje zavest – svojo osebno zavest pustite za seboj, da vidite sebe in svoja dejanja objektivno. Vse pade smrti pred noge, to nas opominja, da karkoli se rodi, na koncu umre. Sonce, ki vzhaja na vzhodu med dvema stolpoma, pomeni, da je smrt prav tako del življenjskega cikla kot sončni vzhod in zahod. Smrt ima celostno povezanost z življenjem – saj je del naravnega toka življenja – prikazuje tudi voda v ozadju karte, tok življenja, ki je bil prvič viden, da teče iz oblačila Velike svečenice.</p><p>Kakšnega obrabljenega vedenja se oklepate? Česa se bojiš opustiti? Kakšne sanje so prezgodnja smrt? Ste obtičali? Ali doživljate duhovni preporod? Katere želje odpadejo? Zakaj se upirate odraščanju? Ste preživeli obsmrtno izkušnjo? Kateri del vas se spreminja ali izloča? Ali se morda ukvarjate s smrtjo nekoga, ki vam je blizu in drag? Katere nepotrebne načine razmišljanja ali povezovanja ste prisiljeni opustiti? Ali razmišljate o tem, da je smrt naravno nadaljevanje razvoja vaše duše? Za čim ali kom žalujete? Ste z leti vse manj ali bolj navezani na svoje telo? Kakšne majhne smrti opazite vsak dan? Ali se bojite umiranja bolj kot smrti? Kakšno smrt zanikate? Ali bi smrtno nevarna bolezen povečala vaše spoštovanje do življenja? Kako lahko smrt prinese prenovo?</p>',
                    src: death,
                    to: "/death"
                },
                {
                    name: 'XIII – Smrt',
                    text: '<p><b>Univerzalni arhetip:</b> Smrt jaha konja, ki predstavlja povišanje statusa in simbolizira, kako je smrt izkušnja, ki dviguje zavest – svojo osebno zavest pustite za seboj, da vidite sebe in svoja dejanja objektivno. Vse pade smrti pred noge, to nas opominja, da karkoli se rodi, na koncu umre. Sonce, ki vzhaja na vzhodu med dvema stolpoma, pomeni, da je smrt prav tako del življenjskega cikla kot sončni vzhod in zahod. Smrt ima celostno povezanost z življenjem – saj je del naravnega toka življenja – prikazuje tudi voda v ozadju karte, tok življenja, ki je bil prvič viden, da teče iz oblačila Velike svečenice.</p><p>Kakšnega obrabljenega vedenja se oklepate? Česa se bojiš opustiti? Kakšne sanje so prezgodnja smrt? Ste obtičali? Ali doživljate duhovni preporod? Katere želje odpadejo? Zakaj se upirate odraščanju? Ste preživeli obsmrtno izkušnjo? Kateri del vas se spreminja ali izloča? Ali se morda ukvarjate s smrtjo nekoga, ki vam je blizu in drag? Katere nepotrebne načine razmišljanja ali povezovanja ste prisiljeni opustiti? Ali razmišljate o tem, da je smrt naravno nadaljevanje razvoja vaše duše? Za čim ali kom žalujete? Ste z leti vse manj ali bolj navezani na svoje telo? Kakšne majhne smrti opazite vsak dan? Ali se bojite umiranja bolj kot smrti? Kakšno smrt zanikate? Ali bi smrtno nevarna bolezen povečala vaše spoštovanje do življenja? Kako lahko smrt prinese prenovo?</p>',
                    src: deathDown,
                    to: "/death"
                },
                {
                    name: 'XIV – Zmernost',
                    text: '<p><b>Univerzalni arhetip:</b> Nadangel Michael stoji z eno nogo na vodi in z drugo na kopnem, kar nakazuje, da duhovna podlaga podpira vaše vsakdanje življenje in da vaša posvetna rast in razvoj podpirata vašo duhovno rast. To je spet razvidno iz vode, ki teče med angelovima skodelicama in meša navidezno protislovne elemente duha zgoraj in materije spodaj. Mavrica nad glavo obljublja, da boste popolnoma uspešni pri duhovnem delu, ki se ga lotite v tem življenju.</p><p>Se počutite zaščitene s svojim angelom varuhom? Kateri vidik vaše osebnosti se čisti in izpopolnjuje? Nad čim se počutite navdušeno? Kakšna želja je zanemarjena? Kateri vidiki vaše osebnosti se poenotijo? Ali ste se borili z odvisnostjo od drog, alkohola, hrane ali druge odvisnosti? Katera kombinacija ljudi v vašem življenju se obnese ali ne odnese? Kakšno novo kombinacijo je treba narediti? Kako lahko utrdite svoje energije? Greste morda iz vroče ponve v ogenj? Katere nasprotne sile se usklajujejo? Ali iščete ali doživljate stik s svojim višjim jazom? Katere napotke ste hvaležno prejeli? Kdo vas jezi? Je čas, da svojo filozofijo prenesete v prakso? Se počutite, kot da ste na "preizkušnji z ognjem"? Ste v potencialno nestabilni situaciji? Kako življenjski stresi in napori poduhovljajo vaše življenje? Vam duhovni nauki dajejo potrebno podporo? Katerega testa ne opravite ali ne opravite?</p>',
                    src: temperance,
                    to: "/temperance"
                },
                {
                    name: 'XIV – Zmernost',
                    text: '<p><b>Univerzalni arhetip:</b> Nadangel Michael stoji z eno nogo na vodi in z drugo na kopnem, kar nakazuje, da duhovna podlaga podpira vaše vsakdanje življenje in da vaša posvetna rast in razvoj podpirata vašo duhovno rast. To je spet razvidno iz vode, ki teče med angelovima skodelicama in meša navidezno protislovne elemente duha zgoraj in materije spodaj. Mavrica nad glavo obljublja, da boste popolnoma uspešni pri duhovnem delu, ki se ga lotite v tem življenju.</p><p>Se počutite zaščitene s svojim angelom varuhom? Kateri vidik vaše osebnosti se čisti in izpopolnjuje? Nad čim se počutite navdušeno? Kakšna želja je zanemarjena? Kateri vidiki vaše osebnosti se poenotijo? Ali ste se borili z odvisnostjo od drog, alkohola, hrane ali druge odvisnosti? Katera kombinacija ljudi v vašem življenju se obnese ali ne odnese? Kakšno novo kombinacijo je treba narediti? Kako lahko utrdite svoje energije? Greste morda iz vroče ponve v ogenj? Katere nasprotne sile se usklajujejo? Ali iščete ali doživljate stik s svojim višjim jazom? Katere napotke ste hvaležno prejeli? Kdo vas jezi? Je čas, da svojo filozofijo prenesete v prakso? Se počutite, kot da ste na "preizkušnji z ognjem"? Ste v potencialno nestabilni situaciji? Kako življenjski stresi in napori poduhovljajo vaše življenje? Vam duhovni nauki dajejo potrebno podporo? Katerega testa ne opravite ali ne opravite?</p>',
                    src: temperanceDown,
                    to: "/temperance"
                },
                {
                    name: 'XV – Hudič',
                    text: '<p><b>Univerzalni arhetip:</b> Nadangel Uriel, kar pomeni "Svetloba ali senca Najvišjega", sedi na njegovem prestolu. V hebrejščini se številke prevedejo v črke in obratno. Z uporabo tega sistema številka karte za Hudiča, številka 15, postane beseda Jah, eno od mnogih imen za božanstvo. Hudičeva bela brada namiguje, da je senca Najvišjega, ki te sprijazni s svojo senco – tvojo nezrelostjo. Če ima božanstvo lahko senco, imaš tudi ti! Sprejemanje tvoje človečnosti vam omogoča, da dvignete verige sovraštva do samega sebe. Ohlapne verige okoli ljudi, ki izvirajo iz hudičevega prestola, nakazujejo, da vas osvobaja ista moč, ki se zdi, da vas omejuje! Podobnost karte z Ljubimcema kaže na to, da iti skozi pekel ustvari strast do svobode.</p><p>Ali se počutite, kot da živite v peklu? Vas muči sram in krivda? Ali se počutite ujeti v materialni svet? Za kaj se odločite, da ostanete glede tega nevedni ali ozkogledi? Kakšno laž širite s tem, da nočete pogledati čez njeno površino? Zakaj živite v zanikanju? Se bojite videti sebe takšnega kakršni ste? Ali se počutite nemočne nad svojimi spolnimi nagoni? Na koga ali kaj poskušate imeti neprimeren vpliv? Ali morda namerno škodujete drugim? Koga ali kaj krivite za svoje pomanjkljivosti? Ali se obnašate kot osel? Ali bi bilo koristno, če bi kdaj pa kdaj sledili svojim instinktom? Kako bi lahko priznali in se spoprijateljil s "temno" ali nerazvito, neljubljeno stranjo sebe?</p>',
                    src: devil,
                    to: "/the-devil"
                },
                {
                    name: 'XV – Hudič',
                    text: '<p><b>Univerzalni arhetip:</b> Nadangel Uriel, kar pomeni "Svetloba ali senca Najvišjega", sedi na njegovem prestolu. V hebrejščini se številke prevedejo v črke in obratno. Z uporabo tega sistema številka karte za Hudiča, številka 15, postane beseda Jah, eno od mnogih imen za božanstvo. Hudičeva bela brada namiguje, da je senca Najvišjega, ki te sprijazni s svojo senco – tvojo nezrelostjo. Če ima božanstvo lahko senco, imaš tudi ti! Sprejemanje tvoje človečnosti vam omogoča, da dvignete verige sovraštva do samega sebe. Ohlapne verige okoli ljudi, ki izvirajo iz hudičevega prestola, nakazujejo, da vas osvobaja ista moč, ki se zdi, da vas omejuje! Podobnost karte z Ljubimcema kaže na to, da iti skozi pekel ustvari strast do svobode.</p><p>Ali se počutite, kot da živite v peklu? Vas muči sram in krivda? Ali se počutite ujeti v materialni svet? Za kaj se odločite, da ostanete glede tega nevedni ali ozkogledi? Kakšno laž širite s tem, da nočete pogledati čez njeno površino? Zakaj živite v zanikanju? Se bojite videti sebe takšnega kakršni ste? Ali se počutite nemočne nad svojimi spolnimi nagoni? Na koga ali kaj poskušate imeti neprimeren vpliv? Ali morda namerno škodujete drugim? Koga ali kaj krivite za svoje pomanjkljivosti? Ali se obnašate kot osel? Ali bi bilo koristno, če bi kdaj pa kdaj sledili svojim instinktom? Kako bi lahko priznali in se spoprijateljil s "temno" ali nerazvito, neljubljeno stranjo sebe?</p>',
                    src: devilDown,
                    to: "/the-devil"
                },
                {
                    name: 'XVI – Trdnjava',
                    text: '<p><b>Univerzalni arhetip:</b> Ker je bil Babilonski stolp zgrajen na napačni predpostavki, da lahko človeštvo preseže božansko moč, ga je božanskost podrla. Ko smo vi in jaz preveč ponosni ali se ne zavedamo, da bi opustili pretirano egoistične in/ali napačne ideje (ali "stolpe"), nam strela, univerzalni simbol za božansko posredovanje, pomaga olajšati breme ali nas razsvetli. Krona, ljudje, ki padajo, in razjedeni temelji prikazujejo zasnove, zgrajene na človeških in božanskih načelih, ki jih univerzalna modrost in razumevanje izpodbijata.</p><p>Imate občutek, da boste eksplodirali ali se boste odlepili? Se vam življenje razpada? Kako prenašate svojo jezo, ki je usmerjena proti vam? Ali res verjamete, da ste boljši od vseh drugih? Kaj potrebuje prestrukturiranje? Katera stara in nevarna struktura je padla? Kako ste se izolirali? Pred katerimi opozorilnimi znaki si zatiskate oči? Imate vi ali kdo od vaših bližnjih zlom? S kakšno eksplozivno situacijo imate opravka? Kaj so vaše besede ali dejanja uničila? Se počutite, kot da bi vas udarili po glavi? Kakšen poraz, ki drobi ego, doživljate? Ali dobivate odmerek ponižnosti? Kako prekoračite svoje meje? Ali vas postavljajo na svoje mesto? Kdo vse se igra? Katera naravna nesreča ali nesreča je doletela vas ali vaše okolje? Ste v šoku? Kaj se mora sesuti, da se zgradi boljša struktura?</p>',
                    src: tower,
                    to: "/the-tower"
                },
                {
                    name: 'XVI – Trdnjava',
                    text: '<p><b>Univerzalni arhetip:</b> Ker je bil Babilonski stolp zgrajen na napačni predpostavki, da lahko človeštvo preseže božansko moč, ga je božanskost podrla. Ko smo vi in jaz preveč ponosni ali se ne zavedamo, da bi opustili pretirano egoistične in/ali napačne ideje (ali "stolpe"), nam strela, univerzalni simbol za božansko posredovanje, pomaga olajšati breme ali nas razsvetli. Krona, ljudje, ki padajo, in razjedeni temelji prikazujejo zasnove, zgrajene na človeških in božanskih načelih, ki jih univerzalna modrost in razumevanje izpodbijata.</p><p>Imate občutek, da boste eksplodirali ali se boste odlepili? Se vam življenje razpada? Kako prenašate svojo jezo, ki je usmerjena proti vam? Ali res verjamete, da ste boljši od vseh drugih? Kaj potrebuje prestrukturiranje? Katera stara in nevarna struktura je padla? Kako ste se izolirali? Pred katerimi opozorilnimi znaki si zatiskate oči? Imate vi ali kdo od vaših bližnjih zlom? S kakšno eksplozivno situacijo imate opravka? Kaj so vaše besede ali dejanja uničila? Se počutite, kot da bi vas udarili po glavi? Kakšen poraz, ki drobi ego, doživljate? Ali dobivate odmerek ponižnosti? Kako prekoračite svoje meje? Ali vas postavljajo na svoje mesto? Kdo vse se igra? Katera naravna nesreča ali nesreča je doletela vas ali vaše okolje? Ste v šoku? Kaj se mora sesuti, da se zgradi boljša struktura?</p>',
                    src: towerDown,
                    to: "/the-tower"
                },
                {
                    name: 'XVII – Zvezda',
                    text: '<p><b>Univerzalni arhetip:</b> Gola ženska na upognjenih kolenih zliva vodo na kopno in v vodo, medtem ko meditativno zre v valoviti tolmun, simbol čarobnih voda univerzalne zavesti. Voda in zemlja jo podpirata, kar kaže na to, da se te pojavijo, ko iščete duhovne točke, na katerih bi temeljili svoje življenje. Medtem ko meditacija in molitev – mešanje bazena univerzalnega uma – zagotavljata dokaz o obstoju božanskosti, fizični svet ponuja isto izkušnjo, če ga zaznavamo s čuti, ki so bili poduhovljeni z molitvijo in meditacijo – tisti, ki želijo videti, slišati, čutiti, okušati, dotikati se in vonjati božanskost v vsem.</p>Sijete kot zvezda? Kdaj boste začeli svetiti v svojem življenju? Kakšno upanje lahko vidite v temni situaciji? Kaj odpade? Kako vas vodi vaša vest? Kaj si želite ali molite, da se bo zgodilo? Kaj želite izvedeti, ne glede na to, kaj zakriva? Zakaj na kolenih prosite za vodstvo in smer? Se vaše zanimanje za duhovnost aktivira? Kako svoja spoznanja iz molitve in meditacije vključujete v svoje vsakdanje življenje? Katero resnico v življenju postavljate na prvo mesto? Ali duhovna praksa preoblikuje vaše življenje? So vaše čutne zaznave jasnejše? Ste pripravljeni na samorefleksijo? Kako stojite goli s svojim višjim jazom? Ali ste bolj pošteni glede tega, kaj potrebujete in kdo ste? Kakšne navdihe prejemate? Ali drugim rečete "ne" sebi pa "da"?</p>',
                    src: star,
                    to: "/the-star"
                },
                {
                    name: 'XVII – Zvezda',
                    text: '<p><b>Univerzalni arhetip:</b> Gola ženska na upognjenih kolenih zliva vodo na kopno in v vodo, medtem ko meditativno zre v valoviti tolmun, simbol čarobnih voda univerzalne zavesti. Voda in zemlja jo podpirata, kar kaže na to, da se te pojavijo, ko iščete duhovne točke, na katerih bi temeljili svoje življenje. Medtem ko meditacija in molitev – mešanje bazena univerzalnega uma – zagotavljata dokaz o obstoju božanskosti, fizični svet ponuja isto izkušnjo, če ga zaznavamo s čuti, ki so bili poduhovljeni z molitvijo in meditacijo – tisti, ki želijo videti, slišati, čutiti, okušati, dotikati se in vonjati božanskost v vsem.</p>Sijete kot zvezda? Kdaj boste začeli svetiti v svojem življenju? Kakšno upanje lahko vidite v temni situaciji? Kaj odpade? Kako vas vodi vaša vest? Kaj si želite ali molite, da se bo zgodilo? Kaj želite izvedeti, ne glede na to, kaj zakriva? Zakaj na kolenih prosite za vodstvo in smer? Se vaše zanimanje za duhovnost aktivira? Kako svoja spoznanja iz molitve in meditacije vključujete v svoje vsakdanje življenje? Katero resnico v življenju postavljate na prvo mesto? Ali duhovna praksa preoblikuje vaše življenje? So vaše čutne zaznave jasnejše? Ste pripravljeni na samorefleksijo? Kako stojite goli s svojim višjim jazom? Ali ste bolj pošteni glede tega, kaj potrebujete in kdo ste? Kakšne navdihe prejemate? Ali drugim rečete "ne" sebi pa "da"?</p>',
                    src: starDown,
                    to: "/the-star"
                },
                {
                    name: 'XVIII – Luna',
                    text: 'Rak z lahkoto priplava iz tolmuna in simbolizira veliki ocean ali maternico življenja, iz katere vse izvira. Volčji in pasji zaliv ob luni, vidne so vse lunine faze. Ti simboli kažejo, da se morate, ko potujete po avtocesti do višje zavesti (pot, ki vodi v oddaljene gore), razvijati skozi vsa stanja zavesti - ničesar ni mogoče preskočiti.</p><p>Kateri življenjski cikel se umirja ali teče? Kje vidite, da vaše sposobnosti naraščajo ali upadajo? Kakšno pot boste prehodili? Ali morate združiti krotke in divje dele sebe? Se počutite, kot da se odpravljate v neznano? Kako ste zavajali sebe ali druge? Ali razumete, da so vsi dogodki v vašem življenju del vašega duhovnega potovanja? Bi lahko prešteli svoje blagoslove? Se počutite sami? Se vam zdi, da ima duhovna pot veliko zavojev? Kako bi lahko izstopili iz padca v silna čustva in občutke? Katera stara rana se celi ali gnoji? Bi bili pripravljeni odpustiti sebi ali drugemu? Kakšne spremembe po vašem mnenju prinaša vaša duhovna praksa? Vas psihična postranska zabava odvrača od vašega duhovnega dela? Katero bolečino iz preteklosti ste predolgo skrivali? Kateri strahovi zahtevajo obravnavanje da lahko tako napredujete na svoji poti?</p>',
                    src: moon,
                    to: "/the-moon"
                },
                {
                    name: 'XVIII – Luna',
                    text: 'Rak z lahkoto priplava iz tolmuna in simbolizira veliki ocean ali maternico življenja, iz katere vse izvira. Volčji in pasji zaliv ob luni, vidne so vse lunine faze. Ti simboli kažejo, da se morate, ko potujete po avtocesti do višje zavesti (pot, ki vodi v oddaljene gore), razvijati skozi vsa stanja zavesti - ničesar ni mogoče preskočiti.</p><p>Kateri življenjski cikel se umirja ali teče? Kje vidite, da vaše sposobnosti naraščajo ali upadajo? Kakšno pot boste prehodili? Ali morate združiti krotke in divje dele sebe? Se počutite, kot da se odpravljate v neznano? Kako ste zavajali sebe ali druge? Ali razumete, da so vsi dogodki v vašem življenju del vašega duhovnega potovanja? Bi lahko prešteli svoje blagoslove? Se počutite sami? Se vam zdi, da ima duhovna pot veliko zavojev? Kako bi lahko izstopili iz padca v silna čustva in občutke? Katera stara rana se celi ali gnoji? Bi bili pripravljeni odpustiti sebi ali drugemu? Kakšne spremembe po vašem mnenju prinaša vaša duhovna praksa? Vas psihična postranska zabava odvrača od vašega duhovnega dela? Katero bolečino iz preteklosti ste predolgo skrivali? Kateri strahovi zahtevajo obravnavanje da lahko tako napredujete na svoji poti?</p>',
                    src: moonDown,
                    to: "/the-moon"
                },
                {
                    name: 'XIX – Sonce',
                    text: '<p><b>Univerzalni arhetip:</b> Sonce sije kot otrok, oblečen v pero (kot Norec), ki jezdi brez sedla na konju. Jahanje konja brez sedla ali uzde, poleg tega, da kaže na ozaveščanje, simbolizira otrokovo popolno obvladovanje živalskih nagonov, kar se prvič vidi v karti Moč. Stena v ozadju karte navaja, da so bile premagane velike ovire in posledično ozdravljen "otrok v notranjosti".</p><p>Se vaše srce odpira sebi ali drugemu? Ste optimistični ali pesimistični? S čim morda pretiravate? Ali se morda usmerjate v izgorelost? Kaj vas navdaja z vitalnostjo? Se vaše zdravje obnavlja, ali je ogroženo? Kako delite svetlobo in ljubezen? Kakšno srečo uživate? Kateri zid ste premagali? V čem se polnete z energijo? Kateri načrt se ponovno oživi? Bi lahko bili bolj odprti in strpni do drugih? Ali uživate v lepotah življenja? Vas muči pomanjkanje sonca? Kateri dosežek praznujete? Kako vaša energija in entuziazem pomagata ali ovirata vas ali druge? Kateri viri so shranjeni za deževen dan? Ali čutite božansko svetlobo v vsem? Kako ustvarjate srečnejše, bolj zdravo in prijetnejše življenje zase in za druge? Kako bi lahko prinesli energijo v situacijo, ne da bi zanikali prizadevanja drugih?</p>',
                    src: sun,
                    to: "/the-sun"
                },
                {
                    name: 'XIX – Sonce',
                    text: '<p><b>Univerzalni arhetip:</b> Sonce sije kot otrok, oblečen v pero (kot Norec), ki jezdi brez sedla na konju. Jahanje konja brez sedla ali uzde, poleg tega, da kaže na ozaveščanje, simbolizira otrokovo popolno obvladovanje živalskih nagonov, kar se prvič vidi v karti Moč. Stena v ozadju karte navaja, da so bile premagane velike ovire in posledično ozdravljen "otrok v notranjosti".</p><p>Se vaše srce odpira sebi ali drugemu? Ste optimistični ali pesimistični? S čim morda pretiravate? Ali se morda usmerjate v izgorelost? Kaj vas navdaja z vitalnostjo? Se vaše zdravje obnavlja, ali je ogroženo? Kako delite svetlobo in ljubezen? Kakšno srečo uživate? Kateri zid ste premagali? V čem se polnete z energijo? Kateri načrt se ponovno oživi? Bi lahko bili bolj odprti in strpni do drugih? Ali uživate v lepotah življenja? Vas muči pomanjkanje sonca? Kateri dosežek praznujete? Kako vaša energija in entuziazem pomagata ali ovirata vas ali druge? Kateri viri so shranjeni za deževen dan? Ali čutite božansko svetlobo v vsem? Kako ustvarjate srečnejše, bolj zdravo in prijetnejše življenje zase in za druge? Kako bi lahko prinesli energijo v situacijo, ne da bi zanikali prizadevanja drugih?</p>',
                    src: sunDown,
                    to: "/the-sun"
                },
                {
                    name: 'XX – Sodba',
                    text: '<p><b>Univerzalni arhetip:</b> Nadangel Gabriel, "glasnik Najvišjega", pošilja prebujajoči klic tistim, ki ga lahko slišijo. Ljudje vstanejo iz svojih krstam podobnih škatel ali mrtvih samoomejujočih konstruktov v neomejenost. Ko stopite iz začasne resničnosti v večno resničnost, izkusite življenje. Vi in drugi ste natanko takšni, kot bi morali biti - brezhibnost in sočutje kraljujeta. Ta sprememba perspektive je kot preklop z gledanja filma na majhnem zaslonu na velik zaslon - nenadoma postane vidna večja slika.</p><p>Ali slišite klic k višji zavesti? Kakšne koristi bi vam lahko koristilo zadržanje sodbe? Kakšna sodba je bila izrečena? Zaradi česar se kesaš? Kako se osvobajate nepotrebnega samoobsojanja? Katero resnico slišite ali nočete slišati? Ali se vaša sposobnost dajanja ali sprejemanja konstruktivne kritike izboljšuje? Trobite predolgo in preglasno? Kakšen obred prehoda ali preobrazbe doživljate? Kakšen utrinek večnega vidite? Kolikšen časovni pritisk se zmanjšuje? Se vaš občutek za čas spreminja? Ali se zavedate, da morate za vedno dokončati svoje duhovno delo? Nad katerim mrtvim načinom razmišljanja ali vedenjem se dvigujete? Ali bolj poslušate sebe in manj druge? Ali se počutite osvobojeni od obsojanja drugih? Ali ste del skupinskega prizadevanja za družbene, politične ali okoljske spremembe?</p>',
                    src: judgement,
                    to: "/judgement"
                },
                {
                    name: 'XX – Sodba',
                    text: '<p><b>Univerzalni arhetip:</b> Nadangel Gabriel, "glasnik Najvišjega", pošilja prebujajoči klic tistim, ki ga lahko slišijo. Ljudje vstanejo iz svojih krstam podobnih škatel ali mrtvih samoomejujočih konstruktov v neomejenost. Ko stopite iz začasne resničnosti v večno resničnost, izkusite življenje. Vi in drugi ste natanko takšni, kot bi morali biti - brezhibnost in sočutje kraljujeta. Ta sprememba perspektive je kot preklop z gledanja filma na majhnem zaslonu na velik zaslon - nenadoma postane vidna večja slika.</p><p>Ali slišite klic k višji zavesti? Kakšne koristi bi vam lahko koristilo zadržanje sodbe? Kakšna sodba je bila izrečena? Zaradi česar se kesaš? Kako se osvobajate nepotrebnega samoobsojanja? Katero resnico slišite ali nočete slišati? Ali se vaša sposobnost dajanja ali sprejemanja konstruktivne kritike izboljšuje? Trobite predolgo in preglasno? Kakšen obred prehoda ali preobrazbe doživljate? Kakšen utrinek večnega vidite? Kolikšen časovni pritisk se zmanjšuje? Se vaš občutek za čas spreminja? Ali se zavedate, da morate za vedno dokončati svoje duhovno delo? Nad katerim mrtvim načinom razmišljanja ali vedenjem se dvigujete? Ali bolj poslušate sebe in manj druge? Ali se počutite osvobojeni od obsojanja drugih? Ali ste del skupinskega prizadevanja za družbene, politične ali okoljske spremembe?</p>',
                    src: judgementDown,
                    to: "/judgement"
                },
                {
                    name: 'XXI – Svet',
                    text: '<p><b>Univerzalni arhetip:</b> Ženska ali "plesalka", kot jo včasih imenujejo, stoji v zraku in simbolizira, da duh podpira njena prizadevanja. Karta se imenuje Svet in tudi Vesolje. S spoštovanjem svojih posvetnih obveznosti in odgovornosti obvladate posvetno življenje in pridobite duhovno svobodo, ki jo prikazuje venec zmage. Ponovno se pojavijo štirje krilati varuhi, ki obdajajo kolo sreče, kar nakazuje, da močem, ki jim predstavljajo, so zdaj njej na voljo. Je mag ali mojstrica preobrazbe v njenem najpopolnejšem smislu – nekdo, ki lahko poljubno stopi v kozmično zavest.</p><p>Zakaj plešete v etru? Pod kateri projekt se podpisujete? Ali praznujete težko pričakovan dogodek? Zakaj se trudite izkusiti kozmično zavest? Ali praktična uporaba duhovnih naukov povečuje vašo samozavest in obvladovanje življenja? Kako oddajate kozmično energijo? Kako vas samodisciplina in prilagodljivost osvobajata sredi velikih obveznosti? Kje in kako spuščate in vpijate božansko energijo? Kakšno osvoboditev odkrivate znotraj omejitev svojega vsakdanjega življenja? Zakaj se ne počutite večkrat zvezanega? Za kaj je potreben nadčloveški napor? Se uspešno prevzgajate? Ali doživljate samo-aktualizacijo? Kako vas mešanica ljubezni, trdega dela in nenavezanosti osvobaja? Kam vas v življenju kličejo, da igrate moške in ženske vloge? Kako izpolnjevanje vsakodnevnih obveznosti spoštuje vaše duhovne obveznosti?</p>',
                    src: world,
                    to: "/the-world"
                },
                {
                    name: 'XXI – Svet',
                    text: '<p><b>Univerzalni arhetip:</b> Ženska ali "plesalka", kot jo včasih imenujejo, stoji v zraku in simbolizira, da duh podpira njena prizadevanja. Karta se imenuje Svet in tudi Vesolje. S spoštovanjem svojih posvetnih obveznosti in odgovornosti obvladate posvetno življenje in pridobite duhovno svobodo, ki jo prikazuje venec zmage. Ponovno se pojavijo štirje krilati varuhi, ki obdajajo kolo sreče, kar nakazuje, da močem, ki jim predstavljajo, so zdaj njej na voljo. Je mag ali mojstrica preobrazbe v njenem najpopolnejšem smislu – nekdo, ki lahko poljubno stopi v kozmično zavest.</p><p>Zakaj plešete v etru? Pod kateri projekt se podpisujete? Ali praznujete težko pričakovan dogodek? Zakaj se trudite izkusiti kozmično zavest? Ali praktična uporaba duhovnih naukov povečuje vašo samozavest in obvladovanje življenja? Kako oddajate kozmično energijo? Kako vas samodisciplina in prilagodljivost osvobajata sredi velikih obveznosti? Kje in kako spuščate in vpijate božansko energijo? Kakšno osvoboditev odkrivate znotraj omejitev svojega vsakdanjega življenja? Zakaj se ne počutite večkrat zvezanega? Za kaj je potreben nadčloveški napor? Se uspešno prevzgajate? Ali doživljate samo-aktualizacijo? Kako vas mešanica ljubezni, trdega dela in nenavezanosti osvobaja? Kam vas v življenju kličejo, da igrate moške in ženske vloge? Kako izpolnjevanje vsakodnevnih obveznosti spoštuje vaše duhovne obveznosti?</p>',
                    src: worldDown,
                    to: "/the-world"
                },
                // Palice
                {
                    name: 'As palic',
                    text: '<p><b>Univerzalni arhetip:</b> Palico, ki simbolizira božanski navdih in voljo ter element ognja in označuje vitalnost, drži roka, ki sega iz oblaka, sveta nevidnih, a zelo resničnih sil. Kot podaljšek vašega kazalnega prsta, palica nakazuje, kako pomembno je biti pozoren na to, kar se trenutno dogaja pred vami. Prav tako nakazuje, kako pomembno je biti pozoren ali se zavedati svojih namenov – zakaj razmišljate, govorite in delate to, kar ste. Vsaka palica v obleki se razlisti, kar nakazuje, da kar prekipeva od življenja.</p><p>Kakšna moč je pri roki? Kakšna nova priložnost se vam ponuja? Katere ideje vas aktivirajo? Ali postajate bolj samovoljni? Kakšna situacija vam pokaže pomen besed "tvoja bo, ne moja volja"? Ali čakate na zagon, da se premaknete? Kaj se je končno dobro začelo? Ali doživljate dotok ustvarjalne energije? Katera ideja se uveljavlja ali ne more zaživeti? Kako je bila vaša moč pridobljena? Ob čem se počutite goreče? Ali mislite, da je življenjska sila obrnjena proti vam? Ali se zavedate, da vam jemlje moč moč, ki je večja od vas? Kateri duhovni vpogled ali navdih vas navdušuje? Ali vas kakšen vpogled vodi v večjo duhovno zavest? Koga ste prevzeli z razkazovanjem moči? Kako ravnate s svojo novo močjo ali nemočjo? Kakšna situacija je lahko izpod nadzora?</p>',
                    src: acewands,
                    to: "/aspalic"
                },
                {
                    name: 'As palic',
                    text: '<p><b>Univerzalni arhetip:</b> Palico, ki simbolizira božanski navdih in voljo ter element ognja in označuje vitalnost, drži roka, ki sega iz oblaka, sveta nevidnih, a zelo resničnih sil. Kot podaljšek vašega kazalnega prsta, palica nakazuje, kako pomembno je biti pozoren na to, kar se trenutno dogaja pred vami. Prav tako nakazuje, kako pomembno je biti pozoren ali se zavedati svojih namenov – zakaj razmišljate, govorite in delate to, kar ste. Vsaka palica v obleki se razlisti, kar nakazuje, da kar prekipeva od življenja.</p><p>Kakšna moč je pri roki? Kakšna nova priložnost se vam ponuja? Katere ideje vas aktivirajo? Ali postajate bolj samovoljni? Kakšna situacija vam pokaže pomen besed "tvoja bo, ne moja volja"? Ali čakate na zagon, da se premaknete? Kaj se je končno dobro začelo? Ali doživljate dotok ustvarjalne energije? Katera ideja se uveljavlja ali ne more zaživeti? Kako je bila vaša moč pridobljena? Ob čem se počutite goreče? Ali mislite, da je življenjska sila obrnjena proti vam? Ali se zavedate, da vam jemlje moč moč, ki je večja od vas? Kateri duhovni vpogled ali navdih vas navdušuje? Ali vas kakšen vpogled vodi v večjo duhovno zavest? Koga ste prevzeli z razkazovanjem moči? Kako ravnate s svojo novo močjo ali nemočjo? Kakšna situacija je lahko izpod nadzora?</p>',
                    src: acewandsDown,
                    to: "/aspalic"
                },
                {
                    name: 'Dvojka palic',
                    text: '<p><b>Univerzalni arhetip:</b> Človek z globusom v eni roki in palico v drugi opazuje okolico. Druga palica je pritrjena v obroču na steni. Namera vodi do pozornosti. Razmišlja o modrosti začetka projekta in o tem, kje na svetu bi to storil. Palica v obroču kaže, da tudi on razmišlja o modrosti preusmerjanja pozornosti navznoter. Rečeno je, da karta prikazuje nesrečo Aleksandra Velikega sredi osvajanja sveta. Karta sprašuje: "Kaj prinaša resnično in trajno zadovoljstvo?"</p><p>Ali po vsem, kar ste dosegli, še vedno potrebujete vznemirjenje izziva? Ali je modro stopiti v svet ali iz njega? Kaj bi radi dosegli? Kaj ste, ko ste na robu? Kakšen signal čakate? Katere nasprotujoče si zamisli je mogoče sintetizirati? Kakšno spremembo iščete? Kakšno priložnost za rast vidite? Kateri izziv vas morda potegne iz cone udobja? Vam je bilo dovolj dolgo udobno? Zakaj se počutite nemirni? Ali oddajate toliko energije, da zanemarjate svoje notranje potrebe? Kakšen je vaš rezervni načrt? Kakšen je občutek imeti svet na dlani? Bi radi kaj potovali? Ali dvomite o potovanju z drugimi? Ali temeljito razmišljate o svoji spodbudi za avanturo? Bi vam lahko koristilo, če bi se umaknili in prepustili intuiciji, da vas vodi?</p>',
                    src: twowands,
                    to: "/dvojkapalic"
                },
                {
                    name: 'Dvojka palic',
                    text: '<p><b>Univerzalni arhetip:</b> Človek z globusom v eni roki in palico v drugi opazuje okolico. Druga palica je pritrjena v obroču na steni. Namera vodi do pozornosti. Razmišlja o modrosti začetka projekta in o tem, kje na svetu bi to storil. Palica v obroču kaže, da tudi on razmišlja o modrosti preusmerjanja pozornosti navznoter. Rečeno je, da karta prikazuje nesrečo Aleksandra Velikega sredi osvajanja sveta. Karta sprašuje: "Kaj prinaša resnično in trajno zadovoljstvo?"</p><p>Ali po vsem, kar ste dosegli, še vedno potrebujete vznemirjenje izziva? Ali je modro stopiti v svet ali iz njega? Kaj bi radi dosegli? Kaj ste, ko ste na robu? Kakšen signal čakate? Katere nasprotujoče si zamisli je mogoče sintetizirati? Kakšno spremembo iščete? Kakšno priložnost za rast vidite? Kateri izziv vas morda potegne iz cone udobja? Vam je bilo dovolj dolgo udobno? Zakaj se počutite nemirni? Ali oddajate toliko energije, da zanemarjate svoje notranje potrebe? Kakšen je vaš rezervni načrt? Kakšen je občutek imeti svet na dlani? Bi radi kaj potovali? Ali dvomite o potovanju z drugimi? Ali temeljito razmišljate o svoji spodbudi za avanturo? Bi vam lahko koristilo, če bi se umaknili in prepustili intuiciji, da vas vodi?</p>',
                    src: twowandsDown,
                    to: "/dvojkapalic"
                },
                {
                    name: 'Trojka palic',
                    text: '<p><b>Univerzalni arhetip:</b> Zrel moški, ki se naslanja na palico, gleda z roba pečine in gleda na morje, posejano z ladjami. V ospredju sta zasajeni dve palici. Ladje na morju nakazujejo, da so se njegove ideje in navdihi uresničili. Zdaj je čas, da se odloči, ali bo povečal svoje možnosti za uspeh tako, da se bo obrnil na pomoč, ki je na voljo, to sta dve čakajoči palici zadaj, ali bo nadaljeval sam. Nekje na tej črti vsi uspešni ljudje razumejo pomen pomoči.</p><p>Vam vizionarski vpogled daje vpogled v prihodnost? So vaše pretekle izkušnje za vami in vas podpirajo? Kaj si predstavljate, da boste dosegli? Katero idejo ali projekt začenjate? Kdo vam pomaga uresničiti vaše načrte? Ste preveč ponosni, da bi sprejeli pomoč? Ali čutite, da je moč in sila, za že dolgo načrtovan dosežek, z vami? Kakšne pridobitve ste pričakovali? Katerih zamud je konec? Kaj puščate za sabo? Ali razmišljate o ponovnem sodelovanju po določenem času? Ste glede prihodnosti optimistični, pesimistični ali nevtralni? Kam usmerjate (ali imate težave z osredotočenjem) svojo pozornost? Ali porabite preveč časa za pogovore o idejah, namesto da bi zbirali energijo za njihovo uresničitev? Zakaj se počutite razočarani ali blokirani? Nad čim imate (ali želite imeti) oblast? Vam primanjkuje volje, da bi sledili?</p>',
                    src: threewands,
                    to: "/trojkapalic"
                },
                {
                    name: 'Trojka palic',
                    text: '<p><b>Univerzalni arhetip:</b> Zrel moški, ki se naslanja na palico, gleda z roba pečine in gleda na morje, posejano z ladjami. V ospredju sta zasajeni dve palici. Ladje na morju nakazujejo, da so se njegove ideje in navdihi uresničili. Zdaj je čas, da se odloči, ali bo povečal svoje možnosti za uspeh tako, da se bo obrnil na pomoč, ki je na voljo, to sta dve čakajoči palici zadaj, ali bo nadaljeval sam. Nekje na tej črti vsi uspešni ljudje razumejo pomen pomoči.</p><p>Vam vizionarski vpogled daje vpogled v prihodnost? So vaše pretekle izkušnje za vami in vas podpirajo? Kaj si predstavljate, da boste dosegli? Katero idejo ali projekt začenjate? Kdo vam pomaga uresničiti vaše načrte? Ste preveč ponosni, da bi sprejeli pomoč? Ali čutite, da je moč in sila, za že dolgo načrtovan dosežek, z vami? Kakšne pridobitve ste pričakovali? Katerih zamud je konec? Kaj puščate za sabo? Ali razmišljate o ponovnem sodelovanju po določenem času? Ste glede prihodnosti optimistični, pesimistični ali nevtralni? Kam usmerjate (ali imate težave z osredotočenjem) svojo pozornost? Ali porabite preveč časa za pogovore o idejah, namesto da bi zbirali energijo za njihovo uresničitev? Zakaj se počutite razočarani ali blokirani? Nad čim imate (ali želite imeti) oblast? Vam primanjkuje volje, da bi sledili?</p>',
                    src: threewandsDown,
                    to: "/trojkapalic"
                },
                {
                    name: 'Štirica palic',
                    text: '<p><b>Univerzalni arhetip:</b> Štiri palice podpirajo venec, dve plesoči ženski pa dvigujeta šopke, kar nakazuje praznovanje. V ozadju prevladuje stari dvorec, ki namiguje na tradicijo. Slika simbolizira vrednost združevanja za spoštovanje starih tradicij, obredov in ritualov ter vrednost ustvarjanja novih.</p><p>Zakaj ste veseli ali optimistični? Kako pomagate graditi boljši svet? Ali štejete svoje blagoslove? Ali čutite navdih, da poženete korenine in postanete bolj stabilni? Pri katerem tradicionalnem ali netradicionalnem projektu sodelujete? Ali praznujete to, kar ste pomagali sestaviti? Ali načrtujete ali odpovedujete poroko ali obred? Del katere skupine niste več? Se počutite kot tujec? Ali ste zaradi kakšne bolezni manj sposobni sodelovati v življenju? Kako se lahko znajdete v zamahu? Čutite, da bi morali v svoje življenje vnesti več obredov ali ritualov? Česa se spominjate? Ali morda pričakovanja drugega zavirajo vaše navdušenje? Kakšno nagrado si delite? Ali kršite tradicijo ali družino, da bi zadovoljili lastne potrebe? Medtem ko sledite svojim nagibom, ste pozorni, da otroka ne vržete ven skupaj z vodo za kopanje?</p>',
                    src: fourwands,
                    to: "/stiricapalic"
                },
                {
                    name: 'Štirica palic',
                    text: '<p><b>Univerzalni arhetip:</b> Štiri palice podpirajo venec, dve plesoči ženski pa dvigujeta šopke, kar nakazuje praznovanje. V ozadju prevladuje stari dvorec, ki namiguje na tradicijo. Slika simbolizira vrednost združevanja za spoštovanje starih tradicij, obredov in ritualov ter vrednost ustvarjanja novih.</p><p>Zakaj ste veseli ali optimistični? Kako pomagate graditi boljši svet? Ali štejete svoje blagoslove? Ali čutite navdih, da poženete korenine in postanete bolj stabilni? Pri katerem tradicionalnem ali netradicionalnem projektu sodelujete? Ali praznujete to, kar ste pomagali sestaviti? Ali načrtujete ali odpovedujete poroko ali obred? Del katere skupine niste več? Se počutite kot tujec? Ali ste zaradi kakšne bolezni manj sposobni sodelovati v življenju? Kako se lahko znajdete v zamahu? Čutite, da bi morali v svoje življenje vnesti več obredov ali ritualov? Česa se spominjate? Ali morda pričakovanja drugega zavirajo vaše navdušenje? Kakšno nagrado si delite? Ali kršite tradicijo ali družino, da bi zadovoljili lastne potrebe? Medtem ko sledite svojim nagibom, ste pozorni, da otroka ne vržete ven skupaj z vodo za kopanje?</p>',
                    src: fourwandsDown,
                    to: "/stiricapalic"
                },
                {
                    name: 'Petica palic',
                    text: '<p><b>Univerzalni arhetip:</b> Pet moških maha s palicami, kar nakazuje, da je v teku igra življenja. Ljudje, ki gredo v različne smeri, pomenijo različna mnenja, razdeljeno pozornost, nasprotujoče si interese in/ali kako vsaka oseba opravlja posebno funkcijo v skupini. Zdi se, da ena oseba poskuša skupino spraviti v red. Če naj bi prišlo do neke vrste usklajenega delovanja, je treba osebne interese pustiti ob strani, da se lahko uresniči namen skupine.</p><p>Ali ste vpleteni v tekmovanje, nesoglasje ali spor? Katero igro igrate (ali katero igro neradi igrate)? Igrate vi ali drugi pošteno? Katero konkurenčno idejo poskušate predstaviti? Za katero resnico ste navdihnjeni, da se zavzamete? Kateri spor bi lahko rešili sporazumno? Kateri boji ega se pojavljajo ali rešujejo? Kaj zahteva reorganizacijo? Kje je vodstvo potrebno ali se proti njemu borite? Bijete vredno bitko? Se pogumno soočate s stisko? Ali želite vsiliti svojo voljo drugim? Kaj se naučite iz zdrave konkurence? Ali se morate uveljaviti ali umakniti? Kako bi vam lahko koristilo preverjanje idej drugih? Kateri boj vas bremeni? Usmerjate svojo agresivno energijo v kontaktne športe? Katera pravila odpadajo? Zakaj ne morete doseči kompromisa? Ali se lahko nasprotne sile združijo okoli skupnega cilja?</p>',
                    src: fivewands,
                    to: "/peticapalic"
                },
                {
                    name: 'Petica palic',
                    text: '<p><b>Univerzalni arhetip:</b> Pet moških maha s palicami, kar nakazuje, da je v teku igra življenja. Ljudje, ki gredo v različne smeri, pomenijo različna mnenja, razdeljeno pozornost, nasprotujoče si interese in/ali kako vsaka oseba opravlja posebno funkcijo v skupini. Zdi se, da ena oseba poskuša skupino spraviti v red. Če naj bi prišlo do neke vrste usklajenega delovanja, je treba osebne interese pustiti ob strani, da se lahko uresniči namen skupine.</p><p>Ali ste vpleteni v tekmovanje, nesoglasje ali spor? Katero igro igrate (ali katero igro neradi igrate)? Igrate vi ali drugi pošteno? Katero konkurenčno idejo poskušate predstaviti? Za katero resnico ste navdihnjeni, da se zavzamete? Kateri spor bi lahko rešili sporazumno? Kateri boji ega se pojavljajo ali rešujejo? Kaj zahteva reorganizacijo? Kje je vodstvo potrebno ali se proti njemu borite? Bijete vredno bitko? Se pogumno soočate s stisko? Ali želite vsiliti svojo voljo drugim? Kaj se naučite iz zdrave konkurence? Ali se morate uveljaviti ali umakniti? Kako bi vam lahko koristilo preverjanje idej drugih? Kateri boj vas bremeni? Usmerjate svojo agresivno energijo v kontaktne športe? Katera pravila odpadajo? Zakaj ne morete doseči kompromisa? Ali se lahko nasprotne sile združijo okoli skupnega cilja?</p>',
                    src: fivewandsDown,
                    to: "/peticapalic"
                },
                {
                    name: 'Šestica palic',
                    text: '<p><b>Univerzalni arhetip:</b> Množica s palico v rokah hodi ob človeku z lovoriko, ki častno sedi na konju. Jezdec drži okrašeno palico, ki kaže, da je dosegel cilj z namenom in pozornostjo ter ga častijo kot junaka ali vodjo. Občudovanje, podpora in strinjanje skupine so ga pripomogli k temu položaju; izguba tega bi lahko pomenila izgubo položaja (vsaj navzven). Ta prizor lahko primerjamo z Jezusovim vstopom v Jeruzalem, vsi pa ga pozdravljajo kot Mesijo.</p><p>Okoli koga ali česa se zbirate? Kakšno funkcijo ali odgovornost prevzemate? Kakšna vrsta vodenje se pričakuje od vas? Ste zaskrbljeni zaradi pričakovanj drugih? Ali se dviguje vaše duhovno zavedanje? Kakšno priznanje prejemate (ali ga želite prejeti)? Kdo zastopa vaš cilj ali interese? Kakšne nagrade prejemate? V kateri moralni zmagi uživate? Ali se zavedate, da je uspeh timsko delo? Kako bi lahko bili bolj odzivni na potrebe drugih? Ali doživljate porazni odnos? Imate nerealna pričakovanja? Ste za napredovanje? Ali je nekdo dobil položaj, ki ste ga želeli vi? Kateri ideali vas ganejo? Se počutite večvrednega/manjvrednega od drugih? Ste upravičeno ponosni ali vam manjka ponižnosti? Ali se vaša samozavest krepi? Ste bolj osredotočeni na svoj status kot na delo, ki je pred vami? Ali uspeh traja dlje, kot je bilo pričakovano? Kakšno vedenje modelirate?</p>',
                    src: sixwands,
                    to: "/sesticapalic"
                },
                {
                    name: 'Šestica palic',
                    text: '<p><b>Univerzalni arhetip:</b> Množica s palico v rokah hodi ob človeku z lovoriko, ki častno sedi na konju. Jezdec drži okrašeno palico, ki kaže, da je dosegel cilj z namenom in pozornostjo ter ga častijo kot junaka ali vodjo. Občudovanje, podpora in strinjanje skupine so ga pripomogli k temu položaju; izguba tega bi lahko pomenila izgubo položaja (vsaj navzven). Ta prizor lahko primerjamo z Jezusovim vstopom v Jeruzalem, vsi pa ga pozdravljajo kot Mesijo.</p><p>Okoli koga ali česa se zbirate? Kakšno funkcijo ali odgovornost prevzemate? Kakšna vrsta vodenje se pričakuje od vas? Ste zaskrbljeni zaradi pričakovanj drugih? Ali se dviguje vaše duhovno zavedanje? Kakšno priznanje prejemate (ali ga želite prejeti)? Kdo zastopa vaš cilj ali interese? Kakšne nagrade prejemate? V kateri moralni zmagi uživate? Ali se zavedate, da je uspeh timsko delo? Kako bi lahko bili bolj odzivni na potrebe drugih? Ali doživljate porazni odnos? Imate nerealna pričakovanja? Ste za napredovanje? Ali je nekdo dobil položaj, ki ste ga želeli vi? Kateri ideali vas ganejo? Se počutite večvrednega/manjvrednega od drugih? Ste upravičeno ponosni ali vam manjka ponižnosti? Ali se vaša samozavest krepi? Ste bolj osredotočeni na svoj status kot na delo, ki je pred vami? Ali uspeh traja dlje, kot je bilo pričakovano? Kakšno vedenje modelirate?</p>',
                    src: sixwandsDown,
                    to: "/sesticapalic"
                },
                {
                    name: 'Sedmica palic',
                    text: '<p><b>Univerzalni arhetip:</b> Človek na skalnati pečini maha s palico; šest drugih pa od spodaj. Ta človek kaže pogum in notranjo gotovost, da loči sebe in/ali svoje mišljenje od skupine, palic pod njim. Čeprav je deležen kritik, ker sledi svojim idealom, se zdi, da se namerava obdržati pri svojem, kljub grožnjam.</p><p>Od koga ali česa se ločujete? Nad katerimi idejami se dvigujete? Kako jemljete svojo moč? Ali se počutite ogrožene s strani drugih ali grozite njim? Kaj potrebujete, da ostanete na vrhu? Kdo samo govori in nič ne ukrepa? Kako se zavzemate za svoje ideje in prepričanja? Ste polni energije za dolgo pot? Ste zdržali ali bi morda prosili za pomoč? S kakšnim nasprotovanjem se soočate ali se umikate? Kaj vas lahko prevzame? Kaj ali koga ste primorani zaščititi? Kateri nezaželen vnos vas napada? Se počutite bolj obrambni, kot je potrebno? S katerimi težavami se ukvarjate ali bežite? Katere ovire premagujete oziroma katere ovire premagujejo vas? Kako sprejemate nasprotujoče si ideje? Vam manjka odločnosti? Kakšno prednost imate?</p>',
                    src: sevenwands,
                    to: "/sevenwands"
                },
                {
                    name: 'Sedmica palic',
                    text: '<p><b>Univerzalni arhetip:</b> Človek na skalnati pečini maha s palico; šest drugih pa od spodaj. Ta človek kaže pogum in notranjo gotovost, da loči sebe in/ali svoje mišljenje od skupine, palic pod njim. Čeprav je deležen kritik, ker sledi svojim idealom, se zdi, da se namerava obdržati pri svojem, kljub grožnjam.</p><p>Od koga ali česa se ločujete? Nad katerimi idejami se dvigujete? Kako jemljete svojo moč? Ali se počutite ogrožene s strani drugih ali grozite njim? Kaj potrebujete, da ostanete na vrhu? Kdo samo govori in nič ne ukrepa? Kako se zavzemate za svoje ideje in prepričanja? Ste polni energije za dolgo pot? Ste zdržali ali bi morda prosili za pomoč? S kakšnim nasprotovanjem se soočate ali se umikate? Kaj vas lahko prevzame? Kaj ali koga ste primorani zaščititi? Kateri nezaželen vnos vas napada? Se počutite bolj obrambni, kot je potrebno? S katerimi težavami se ukvarjate ali bežite? Katere ovire premagujete oziroma katere ovire premagujejo vas? Kako sprejemate nasprotujoče si ideje? Vam manjka odločnosti? Kakšno prednost imate?</p>',
                    src: sevenwandsDown,
                    to: "/sedmicapalic"
                },
                {
                    name: 'Osmica palic',
                    text: '<p><b>Univerzalni arhetip:</b> Osmica palic, simbl navdiha, kjer palice hitro letijo skozi odprt prostor. Videti je, da palice padajo na zemljo ali se dvigajo z nje. Padajoče palice bi pomenile, da ko iskreno iščete sporočila ali navdih in vpoglede od zgoraj, pridejo. Dvigajoče se palice bi nakazovale, da postanete sredstvo za pošiljanje sporočil ali navdiha in vpogled v svet. Za oboje je potrebna določena količina nenavezanosti.</p><p>Kdo ali kaj vas je navdušilo in napolnilo z energijo? Kam se odpravljate ali od kod prihajate? Je vse v zraku? Kaj se sproži ali odloži? Kaj vas čaka? Se v kaj prenaglite? Ste vedno na poti in preveč zaposleni? Kateri konec je blizu ali katerega konca ni na vidiku? Se počutite nemirni, nepotrpežljivi ali nelagodno? Se počutite, kot da se vrtite v krogu ali zapravljate čas in energijo? Kateri novi smeri vas navdihuje slediti? Ali vaša raven energije narašča ali je visoka, morda previsoka ali upada? Kaj se nepričakovano pospešuje? Kaj bi lahko zahtevalo vso vašo pozornost? Kaj ali kdo vas žene, da se premikate prehitro? Kakšna ideja se uveljavlja? Se vam odpira pot? Ste preplavljeni z idejami in navdihom? Ali delate ali poskušate narediti preveč stvari hkrati?</p>',
                    src: eightwands,
                    to: "/osmicapalic"
                },
                {
                    name: 'Osmica palic',
                    text: '<p><b>Univerzalni arhetip:</b> Osmica palic, simbl navdiha, kjer palice hitro letijo skozi odprt prostor. Videti je, da palice padajo na zemljo ali se dvigajo z nje. Padajoče palice bi pomenile, da ko iskreno iščete sporočila ali navdih in vpoglede od zgoraj, pridejo. Dvigajoče se palice bi nakazovale, da postanete sredstvo za pošiljanje sporočil ali navdiha in vpogled v svet. Za oboje je potrebna določena količina nenavezanosti.</p><p>Kdo ali kaj vas je navdušilo in napolnilo z energijo? Kam se odpravljate ali od kod prihajate? Je vse v zraku? Kaj se sproži ali odloži? Kaj vas čaka? Se v kaj prenaglite? Ste vedno na poti in preveč zaposleni? Kateri konec je blizu ali katerega konca ni na vidiku? Se počutite nemirni, nepotrpežljivi ali nelagodno? Se počutite, kot da se vrtite v krogu ali zapravljate čas in energijo? Kateri novi smeri vas navdihuje slediti? Ali vaša raven energije narašča ali je visoka, morda previsoka ali upada? Kaj se nepričakovano pospešuje? Kaj bi lahko zahtevalo vso vašo pozornost? Kaj ali kdo vas žene, da se premikate prehitro? Kakšna ideja se uveljavlja? Se vam odpira pot? Ste preplavljeni z idejami in navdihom? Ali delate ali poskušate narediti preveč stvari hkrati?</p>',
                    src: eightwandsDown,
                    to: "/osmicapalic"
                },
                {
                    name: 'Devetica palic',
                    text: '<p><b>Univerzalni arhetip:</b> Medtem ko ostaja pozoren, se bojevniku podoben moški s palico odmakne od ostalih osmih palic. Ker se je že boril, kar nakazuje njegova povita glava, izraz na njegovem obrazu nakazuje, da ima idejo, da je morda v drugi bojni situaciji. Samo čas bo pokazal, ali je to res. Ker se je odločil ostati v pripravljenosti, je hkrati pozoren in namerava ravnati s tem, kar ga lahko čaka.</p><p>Ali morate zaščititi ali braniti sebe ali druge? Bi bili veseli pomoči? Ali se morda izčrpavate s stalno pripravljenostjo? Na kaj se pripravljate? Se skriva opozicija? Kaj bi se vam lahko prikradlo? Iščete argument? Se počutite samozavestni? Od koga se počutite manj ali bolj pomembnega? Ste odprti ali zaprti za sklepanje kompromisov ali premirja z opozicijo? S čim se ukvarjate sami? Ali ste tako navajeni pretiravati, da ne pomislite, da bi prosili za pomoč? Je pridobitev podpore enostavna ali težka? Ali vztrajate pri svojem? Zakaj ste ali niste v obrambnem položaju? Vam močna postava in samozavest pomagata v težkih trenutkih? S čim se borite? Iz katerega boja se umikate ali prehajate vanj? Kaj vas krepi v stiski? Ste morda preobremenjeni? Ste se pripravljeni soočiti s čim? Zaupate v svoje sposobnosti?</p>',
                    src: ninewands,
                    to: "/deveticapalic"
                },
                {
                    name: 'Devetica palic',
                    text: '<p><b>Univerzalni arhetip:</b> Medtem ko ostaja pozoren, se bojevniku podoben moški s palico odmakne od ostalih osmih palic. Ker se je že boril, kar nakazuje njegova povita glava, izraz na njegovem obrazu nakazuje, da ima idejo, da je morda v drugi bojni situaciji. Samo čas bo pokazal, ali je to res. Ker se je odločil ostati v pripravljenosti, je hkrati pozoren in namerava ravnati s tem, kar ga lahko čaka.</p><p>Ali morate zaščititi ali braniti sebe ali druge? Bi bili veseli pomoči? Ali se morda izčrpavate s stalno pripravljenostjo? Na kaj se pripravljate? Se skriva opozicija? Kaj bi se vam lahko prikradlo? Iščete argument? Se počutite samozavestni? Od koga se počutite manj ali bolj pomembnega? Ste odprti ali zaprti za sklepanje kompromisov ali premirja z opozicijo? S čim se ukvarjate sami? Ali ste tako navajeni pretiravati, da ne pomislite, da bi prosili za pomoč? Je pridobitev podpore enostavna ali težka? Ali vztrajate pri svojem? Zakaj ste ali niste v obrambnem položaju? Vam močna postava in samozavest pomagata v težkih trenutkih? S čim se borite? Iz katerega boja se umikate ali prehajate vanj? Kaj vas krepi v stiski? Ste morda preobremenjeni? Ste se pripravljeni soočiti s čim? Zaupate v svoje sposobnosti?</p>',
                    src: ninewandsDown,
                    to: "/deveticapalic"
                },
                {
                    name: 'Desetica palic',
                    text: '<p><b>Univerzalni arhetip:</b> Človek, obtežen z desetimi palicami, simboli volje, namere in pozornosti, teče proti svojemu cilju. Potrebno je dejanje najvišje volje in jasnosti namena, da obdrži svojo namero in pozornost na cilju, ki je zdaj na vidiku. Čas za zaključek njegove misije je neizbežen. Ker je vsa njegova energija usmerjena v trenutek, na sliki ni sugerirano, kaj lahko sledi.</p><p>Kaj vas teži? Ste preveč razširjeni? Kakšen navdih in energijo zbirata skupaj? Kaj ste se odločili narediti, ne glede na vse? Kako ste prišli, kjer ste? Kdo je opustil svoje odgovornosti in jih prepustil vam? Se želite razbremeniti? Je vaš cilj na vidiku? Ste na cilju? Kako lahko najbolje izpolnite tisto, kar ste prevzeli? Kako lahko preložite breme? Ali oklevate z nadaljevanjem? Čemu se posvečate? Kdaj si vzamete odmor? Zakaj ne prosite za pomoč? Kaj hočete dokazati s preobremenjenostjo? Ali opravljate duhovne vaje? Ali razmišljate o padcu vsega in da pustite drugim, da ugotovijo, kaj storiti? Vas to, kar počnete, usposablja za nekaj pomembnega? Ali vaše breme postaja lažje ali težje?</p>',
                    src: tenwands,
                    to: "/deseticapalic"
                },
                {
                    name: 'Desetica palic',
                    text: '<p><b>Univerzalni arhetip:</b> Človek, obtežen z desetimi palicami, simboli volje, namere in pozornosti, teče proti svojemu cilju. Potrebno je dejanje najvišje volje in jasnosti namena, da obdrži svojo namero in pozornost na cilju, ki je zdaj na vidiku. Čas za zaključek njegove misije je neizbežen. Ker je vsa njegova energija usmerjena v trenutek, na sliki ni sugerirano, kaj lahko sledi.</p><p>Kaj vas teži? Ste preveč razširjeni? Kakšen navdih in energijo zbirata skupaj? Kaj ste se odločili narediti, ne glede na vse? Kako ste prišli, kjer ste? Kdo je opustil svoje odgovornosti in jih prepustil vam? Se želite razbremeniti? Je vaš cilj na vidiku? Ste na cilju? Kako lahko najbolje izpolnite tisto, kar ste prevzeli? Kako lahko preložite breme? Ali oklevate z nadaljevanjem? Čemu se posvečate? Kdaj si vzamete odmor? Zakaj ne prosite za pomoč? Kaj hočete dokazati s preobremenjenostjo? Ali opravljate duhovne vaje? Ali razmišljate o padcu vsega in da pustite drugim, da ugotovijo, kaj storiti? Vas to, kar počnete, usposablja za nekaj pomembnega? Ali vaše breme postaja lažje ali težje?</p>',
                    src: tenwandsDown,
                    to: "/deseticapalic"
                },
                {
                    name: 'Paž palic',
                    text: '<p><b>Univerzalni arhetip:</b> Paž stoji blizu piramid, simbola duhovne aspiracije. Razmišlja o svoji palici, kar kaže na njegovo pripravljenost prinesti ideje in navdihe od zgoraj v svetu. Kot novi učenec palice predstavlja voljo do pozornosti in zavedanja svojih namenov ali motivov. Paž palic je dojemljiv za lekcije, ki jih prinaša njegovo orodje. Uči se usklajevanja tega, za kar verjame, da je njegova volja, z eno samo božansko voljo.</p><p>Kaj vas navdihuje? Kaj nameravate storiti? Ste radovedni ali odporni na učenje? Kako se pripravljate na soočanje s prihodnostjo? Ali je možno, da grizete več, kot lahko prežvečite? Se vaša spolna energija prebuja ali ponovno prebuja? Kako ste naivni ali kako ostajate čisti? Je vaše vedenje otročje? Katero pot začenjate? Se vaš um odpira novim možnostim? Ali lahko vaša visoka energija in spontanost spravljata druge ob živce? Ali se vaše pomanjkanje izkušenj pozna? Ali iščete ali prejemate močne vpoglede? Ali vzamete duhovnega učitelja ali širite svoja duhovna obzorja? Kaj vzbuja vaše navdušenje? Kdo pravi, da veliko obetate? Je kakšno sporočilo težko razvozlati? Ali vzpostavljate stik s svojim duhovnim vodnikom? O čem ste iskreni kljub posledicam? Na kaj ste še posebej pozorni?</p>',
                    src: pagewands,
                    to: "/pazpalic"
                },
                {
                    name: 'Paž palic',
                    text: '<p><b>Univerzalni arhetip:</b> Paž stoji blizu piramid, simbola duhovne aspiracije. Razmišlja o svoji palici, kar kaže na njegovo pripravljenost prinesti ideje in navdihe od zgoraj v svetu. Kot novi učenec palice predstavlja voljo do pozornosti in zavedanja svojih namenov ali motivov. Paž palic je dojemljiv za lekcije, ki jih prinaša njegovo orodje. Uči se usklajevanja tega, za kar verjame, da je njegova volja, z eno samo božansko voljo.</p><p>Kaj vas navdihuje? Kaj nameravate storiti? Ste radovedni ali odporni na učenje? Kako se pripravljate na soočanje s prihodnostjo? Ali je možno, da grizete več, kot lahko prežvečite? Se vaša spolna energija prebuja ali ponovno prebuja? Kako ste naivni ali kako ostajate čisti? Je vaše vedenje otročje? Katero pot začenjate? Se vaš um odpira novim možnostim? Ali lahko vaša visoka energija in spontanost spravljata druge ob živce? Ali se vaše pomanjkanje izkušenj pozna? Ali iščete ali prejemate močne vpoglede? Ali vzamete duhovnega učitelja ali širite svoja duhovna obzorja? Kaj vzbuja vaše navdušenje? Kdo pravi, da veliko obetate? Je kakšno sporočilo težko razvozlati? Ali vzpostavljate stik s svojim duhovnim vodnikom? O čem ste iskreni kljub posledicam? Na kaj ste še posebej pozorni?</p>',
                    src: pagewandsDown,
                    to: "/pazpalic"
                },
                {
                    name: 'Vitez palic',
                    text: '<p><b>Univerzalni arhetip:</b> Vitez nosi palico in galopira mimo piramid, ki so simbol duhovnega stremljenja, na živahnem konju. Vitez palic z navdušenjem prevzame moč, ki se jo je naučil kot paž ali vajenec, in jo vključi v svoje življenje. Ta vitez je odločen in osredotočen na aktivno uporabo načela usklajevanja svoje volje z eno božansko voljo za toliko situacij, na kolikor se jih lahko spomni.</p><p>Ali začenjate ali zaključujete pomemben prehod? Ali tvegate po potrebi ali po nepotrebnem? Vam pomanjkanje vezi olajša spremembo službe, kariere ali prebivališča? Pred katero zatiralno osebo ali situacijo bežite? Katerim idejam ali spoznanjem morate slediti? Nad katerimi nauki ali filozofijo ste navdušeni? Se odpravljate na pustolovščino? Kaj vas vznemirja? Kateri duhovni navdih vas vodi naprej? Bijete svojo bitko? Ali ste duhovno iniciaciirani? Zakaj imate težave pri sprejemanju obveznosti? Ali želite osredotočiti svojo energijo? Kako se soočate z opozicijo? Kaj vas je nenadoma navdihnilo, da poskusite? Kaj želite dokazati ali premagati? Ali bi lahko upoštevanje intuicijskega vodenja pomagalo, ko vas imobilizira preveč informacij? Se počutite spolno pustolovski? Zakaj se ne morete umiriti ali napolniti z energijo? Ste polni energije ali vam je primanjkuje? Zakaj ste nestrpni?</p>',
                    src: knightwands,
                    to: "/vitezpalic"
                },
                {
                    name: 'Vitez palic',
                    text: '<p><b>Univerzalni arhetip:</b> Vitez nosi palico in galopira mimo piramid, ki so simbol duhovnega stremljenja, na živahnem konju. Vitez palic z navdušenjem prevzame moč, ki se jo je naučil kot paž ali vajenec, in jo vključi v svoje življenje. Ta vitez je odločen in osredotočen na aktivno uporabo načela usklajevanja svoje volje z eno božansko voljo za toliko situacij, na kolikor se jih lahko spomni.</p><p>Ali začenjate ali zaključujete pomemben prehod? Ali tvegate po potrebi ali po nepotrebnem? Vam pomanjkanje vezi olajša spremembo službe, kariere ali prebivališča? Pred katero zatiralno osebo ali situacijo bežite? Katerim idejam ali spoznanjem morate slediti? Nad katerimi nauki ali filozofijo ste navdušeni? Se odpravljate na pustolovščino? Kaj vas vznemirja? Kateri duhovni navdih vas vodi naprej? Bijete svojo bitko? Ali ste duhovno iniciaciirani? Zakaj imate težave pri sprejemanju obveznosti? Ali želite osredotočiti svojo energijo? Kako se soočate z opozicijo? Kaj vas je nenadoma navdihnilo, da poskusite? Kaj želite dokazati ali premagati? Ali bi lahko upoštevanje intuicijskega vodenja pomagalo, ko vas imobilizira preveč informacij? Se počutite spolno pustolovski? Zakaj se ne morete umiriti ali napolniti z energijo? Ste polni energije ali vam je primanjkuje? Zakaj ste nestrpni?</p>',
                    src: knightwandsDown,
                    to: "/vitezpalic"
                },
                {
                    name: 'Kraljica palic',
                    text: '<p><b>Univerzalni arhetip:</b> Kraljica palic sedi in drži simbole svoje oblasti, palico v desni roki in sončnico v levi, kar pomeni njeno povezavo z božanskim. Njen prestol je okrašen z levi, kar kaže na svojevoljnost, samo-ponos, dostojanstvo in dominantnost. Črna mačka, udomačena žival, sedi ob njenih nogah, kar nakazuje, da ima gojene nadnaravne moči. Asertivna, ekstrovertirana in samozavestna kraljica palic namerava vladati z ljubeznijo in razumevanjem ter svoje dolžnosti opravlja s to mislijo v ospredju.</p><p>Koga ali kaj navdihujete ali vas navdihuje? Ste polni idej in energije? Imate raje spontanost kot pa načrtovanje? Se počutite vitalni in močni? S katero žensko avtoriteto se srečujete? Ali vas imajo drugi za nekoga z vpogledom in intuicijo? Ali duhovne vpoglede uporabljate v praktične namene? Zakaj pretiravate pri sebi? Kdo izziva vašo avtoriteto? Zakaj ste tako samovoljni ali egoistični? Koga ščitite? Do česa ali koga se počutite strastno ali brez strasti? Ali se zahtevajo vaše vodstvene sposobnosti? Ste neodvisni mislec? Kako bi lahko uporabili moč pozitivnega mišljenja? Kakšne ambicije uresničujete oziroma katere ambicije so vam onemogočene? Ste ponosni nase? Ali morate biti bolj ekstrovertirani? Kaj pridobite ali izgubite s plezanjem po lestvici v podjetju? Kakšnega razumevanja ste deležni?</p>',
                    src: queenwands,
                    to: "/kraljicapalic"
                },
                {
                    name: 'Kraljica palic',
                    text: '<p><b>Univerzalni arhetip:</b> Kraljica palic sedi in drži simbole svoje oblasti, palico v desni roki in sončnico v levi, kar pomeni njeno povezavo z božanskim. Njen prestol je okrašen z levi, kar kaže na svojevoljnost, samo-ponos, dostojanstvo in dominantnost. Črna mačka, udomačena žival, sedi ob njenih nogah, kar nakazuje, da ima gojene nadnaravne moči. Asertivna, ekstrovertirana in samozavestna kraljica palic namerava vladati z ljubeznijo in razumevanjem ter svoje dolžnosti opravlja s to mislijo v ospredju.</p><p>Koga ali kaj navdihujete ali vas navdihuje? Ste polni idej in energije? Imate raje spontanost kot pa načrtovanje? Se počutite vitalni in močni? S katero žensko avtoriteto se srečujete? Ali vas imajo drugi za nekoga z vpogledom in intuicijo? Ali duhovne vpoglede uporabljate v praktične namene? Zakaj pretiravate pri sebi? Kdo izziva vašo avtoriteto? Zakaj ste tako samovoljni ali egoistični? Koga ščitite? Do česa ali koga se počutite strastno ali brez strasti? Ali se zahtevajo vaše vodstvene sposobnosti? Ste neodvisni mislec? Kako bi lahko uporabili moč pozitivnega mišljenja? Kakšne ambicije uresničujete oziroma katere ambicije so vam onemogočene? Ste ponosni nase? Ali morate biti bolj ekstrovertirani? Kaj pridobite ali izgubite s plezanjem po lestvici v podjetju? Kakšnega razumevanja ste deležni?</p>',
                    src: queenwandsDown,
                    to: "/kraljicapalic"
                },
                {
                    name: 'Kralj palic',
                    text: '<p><b>Univerzalni arhetip:</b> Obrnjen vstran, kralj v desni roki drži palico. Njegov prestol je poslikan z levi, ki označujejo njegov pogum, dostojanstvo, samo-ponos in prevlado. Ob vznožju njegovega prestola stoji močerad, za katerega so nekoč verjeli, da živi in se upira ognju. Ko se vročina življenja dvigne, Kralj palic modro usmeri pozornost navznoter, da ohladi navdih.</p><p>Kaj ali kdo vas navdihuje? Na kaj se osredotočate? Zaradi česa ste navdušeni ali jezni? Kaj spravljate s tal? Je vaš namen napačno razložen? Ali morate usmerjati druge? Kaj vas motivira, da posežete po zvezdah? Se počutite polne energije ali ste obupani? S katero moško avtoriteto se soočate? Obožujete izzive? Kakšno modrost uporabljate ali delite? Mislite, da imate vedno prav? Ste odgovorni za druge? Kako uporabljate svoje izvršilne sposobnosti? Ali vztrajate pri svojem ali ste egoistični? Zakaj ste gospodovalni ali prepirljivi? Ste vse bolj usmerjeni vase? Ali sledite svojim duhovnim spoznanjem? Ali druge vleče k sebi ali stran od sebe? Zakaj ste togi ali nepopustljivi? Glede česa ste optimistični? Bi lahko gojili potrpežljivost? Ali služite drugim kot vzornik? Bi lahko asertivnost sprejeli bolje kot agresivnost?</p>',
                    src: kingwands,
                    to: "/kraljpalic"
                },
                {
                    name: 'Kralj palic',
                    text: '<p><b>Univerzalni arhetip:</b> Obrnjen vstran, kralj v desni roki drži palico. Njegov prestol je poslikan z levi, ki označujejo njegov pogum, dostojanstvo, samo-ponos in prevlado. Ob vznožju njegovega prestola stoji močerad, za katerega so nekoč verjeli, da živi in se upira ognju. Ko se vročina življenja dvigne, Kralj palic modro usmeri pozornost navznoter, da ohladi navdih.</p><p>Kaj ali kdo vas navdihuje? Na kaj se osredotočate? Zaradi česa ste navdušeni ali jezni? Kaj spravljate s tal? Je vaš namen napačno razložen? Ali morate usmerjati druge? Kaj vas motivira, da posežete po zvezdah? Se počutite polne energije ali ste obupani? S katero moško avtoriteto se soočate? Obožujete izzive? Kakšno modrost uporabljate ali delite? Mislite, da imate vedno prav? Ste odgovorni za druge? Kako uporabljate svoje izvršilne sposobnosti? Ali vztrajate pri svojem ali ste egoistični? Zakaj ste gospodovalni ali prepirljivi? Ste vse bolj usmerjeni vase? Ali sledite svojim duhovnim spoznanjem? Ali druge vleče k sebi ali stran od sebe? Zakaj ste togi ali nepopustljivi? Glede česa ste optimistični? Bi lahko gojili potrpežljivost? Ali služite drugim kot vzornik? Bi lahko asertivnost sprejeli bolje kot agresivnost?</p>',
                    src: kingwandsDown,
                    to: "/kraljpalic"
                },
                // Kelihi
                {
                    name: 'As kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Kelih, simbol dovzetnosti in zadrževanja, ter element vode, ki označuje čustva in domišljijo, sega iz roke, katera sega iz oblaka. Karkoli nalijemo v kelih ali posodo, dobi svojo obliko. Voda, ki prav tako simbolizira univerzalno ustvarjalno substanco, iz katere izvira manifestirani svet, teče v vodo spodaj in oplodi svet. Ta snov, ki jo sprejme vsaka človeška domišljija, prevzame obliko posode ali osebnosti, v katero vstopi. Golob, simbol Svetega Duha, drži daritev nad skodelico. Nakazuje, da noben občutek ali domišljija na tem svetu ni resnično osebna; vse prihaja od zgoraj in se lahko vidi kot gostitelj ali telo božanstva.</p><p>Katere sanje se lahko uresničijo? Ali prejemate ali potrebujete duhovno hrano in utrjevanje? Kakšno polnost cenite ali ne cenite? Ali vaša ali tuja čustva tečejo kot voda? Se vaše srce odpira vam ali drugemu? Kaj vas polni do prekipetja? Ali odkrivate svojo srčno željo? Kako prispevate k svoji nesreči, nezadovoljstvu in pomanjkanju izpolnjenosti? Kakšno dovzetnost doživljate? Ali je čas destruktivnih, a konstruktivnih čustvenih pretresov? Se počutite napolnjeni z Duhom? Se počutite polni možnosti? Katere užitke uživate ali bi radi uživali? Ali prihajajo sporočila skozi vaše sanje, domišljijo in meditacijo? Katera višja ljubezen vstopa v vaše življenje? Na katerem področju ste poklicani k dajanju, pa tudi k sprejemanju?</p>',
                    src: acecups,
                    to: "/askelihov"
                },
                {
                    name: 'As kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Kelih, simbol dovzetnosti in zadrževanja, ter element vode, ki označuje čustva in domišljijo, sega iz roke, katera sega iz oblaka. Karkoli nalijemo v kelih ali posodo, dobi svojo obliko. Voda, ki prav tako simbolizira univerzalno ustvarjalno substanco, iz katere izvira manifestirani svet, teče v vodo spodaj in oplodi svet. Ta snov, ki jo sprejme vsaka človeška domišljija, prevzame obliko posode ali osebnosti, v katero vstopi. Golob, simbol Svetega Duha, drži daritev nad skodelico. Nakazuje, da noben občutek ali domišljija na tem svetu ni resnično osebna; vse prihaja od zgoraj in se lahko vidi kot gostitelj ali telo božanstva.</p><p>Katere sanje se lahko uresničijo? Ali prejemate ali potrebujete duhovno hrano in utrjevanje? Kakšno polnost cenite ali ne cenite? Ali vaša ali tuja čustva tečejo kot voda? Se vaše srce odpira vam ali drugemu? Kaj vas polni do prekipetja? Ali odkrivate svojo srčno željo? Kako prispevate k svoji nesreči, nezadovoljstvu in pomanjkanju izpolnjenosti? Kakšno dovzetnost doživljate? Ali je čas destruktivnih, a konstruktivnih čustvenih pretresov? Se počutite napolnjeni z Duhom? Se počutite polni možnosti? Katere užitke uživate ali bi radi uživali? Ali prihajajo sporočila skozi vaše sanje, domišljijo in meditacijo? Katera višja ljubezen vstopa v vaše življenje? Na katerem področju ste poklicani k dajanju, pa tudi k sprejemanju?</p>',
                    src: acecupsDown,
                    to: "/askelihov"
                },
                {
                    name: 'Dvojka kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Mladenič in ženska drug drugemu obljubljata skodelice. Simboli ne samo nakazujejo možnosti intimnosti z drugo osebo; predlagajo tudi vaš animus in anima — vašega notranjega moškega in žensko in/ali zavestni in podzavestni deli — spoznavanje. Posledica tega je intimnost s samim seboj. Hermesov kaducej, simbol zdravljenja in prenove, se dviga nad glavo, kar kaže na modrost in obnovo, ki izhajata iz takšne interakcije.</p><p>Je pred vrati sprava različnih pogledov? Kakšne sanje ali nočne more odraža vajin odnos? Je poroka ali duhovna zveza v vaših načrtih ali izven njih? Imate svoj prvi harmoničen odnos s seboj ali z drugim? Ste bolj v stiku s svojimi občutki? Se počutite poročene z Jazom? Vas privlači stari prijatelj? Kaj ljubeče delite? Se morda bojite ali doživljate prekinjeno zvezo? Vas ljubezen motivira k sklepanju zdravih kompromisov? Ali preveč sklepate kompromise? Ali morda doživljate združitev nasprotij? Ste odprti ali zaprti za dajanje ali prejemanje ljubezni in naklonjenosti? Ali delite ali nočete deliti intimnih občutkov? Se počutite ranljive? Katere stare rane se celijo skozi vajin trenutni odnos? Ali ljubiš sebe tako močno, kot ljubiš drugega? Kaj projicirate na drugega? Se počutite prisiljeni izbirati med seboj in drugimi?</p>',
                    src: twocups,
                    to: "/dvojkakelihov"
                },
                {
                    name: 'Dvojka kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Mladenič in ženska drug drugemu obljubljata skodelice. Simboli ne samo nakazujejo možnosti intimnosti z drugo osebo; predlagajo tudi vaš animus in anima — vašega notranjega moškega in žensko in/ali zavestni in podzavestni deli — spoznavanje. Posledica tega je intimnost s samim seboj. Hermesov kaducej, simbol zdravljenja in prenove, se dviga nad glavo, kar kaže na modrost in obnovo, ki izhajata iz takšne interakcije.</p><p>Je pred vrati sprava različnih pogledov? Kakšne sanje ali nočne more odraža vajin odnos? Je poroka ali duhovna zveza v vaših načrtih ali izven njih? Imate svoj prvi harmoničen odnos s seboj ali z drugim? Ste bolj v stiku s svojimi občutki? Se počutite poročene z Jazom? Vas privlači stari prijatelj? Kaj ljubeče delite? Se morda bojite ali doživljate prekinjeno zvezo? Vas ljubezen motivira k sklepanju zdravih kompromisov? Ali preveč sklepate kompromise? Ali morda doživljate združitev nasprotij? Ste odprti ali zaprti za dajanje ali prejemanje ljubezni in naklonjenosti? Ali delite ali nočete deliti intimnih občutkov? Se počutite ranljive? Katere stare rane se celijo skozi vajin trenutni odnos? Ali ljubiš sebe tako močno, kot ljubiš drugega? Kaj projicirate na drugega? Se počutite prisiljeni izbirati med seboj in drugimi?</p>',
                    src: twocupsDown,
                    to: "/dvojkakelihov"
                },
                {
                    name: 'Trojka kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Tri mlade ženske druga drugi ponujajo kelih poln ustvarjalnih možnosti. Število tri pomeni ustvarjalno prizadevanje - združevanje dveh sil, da nastane nov element. Podobo prevevajo občutki medsebojnega razumevanja, soglasja, ljubezni, upanja in hvaležnosti.</p><p>Ali želite ali morate slaviti življenje? Katero stvaritev bi lahko ponudili v blagoslov? Ali prepoznate duh, ki stoji za vašim dosežkom? Si želite ali doživljate bogate nagrade? Ali delite sadove svojega dela? Kakšno gostoljubje bi lahko podaljšali ali umaknili? Ali bi vam ali komu drugemu lahko koristilo priklic božanstva ali naravnih sil pred začetkom projekta? Ali doživljate čustveno ali duhovno odprtje? Ali se dogaja sinteza ustvarjalnih energij? Ali uživate v ljubezni in komunikaciji med družino in prijatelji? Bi lahko želi, kar ste sejali? Ali bi vam koristilo sodelovanje z drugimi v smeri skupnega cilja? Uživate ali se izogibate srečanju src? Kakšne izkušnje delite? Katera prijateljstva so obstojna v dobrih in slabih časih? Katera prijateljstva so prerasla? Ali prosite za duhovno vodstvo? Ali se zahvaljujete tam, kjer je treba?</p>',
                    src: threecups,
                    to: "/trojkakelihov"
                },
                {
                    name: 'Trojka kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Tri mlade ženske druga drugi ponujajo kelih poln ustvarjalnih možnosti. Število tri pomeni ustvarjalno prizadevanje - združevanje dveh sil, da nastane nov element. Podobo prevevajo občutki medsebojnega razumevanja, soglasja, ljubezni, upanja in hvaležnosti.</p><p>Ali želite ali morate slaviti življenje? Katero stvaritev bi lahko ponudili v blagoslov? Ali prepoznate duh, ki stoji za vašim dosežkom? Si želite ali doživljate bogate nagrade? Ali delite sadove svojega dela? Kakšno gostoljubje bi lahko podaljšali ali umaknili? Ali bi vam ali komu drugemu lahko koristilo priklic božanstva ali naravnih sil pred začetkom projekta? Ali doživljate čustveno ali duhovno odprtje? Ali se dogaja sinteza ustvarjalnih energij? Ali uživate v ljubezni in komunikaciji med družino in prijatelji? Bi lahko želi, kar ste sejali? Ali bi vam koristilo sodelovanje z drugimi v smeri skupnega cilja? Uživate ali se izogibate srečanju src? Kakšne izkušnje delite? Katera prijateljstva so obstojna v dobrih in slabih časih? Katera prijateljstva so prerasla? Ali prosite za duhovno vodstvo? Ali se zahvaljujete tam, kjer je treba?</p>',
                    src: threecupsDown,
                    to: "/trojkakelihov"
                },
                {
                    name: 'Štirica kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Mladenič sedi pod drevesom in razmišlja o treh kelihih na travi. Roka, ki izvira iz oblaka, mu ponudi še en kelih. Moški ima prekrižane roke, kar nakazuje, da se kljub zunanjih pritiskov umika, da bi sledil svojim notranjim vzgibom in ne drugim. Nadaljnja predstavitev kelihov ustvarjalnih možnosti kaže, kako pomembno je pustiti času, da se stvari odvijajo. Potrpežljivo čakanje, da se pojavi prava stvar, in zaupanje, da bo vaša intuicija nakazala čas za gibanje, je implicitno.</p><p>Zakaj ste zaprti za zunanji vnos? Kaj zavračate? Vas je strah ali čakate na boljšo ponudbo? Ali čakate na vizijo ali revizijo? Pred katerimi občutki ste zaprti in zakaj? Greste v sebe, preden nastopite? Česa ne prepoznate? Ali želite priti iz svoje lupine? Kaj se vam ponuja? Ali vidite, da se vam želja izpolni? Zakaj se zadržujete? Ali prenašate kritike, ker sedite in opazujete, kako se stvari odvijajo? Od česa ali koga se distancirate? Ste utrujeni od tega, kar ponuja svet? Ste depresivni ali prihajate iz depresije? Se počutite obrambno ali popustite svoje obrambe? Vam lahko meditacija pomaga doseči nenavezanost? Iščete notranji mir? Ali ponovno ocenjujete svoja čustva? O čem sanjate? Zakaj se počutite apatično? Katero priložnost boste izkoristili?</p>',
                    src: fourcups,
                    to: "/stiricakelihov"
                },
                {
                    name: 'Štirica kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Mladenič sedi pod drevesom in razmišlja o treh kelihih na travi. Roka, ki izvira iz oblaka, mu ponudi še en kelih. Moški ima prekrižane roke, kar nakazuje, da se kljub zunanjih pritiskov umika, da bi sledil svojim notranjim vzgibom in ne drugim. Nadaljnja predstavitev kelihov ustvarjalnih možnosti kaže, kako pomembno je pustiti času, da se stvari odvijajo. Potrpežljivo čakanje, da se pojavi prava stvar, in zaupanje, da bo vaša intuicija nakazala čas za gibanje, je implicitno.</p><p>Zakaj ste zaprti za zunanji vnos? Kaj zavračate? Vas je strah ali čakate na boljšo ponudbo? Ali čakate na vizijo ali revizijo? Pred katerimi občutki ste zaprti in zakaj? Greste v sebe, preden nastopite? Česa ne prepoznate? Ali želite priti iz svoje lupine? Kaj se vam ponuja? Ali vidite, da se vam želja izpolni? Zakaj se zadržujete? Ali prenašate kritike, ker sedite in opazujete, kako se stvari odvijajo? Od česa ali koga se distancirate? Ste utrujeni od tega, kar ponuja svet? Ste depresivni ali prihajate iz depresije? Se počutite obrambno ali popustite svoje obrambe? Vam lahko meditacija pomaga doseči nenavezanost? Iščete notranji mir? Ali ponovno ocenjujete svoja čustva? O čem sanjate? Zakaj se počutite apatično? Katero priložnost boste izkoristili?</p>',
                    src: fourcupsDown,
                    to: "/stiricakelihov"
                },
                {
                    name: 'Petica kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Oseba v plašču postrani gleda tri prevrnjene kelihe; dva druga stojita pokonci za njo. Slika nakazuje, da bi se obrnila na dva keliha za osebo (kreativne možnosti ali življenje, ki jo čaka), mora najprej objokovati tisto, kar je izgubljeno, to so trije prevrnjeni kelihi. Karta prikazuje tudi nekoga, ki je obtičal v izgubi, depresiji, žalosti in jezi, ki potrebuje pomoč, da spremeni svoje življenje.</p>Se soočate ali se izogibate veliki izgubi? Kdo ali kaj vas razočara? Kaj imate težave s sprostitvijo? Kateri načrt je moten? Gojite zagrenjenost in zamero? Ali je vaša depresija lahko obrnjena vase? S katero izgubo se ne morete sprijazniti? Ali je čas, da poiščete pomoč pri soočanju s svojimi občutki? Zakaj ste zagrnjeni v negativnost? Kaj si očitate ali kaznujete? Od katere resnice bi se lahko obrnili? Kaj ste se naučili iz svoje bolečine in trpljenja? Kaj ali koga ste jemali za samoumevnega, dokler ni izginilo? Kako bi lahko nadaljevali z življenjem in cenili to, kar imate, namesto da bi še naprej razmišljali o tem, kar ni več mogoče? S kakšno travmo ali zlorabo se soočate ali se morate soočiti? Ali obstaja alternativa temu kar ste izgubili?</p>',
                    src: fivecups,
                    to: "/peticakelihov"
                },
                {
                    name: 'Petica kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Oseba v plašču postrani gleda tri prevrnjene kelihe; dva druga stojita pokonci za njo. Slika nakazuje, da bi se obrnila na dva keliha za osebo (kreativne možnosti ali življenje, ki jo čaka), mora najprej objokovati tisto, kar je izgubljeno, to so trije prevrnjeni kelihi. Karta prikazuje tudi nekoga, ki je obtičal v izgubi, depresiji, žalosti in jezi, ki potrebuje pomoč, da spremeni svoje življenje.</p>Se soočate ali se izogibate veliki izgubi? Kdo ali kaj vas razočara? Kaj imate težave s sprostitvijo? Kateri načrt je moten? Gojite zagrenjenost in zamero? Ali je vaša depresija lahko obrnjena vase? S katero izgubo se ne morete sprijazniti? Ali je čas, da poiščete pomoč pri soočanju s svojimi občutki? Zakaj ste zagrnjeni v negativnost? Kaj si očitate ali kaznujete? Od katere resnice bi se lahko obrnili? Kaj ste se naučili iz svoje bolečine in trpljenja? Kaj ali koga ste jemali za samoumevnega, dokler ni izginilo? Kako bi lahko nadaljevali z življenjem in cenili to, kar imate, namesto da bi še naprej razmišljali o tem, kar ni več mogoče? S kakšno travmo ali zlorabo se soočate ali se morate soočiti? Ali obstaja alternativa temu kar ste izgubili?</p>',
                    src: fivecupsDown,
                    to: "/peticakelihov"
                },
                {
                    name: 'Šestica kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Otroci stojijo na vrtu, njihovi kelihi so polne rož ali lepih občutkov ali fantazij. Karta namiguje na idilično otroštvo, v katerem človek čuti brezpogojno ljubezen in podporo, česar mnogi ljudje nikoli ne doživijo. Človek, ki budno stoji v ozadju, nakazuje načelo večne modrosti: vsi smo otroci božanskosti, nad katerimi naši božanski starši bdijo in jih ljubijo na načine, ki jih naši fizični starši niso mogli.</p><p>Kakšna ljubezen vstopa ali ponovno vstopa v vaše življenje? Ste neozdravljivi romantik? Imate radi nostalgijo? Ali živite v preteklih sanjah in fantazijah? Kakšno darilo vam ponuja vaš višji jaz? Ali doživljate čustveno dajanje in sprejemanje? Ali morda travmatično otroštvo povzroča, da se vi ali kdo drug upirate odraščanju? Ali pospravljate stara družinska vprašanja? Ali zdravite svojega notranjega otroka? Prehaja odnos v novo fazo? Ste obujali spomine na "stare dobre čase"? Za katerega prijatelja ali družinskega člana ste odgovorni? Ali vaša ljubezen do doma, družine in tradicionalnih vrednot povzroča konflikt? So otroci ali otroški užitki vedno pomembnejši? Kdo vam ponuja ali komu vi ponujate prijateljstvo in ljubezen? Se počutite ljubljene in zaščitene? Vam osredotočenost na preteklost preprečuje, da bi živeli v sedanjosti? Katera porušena razmerja se popravljajo? Ali se vi ali kdo drug oklepate izrabljenih običajev ali prepričanj?</p>',
                    src: sixcups,
                    to: "/sesticakelihov"
                },
                {
                    name: 'Šestica kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Otroci stojijo na vrtu, njihovi kelihi so polne rož ali lepih občutkov ali fantazij. Karta namiguje na idilično otroštvo, v katerem človek čuti brezpogojno ljubezen in podporo, česar mnogi ljudje nikoli ne doživijo. Človek, ki budno stoji v ozadju, nakazuje načelo večne modrosti: vsi smo otroci božanskosti, nad katerimi naši božanski starši bdijo in jih ljubijo na načine, ki jih naši fizični starši niso mogli.</p><p>Kakšna ljubezen vstopa ali ponovno vstopa v vaše življenje? Ste neozdravljivi romantik? Imate radi nostalgijo? Ali živite v preteklih sanjah in fantazijah? Kakšno darilo vam ponuja vaš višji jaz? Ali doživljate čustveno dajanje in sprejemanje? Ali morda travmatično otroštvo povzroča, da se vi ali kdo drug upirate odraščanju? Ali pospravljate stara družinska vprašanja? Ali zdravite svojega notranjega otroka? Prehaja odnos v novo fazo? Ste obujali spomine na "stare dobre čase"? Za katerega prijatelja ali družinskega člana ste odgovorni? Ali vaša ljubezen do doma, družine in tradicionalnih vrednot povzroča konflikt? So otroci ali otroški užitki vedno pomembnejši? Kdo vam ponuja ali komu vi ponujate prijateljstvo in ljubezen? Se počutite ljubljene in zaščitene? Vam osredotočenost na preteklost preprečuje, da bi živeli v sedanjosti? Katera porušena razmerja se popravljajo? Ali se vi ali kdo drug oklepate izrabljenih običajev ali prepričanj?</p>',
                    src: sixcupsDown,
                    to: "/sesticakelihov"
                },
                {
                    name: 'Sedmica kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Kelihi, napolnjeni z vizijami, še posebej tisti z nezemeljskimi možnostmi, se dvigajo iz oblakov pred senčno postavo. Kelihi pomenijo ustvarjalno domišljijo. Zdi se, da je bila pričarana cela vrsta ustvarjalnih možnosti, kar kaže na to, da ima ta oseba močno domišljijo. Ne glede na to, ali je prisotna energija za uresničitev vsega, o čemer smo sanjali, in/ali obstaja možnost izbire ene ali dveh možnosti, na katere se osredotočimo, so skriti izzivi, ki jih predstavlja podoba.</p><p>Se od vas zahteva, da sprejemate težke odločitve? Morda doživljate nasprotujoča si čustva in negotovost? Se nenadoma zavedate, da imajo vse sanje omejitve? Ali spoznavate moč ustvarjalne domišljije? Kaj bi lahko povzročilo vašo zmedo? Ali imate sanje ali vizije? Ali se počutite vznemirjeni zaradi poplave psihičnih pojavov? Ste morda senzorično preobremenjeni? Kateri resničnosti se izogibate, ko živite v deželi domišljije? Katere sanje bi lahko postale resničnost? Ali bi vam lahko koristilo, če bi pregledali svoje prioritete? Kaj bi lahko sprostili, da pridobite osredotočenost in energijo, potrebno za uresničitev vaše želje? Ali vam zdravila za spreminjanje uma pomagajo doseči spremenjena stanja zavesti? Vas vaša meditacija motivira, da v vsemu iščete duhovne vrednosti? Kaj zamujate, ko držite glavo v oblakih? Vas bolj skrbi tisto, česar nimate, kot tisto, kar imate? Na katero situacijo gledate nerealno?</p>',
                    src: sevencups,
                    to: "/sedmicakelihov"
                },
                {
                    name: 'Sedmica kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Kelihi, napolnjeni z vizijami, še posebej tisti z nezemeljskimi možnostmi, se dvigajo iz oblakov pred senčno postavo. Kelihi pomenijo ustvarjalno domišljijo. Zdi se, da je bila pričarana cela vrsta ustvarjalnih možnosti, kar kaže na to, da ima ta oseba močno domišljijo. Ne glede na to, ali je prisotna energija za uresničitev vsega, o čemer smo sanjali, in/ali obstaja možnost izbire ene ali dveh možnosti, na katere se osredotočimo, so skriti izzivi, ki jih predstavlja podoba.</p><p>Se od vas zahteva, da sprejemate težke odločitve? Morda doživljate nasprotujoča si čustva in negotovost? Se nenadoma zavedate, da imajo vse sanje omejitve? Ali spoznavate moč ustvarjalne domišljije? Kaj bi lahko povzročilo vašo zmedo? Ali imate sanje ali vizije? Ali se počutite vznemirjeni zaradi poplave psihičnih pojavov? Ste morda senzorično preobremenjeni? Kateri resničnosti se izogibate, ko živite v deželi domišljije? Katere sanje bi lahko postale resničnost? Ali bi vam lahko koristilo, če bi pregledali svoje prioritete? Kaj bi lahko sprostili, da pridobite osredotočenost in energijo, potrebno za uresničitev vaše želje? Ali vam zdravila za spreminjanje uma pomagajo doseči spremenjena stanja zavesti? Vas vaša meditacija motivira, da v vsemu iščete duhovne vrednosti? Kaj zamujate, ko držite glavo v oblakih? Vas bolj skrbi tisto, česar nimate, kot tisto, kar imate? Na katero situacijo gledate nerealno?</p>',
                    src: sevencupsDown,
                    to: "/sedmicakelihov"
                },
                {
                    name: 'Osmica kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Človek, ki se upira na palico, odide od osmih kelihov, napolnjenih z domišljijo, sanjami in/ali občutki, ter se odpravi proti višjim krajem. Slika nakazuje, da se je obrnil stran od čustveno obremenjene situacije, da bi poiskal boljši pregled v hribih onstran. Če si vzamete ta "time out", lahko zbistrite svoj um in mu omogočite, da stvari uredi bolj učinkovito.</p><p>Od katerih čustev si vzamete čas? Kaj odlagate ali zamujate? Od česa se želite ločiti? Kateri cikel se zaključuje ali začenja? Iščete povečano samozavedanje, duhovno perspektivo ali vizijo? Ali nekdo odhaja od vas? Ali morda obračate hrbet nečemu, kar želite, a tega ne potrebujete? Kaj zapuščate ali se vračate? Kateri občutki aktivirajo vašo spremembo vedenja? Kaj je dovolj ali premalo obravnavano? Kaj vas vleče bližje? Ali je čas, da se oddaljite od svojih občutkov ali da jim sledite? Iščete odgovore na vprašanja, kot so "Kdo sem in kaj želim od življenja?" Katera navezanost vam preprečuje, da bi šli naprej? Vas je strah neznanega? Česa trenutno ni mogoče rešiti? Katere navade puščate za sabo? Se vam zdi, da si zaslužite več, kot imate? Bi vam lahko koristil umik in samorefleksija</p>',
                    src: eightcups,
                    to: "/osmicakelihov"
                },
                {
                    name: 'Osmica kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Človek, ki se upira na palico, odide od osmih kelihov, napolnjenih z domišljijo, sanjami in/ali občutki, ter se odpravi proti višjim krajem. Slika nakazuje, da se je obrnil stran od čustveno obremenjene situacije, da bi poiskal boljši pregled v hribih onstran. Če si vzamete ta "time out", lahko zbistrite svoj um in mu omogočite, da stvari uredi bolj učinkovito.</p><p>Od katerih čustev si vzamete čas? Kaj odlagate ali zamujate? Od česa se želite ločiti? Kateri cikel se zaključuje ali začenja? Iščete povečano samozavedanje, duhovno perspektivo ali vizijo? Ali nekdo odhaja od vas? Ali morda obračate hrbet nečemu, kar želite, a tega ne potrebujete? Kaj zapuščate ali se vračate? Kateri občutki aktivirajo vašo spremembo vedenja? Kaj je dovolj ali premalo obravnavano? Kaj vas vleče bližje? Ali je čas, da se oddaljite od svojih občutkov ali da jim sledite? Iščete odgovore na vprašanja, kot so "Kdo sem in kaj želim od življenja?" Katera navezanost vam preprečuje, da bi šli naprej? Vas je strah neznanega? Česa trenutno ni mogoče rešiti? Katere navade puščate za sabo? Se vam zdi, da si zaslužite več, kot imate? Bi vam lahko koristil umik in samorefleksija</p>',
                    src: eightcupsDown,
                    to: "/osmicakelihov"
                },
                {
                    name: 'Devetica kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Zdi se, da se je moški sitega videza nasitil kelihov z mize v ozadju. Za njim je devet kelihov, ki simbolizirajo želje in ustvarjalne možnosti. Slika nakazuje, da je prepričan, da se bo to, kar želi, izpolnilo. Miza je pogrnjena, kar daje slutiti, da ostaja skrivnost, kaj bo dejansko nastalo izpod prta. Čeprav se je ta človek potrudil po svojih najboljših močeh, bi bilo dobro, če bi si zapomnil, da bo tisto, kar se bo dejansko prikazalo, odraz njegove stopnje razvoja.</p><p>Kaj imate pod nadzorom? Na katerih mislih ali občutkih sedite? Kaj nabirate? Ali se zavedate, da če ne uporabite tega, kar imate, je morda to že zapravljeno? Kakšne sanje se uresničujejo? Je izpolnitev kakšne želje to, kar ste si zamislili? Katere želje ali sanje bi lahko postavili na polico? S čim bi lahko pretiravali? Ali svoje bogastvo delite ali dajete desetino? Kaj je razlog za vašo samozadovoljnost? Ali se zavedate, da duhovna podlaga podpira vaš materialni svet? Ali se zavedate, da so materialne pridobitve minljive, medtem ko so duhovne pridobitve večne? Bi vam lahko koristilo štetje vaših blagoslovov? Uživate ali nimate čustvene varnosti? Se počutite zadovoljni ali ste v stanju pomanjkanja? Kakšna ljubezen je v vas? Ali uživate v zasluženem užitku in zadovoljstvu? Kakšna čustvena podpora je na voljo ali ni na voljo? Ali razmišljate o čarovniji, ki stoji za vašimi dosežki?</p>',
                    src: ninecups,
                    to: "/deveticakelihov"
                },
                {
                    name: 'Devetica kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Zdi se, da se je moški sitega videza nasitil kelihov z mize v ozadju. Za njim je devet kelihov, ki simbolizirajo želje in ustvarjalne možnosti. Slika nakazuje, da je prepričan, da se bo to, kar želi, izpolnilo. Miza je pogrnjena, kar daje slutiti, da ostaja skrivnost, kaj bo dejansko nastalo izpod prta. Čeprav se je ta človek potrudil po svojih najboljših močeh, bi bilo dobro, če bi si zapomnil, da bo tisto, kar se bo dejansko prikazalo, odraz njegove stopnje razvoja.</p><p>Kaj imate pod nadzorom? Na katerih mislih ali občutkih sedite? Kaj nabirate? Ali se zavedate, da če ne uporabite tega, kar imate, je morda to že zapravljeno? Kakšne sanje se uresničujejo? Je izpolnitev kakšne želje to, kar ste si zamislili? Katere želje ali sanje bi lahko postavili na polico? S čim bi lahko pretiravali? Ali svoje bogastvo delite ali dajete desetino? Kaj je razlog za vašo samozadovoljnost? Ali se zavedate, da duhovna podlaga podpira vaš materialni svet? Ali se zavedate, da so materialne pridobitve minljive, medtem ko so duhovne pridobitve večne? Bi vam lahko koristilo štetje vaših blagoslovov? Uživate ali nimate čustvene varnosti? Se počutite zadovoljni ali ste v stanju pomanjkanja? Kakšna ljubezen je v vas? Ali uživate v zasluženem užitku in zadovoljstvu? Kakšna čustvena podpora je na voljo ali ni na voljo? Ali razmišljate o čarovniji, ki stoji za vašimi dosežki?</p>',
                    src: ninecupsDown,
                    to: "/deveticakelihov"
                },
                {
                    name: 'Desetica kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Deset kelihov tvori mavrico - njen čudež praznuje družina spodaj. Mavrica simbolizira obljubo in ta prizor nakazuje, da upi in sanje ljudi, ki jih simbolizirajo kelihi, kažejo obljubo, da se bodo uresničile. Otroci in odrasli praznujejo skupaj, kar nakazuje na mirno sobivanje in morebitno ozdravitev dolgoletnih družinskih odnosov.</p><p>Ali delite ljubezen in intimnost z drugimi? Ali sanjate o domu in družini? Ali se vi in ​​drugi marljivo trudite ohraniti svoje zadovoljstvo? Ali živite svoje najlepše sanje? Zakaj mislite, da si ne zaslužite sreče? Ali se pod idilično sliko, ki jo predstavlja vaša družina, skrivajo težave? Ali si želite družino, a ste negotovi, ali boste lahko obvladali čustvene težave, ki jih povzroča? Ali s poroko in otroki zdravita travme iz otroštva? Ste polni hvaležnosti? Ali morda ne znate ceniti svoje sreče? Ste preveč nestabilni za predano razmerje? Ali menite, da bosta zakon in družina rešila vaše hrepenenje po čustveni varnosti? Ali morda bolezen, izguba ali nezadovoljstvo moti vaše domače življenje? Kaj žrtvujete za dobro vaše družine ali skupine? Imate lahkoten ali stresen odnos s starši ali otroki? Ali ste blagoslovljeni z dobrim sistemom podpore?</p>',
                    src: tencups,
                    to: "/deseticakelihov"
                },
                {
                    name: 'Desetica kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Deset kelihov tvori mavrico - njen čudež praznuje družina spodaj. Mavrica simbolizira obljubo in ta prizor nakazuje, da upi in sanje ljudi, ki jih simbolizirajo kelihi, kažejo obljubo, da se bodo uresničile. Otroci in odrasli praznujejo skupaj, kar nakazuje na mirno sobivanje in morebitno ozdravitev dolgoletnih družinskih odnosov.</p><p>Ali delite ljubezen in intimnost z drugimi? Ali sanjate o domu in družini? Ali se vi in ​​drugi marljivo trudite ohraniti svoje zadovoljstvo? Ali živite svoje najlepše sanje? Zakaj mislite, da si ne zaslužite sreče? Ali se pod idilično sliko, ki jo predstavlja vaša družina, skrivajo težave? Ali si želite družino, a ste negotovi, ali boste lahko obvladali čustvene težave, ki jih povzroča? Ali s poroko in otroki zdravita travme iz otroštva? Ste polni hvaležnosti? Ali morda ne znate ceniti svoje sreče? Ste preveč nestabilni za predano razmerje? Ali menite, da bosta zakon in družina rešila vaše hrepenenje po čustveni varnosti? Ali morda bolezen, izguba ali nezadovoljstvo moti vaše domače življenje? Kaj žrtvujete za dobro vaše družine ali skupine? Imate lahkoten ali stresen odnos s starši ali otroki? Ali ste blagoslovljeni z dobrim sistemom podpore?</p>',
                    src: tencupsDown,
                    to: "/deseticakelihov"
                },
                {
                    name: 'Paž kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Paž razmišlja o ribi, simbolu plodnosti, ki se dviga iz keliha, da bi ga pogledala. Ta interakcija predstavlja, kako občutki vodijo do širjenja ustvarjalnih podob. Kot novi učenec keliha pomeni odkrivanje in raziskovanje svojih čustev, psihične občutljivosti, duhovnih in mističnih izkušenj ter moči svoje domišljije. Paž kelihov je dovzeten za lekcije, ki jih prinaša njegovo orodje. Uči se usklajevanja svojih želja in fantazij z realnostjo tega, kar je dal, ter nesebičnega služenja drugim.</p><p>Kaj aktivira vašo domišljijo? Kdo vam ponuja pomoč ali komu ponujate pomoč? Je nekdo odvisen od vas? Ste čustveno odvisni? Se počutite kot otrok? Ali se soočate s svojim bolečim otroštvom? V vaše življenje vstopa otrok? Kaj vas vleče iz vašega domišljijskega sveta? Ali iščete čustveno rast? Kako bi lahko trenirali svoje psihične sposobnosti? Ali želite biti menih ali redovnica? Vas želja zapeljuje? Ali vaša čustva divjajo? Ali so vaša čustva utemeljena v resničnost? Ali hrepenite po ljubezni in/ali seksu, ne pa po odgovornosti iti z njim? Ste v celibatu? Ali ubežite čustveni bolečini, občutljivosti ali tesnobi z uporabo drog? Ali upoštevate psihične nasvete, ki jih dajete drugim? Ali delate z otroki? Kakšna čustvena vez je oživela? Bi radi bili brez skrbi? Ali odkrivate svojo umetniško plat? Se obnašate kot razvajen otrok?</p>',
                    src: pagecups,
                    to: "/pazkelihov"
                },
                {
                    name: 'Paž kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Paž razmišlja o ribi, simbolu plodnosti, ki se dviga iz keliha, da bi ga pogledala. Ta interakcija predstavlja, kako občutki vodijo do širjenja ustvarjalnih podob. Kot novi učenec keliha pomeni odkrivanje in raziskovanje svojih čustev, psihične občutljivosti, duhovnih in mističnih izkušenj ter moči svoje domišljije. Paž kelihov je dovzeten za lekcije, ki jih prinaša njegovo orodje. Uči se usklajevanja svojih želja in fantazij z realnostjo tega, kar je dal, ter nesebičnega služenja drugim.</p><p>Kaj aktivira vašo domišljijo? Kdo vam ponuja pomoč ali komu ponujate pomoč? Je nekdo odvisen od vas? Ste čustveno odvisni? Se počutite kot otrok? Ali se soočate s svojim bolečim otroštvom? V vaše življenje vstopa otrok? Kaj vas vleče iz vašega domišljijskega sveta? Ali iščete čustveno rast? Kako bi lahko trenirali svoje psihične sposobnosti? Ali želite biti menih ali redovnica? Vas želja zapeljuje? Ali vaša čustva divjajo? Ali so vaša čustva utemeljena v resničnost? Ali hrepenite po ljubezni in/ali seksu, ne pa po odgovornosti iti z njim? Ste v celibatu? Ali ubežite čustveni bolečini, občutljivosti ali tesnobi z uporabo drog? Ali upoštevate psihične nasvete, ki jih dajete drugim? Ali delate z otroki? Kakšna čustvena vez je oživela? Bi radi bili brez skrbi? Ali odkrivate svojo umetniško plat? Se obnašate kot razvajen otrok?</p>',
                    src: pagecupsDown,
                    to: "/pazkelihov"
                },
                {
                    name: 'Vitez kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Ta graciozni (ne bojeviti) vitez tiho jezdi in v desni roki izteguje kelih, simbol ustvarjalne podobe in želje. Njegova krilata čelada nakazuje, da njegova domišljija poleti. Vitez kelihov vzame tisto, kar se je naučil kot paž – moč svojih občutkov in domišljije – in to vključuje v svoje vsakdanje življenje. Ta vitez si aktivno predstavlja, kako uskladi svoje želje in fantazije z realnostjo tega, kar mu je dano kot sredstvo za nadaljnji razvoj in nesebično služenje drugim.</p><p>Ali sledite svojim sanjam? Kakšno priložnost ponujate ali se vam ponuja? Ali razmerje spreminja smer? Ste odprti za dajanje ali prejemanje ljubezni? Katere storitve opravljate kot prostovoljec? Ali vaše sanje nosijo sporočila? Kako se spopadate s svojo preobčutljivostjo? Kakšne občutke ali sanje delite? Ali odkrivate moč ustvarjalnih podob? Se vaše fantazije nenehno spreminjajo? Imate morda pasivno-agresivno osebnost? Ali doživljate obdobje čustvenih preizkušenj? Ali raziskujete svoja čustva? Ali čakate na nekoga, ki vam bo priskočil na pomoč? Izgubljate ali ohranjate svojo nedolžnost? Se odpravljate na sanjsko potovanje? Ali raziskujete "druge svetove" s snovmi, ki širijo um (kot so na primer ajavaska, marihuana,..)? Ali vaša dejanja pogosto motivira sočutje? Vam je morda preveč mar za druge in premalo mar zase? Kakšno iluzijo skušate izpeljati?</p>',
                    src: knightcups,
                    to: "/vitezkelihov"
                },
                {
                    name: 'Vitez kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Ta graciozni (ne bojeviti) vitez tiho jezdi in v desni roki izteguje kelih, simbol ustvarjalne podobe in želje. Njegova krilata čelada nakazuje, da njegova domišljija poleti. Vitez kelihov vzame tisto, kar se je naučil kot paž – moč svojih občutkov in domišljije – in to vključuje v svoje vsakdanje življenje. Ta vitez si aktivno predstavlja, kako uskladi svoje želje in fantazije z realnostjo tega, kar mu je dano kot sredstvo za nadaljnji razvoj in nesebično služenje drugim.</p><p>Ali sledite svojim sanjam? Kakšno priložnost ponujate ali se vam ponuja? Ali razmerje spreminja smer? Ste odprti za dajanje ali prejemanje ljubezni? Katere storitve opravljate kot prostovoljec? Ali vaše sanje nosijo sporočila? Kako se spopadate s svojo preobčutljivostjo? Kakšne občutke ali sanje delite? Ali odkrivate moč ustvarjalnih podob? Se vaše fantazije nenehno spreminjajo? Imate morda pasivno-agresivno osebnost? Ali doživljate obdobje čustvenih preizkušenj? Ali raziskujete svoja čustva? Ali čakate na nekoga, ki vam bo priskočil na pomoč? Izgubljate ali ohranjate svojo nedolžnost? Se odpravljate na sanjsko potovanje? Ali raziskujete "druge svetove" s snovmi, ki širijo um (kot so na primer ajavaska, marihuana,...)? Ali vaša dejanja pogosto motivira sočutje? Vam je morda preveč mar za druge in premalo mar zase? Kakšno iluzijo skušate izpeljati?</p>',
                    src: knightcupsDown,
                    to: "/vitezkelihov"
                },
                {
                    name: 'Kraljica kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Kraljica kelihov sedi na obali in opazuje ali s svojim kelihom vidi v prihodnost. Njen prestol, okrašen z vodnimi nimfami, simbolizira njeno oblast nad elementom vode. Intuitivna, psihična, domiselna, ustvarjalna, čustvena in preroška Kraljica kelihov je sanjač in vizionarka. Razume, da tisto, kar pričara, odraža njeno stanje zavesti. Iz spoštovanja do svojega položaja kraljica razlaga, kar ji pride, v smislu duhovnih zakonov in načel.</p><p>O čem sanjate? Kako živite svoje sanje? Ali se umikate vase, da bi obvladovali nerazrešena čustva? Koga kaznujete z umikom? Je to za vas čustven čas? Ali vi vladate svojim občutkom ali občutki vladajo vam? Za kaj ste dojemljivi ali kaj zavračate? Kdo vas utaplja v ljubezni? Kaj vas očara? Ali živite v drugem svetu? Ali imate opravka s čustvenim neravnovesjem ali depresijo? Ali se morda samozdravite z drogami ali alkoholom? Ste morda preveč vtisljivi? O čem razmišljate? Kaj si kar naprej domišljate? Koga nezavedno zapeljujete? Je vaša občutljivost povečana ali oslabljena? Ali izražate ali skrivate svoja čustva? Do koga se počutite romantično? Kaj razumete skozi psihične ali mistične izkušnje? Koga morda preveč ljubite?</p>',
                    src: queencups,
                    to: "/kraljicakelihov"
                },
                {
                    name: 'Kraljica kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Kraljica kelihov sedi na obali in opazuje ali s svojim kelihom vidi v prihodnost. Njen prestol, okrašen z vodnimi nimfami, simbolizira njeno oblast nad elementom vode. Intuitivna, psihična, domiselna, ustvarjalna, čustvena in preroška Kraljica kelihov je sanjač in vizionarka. Razume, da tisto, kar pričara, odraža njeno stanje zavesti. Iz spoštovanja do svojega položaja kraljica razlaga, kar ji pride, v smislu duhovnih zakonov in načel.</p><p>O čem sanjate? Kako živite svoje sanje? Ali se umikate vase, da bi obvladovali nerazrešena čustva? Koga kaznujete z umikom? Je to za vas čustven čas? Ali vi vladate svojim občutkom ali občutki vladajo vam? Za kaj ste dojemljivi ali kaj zavračate? Kdo vas utaplja v ljubezni? Kaj vas očara? Ali živite v drugem svetu? Ali imate opravka s čustvenim neravnovesjem ali depresijo? Ali se morda samozdravite z drogami ali alkoholom? Ste morda preveč vtisljivi? O čem razmišljate? Kaj si kar naprej domišljate? Koga nezavedno zapeljujete? Je vaša občutljivost povečana ali oslabljena? Ali izražate ali skrivate svoja čustva? Do koga se počutite romantično? Kaj razumete skozi psihične ali mistične izkušnje? Koga morda preveč ljubite?</p>',
                    src: queencupsDown,
                    to: "/kraljicakelihov"
                },
                {
                    name: 'Kralj kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Kralj drži kratko žezlo v levi roki in kelih v desni in udobno lebdi na oceanu. Na eni strani skače delfin; na drugi pa ladja. Ti simboli nakazujejo, da lahko kralj jezdi življenjske tokove. Zaradi obvladovanja moči samorefleksije postane kapitan svoje ladje, samega sebe in svojega kraljestva. Ne glede na to, ali je morje razburkano ali mirno, je modri in zelo domiselni Kralj kelihov poln ustvarjalnih možnosti.</p><p>Ali svoja čustva ali fantazije izražate skozi ustvarjalnost? Ali delate v poklicih kjer pomagate drugim? Ali obvladate svojo občutljivost? Za koga ljubeče skrbite? Bi lahko uporabili nekaj ljubeče nege? Kakšna čustva ali fantazije izražate ali skrivate? Kaj vas jezi? Kakšno psihično modrost prejemate? Se zavedate, da je najbolj sočutna stvar, ki jo lahko naredite za drugega, biti dober poslušalec? Ste mojster sanjač? Komu ne omogočate več? Koga odrivate s tem, da vedno dajete? Kako negujete svojo dušo? Ali obvladate del osebnosti, ki povzroča odvisnosti? Ali želite, da drugi spoznajo vaša čustva, ne da bi spregovorili? Ste prijazni in velikodušni do napake? Ali lahko manipulirate z drugimi in z njihovimi občutki? Kdaj boste napisali svojo pesem, naslikali svojo sliko ali naredili svojo skulpturo ali glasbo? Kakšne sanje poslušate? Ali ljubite ljubezen?</p>',
                    src: kingcups,
                    to: "/kraljkelihov"
                },
                {
                    name: 'Kralj kelihov',
                    text: '<p><b>Univerzalni arhetip:</b> Kralj drži kratko žezlo v levi roki in kelih v desni in udobno lebdi na oceanu. Na eni strani skače delfin; na drugi pa ladja. Ti simboli nakazujejo, da lahko kralj jezdi življenjske tokove. Zaradi obvladovanja moči samorefleksije postane kapitan svoje ladje, samega sebe in svojega kraljestva. Ne glede na to, ali je morje razburkano ali mirno, je modri in zelo domiselni Kralj kelihov poln ustvarjalnih možnosti.</p><p>Ali svoja čustva ali fantazije izražate skozi ustvarjalnost? Ali delate v poklicih kjer pomagate drugim? Ali obvladate svojo občutljivost? Za koga ljubeče skrbite? Bi lahko uporabili nekaj ljubeče nege? Kakšna čustva ali fantazije izražate ali skrivate? Kaj vas jezi? Kakšno psihično modrost prejemate? Se zavedate, da je najbolj sočutna stvar, ki jo lahko naredite za drugega, biti dober poslušalec? Ste mojster sanjač? Komu ne omogočate več? Koga odrivate s tem, da vedno dajete? Kako negujete svojo dušo? Ali obvladate del osebnosti, ki povzroča odvisnosti? Ali želite, da drugi spoznajo vaša čustva, ne da bi spregovorili? Ste prijazni in velikodušni do napake? Ali lahko manipulirate z drugimi in z njihovimi občutki? Kdaj boste napisali svojo pesem, naslikali svojo sliko ali naredili svojo skulpturo ali glasbo? Kakšne sanje poslušate? Ali ljubite ljubezen?</p>',
                    src: kingcupsDown,
                    to: "/kraljkelihov"
                },
                // Meči
                {
                    name: 'As mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Meč - ki simbolizira razrez, odpravo, oblikovanje in element zraka ter pomeni analitično razmišljanje in načrtovanje - je na vrhu s krono moči in ga prime roka, ki prihaja iz oblakov. Meč oblikuje ideje in predstave, ki prihajajo od zgoraj, v miselne vzorce ali matrice, po katerih nastajajo fizične oblike.</p><p>Kakšna resnica je na dlani? Kako bi lahko razvili svoje analitične sposobnosti? Kaj vam je prijetno ali neprijetno prevzeti? Ali je čas, da odrežete tisto, kar je odvečno, in se lotite bistvenega? Kakšno moč bi lahko uporabili za pomoč ali škodo? Katero osvajanje se zdi mogoče/nemogoče? Katere ideje bi lahko potrebovale ponovno polnjenje? Kdo vas izkorišča oziroma kaj vi izkoriščate? Kakšno izbiro od vas zahtevajo? Imate preveč ali premalo moči? Ali branite ali varujete resnico ali delite pravico? O katerem načrtu je treba še razmisliti? Čemu je treba dati prednost? Ali mentalna jasnost izhaja iz mentalnega kaosa? Kako ločite dejstvo od domišljije? Zakaj imate težave z osredotočanjem misli? Ali je za pravilno celjenje potrebna "operacija"? Je kakšna odločitev, ki se izpostavlja, s katero se je treba soočiti in jo sprejeti? Kaj bi vam lahko pomagalo ugotoviti? Kaj bi bilo najbolje odstraniti? Kakšno stisko doživljate?</p>',
                    src: aceswords,
                    to: "/asmecev"
                },
                {
                    name: 'As mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Meč - ki simbolizira razrez, odpravo, oblikovanje in element zraka ter pomeni analitično razmišljanje in načrtovanje - je na vrhu s krono moči in ga prime roka, ki prihaja iz oblakov. Meč oblikuje ideje in predstave, ki prihajajo od zgoraj, v miselne vzorce ali matrice, po katerih nastajajo fizične oblike.</p><p>Kakšna resnica je na dlani? Kako bi lahko razvili svoje analitične sposobnosti? Kaj vam je prijetno ali neprijetno prevzeti? Ali je čas, da odrežete tisto, kar je odvečno, in se lotite bistvenega? Kakšno moč bi lahko uporabili za pomoč ali škodo? Katero osvajanje se zdi mogoče/nemogoče? Katere ideje bi lahko potrebovale ponovno polnjenje? Kdo vas izkorišča oziroma kaj vi izkoriščate? Kakšno izbiro od vas zahtevajo? Imate preveč ali premalo moči? Ali branite ali varujete resnico ali delite pravico? O katerem načrtu je treba še razmisliti? Čemu je treba dati prednost? Ali mentalna jasnost izhaja iz mentalnega kaosa? Kako ločite dejstvo od domišljije? Zakaj imate težave z osredotočanjem misli? Ali je za pravilno celjenje potrebna "operacija"? Je kakšna odločitev, ki se izpostavlja, s katero se je treba soočiti in jo sprejeti? Kaj bi vam lahko pomagalo ugotoviti? Kaj bi bilo najbolje odstraniti? Kakšno stisko doživljate?</p>',
                    src: aceswordsDown,
                    to: "/asmecev"
                },
                {
                    name: 'Dvojka mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Ženska z zavezanimi očmi, ki uravnoteži dva prekrižana meča, sedi s hrbtom obrnjena proti vodi. Nekateri pravijo, da je na razpotju. Ali gre po poti sveta ali po poti duha? Ali pa lahko naredi oboje? Notranja analiza in načrtovanje izključujeta zunanje delovanje. Da bi delovala modro, se obrne stran od pretiranih čustev, vode in drugih motenj, da bi poiskala ravnovesje. Karta je videti kot opomnik načela večne modrosti, ki pravi: "Ravnovesje je osnova velikega dela!"</p><p>Kakšno odločitev je treba sprejeti? Zakaj se odločiš, da ne boš izbral? Kakšno premirje kličeš? Na kaj bi se lahko slepili? Kako neodločnost deluje v vašo korist ali proti vam? Za kaj si kupujete čas? Ali skrajna čustva ovirajo vašo sposobnost ali zmožnost drugega, da sprejema racionalne odločitve? Na kateri točki križišča ali odcep ste? Katere občutke je vredno pustiti za sabo? Ali se morate od nekoga ali nečesa ločiti? Ali se vaš notranji vid aktivira? Zakaj oklevate glede igranja? Kakšno ravnovesje želite ohraniti? Kako odlašanje vpliva na vas? Česa raje ne bi videli? Ali je vaša navada, da se umaknete od drugih ali sveta, način kako skrbeti zase, ki ga želite ponovno ovrednotiti? Ali bi lahko premik v nevtralno sredi nasprotujočih si zahtev pomagal? Ali lahko zbistrite misli in se z meditacijo razbremenite zunanjih pritiskov ali vplivov?</p>',
                    src: twoswords,
                    to: "/dvojkamecev"
                },
                {
                    name: 'Dvojka mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Ženska z zavezanimi očmi, ki uravnoteži dva prekrižana meča, sedi s hrbtom obrnjena proti vodi. Nekateri pravijo, da je na razpotju. Ali gre po poti sveta ali po poti duha? Ali pa lahko naredi oboje? Notranja analiza in načrtovanje izključujeta zunanje delovanje. Da bi delovala modro, se obrne stran od pretiranih čustev, vode in drugih motenj, da bi poiskala ravnovesje. Karta je videti kot opomnik načela večne modrosti, ki pravi: "Ravnovesje je osnova velikega dela!"</p><p>Kakšno odločitev je treba sprejeti? Zakaj se odločiš, da ne boš izbral? Kakšno premirje kličeš? Na kaj bi se lahko slepili? Kako neodločnost deluje v vašo korist ali proti vam? Za kaj si kupujete čas? Ali skrajna čustva ovirajo vašo sposobnost ali zmožnost drugega, da sprejema racionalne odločitve? Na kateri točki križišča ali odcep ste? Katere občutke je vredno pustiti za sabo? Ali se morate od nekoga ali nečesa ločiti? Ali se vaš notranji vid aktivira? Zakaj oklevate glede igranja? Kakšno ravnovesje želite ohraniti? Kako odlašanje vpliva na vas? Česa raje ne bi videli? Ali je vaša navada, da se umaknete od drugih ali sveta, način kako skrbeti zase, ki ga želite ponovno ovrednotiti? Ali bi lahko premik v nevtralno sredi nasprotujočih si zahtev pomagal? Ali lahko zbistrite misli in se z meditacijo razbremenite zunanjih pritiskov ali vplivov?</p>',
                    src: twoswordsDown,
                    to: "/dvojkamecev"
                },
                {
                    name: 'Trojka mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Trije meči prebadajo srce; dež pada iz oblakov zgoraj. Da, obstaja bolečina in trpljenje. Trpljenje je sestavni del življenja. Olajšanje ali dež prihaja iz žalovanja in joka. Prihaja tudi iz želje po ugotovitvi (ki jo simbolizirajo mentalno usmerjeni meči), zakaj trpite in kaj morda mislite in/ali počnete to, kar vas zadržuje v tem stanju. Srce prav tako nakazuje, da lahko do osvoboditve bolečine pride z iskanjem svojega srca, da bi razumeli ali ste navezani na doseganje česa ali čemu nasprotujete.</p><p>Kakšno tesnobo čutite? Ali namerno ali po nesreči nekomu povzročate bolečino? Ali iz stiske izhaja razumevanje ali mentalna jasnost? Kateri oblak ima srebrno oblogo? Se počutite izdano? Kaj morate storiti, kljub žalosti, ki jo prinaša? Ali vaša bolečina pojenja? Kakšno trpljenje morate vi ali kdo drug prestati malo dlje? Kaj vam je zbodlo srce? Vas bolečina prisili, da se soočite z resničnostjo? Kaj bi lahko popravilo vaše srce? Katera resnica vam pomaga ozdraviti bolečino? Kakšno dragoceno lekcijo skriva vaša srce parajoča situacija? Česa ne morete videti v trenutni situaciji? Morda potrebujete pomoč v težkem času? Ste sposobni biti analitični glede travme ali se od nje oddaljiti? Katera zakopana bolečina vpliva na vaše življenje? Ste pripravljeni videti, kako ste odgovorni za svojo situacijo? Kaj morate spraviti iz srca, da ne zbolite? Kako sproščaš svojo bolečino?</p>',
                    src: threeswords,
                    to: "/trojkamecev"
                },
                {
                    name: 'Trojka mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Trije meči prebadajo srce; dež pada iz oblakov zgoraj. Da, obstaja bolečina in trpljenje. Trpljenje je sestavni del življenja. Olajšanje ali dež prihaja iz žalovanja in joka. Prihaja tudi iz želje po ugotovitvi (ki jo simbolizirajo mentalno usmerjeni meči), zakaj trpite in kaj morda mislite in/ali počnete to, kar vas zadržuje v tem stanju. Srce prav tako nakazuje, da lahko do osvoboditve bolečine pride z iskanjem svojega srca, da bi razumeli ali ste navezani na doseganje česa ali čemu nasprotujete.</p><p>Kakšno tesnobo čutite? Ali namerno ali po nesreči nekomu povzročate bolečino? Ali iz stiske izhaja razumevanje ali mentalna jasnost? Kateri oblak ima srebrno oblogo? Se počutite izdano? Kaj morate storiti, kljub žalosti, ki jo prinaša? Ali vaša bolečina pojenja? Kakšno trpljenje morate vi ali kdo drug prestati malo dlje? Kaj vam je zbodlo srce? Vas bolečina prisili, da se soočite z resničnostjo? Kaj bi lahko popravilo vaše srce? Katera resnica vam pomaga ozdraviti bolečino? Kakšno dragoceno lekcijo skriva vaša srce parajoča situacija? Česa ne morete videti v trenutni situaciji? Morda potrebujete pomoč v težkem času? Ste sposobni biti analitični glede travme ali se od nje oddaljiti? Katera zakopana bolečina vpliva na vaše življenje? Ste pripravljeni videti, kako ste odgovorni za svojo situacijo? Kaj morate spraviti iz srca, da ne zbolite? Kako sproščaš svojo bolečino?</p>',
                    src: threeswordsDown,
                    to: "/trojkamecev"
                },
                {
                    name: 'Štirica mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Podoba telesa, ki počiva v ospredju, predstavlja kontrast živahnemu prizoru, ki se dogaja zunaj okna. Slika nakazuje nekoga, ki je "vse premišljen" in nakazuje vrednost usmiljenja do samega sebe z začasnim umikom od sveta, tako da je vse, kar mora storiti, "biti". Meči so povezani z mentalno tvorbo in formulacijo. Obstajajo časi, ko je pred miselno formulacijo najbolje opustiti svoje predsodke, da lahko vstopijo nove ideje. To je kabalistično načelo "raztopi in strdi" - molitev in meditacija o prejemu nove ali prenovljene miselnosti.</p><p>Kako se lahko zberete pred stresnim dogodkom? Čemu se umikate? Katere skrbi morate začasno odložiti? Ali vam svetujejo, da se umaknete iz svojih običajnih dejavnosti, da bi izboljšali svoje zdravje in vplivali na zdravljenje? Ali se morda ukvarjate s slabim zdravjem drugega? Potrebujete regeneracijo, da bi lahko napredovali učinkoviteje? Vam drugi otežujejo obračanje vase? Zakaj se po tako močnem in hitrem teku bojite upočasniti? Ali se morda odločate (ali vas sili) v predčasno upokojitev? Ali bi vam lahko koristilo razmišljanje o vaših načrtih, namesto da bi se ravnali po njih, kakršni so? Kdo je izobčen? Je vaša introspekcija način izogibanja obveznostim? Ali si povrnete svojo mentalno jasnost? Se bojite, da bi kdo ali nekaj zmotilo vašo tišino? Čakate, da vas nekdo reši? Ste v stiku s svojim jazom?</p>',
                    src: fourswords,
                    to: "/stiricamecev"
                },
                {
                    name: 'Štirica mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Podoba telesa, ki počiva v ospredju, predstavlja kontrast živahnemu prizoru, ki se dogaja zunaj okna. Slika nakazuje nekoga, ki je "vse premišljen" in nakazuje vrednost usmiljenja do samega sebe z začasnim umikom od sveta, tako da je vse, kar mora storiti, "biti". Meči so povezani z mentalno tvorbo in formulacijo. Obstajajo časi, ko je pred miselno formulacijo najbolje opustiti svoje predsodke, da lahko vstopijo nove ideje. To je kabalistično načelo "raztopi in strdi" - molitev in meditacija o prejemu nove ali prenovljene miselnosti.</p><p>Kako se lahko zberete pred stresnim dogodkom? Čemu se umikate? Katere skrbi morate začasno odložiti? Ali vam svetujejo, da se umaknete iz svojih običajnih dejavnosti, da bi izboljšali svoje zdravje in vplivali na zdravljenje? Ali se morda ukvarjate s slabim zdravjem drugega? Potrebujete regeneracijo, da bi lahko napredovali učinkoviteje? Vam drugi otežujejo obračanje vase? Zakaj se po tako močnem in hitrem teku bojite upočasniti? Ali se morda odločate (ali vas sili) v predčasno upokojitev? Ali bi vam lahko koristilo razmišljanje o vaših načrtih, namesto da bi se ravnali po njih, kakršni so? Kdo je izobčen? Je vaša introspekcija način izogibanja obveznostim? Ali si povrnete svojo mentalno jasnost? Se bojite, da bi kdo ali nekaj zmotilo vašo tišino? Čakate, da vas nekdo reši? Ste v stiku s svojim jazom?</p>',
                    src: fourswordsDown,
                    to: "/stiricamecev"
                },
                {
                    name: 'Petica mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Dejanja ustvarjajo reakcije. Moški prezirljivo gleda za dvema umikajočima se možema. Njihovi meči ležijo na tleh. V levi roki nosi dva dvignjena meča, drugi meč v desnici pa je obrnjen navzdol. Vse se spremeni; začasno ima moč nad drugimi. Če maščevanje motivira dejanja človeka v ospredju, je morda videti kot zmagovalec, vendar v resnici ni. Če se drugi (moški v ozadju) nočejo boriti za tisto, v kar ne verjamejo, morda niso videti kot zmagovalci, ampak v resnici so.</p><p>Katere miselne igre igrate? Se razhajate s prijatelji, družino ali poslovnimi partnerji? Bi lahko drugega razorožili z resnico? Ali se zavedate, da ste poraženec, ko nepošteno zmagate? Ali se umikate, ker to, za kar se prepirate, ni vredno? Se počutite napadeni? Kje ste vi ali drugo bitje, ki razdira? Se počutite večvrednega od drugih? Zakaj čutite sram, ponižanje, poraz ali obup? Koga ste uničili in za kakšno ceno? Ali se zavedate, da že plačujete za bolečino, ki jo povzročate? Je vaša samozavest poškodovana? Ste morda tako zaskrbljeni zaradi zmage, da vam je vseeno, kako to počnete in kaj iz tega izhaja? S kom se poravnavate ali kdo se poravnava vam? Koga ustrahujete, ali kdo ustrahuje vas? Se počutite strahopetno? Kateri spor izgubljate? Koga ste odpravili in za kakšno ceno? Kdo vam grozi oziroma komu vi grozite?</p>',
                    src: fiveswords,
                    to: "/peticamecev"
                },
                {
                    name: 'Petica mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Dejanja ustvarjajo reakcije. Moški prezirljivo gleda za dvema umikajočima se možema. Njihovi meči ležijo na tleh. V levi roki nosi dva dvignjena meča, drugi meč v desnici pa je obrnjen navzdol. Vse se spremeni; začasno ima moč nad drugimi. Če maščevanje motivira dejanja človeka v ospredju, je morda videti kot zmagovalec, vendar v resnici ni. Če se drugi (moški v ozadju) nočejo boriti za tisto, v kar ne verjamejo, morda niso videti kot zmagovalci, ampak v resnici so.</p><p>Katere miselne igre igrate? Se razhajate s prijatelji, družino ali poslovnimi partnerji? Bi lahko drugega razorožili z resnico? Ali se zavedate, da ste poraženec, ko nepošteno zmagate? Ali se umikate, ker to, za kar se prepirate, ni vredno? Se počutite napadeni? Kje ste vi ali drugo bitje, ki razdira? Se počutite večvrednega od drugih? Zakaj čutite sram, ponižanje, poraz ali obup? Koga ste uničili in za kakšno ceno? Ali se zavedate, da že plačujete za bolečino, ki jo povzročate? Je vaša samozavest poškodovana? Ste morda tako zaskrbljeni zaradi zmage, da vam je vseeno, kako to počnete in kaj iz tega izhaja? S kom se poravnavate ali kdo se poravnava vam? Koga ustrahujete, ali kdo ustrahuje vas? Se počutite strahopetno? Kateri spor izgubljate? Koga ste odpravili in za kakšno ceno? Kdo vam grozi oziroma komu vi grozite?</p>',
                    src: fiveswordsDown,
                    to: "/peticamecev"
                },
                {
                    name: 'Šestica mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Vodno plovilo prepelje potnike na drugo obalo. Načrti za potovanje so bili dobro premišljeni, simbolizira pa jih šest uravnoteženih mečev, zataknjenih v čoln. Potniki so obrnjeni s hrbti, kar nakazuje vero v nevidno. Brodar (naša nevidna višja duša, duh, Jaz) vodi sedeče osebe (našo osebnost in telo) do druge življenjske izkušnje in/ali ravni zavesti.</p><p>Se selite v bolj miren čas ali okolje? Ali ste ločeni od svoje burne preteklosti? Ali verjamete, da vas vaš višji Jaz nese na varno? Komu nudite zatočišče ali kdo nudi zatočišče vam? Bi lahko nadaljevanje vaših načrtov razbremenilo vašo tesnobo? Kateri načrti so nepričakovano zamaknjeni? Kdo vam pomaga? Čemu bežite? Kaj mislite, proti čemu se usmerjate? Je morda to pravi čas za umik? Kdo je predviden za obisk? Katere nujne storitve opravljate? Spreminjate smer na podlagi jasnega razmišljanja ali čustvenosti? Od česa ali koga bi vas lahko vaš način razmišljanja odrezal? Kakšna napetost se sprošča? Je vašega ali tujega trpljenja skoraj konec? Čemu ali komu mislite, da uhajate? Se zavedate, da vedno obstajajo problemi, ki jih je treba rešiti? Imate občutek, da se odpravljate v izgnanstvo? Ali razmišljate o odpovedi državljanstva ali se ukvarjate z vprašanji priseljevanja?</p>',
                    src: sixswords,
                    to: "/sesticamecev"
                },
                {
                    name: 'Šestica mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Vodno plovilo prepelje potnike na drugo obalo. Načrti za potovanje so bili dobro premišljeni, simbolizira pa jih šest uravnoteženih mečev, zataknjenih v čoln. Potniki so obrnjeni s hrbti, kar nakazuje vero v nevidno. Brodar (naša nevidna višja duša, duh, Jaz) vodi sedeče osebe (našo osebnost in telo) do druge življenjske izkušnje in/ali ravni zavesti.</p><p>Se selite v bolj miren čas ali okolje? Ali ste ločeni od svoje burne preteklosti? Ali verjamete, da vas vaš višji Jaz nese na varno? Komu nudite zatočišče ali kdo nudi zatočišče vam? Bi lahko nadaljevanje vaših načrtov razbremenilo vašo tesnobo? Kateri načrti so nepričakovano zamaknjeni? Kdo vam pomaga? Čemu bežite? Kaj mislite, proti čemu se usmerjate? Je morda to pravi čas za umik? Kdo je predviden za obisk? Katere nujne storitve opravljate? Spreminjate smer na podlagi jasnega razmišljanja ali čustvenosti? Od česa ali koga bi vas lahko vaš način razmišljanja odrezal? Kakšna napetost se sprošča? Je vašega ali tujega trpljenja skoraj konec? Čemu ali komu mislite, da uhajate? Se zavedate, da vedno obstajajo problemi, ki jih je treba rešiti? Imate občutek, da se odpravljate v izgnanstvo? Ali razmišljate o odpovedi državljanstva ali se ukvarjate z vprašanji priseljevanja?</p>',
                    src: sixswordsDown,
                    to: "/sesticamecev"
                },
                {
                    name: 'Sedmica mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Moški odnaša pet mečev, medtem ko druga dva ostajata zataknjena v tleh pred tremi okrašenimi šotori. V procesu prenašanja nečesa iz sveta ustvarjalnih možnosti v realnost je treba narediti načrt. Pri oblikovanju načrta je treba nekatere možnosti izločiti ali zapustiti. Ker moški gleda nazaj, medtem ko se pomika naprej, slika nakazuje, da za seboj pušča nekaj možnosti, vendar ne brez zadržkov.</p><p>Ali morda dosegate le delni uspeh? Zakaj delate sami? Zakaj jemljete, kar ni vaše? Zakaj gledate nazaj, ko grete naprej? Katere informacije prenašate iz kraja v kraj? Ali se počutite čustveno ločeni od rezultatov dejanja? Ali morda skrivate svoje misli? Čemu se odpovedujete ali pustite za seboj? Kaj prebirate in izločate? Kakšen načrt izvajate? Ali niste tako samozavestni, kot se zdi? Delujete s soglasjem ali brez njega? Ali morda kršite dogovor? Ali vaš notranji jaz prepričuje vaša dejanja? Kakšno preračunano tveganje prevzemate ali se mu upirate? Zakaj morda mečete previdnost v veter? Je nekaj previdnosti vredno obdržati? S čim mislite, da se izognete? Vas kaj dohiteva? Kaj lahko pridobite ali izgubite z zagotavljanjem pomoči? Kaj vas ovira, da dokončate delo?</p>',
                    src: sevenswords,
                    to: "/sevenswords"
                },
                {
                    name: 'Sedmica mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Moški odnaša pet mečev, medtem ko druga dva ostajata zataknjena v tleh pred tremi okrašenimi šotori. V procesu prenašanja nečesa iz sveta ustvarjalnih možnosti v realnost je treba narediti načrt. Pri oblikovanju načrta je treba nekatere možnosti izločiti ali zapustiti. Ker moški gleda nazaj, medtem ko se pomika naprej, slika nakazuje, da za seboj pušča nekaj možnosti, vendar ne brez zadržkov.</p><p>Ali morda dosegate le delni uspeh? Zakaj delate sami? Zakaj jemljete, kar ni vaše? Zakaj gledate nazaj, ko grete naprej? Katere informacije prenašate iz kraja v kraj? Ali se počutite čustveno ločeni od rezultatov dejanja? Ali morda skrivate svoje misli? Čemu se odpovedujete ali pustite za seboj? Kaj prebirate in izločate? Kakšen načrt izvajate? Ali niste tako samozavestni, kot se zdi? Delujete s soglasjem ali brez njega? Ali morda kršite dogovor? Ali vaš notranji jaz prepričuje vaša dejanja? Kakšno preračunano tveganje prevzemate ali se mu upirate? Zakaj morda mečete previdnost v veter? Je nekaj previdnosti vredno obdržati? S čim mislite, da se izognete? Vas kaj dohiteva? Kaj lahko pridobite ali izgubite z zagotavljanjem pomoči? Kaj vas ovira, da dokončate delo?</p>',
                    src: sevenswordsDown,
                    to: "/sedmicamecev"
                },
                {
                    name: 'Osmica mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Ženska, zvezana in z zavezanimi očmi, najde pot skozi ograjo in vrata osmih mečev. Čeprav morda tega dejansko ne ve, struktura v ozadju nakazuje, da je že prepotovala veliko razdaljo. Njen vid in gibanje so omejeni, vendar jo njen vpogled, namera in duševna vzdržljivost vodijo, kot se zdi, skozi zadnjo etapo njene poti do svobode.</p><p>Kako vam lahko pogled v notranjost pomaga jasneje videti, kaj se dogaja zunaj? Česa ste se skoraj osvobodili? Vas mentalni konstrukti držijo v zaporu? Kaj vam preprečuje, da bi se uveljavili? Izstopate ali vstopate v obvezno pridržanje? Kako najdete svobodo skozi omejitve? Se zavedate ali ne poznate možnosti, ki so vam na voljo? Vas vodi intuicija? Skozi kakšno preizkušnjo pogumno prehajate? Ali bi vam lahko koristilo, če bi bili manj ali bolj potrpežljivi? Pred čemu se slepite? Morda doživljate sram in ponižanje? Mislite, da se ne prilegate? Pod kakšno psihično obremenitvijo ste? Kako bi lahko bili odgovorni za svoj položaj? Kaj vam preprečuje, da bi videli svojo pot? Kaj vas ujame ali zatira? Ali morate izbirati med nezaželenimi situacijami? Je vaš um zaprt za nove zaznave? Čeprav je vaša omejitev neprijetna, se vam pozna? Kako bi se lahko osvobodili iz zapora, ki si ga sami postavite?</p>',
                    src: eightswords,
                    to: "/osmicamecev"
                },
                {
                    name: 'Osmica mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Ženska, zvezana in z zavezanimi očmi, najde pot skozi ograjo in vrata osmih mečev. Čeprav morda tega dejansko ne ve, struktura v ozadju nakazuje, da je že prepotovala veliko razdaljo. Njen vid in gibanje so omejeni, vendar jo njen vpogled, namera in duševna vzdržljivost vodijo, kot se zdi, skozi zadnjo etapo njene poti do svobode.</p><p>Kako vam lahko pogled v notranjost pomaga jasneje videti, kaj se dogaja zunaj? Česa ste se skoraj osvobodili? Vas mentalni konstrukti držijo v zaporu? Kaj vam preprečuje, da bi se uveljavili? Izstopate ali vstopate v obvezno pridržanje? Kako najdete svobodo skozi omejitve? Se zavedate ali ne poznate možnosti, ki so vam na voljo? Vas vodi intuicija? Skozi kakšno preizkušnjo pogumno prehajate? Ali bi vam lahko koristilo, če bi bili manj ali bolj potrpežljivi? Pred čemu se slepite? Morda doživljate sram in ponižanje? Mislite, da se ne prilegate? Pod kakšno psihično obremenitvijo ste? Kako bi lahko bili odgovorni za svoj položaj? Kaj vam preprečuje, da bi videli svojo pot? Kaj vas ujame ali zatira? Ali morate izbirati med nezaželenimi situacijami? Je vaš um zaprt za nove zaznave? Čeprav je vaša omejitev neprijetna, se vam pozna? Kako bi se lahko osvobodili iz zapora, ki si ga sami postavite?</p>',
                    src: eightswordsDown,
                    to: "/osmicamecev"
                },
                {
                    name: 'Devetica mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Ženska sedi v postelji z glavo v rokah, morda v molitvi. Nad glavo visi devet mečev, ki simbolizirajo mentalno oblikovanje in analizo. Psihična operacija oziroma operacija napačnih miselnih vzorcev se izvaja zato, da pride do ozdravitve. Slika nakazuje, kako boleče je lahko opustiti tisto, kar si želite, in sprejeti tisto kar je.</p>Se mučite zaradi odločitve? Zaradi česa se počutiš nesrečno? Ali vas nenehno skrbi? Kaj žalujete, ali kaj predvidevate žalovanje? Je pod vašo depresijo jeza? Kako lahko varno sprostite svojo jezo? Kdo bi lahko osvetlil vašo situacijo? Ali se potem, ko naredite vse, kar je v vaši moči, predajate višji sili? Ste razočarani, ker vas drugi narobe razumejo? Kaj znižuje ali dviguje vašo samozavest? Imate težave s spanjem? Se zbujate zaskrbljeni? Bi vam lahko koristil zdravniški pregled? S čim se sprijaznite? Kaj vaše solze sproščajo ali čistijo? Ali molite za vodstvo? Ali priznavate svojo nemoč? Kakšno bolečino prenašate sami? Kdo je vaš najstrožji kritik? Ali preveč razmišljate in premalo delate? Se počutite samodestruktivno? Ali je duševna bolezen prisotna v vaši družini? Bi proaktivnost morda olajšala vaš zatiralski položaj?</p>',
                    src: nineswords,
                    to: "/deveticamecev"
                },
                {
                    name: 'Devetica mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Ženska sedi v postelji z glavo v rokah, morda v molitvi. Nad glavo visi devet mečev, ki simbolizirajo mentalno oblikovanje in analizo. Psihična operacija oziroma operacija napačnih miselnih vzorcev se izvaja zato, da pride do ozdravitve. Slika nakazuje, kako boleče je lahko opustiti tisto, kar si želite, in sprejeti tisto kar je.</p>Se mučite zaradi odločitve? Zaradi česa se počutiš nesrečno? Ali vas nenehno skrbi? Kaj žalujete, ali kaj predvidevate žalovanje? Je pod vašo depresijo jeza? Kako lahko varno sprostite svojo jezo? Kdo bi lahko osvetlil vašo situacijo? Ali se potem, ko naredite vse, kar je v vaši moči, predajate višji sili? Ste razočarani, ker vas drugi narobe razumejo? Kaj znižuje ali dviguje vašo samozavest? Imate težave s spanjem? Se zbujate zaskrbljeni? Bi vam lahko koristil zdravniški pregled? S čim se sprijaznite? Kaj vaše solze sproščajo ali čistijo? Ali molite za vodstvo? Ali priznavate svojo nemoč? Kakšno bolečino prenašate sami? Kdo je vaš najstrožji kritik? Ali preveč razmišljate in premalo delate? Se počutite samodestruktivno? Ali je duševna bolezen prisotna v vaši družini? Bi proaktivnost morda olajšala vaš zatiralski položaj?</p>',
                    src: nineswordsDown,
                    to: "/deveticamecev"
                },
                {
                    name: 'Desetica mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Ležečega človeka prebode deset mečev. V ozadju vzhaja sonce. Prizor namiguje, da ko stvari postanejo tako težke, da se zdi, da ne morejo biti še slabše, bodo začele popuščati. Človek se sooča z dejstvom, da ne glede na to, kako močno se trudi zadržati obrabljene mentalne konstrukte, se stvari nenehno spreminjajo - se odrežejo stran in se izločijo. Predanost temu univerzalnemu načelu prinaša sprostitev, olajšanje in prenovo njegovega telesa, uma in duha. Sprejemanje prinaša svežo energijo in zarjo novega dne.</p><p>Kaj vas je nepričakovano zadelo? Kaj ste prisiljeni spoznati? Kaj bi vas lahko dvignilo? S kakšno resničnost ste v procesu sprejemanja? Kako in zakaj ste potisnjeni dol? Kako vas lahko opustitev nadzora osvobodi? Kaj vas prevzame? Kakšno situacijo ste prisiljeni sprejeti? Ali bolečina in poraz delujeta tako, da vas duhovno preobrazita? Kaj zdrobi vaš ponos ali ego? Ali morda razmišljate o radikalni spremembi odnosa? Kateri cikel se konča, da se začne drug? Ali potrebujete operacijo? Kaj se ali ste se naučili iz svojega padca ali trpljenja? Kaj bi lahko povzročalo vašo duševno bolečino in depresijo? Imate impotenco? Katere misli spodkopavajo vaše zdravje in razum? Kakšnemu ponižanju se nameravate maščevati? Ali se sprošča zastala energija? Ali okrevate po nesreči ali življenjsko nevarni bolezni ali operaciji? Izgubili ste bitko, toda kako bi lahko zmagali v vojni?</p>',
                    src: tenswords,
                    to: "/deseticamecev"
                },
                {
                    name: 'Desetica mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Ležečega človeka prebode deset mečev. V ozadju vzhaja sonce. Prizor namiguje, da ko stvari postanejo tako težke, da se zdi, da ne morejo biti še slabše, bodo začele popuščati. Človek se sooča z dejstvom, da ne glede na to, kako močno se trudi zadržati obrabljene mentalne konstrukte, se stvari nenehno spreminjajo - se odrežejo stran in se izločijo. Predanost temu univerzalnemu načelu prinaša sprostitev, olajšanje in prenovo njegovega telesa, uma in duha. Sprejemanje prinaša svežo energijo in zarjo novega dne.</p><p>Kaj vas je nepričakovano zadelo? Kaj ste prisiljeni spoznati? Kaj bi vas lahko dvignilo? S kakšno resničnost ste v procesu sprejemanja? Kako in zakaj ste potisnjeni dol? Kako vas lahko opustitev nadzora osvobodi? Kaj vas prevzame? Kakšno situacijo ste prisiljeni sprejeti? Ali bolečina in poraz delujeta tako, da vas duhovno preobrazita? Kaj zdrobi vaš ponos ali ego? Ali morda razmišljate o radikalni spremembi odnosa? Kateri cikel se konča, da se začne drug? Ali potrebujete operacijo? Kaj se ali ste se naučili iz svojega padca ali trpljenja? Kaj bi lahko povzročalo vašo duševno bolečino in depresijo? Imate impotenco? Katere misli spodkopavajo vaše zdravje in razum? Kakšnemu ponižanju se nameravate maščevati? Ali se sprošča zastala energija? Ali okrevate po nesreči ali življenjsko nevarni bolezni ali operaciji? Izgubili ste bitko, toda kako bi lahko zmagali v vojni?</p>',
                    src: tenswordsDown,
                    to: "/deseticamecev"
                },
                {
                    name: 'Paž mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Paž hitro hodi, medtem ko v obeh rokah pokonci drži meč, simbol mentalnega načrtovanja, analize in razsodnosti. Teren je razgiban in nad glavo se hitro zgrnejo oblaki. Kot nov učenec meča nakazuje dovzetnost za mentalno stimulacijo - oblikovanje načrtov, uporaba diskretnosti, odkrivanje pomembnosti postavljanja meja in meje - in logiko odstranjevanja tistega, kar je tuje, da bi uresničil svoje ideje. Paž mečev je dovzeten za lekcije, ki jih prinaša njegovo orodje. Uči se mentalne jasnosti, sprejema najboljše odločitve, ki jih lahko, ter je pripravljen prevzeti odgovornost in se učiti iz rezultatov.</p><p>Ali ste mentalno prilagodljivi ali ste preveč prilagodljivi? Vas vleče v dve smeri? Kaj je treba odpraviti? Ali doživljate duševno zmedo ali paranojo? Katero komunikacijo prekinjate? Kje bi lahko bili bolj odločni? Ali mislite, da vas nekdo hoče dobiti? Se učite, kako se zaščititi? Ali sledite svojim zamislim? Kaj bi lahko podrobneje preučili, preden ukrepate? Se obnašate nepremišljeno? Ali morda sprejemate neracionalno odločitev? Pri čem boste morda potrebovali pomoč? Ali postajate bolj usmerjeni v podrobnosti? Ste zlobni? Od koga se ločujete? Na kaj pazite? Ali oklevate poiskati pomoč? Začenjate nekaj, česar ne morete ustaviti? Na obrobju katerega konflikta ste?</p>',
                    src: pageswords,
                    to: "/pazmecev"
                },
                {
                    name: 'Paž mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Paž hitro hodi, medtem ko v obeh rokah pokonci drži meč, simbol mentalnega načrtovanja, analize in razsodnosti. Teren je razgiban in nad glavo se hitro zgrnejo oblaki. Kot nov učenec meča nakazuje dovzetnost za mentalno stimulacijo - oblikovanje načrtov, uporaba diskretnosti, odkrivanje pomembnosti postavljanja meja in meje - in logiko odstranjevanja tistega, kar je tuje, da bi uresničil svoje ideje. Paž mečev je dovzeten za lekcije, ki jih prinaša njegovo orodje. Uči se mentalne jasnosti, sprejema najboljše odločitve, ki jih lahko, ter je pripravljen prevzeti odgovornost in se učiti iz rezultatov.</p><p>Ali ste mentalno prilagodljivi ali ste preveč prilagodljivi? Vas vleče v dve smeri? Kaj je treba odpraviti? Ali doživljate duševno zmedo ali paranojo? Katero komunikacijo prekinjate? Kje bi lahko bili bolj odločni? Ali mislite, da vas nekdo hoče dobiti? Se učite, kako se zaščititi? Ali sledite svojim zamislim? Kaj bi lahko podrobneje preučili, preden ukrepate? Se obnašate nepremišljeno? Ali morda sprejemate neracionalno odločitev? Pri čem boste morda potrebovali pomoč? Ali postajate bolj usmerjeni v podrobnosti? Ste zlobni? Od koga se ločujete? Na kaj pazite? Ali oklevate poiskati pomoč? Začenjate nekaj, česar ne morete ustaviti? Na obrobju katerega konflikta ste?</p>',
                    src: pageswordsDown,
                    to: "/pazmecev"
                },
                {
                    name: 'Vitez mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Z izvlečenim mečem ta vitez dirka s polno hitrostjo, kot da bi jurišal v boj. Vitez mečev prevzame veščino, ki se je je naučil, kot paž – moč miselne formulacije, analize in razsodnosti – in jo aktivno vključuje v svoje vsakdanje življenje. Ta izjemno pozoren vitez uporablja svojo mentalno bistrost, da prereže težave – ločuje zrnje od pleva – in tako sprejema najboljše in najbolj zdrave odločitve, ki jih je sposoben sprejemati. Nato voljno sprejme odgovornost za rezultate in se iz njih uči.</p><p>Ste kljub vsem težavam pogumni? Kakšno nasilje se dogaja? V kateri konflikt vas sili vaš jaz? Kaj želite povedati? Namesto koga govorite ali proti komu govorite? Ali vodite pravičen boj? Ali se borite za izgubljen primer? Kam vas pelje vaš svojeglav odnos? S katero resnico ali dejstvi ste oboroženi? Komu bi lahko pristopili bolj previdno? Bi lahko bila taktnost koristna? Ali sprejemate nove ukrepe? Ali se zavedate posledic svojih nepremišljenih ali premišljenih besed? Kam se vam mudi? Vas priložnost za učenje spodbuja? Je za vami obdobje psihične stagnacije? Kdo ogroža vaše pravice? Čemu se upirate ali predajate? V kaj bi se lahko preveč vneto vključili? Na kakšno delovanje ste navezani? Se počutite zelo možato? Ste psihično polni energije ali doživljate izgorelost?</p>',
                    src: knightswords,
                    to: "/vitezmecev"
                },
                {
                    name: 'Vitez mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Z izvlečenim mečem ta vitez dirka s polno hitrostjo, kot da bi jurišal v boj. Vitez mečev prevzame veščino, ki se je je naučil, kot paž – moč miselne formulacije, analize in razsodnosti – in jo aktivno vključuje v svoje vsakdanje življenje. Ta izjemno pozoren vitez uporablja svojo mentalno bistrost, da prereže težave – ločuje zrnje od pleva – in tako sprejema najboljše in najbolj zdrave odločitve, ki jih je sposoben sprejemati. Nato voljno sprejme odgovornost za rezultate in se iz njih uči.</p><p>Ste kljub vsem težavam pogumni? Kakšno nasilje se dogaja? V kateri konflikt vas sili vaš jaz? Kaj želite povedati? Namesto koga govorite ali proti komu govorite? Ali vodite pravičen boj? Ali se borite za izgubljen primer? Kam vas pelje vaš svojeglav odnos? S katero resnico ali dejstvi ste oboroženi? Komu bi lahko pristopili bolj previdno? Bi lahko bila taktnost koristna? Ali sprejemate nove ukrepe? Ali se zavedate posledic svojih nepremišljenih ali premišljenih besed? Kam se vam mudi? Vas priložnost za učenje spodbuja? Je za vami obdobje psihične stagnacije? Kdo ogroža vaše pravice? Čemu se upirate ali predajate? V kaj bi se lahko preveč vneto vključili? Na kakšno delovanje ste navezani? Se počutite zelo možato? Ste psihično polni energije ali doživljate izgorelost?</p>',
                    src: knightswordsDown,
                    to: "/vitezmecev"
                },
                {
                    name: 'Kraljica mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Kraljica mečev je obrnjena postrani, z desnico drži meč pokonci, levo pa iztegnjeno v pozdrav. Njen resen izraz in pokončna drža nakazujeta, da je seznanjena z dolžnostmi vladanja. Blagoslovljena je z močjo pravičnosti, neodvisnosti, večdimenzionalnega razmišljanja in samoodločnosti. Njen prestol krasijo krilati kerubi in metulji. Tudi njena krona je narejena iz metuljev, ki simbolizirajo dejstvo, da razume transformativno moč analitičnega razmišljanja, ki ga motivira ljubezen.</p><p>Ste morda ženska v moškem svetu? Kako se uveljavljate? Bi lahko postavili boljše meje? Ste netolerantni? Kakšno resnico zagovarjate? Ali uživate v svojem podjetju? Kam bi lahko dodali kanček ljubezni, prijaznosti, sočutja ali humorja? Ste povezani z visoko motivirano in neodvisno žensko? Od česa mislite, da se morate ločiti ali oddaljiti? Ste zaradi bolečine in žalosti manj čustveni in bolj razumni? Uporabljate ali skrivate svojo inteligenco? Za kaj vas kličejo ali od vas zahtevajo, da analizirate? Bi bili raje sami kot pa z neinteligentnimi ljudmi? Ste preveč kul? Bi lahko bili intelektualni snob? Katere zakone uveljavljate? Se radi učite in kritično razmišljate? Ali preveč obsojate sebe ali druge? Zakaj bi lahko drugi vašo nečustvenost razumeli kot hladnost? Kakšne načrte uresničujete? Kaj nameravate narediti?</p>',
                    src: queenswords,
                    to: "/kraljicamecev"
                },
                {
                    name: 'Kraljica mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Kraljica mečev je obrnjena postrani, z desnico drži meč pokonci, levo pa iztegnjeno v pozdrav. Njen resen izraz in pokončna drža nakazujeta, da je seznanjena z dolžnostmi vladanja. Blagoslovljena je z močjo pravičnosti, neodvisnosti, večdimenzionalnega razmišljanja in samoodločnosti. Njen prestol krasijo krilati kerubi in metulji. Tudi njena krona je narejena iz metuljev, ki simbolizirajo dejstvo, da razume transformativno moč analitičnega razmišljanja, ki ga motivira ljubezen.</p><p>Ste morda ženska v moškem svetu? Kako se uveljavljate? Bi lahko postavili boljše meje? Ste netolerantni? Kakšno resnico zagovarjate? Ali uživate v svojem podjetju? Kam bi lahko dodali kanček ljubezni, prijaznosti, sočutja ali humorja? Ste povezani z visoko motivirano in neodvisno žensko? Od česa mislite, da se morate ločiti ali oddaljiti? Ste zaradi bolečine in žalosti manj čustveni in bolj razumni? Uporabljate ali skrivate svojo inteligenco? Za kaj vas kličejo ali od vas zahtevajo, da analizirate? Bi bili raje sami kot pa z neinteligentnimi ljudmi? Ste preveč kul? Bi lahko bili intelektualni snob? Katere zakone uveljavljate? Se radi učite in kritično razmišljate? Ali preveč obsojate sebe ali druge? Zakaj bi lahko drugi vašo nečustvenost razumeli kot hladnost? Kakšne načrte uresničujete? Kaj nameravate narediti?</p>',
                    src: queenswordsDown,
                    to: "/kraljicamecev"
                },
                {
                    name: 'Kralj mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Podobno kot pri karti Pravica v veliki arkani Kralj mečev v desni roki drži meč, kar nakazuje, da ima v rokah izjemno moč življenja in smrti. Njegov prestol krasijo metulji, ki simbolizirajo transformativno moč analitičnega mišljenja, ki ga motivira ljubezen. Ko vlada neki domeni, Kralj mečev pusti ob strani osebne pristranskosti in predsodke, da bi svoje nasvete in sodbe utemeljil na razumni razsodnosti in univerzalni modrosti.</p><p>Ste vedno mirovnik? Zakaj morate ohranjati mir? Kaj odločno načrtujete ali planirate? Kaj analizirate ali kritizirate? Kje je potrebna diskretnost? Kaj izločate iz svojega življenja? Ali sta vaš intelekt in čustva uravnotežena? Je vaša presoja izkrivljena? Kakšni načrti se izvajajo? Kaj pa, če bi se nehali truditi ohranjati stvari harmonične? Ali so potrebne vaše mediacijske sposobnosti? Je vaša integriteta pod vprašajem? Katere zakone morate upoštevati in živeti po njih? Katere informacije delite? Ali prehitro razmišljate? Kako vam lahko pomaga čustvena odmaknjenost? Pred čem se varujete? Katere resnice zagovarjate? Ste svojeglavi? Kakšna pravna situacija zahteva vaš čas? Ste se pripravljeni boriti za svoje ali tuje interese? Kaj ste lagali? Ste arogantni? Kaj tolerirate oziroma česa ne boste tolerirali?</p>',
                    src: kingswords,
                    to: "/kraljmecev"
                },
                {
                    name: 'Kralj mečev',
                    text: '<p><b>Univerzalni arhetip:</b> Podobno kot pri karti Pravica v veliki arkani Kralj mečev v desni roki drži meč, kar nakazuje, da ima v rokah izjemno moč življenja in smrti. Njegov prestol krasijo metulji, ki simbolizirajo transformativno moč analitičnega mišljenja, ki ga motivira ljubezen. Ko vlada neki domeni, Kralj mečev pusti ob strani osebne pristranskosti in predsodke, da bi svoje nasvete in sodbe utemeljil na razumni razsodnosti in univerzalni modrosti.</p><p>Ste vedno mirovnik? Zakaj morate ohranjati mir? Kaj odločno načrtujete ali planirate? Kaj analizirate ali kritizirate? Kje je potrebna diskretnost? Kaj izločate iz svojega življenja? Ali sta vaš intelekt in čustva uravnotežena? Je vaša presoja izkrivljena? Kakšni načrti se izvajajo? Kaj pa, če bi se nehali truditi ohranjati stvari harmonične? Ali so potrebne vaše mediacijske sposobnosti? Je vaša integriteta pod vprašajem? Katere zakone morate upoštevati in živeti po njih? Katere informacije delite? Ali prehitro razmišljate? Kako vam lahko pomaga čustvena odmaknjenost? Pred čem se varujete? Katere resnice zagovarjate? Ste svojeglavi? Kakšna pravna situacija zahteva vaš čas? Ste se pripravljeni boriti za svoje ali tuje interese? Kaj ste lagali? Ste arogantni? Kaj tolerirate oziroma česa ne boste tolerirali?</p>',
                    src: kingswordsDown,
                    to: "/kraljmecev"
                },
                // Pentaklji
                {
                    name: 'As pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Pentakel - simbol manifestiranega sveta, vsega v njem, in elementa zemlje, ki označuje trdne oblike - je ukleščen v iztegnjeno roko, ki prihaja iz oblaka. Lebdi nad vrtom, podobnim tistemu, ki se pojavi na karti Magika. V središču pentakla je pentagram. Ta petokraka zvezda ima glavo, roke in noge ter simbolizira človeštvo kot "varuhe Edenskega vrta" (planet Zemlja). Pentagram simbolizira tudi magijo - magijo prinašanja nebes na zemljo in zemlje v nebesa. Brez dvoma je vse na zemlji duh, ki je začasno zamrznjen v obliki.</p><p>Kakšen materialni dosežek ali nagrada je v vaših rokah? Začenjate službo ali se selite v novo okolje? Se počutite materialno blagoslovljene? Bi vam lahko koristilo, če svoje vire delite z drugimi? Želite boljše plačilo za svoje delo? Komu bi lahko koristilo, če se ne bi zanašal na vas pri denarju? Ali razumete, da so fizične stvari duhovne ideje v obleki? Kakšna semena sadite? Ali imate zdravstvene težave? Kako ravnate ali ne ravnate s svojimi financami? Ali uživate ali pretiravate s svojim telesom in čutili? Vam kakšna finančna ali službena situacija uhaja izpod nadzora? O kakšnih priložnostih za posel, varnost ali boljše zdravje razmišljate? Kako materialni uspeh kvari vas ali koga drugega? Si vaše telo in okolje zaslužita boljšo nego? Ste preveč navezani na svoje stvari? Kaj za vas pomeni imeti "dovolj"? Kaj potrebuje ali ne potrebuje vaše oskrbe? Na kakšen način uspevate ali ne uspevate?</p>',
                    src: acepentacles,
                    to: "/aspentakljev"
                },
                {
                    name: 'As pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Pentakel - simbol manifestiranega sveta, vsega v njem, in elementa zemlje, ki označuje trdne oblike - je ukleščen v iztegnjeno roko, ki prihaja iz oblaka. Lebdi nad vrtom, podobnim tistemu, ki se pojavi na karti Magika. V središču pentakla je pentagram. Ta petokraka zvezda ima glavo, roke in noge ter simbolizira človeštvo kot "varuhe Edenskega vrta" (planet Zemlja). Pentagram simbolizira tudi magijo - magijo prinašanja nebes na zemljo in zemlje v nebesa. Brez dvoma je vse na zemlji duh, ki je začasno zamrznjen v obliki.</p><p>Kakšen materialni dosežek ali nagrada je v vaših rokah? Začenjate službo ali se selite v novo okolje? Se počutite materialno blagoslovljene? Bi vam lahko koristilo, če svoje vire delite z drugimi? Želite boljše plačilo za svoje delo? Komu bi lahko koristilo, če se ne bi zanašal na vas pri denarju? Ali razumete, da so fizične stvari duhovne ideje v obleki? Kakšna semena sadite? Ali imate zdravstvene težave? Kako ravnate ali ne ravnate s svojimi financami? Ali uživate ali pretiravate s svojim telesom in čutili? Vam kakšna finančna ali službena situacija uhaja izpod nadzora? O kakšnih priložnostih za posel, varnost ali boljše zdravje razmišljate? Kako materialni uspeh kvari vas ali koga drugega? Si vaše telo in okolje zaslužita boljšo nego? Ste preveč navezani na svoje stvari? Kaj za vas pomeni imeti "dovolj"? Kaj potrebuje ali ne potrebuje vaše oskrbe? Na kakšen način uspevate ali ne uspevate?</p>',
                    src: acepentaclesDown,
                    to: "/aspentakljev"
                },
                {
                    name: 'Dvojka pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Mlada oseba uravnoteži dva pentakla (simbola fizičnega dela in predmetov), ki sta povezana z znakom neskončnosti. Spoznava duhovno vrednost fizičnega dela, vidi neskončno v končnem življenju (kar kabalisti imenujejo "veliko v malem"). Čolni, ki jezdijo valove v ozadju karte, nakazujejo, da je vsako človeško plovilo podvrženo fizičnim sprememba; modrost je v tem, da ostanemo uravnoteženi sredi življenjskih vzponov in padcev. Priznanje, da so fizične stvari in situacije orodja za pomoč pri duhovni rasti, lahko prinese ravnodušnost.</p><p>Katere okoliščine tehtate? Kako vam uspeva usklajevati vsakodnevne obveznosti? Ali mislite, da boste spustil žogo? Ali poskušate uravnotežiti nasprotujoče si zahteve? Potrebujete čas za počitek in sprostitev? Vas skrbijo denarne zadeve? Se vam zdi, da delate več, kot je vaš del dela? Ali razmišljate o spremembi življenjskega sloga ali kariere? Ali priznavate, da so materialne obveznosti v bistvu duhovne? Ali morate izbirati med dvema stvarema, ki jih želite početi? Vas vleče v več kot eno smer hkrati? Ali so vaše fizične energije preveč razpršene? Ali imate težave pri pravilni negi doma, družine, službe in telesa? Ali ste zaskrbljeni zaradi negotovosti vsakdanjega življenja? Ali se počutite razpeti med telesnimi užitki — veseljem ob uživanju vsega, kar si želite, in veseljem ob boljšem fizičnem zdravju?</p>',
                    src: twopentacles,
                    to: "/dvojkapentakljev"
                },
                {
                    name: 'Dvojka pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Mlada oseba uravnoteži dva pentakla (simbola fizičnega dela in predmetov), ki sta povezana z znakom neskončnosti. Spoznava duhovno vrednost fizičnega dela, vidi neskončno v končnem življenju (kar kabalisti imenujejo "veliko v malem"). Čolni, ki jezdijo valove v ozadju karte, nakazujejo, da je vsako človeško plovilo podvrženo fizičnim sprememba; modrost je v tem, da ostanemo uravnoteženi sredi življenjskih vzponov in padcev. Priznanje, da so fizične stvari in situacije orodja za pomoč pri duhovni rasti, lahko prinese ravnodušnost.</p><p>Katere okoliščine tehtate? Kako vam uspeva usklajevati vsakodnevne obveznosti? Ali mislite, da boste spustil žogo? Ali poskušate uravnotežiti nasprotujoče si zahteve? Potrebujete čas za počitek in sprostitev? Vas skrbijo denarne zadeve? Se vam zdi, da delate več, kot je vaš del dela? Ali razmišljate o spremembi življenjskega sloga ali kariere? Ali priznavate, da so materialne obveznosti v bistvu duhovne? Ali morate izbirati med dvema stvarema, ki jih želite početi? Vas vleče v več kot eno smer hkrati? Ali so vaše fizične energije preveč razpršene? Ali imate težave pri pravilni negi doma, družine, službe in telesa? Ali ste zaskrbljeni zaradi negotovosti vsakdanjega življenja? Ali se počutite razpeti med telesnimi užitki — veseljem ob uživanju vsega, kar si želite, in veseljem ob boljšem fizičnem zdravju?</p>',
                    src: twopentaclesDown,
                    to: "/dvojkapentakljev"
                },
                {
                    name: 'Trojka pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Kipar je naročen za delo v samostanu. Trije dvignjeni pentakli, vklesani v zgradbo, namigujejo, da je njegovo delo izraz njegovih duhovnih idealov. Dokument nakazuje, da je bil med umetnikom in njegovima pokroviteljema dosežen dogovor. Umetnikova visoka raven spretnosti in dejstvo, da prejema priznanje in finančno nadomestilo v zameno za njegova prizadevanja je označeno z njegovim povišanim položajem.</p><p>Ali obožujete svoje delo? Čemu se posvečate pri delu? Ali pri svojem delu prejemate ali potrebujete podporo ali priznanje? Je vaša produktivnost blokirana? Ali bi lahko sodelovanje z drugimi izboljšalo vaš izdelek? Ali obstajajo možnosti za nadaljnji razvoj ali ste v slepi ulici? Kakšno storitev opravljate ali želite storiti za druge? Ali prejemate ali potrebujete konstruktivno kritiko? Katero delo obvladate? Katere praktične veščine bi se bilo vredno naučiti? Ali želite živeti v skladu s svojimi ali tujimi visokimi standardi? Ali bi morda morali sebi ali drugim postaviti višje ali nižje delovne standarde? Kdo ne zna ceniti vaše umetnosti ali perfekcionizma? Za katero delo ste preveč - ali premalo usposobljeni? Ali razvijate potrpljenje (ali potrebujete potrpljenje), ko usposabljate druge? Ali delo deluje kot meditacija ali duhovna pot? Ste deloholik? Ste v napačnem poklicu? Potrebujete dopust?</p>',
                    src: threepentacles,
                    to: "/trojkapentakljev"
                },
                {
                    name: 'Trojka pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Kipar je naročen za delo v samostanu. Trije dvignjeni pentakli, vklesani v zgradbo, namigujejo, da je njegovo delo izraz njegovih duhovnih idealov. Dokument nakazuje, da je bil med umetnikom in njegovima pokroviteljema dosežen dogovor. Umetnikova visoka raven spretnosti in dejstvo, da prejema priznanje in finančno nadomestilo v zameno za njegova prizadevanja je označeno z njegovim povišanim položajem.</p><p>Ali obožujete svoje delo? Čemu se posvečate pri delu? Ali pri svojem delu prejemate ali potrebujete podporo ali priznanje? Je vaša produktivnost blokirana? Ali bi lahko sodelovanje z drugimi izboljšalo vaš izdelek? Ali obstajajo možnosti za nadaljnji razvoj ali ste v slepi ulici? Kakšno storitev opravljate ali želite storiti za druge? Ali prejemate ali potrebujete konstruktivno kritiko? Katero delo obvladate? Katere praktične veščine bi se bilo vredno naučiti? Ali želite živeti v skladu s svojimi ali tujimi visokimi standardi? Ali bi morda morali sebi ali drugim postaviti višje ali nižje delovne standarde? Kdo ne zna ceniti vaše umetnosti ali perfekcionizma? Za katero delo ste preveč - ali premalo usposobljeni? Ali razvijate potrpljenje (ali potrebujete potrpljenje), ko usposabljate druge? Ali delo deluje kot meditacija ali duhovna pot? Ste deloholik? Ste v napačnem poklicu? Potrebujete dopust?</p>',
                    src: threepentaclesDown,
                    to: "/trojkapentakljev"
                },
                {
                    name: 'Štirica pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Ker so pentakli, simboli fizičnega sveta, na glavi in srcu tega človeka ter pod njegovimi nogami, podoba nakazuje zaskrbljenost s posvetnimi zadevami in morda potrebo, da se oprime tistega, kar je zaslužil. Moški položaj – stacioniran zunaj mesta – nakazuje, da mora poskrbeti zase, preden lahko poskrbi za druge. Obstaja tudi možnost, da razmišlja o tem, da bi pomagal tistim manj srečnim.</p><p>Se bojite, da vam bo nekdo ali nekaj vzelo to, za kar se tako trudite? Kakšne varnosti se oklepate? Kako bi vas lahko materialne dobrine odtujile od vašega jaza za druge? Ali je vaše finančno stanje skupaj ali se razpada? Zaradi česa bi se lahko počutili varne v nenehno spreminjajočem se svetu? Kako bi lahko zlorabljali svoj položaj ali moč? Ali se morda učite, kako pomembno je skrbeti zase pred drugimi? Katere dobrine pridobivate ali izgubljate? Kaj za vas pomeni "imeti dovolj"? Ste skopuhi? Jemljete, kar ni vaše? Kaj ščitite ali branite? Ali vam pretekla izkušnja vzbuja skrbi glede prevzemanja finančnih tveganj? Ali nenehno razmišljate o poudarku na materialni varnosti in premalo o izvoru, iz katerega vse prihaja?</p>',
                    src: fourpentacles,
                    to: "/stiricapentakljev"
                },
                {
                    name: 'Štirica pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Ker so pentakli, simboli fizičnega sveta, na glavi in srcu tega človeka ter pod njegovimi nogami, podoba nakazuje zaskrbljenost s posvetnimi zadevami in morda potrebo, da se oprime tistega, kar je zaslužil. Moški položaj – stacioniran zunaj mesta – nakazuje, da mora poskrbeti zase, preden lahko poskrbi za druge. Obstaja tudi možnost, da razmišlja o tem, da bi pomagal tistim manj srečnim.</p><p>Se bojite, da vam bo nekdo ali nekaj vzelo to, za kar se tako trudite? Kakšne varnosti se oklepate? Kako bi vas lahko materialne dobrine odtujile od vašega jaza za druge? Ali je vaše finančno stanje skupaj ali se razpada? Zaradi česa bi se lahko počutili varne v nenehno spreminjajočem se svetu? Kako bi lahko zlorabljali svoj položaj ali moč? Ali se morda učite, kako pomembno je skrbeti zase pred drugimi? Katere dobrine pridobivate ali izgubljate? Kaj za vas pomeni "imeti dovolj"? Ste skopuhi? Jemljete, kar ni vaše? Kaj ščitite ali branite? Ali vam pretekla izkušnja vzbuja skrbi glede prevzemanja finančnih tveganj? Ali nenehno razmišljate o poudarku na materialni varnosti in premalo o izvoru, iz katerega vse prihaja?</p>',
                    src: fourpentaclesDown,
                    to: "/stiricapentakljev"
                },
                {
                    name: 'Petica pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Dva obubožana človeka, morda v sorodu, se prebijata po snegu in mrazu. Zgoraj se sveti okno s stekli petih pentaklov. Podobi prežemata fizična stiska in revščina. Svetleče okno zgoraj nakazuje duhovni razvoj, ki lahko izhaja iz soočanja s fizičnimi nepravilnostmi in pomanjkanjem. Okno tudi nakazuje, da so bili ti ljudje rojeni v teh okoliščinah, da bi uravnotežili svoja pretekla dejanja ali karmo. Starejša razlaga karte označuje ljudi kot berače, zdaj nedelujoč red duhovnikov, sestavljen iz telesno prizadetih ljudi, ki so prosjačili za svoje življenje.</p><p>Zakaj živite kot izobčenec? Kakšno svetlobo morda pogrešate v temi? Ali ste neodvisni, namesto da sprejmete pomoč pri pogojih, ki jih ne morete spoštovati? Kakšno materialno izgubo doživljate – vaša služba, družina, dom, denar? Brez katerega udobja se odločite? Čeprav ste gmotno revni, se počutite duhovno bogatega? Kakšna notranja luč je na voljo, da vas vodi skozi težke čase? Kaj bi lahko hromilo vas ali koga drugega? Komu pomagate v času slabega zdravja ali gospodarskih težav? Koga bi lahko prosili za pomoč? Ste vi ali kdo drug preveč ponosni, da bi sprejeli pomoč? Komu bi lahko s pomočjo odvzeli moči? Ali imate opravka s fizično nepravilnostjo? Ste nevešči s financami? Se igrate z revščino? Ste morda preleni, da bi poskrbeli zase? Ali izhajate iz težkih časov? Se učite sočutja do manj srečnih od sebe?</p>',
                    src: fivepentacles,
                    to: "/peticapentakljev"
                },
                {
                    name: 'Petica pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Dva obubožana človeka, morda v sorodu, se prebijata po snegu in mrazu. Zgoraj se sveti okno s stekli petih pentaklov. Podobi prežemata fizična stiska in revščina. Svetleče okno zgoraj nakazuje duhovni razvoj, ki lahko izhaja iz soočanja s fizičnimi nepravilnostmi in pomanjkanjem. Okno tudi nakazuje, da so bili ti ljudje rojeni v teh okoliščinah, da bi uravnotežili svoja pretekla dejanja ali karmo. Starejša razlaga karte označuje ljudi kot berače, zdaj nedelujoč red duhovnikov, sestavljen iz telesno prizadetih ljudi, ki so prosjačili za svoje življenje.</p><p>Zakaj živite kot izobčenec? Kakšno svetlobo morda pogrešate v temi? Ali ste neodvisni, namesto da sprejmete pomoč pri pogojih, ki jih ne morete spoštovati? Kakšno materialno izgubo doživljate – vaša služba, družina, dom, denar? Brez katerega udobja se odločite? Čeprav ste gmotno revni, se počutite duhovno bogatega? Kakšna notranja luč je na voljo, da vas vodi skozi težke čase? Kaj bi lahko hromilo vas ali koga drugega? Komu pomagate v času slabega zdravja ali gospodarskih težav? Koga bi lahko prosili za pomoč? Ste vi ali kdo drug preveč ponosni, da bi sprejeli pomoč? Komu bi lahko s pomočjo odvzeli moči? Ali imate opravka s fizično nepravilnostjo? Ste nevešči s financami? Se igrate z revščino? Ste morda preleni, da bi poskrbeli zase? Ali izhajate iz težkih časov? Se učite sočutja do manj srečnih od sebe?</p>',
                    src: fivepentaclesDown,
                    to: "/peticapentakljev"
                },
                {
                    name: 'Šestica pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Lepo oblečen moški tehta denar na tehtnici in ga razdeli tistim, ki ga potrebujejo. Šest pentaklov lebdi v zraku, kar nakazuje, da čeprav denar prihaja skozi človeka, impulz, da ga da, prihaja od zgoraj. Človek s tehtnico (naša višja duša, duh, Jaz) daje klečečim prejemnikom (vsakemu od nas) fizične pogoje (telo, okolje itd.), ki jih potrebujemo, da duhovno rastemo, ne glede na to, ali se tega zavedamo ali ne.</p><p>Kaj prejmete s tem ko dajate? Ste morda bolj dobrodelni? Kaj dajete s prejemom? Kakšna poslovna transakcija poteka? Katere vire si delite ali jih potrebujete? Kdo podpira vaše delo? Komu ste mentor? Ste razmišljali o anonimnosti? Kakšno krivdo blažite z darili? Kdo izkorišča vašo velikodušnost ali obratno? Grizete roko, ki vas hrani? Koga podkupujete, ali kdo podkupuje vas? Dajete ali prejemate preveč? Ali dovolj cenite svoj izdelek ali talente? Ste preveč ponosni, da bi vzeli potreben izkupiček? Ali denar postavlja vas ali koga drugega v močan položaj? Plačujete svoje delavce dovolj? Ali drugim dajete tisto, kar potrebujejo, namesto tistega, kar želite, da imajo? Kdo je pravi dajalec vsega? Ali prejemate ali ne prejemate denarne pomoči, za katero ste zaprosili?</p>',
                    src: sixpentacles,
                    to: "/sesticapentakljev"
                },
                {
                    name: 'Šestica pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Lepo oblečen moški tehta denar na tehtnici in ga razdeli tistim, ki ga potrebujejo. Šest pentaklov lebdi v zraku, kar nakazuje, da čeprav denar prihaja skozi človeka, impulz, da ga da, prihaja od zgoraj. Človek s tehtnico (naša višja duša, duh, Jaz) daje klečečim prejemnikom (vsakemu od nas) fizične pogoje (telo, okolje itd.), ki jih potrebujemo, da duhovno rastemo, ne glede na to, ali se tega zavedamo ali ne.</p><p>Kaj prejmete s tem ko dajate? Ste morda bolj dobrodelni? Kaj dajete s prejemom? Kakšna poslovna transakcija poteka? Katere vire si delite ali jih potrebujete? Kdo podpira vaše delo? Komu ste mentor? Ste razmišljali o anonimnosti? Kakšno krivdo blažite z darili? Kdo izkorišča vašo velikodušnost ali obratno? Grizete roko, ki vas hrani? Koga podkupujete, ali kdo podkupuje vas? Dajete ali prejemate preveč? Ali dovolj cenite svoj izdelek ali talente? Ste preveč ponosni, da bi vzeli potreben izkupiček? Ali denar postavlja vas ali koga drugega v močan položaj? Plačujete svoje delavce dovolj? Ali drugim dajete tisto, kar potrebujejo, namesto tistega, kar želite, da imajo? Kdo je pravi dajalec vsega? Ali prejemate ali ne prejemate denarne pomoči, za katero ste zaprosili?</p>',
                    src: sixpentaclesDown,
                    to: "/sesticapentakljev"
                },
                {
                    name: 'Sedmica pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Moški pozorno zre v sedem pentaklov ali stvari materialnega sveta, pritrjenih na zelenje, medtem ko počiva na motiki. Morda niha med predajo temu, kar je, in tesnobo, kaj bo. Stvari mu očitno ne gredo od rok, kot je razvidno iz njegove poze. Rastline bodo dozorele ob svojem času, ne ob njegovem. Zdi se, da je naredil vse, kar je lahko, da je rastlina obrodila sad; zdaj mora narava narediti svoje.</p><p>Ali naredite pregled svojega življenja? Kateri cikel je skoraj zaključen? Ali cenite to, kar ste dosegli? Ali ste preveč vezani na določen rezultat? Kaj raste s trdim delom? Kje bi se lahko prepustili in pustili naravi, da gre svojo pot? Kateri projekt zamuja? Ste glede naložbe zaupljivi ali zaskrbljeni? Ali potrebujete potrpljenje? Katere veščine se želite naučiti? Je vaša fizična energija nizka? Ste leni? Kako se lahko ponovno napolnite in nahranite z energijo? Čakate, da se zgodi nekaj pomembnega? Kaj raste ali ne raste zaradi vašega trdega dela? Kaj cveti brez vaše pomoči? Ali se zavedate, da ne morete storiti drugega kot čakati? Ste pripravljeni žeti, kar ste sejali? Kateri vidik vašega življenja potrebuje kultivacijo? Ali razmišljate o zamenjavi službe? Zakaj vam je dolgčas? Si želite živeti bližje naravi? Kaj se učite iz svojih napak?</p>',
                    src: sevenpentacles,
                    to: "/sedmicapentakljev"
                },
                {
                    name: 'Sedmica pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Moški pozorno zre v sedem pentaklov ali stvari materialnega sveta, pritrjenih na zelenje, medtem ko počiva na motiki. Morda niha med predajo temu, kar je, in tesnobo, kaj bo. Stvari mu očitno ne gredo od rok, kot je razvidno iz njegove poze. Rastline bodo dozorele ob svojem času, ne ob njegovem. Zdi se, da je naredil vse, kar je lahko, da je rastlina obrodila sad; zdaj mora narava narediti svoje.</p><p>Ali naredite pregled svojega življenja? Kateri cikel je skoraj zaključen? Ali cenite to, kar ste dosegli? Ali ste preveč vezani na določen rezultat? Kaj raste s trdim delom? Kje bi se lahko prepustili in pustili naravi, da gre svojo pot? Kateri projekt zamuja? Ste glede naložbe zaupljivi ali zaskrbljeni? Ali potrebujete potrpljenje? Katere veščine se želite naučiti? Je vaša fizična energija nizka? Ste leni? Kako se lahko ponovno napolnite in nahranite z energijo? Čakate, da se zgodi nekaj pomembnega? Kaj raste ali ne raste zaradi vašega trdega dela? Kaj cveti brez vaše pomoči? Ali se zavedate, da ne morete storiti drugega kot čakati? Ste pripravljeni žeti, kar ste sejali? Kateri vidik vašega življenja potrebuje kultivacijo? Ali razmišljate o zamenjavi službe? Zakaj vam je dolgčas? Si želite živeti bližje naravi? Kaj se učite iz svojih napak?</p>',
                    src: sevenpentaclesDown,
                    to: "/sedmicapentakljev"
                },
                {
                    name: 'Osmica pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Pentakli so vrhunec ustvarjalnega procesa. Rokodelec, ki obdeluje kamen, razstavlja svoje končne izdelke, osem pentaklov. Slika nakazuje, da "vaja dela mojstra, če mojster dela vajo." Meditativno osredotočen na vsak kos dela, prizor nakazuje osredotočenost (palice), strast in domišljijo (kelihi), mentalno disciplino (meči) ter fizično energijo in vztrajnost (pentakli), ki so potrebni za izpopolnjevanje veščine.</p><p>Kaj končujete? Kaj izpopolnjujete? Ali se vam obeta povišica ali napredovanje? Katera nova veščina bi lahko povečala vaš dohodek? Ali ste polni energije, utrujeni ali leni? Ali zaključujete ali začenjate šolo ali tečaj? Ste spretni z rokami? Se zavedate, da vaja dela mojstra? Ali dajete dober zgled? Kako je lahko vaše vsakodnevno delo duhovna praksa? Kaj jemlje vašo pozornost, čas in energijo? Ste preslabo zaposleni ali brezposelni? Kakšno smiselno delo opravljate ali iščete? Si želite nove službe ali kariere? Ali uživate v svojem delu ali še niste našli dela, v katerem uživate? Vam je mar za delo, ki ga opravljate? Ali uživate v produktivnosti? Je služba ali vaš šef prezahteven? Ste preveč navezani na to, kar počnete, in se nagibate k deloholizmu? Ali zaslužite, ko se učite? Ali odkrivate, da ta denar ne izhaja vedno iz dela, ampak iz vašega odnosa do dela?</p>',
                    src: eightpentacles,
                    to: "/osmicapentakljev"
                },
                {
                    name: 'Osmica pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Pentakli so vrhunec ustvarjalnega procesa. Rokodelec, ki obdeluje kamen, razstavlja svoje končne izdelke, osem pentaklov. Slika nakazuje, da "vaja dela mojstra, če mojster dela vajo." Meditativno osredotočen na vsak kos dela, prizor nakazuje osredotočenost (palice), strast in domišljijo (kelihi), mentalno disciplino (meči) ter fizično energijo in vztrajnost (pentakli), ki so potrebni za izpopolnjevanje veščine.</p><p>Kaj končujete? Kaj izpopolnjujete? Ali se vam obeta povišica ali napredovanje? Katera nova veščina bi lahko povečala vaš dohodek? Ali ste polni energije, utrujeni ali leni? Ali zaključujete ali začenjate šolo ali tečaj? Ste spretni z rokami? Se zavedate, da vaja dela mojstra? Ali dajete dober zgled? Kako je lahko vaše vsakodnevno delo duhovna praksa? Kaj jemlje vašo pozornost, čas in energijo? Ste preslabo zaposleni ali brezposelni? Kakšno smiselno delo opravljate ali iščete? Si želite nove službe ali kariere? Ali uživate v svojem delu ali še niste našli dela, v katerem uživate? Vam je mar za delo, ki ga opravljate? Ali uživate v produktivnosti? Je služba ali vaš šef prezahteven? Ste preveč navezani na to, kar počnete, in se nagibate k deloholizmu? Ali zaslužite, ko se učite? Ali odkrivate, da ta denar ne izhaja vedno iz dela, ampak iz vašega odnosa do dela?</p>',
                    src: eightpentaclesDown,
                    to: "/osmicapentakljev"
                },
                {
                    name: 'Devetica pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Elegantno oblečena ženska s ptičem na roki stoji sredi cvetočega vrta v cvetočem in zaščitenem okolju. Materialna varnost je bila ustvarjena. Čas in energija, porabljena za kopičenje materialnih dobrin, bi se lahko za zdaj bližala koncu. Ptica simbolizira, da je priložnost, da odletimo in raziščemo druge načine življenja in gledanja na svet - morda začetek duhovnega potovanja - na dosegu roke.</p><p>Ali uživate ali želite uživati ​​v občutku fizičnega dobrega počutja? Kakšno priznanje ste prejeli? Ali doživljate materialno izpolnitev in vam manjka duhovne izpolnitve? Vas fizična situacija duši? Biti udobno sami s seboj je naslednja zveza? Bi radi odleteli stran od svetovnih skrbi? Imate preveč prostega časa? Kaj počnete glede vaših skrbi glede ekologije? Kakšna lahkotnost se spreminja v bolezen? Je blaginja obremenjujoča? Kaj se šopirite? Ali okrevate po bolezni? Kaj bi lahko podedovali? Ste finančno neodvisni ali finančno odvisni? Kaj dosegate s pravim preživetjem, trdim delom in jasnim namenom? Z dokončanjem katerega projekta odlašate? Kaj žrtvujete za uspeh? Potrebujete pomoč pri upravljanju svojih financ? Se želite več igrati in manj delati? Je čas, da se osvežite in nagradite s potovanjem?</p>',
                    src: ninepentacles,
                    to: "/deveticapentakljev"
                },
                {
                    name: 'Devetica pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Elegantno oblečena ženska s ptičem na roki stoji sredi cvetočega vrta v cvetočem in zaščitenem okolju. Materialna varnost je bila ustvarjena. Čas in energija, porabljena za kopičenje materialnih dobrin, bi se lahko za zdaj bližala koncu. Ptica simbolizira, da je priložnost, da odletimo in raziščemo druge načine življenja in gledanja na svet - morda začetek duhovnega potovanja - na dosegu roke.</p><p>Ali uživate ali želite uživati ​​v občutku fizičnega dobrega počutja? Kakšno priznanje ste prejeli? Ali doživljate materialno izpolnitev in vam manjka duhovne izpolnitve? Vas fizična situacija duši? Biti udobno sami s seboj je naslednja zveza? Bi radi odleteli stran od svetovnih skrbi? Imate preveč prostega časa? Kaj počnete glede vaših skrbi glede ekologije? Kakšna lahkotnost se spreminja v bolezen? Je blaginja obremenjujoča? Kaj se šopirite? Ali okrevate po bolezni? Kaj bi lahko podedovali? Ste finančno neodvisni ali finančno odvisni? Kaj dosegate s pravim preživetjem, trdim delom in jasnim namenom? Z dokončanjem katerega projekta odlašate? Kaj žrtvujete za uspeh? Potrebujete pomoč pri upravljanju svojih financ? Se želite več igrati in manj delati? Je čas, da se osvežite in nagradite s potovanjem?</p>',
                    src: ninepentaclesDown,
                    to: "/deveticapentakljev"
                },
                {
                    name: 'Desetica pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Moški in ženska stojita pod obokom, ki vodi do družinskega posestva. Spremlja ju otrok, ki radovedno opazuje dva psa, ki skrbita za starca, ki sedi v ospredju. Deset pentaklov, ki tvorijo kabalistično drevo življenja, je prekritih s prizoriščem, kar nakazuje plodnost in dokončanje - še en obrat spiralnega kolesa življenja. Večgeneracijska družina doživlja varnost doma in drug drugega. Ta, ki sedi v ospredju in je podoben cesarju, namiguje, da stvari nadzoruje moč, ki je večja od tiste, ki jo je mogoče prikazati - nespremenljiva resničnost, ki se izraža skozi nenehno spreminjanje.</p><p>Katere tradicije ali vrednote podpirate, dvomite ali jih kršite? Katero novo tradicijo uvajate? Ali ste materialno blagoslovljeni? Ali se razmerje moči v vaši družini ali skupini spreminja? Ali priznavate božanskega duha, ki je skrit v vsakdanjem življenju? S katero družinsko zadevo se ukvarjate? Kateri dogodek vas motivira, da ste vljudni do nezaupljivega družinskega člana? Zakaj ste razdedinjeni? Ali razglašate stečaj? Kakšen red se vzpostavlja ali ruši? Ali uporabljate denar za nadzor nad vedenjem drugega? Kdo vam pomaga pri vstopu v svet? Ali sprejemate ali zavračate dogovorjeno poroko? Ali se osvobodite pričakovanj drugih? Ste v ne-tradicionalnem življenjskem položaju? Ali se s tem, da ne plačate davkov, izognete nevarnosti? Vas zrelost spodbuja, da sprejmete in cenite svojo družino? Skrbite za ostarelega starša ali bolnega družinskega člana?</p>',
                    src: tenpentacles,
                    to: "/deseticapentakljev"
                },
                {
                    name: 'Desetica pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Moški in ženska stojita pod obokom, ki vodi do družinskega posestva. Spremlja ju otrok, ki radovedno opazuje dva psa, ki skrbita za starca, ki sedi v ospredju. Deset pentaklov, ki tvorijo kabalistično drevo življenja, je prekritih s prizoriščem, kar nakazuje plodnost in dokončanje - še en obrat spiralnega kolesa življenja. Večgeneracijska družina doživlja varnost doma in drug drugega. Ta, ki sedi v ospredju in je podoben cesarju, namiguje, da stvari nadzoruje moč, ki je večja od tiste, ki jo je mogoče prikazati - nespremenljiva resničnost, ki se izraža skozi nenehno spreminjanje.</p><p>Katere tradicije ali vrednote podpirate, dvomite ali jih kršite? Katero novo tradicijo uvajate? Ali ste materialno blagoslovljeni? Ali se razmerje moči v vaši družini ali skupini spreminja? Ali priznavate božanskega duha, ki je skrit v vsakdanjem življenju? S katero družinsko zadevo se ukvarjate? Kateri dogodek vas motivira, da ste vljudni do nezaupljivega družinskega člana? Zakaj ste razdedinjeni? Ali razglašate stečaj? Kakšen red se vzpostavlja ali ruši? Ali uporabljate denar za nadzor nad vedenjem drugega? Kdo vam pomaga pri vstopu v svet? Ali sprejemate ali zavračate dogovorjeno poroko? Ali se osvobodite pričakovanj drugih? Ste v ne-tradicionalnem življenjskem položaju? Ali se s tem, da ne plačate davkov, izognete nevarnosti? Vas zrelost spodbuja, da sprejmete in cenite svojo družino? Skrbite za ostarelega starša ali bolnega družinskega člana?</p>',
                    src: tenpentaclesDown,
                    to: "/deseticapentakljev"
                },
                {
                    name: 'Paž pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Paž stoji v naravi in pozorno strmi v pentakelj - simbol materialnega sveta in vsega kar je v njem - ki se zdi, kot da lebdi nad njegovimi dvignjenimi rokami. Kot novi učenec pentaklja kaže, da se začne zavedati svojega okolja, telesa in fizičnega zdravja ter kaj mora storiti, da se vzdržuje in vsakodnevno preživi. Paž pentakljev je dovzeten za lekcije, ki jih prinaša njegovo orodje. Uči se, da je fizični svet duh, premišljen v obliki, da je njegovo telo živi tempelj in da so vsa fizična telesa božanska v bistvu in izvoru.</p><p>Vas bremenijo dolgovi drugih? Vas bremenijo težave s preživetjem? Bi lahko fizične potrebe in varnost svojega otroka postavili na prvo mesto? Ali prejemate štipendijo ali denarno pomoč za šolanje? Ste morda pametni, a vam manjka zdrave pameti? Ste športnik ali plesalec, ki bi mu koristilo dodatni treniraningi ali tečaji? Ste navdušeni nad čarobnostjo življenja? Študirate ekologijo? Ali se zavedate, da je vaše telo živi tempelj? Ali sprejemate začetniški položaj? Ali ste v stiku s svetom ali ne? Ste blagoslovljeni z ročno spretnostjo in tehnološkimi veščinami? Ali se dvigate navzgor v svetu? Ste hvaležni ali pomoč, ki jo prejemate, jemljete za samoumevno? Imate ali nimate finančne iznajdljivosti? Je vaš otrok bolan? Ste potopljeni v vprašanja glede preživetja? Se učite poslušati svoje telo?</p>',
                    src: pagepentacles,
                    to: "/pazpentakljev"
                },
                {
                    name: 'Paž pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Paž stoji v naravi in pozorno strmi v pentakelj - simbol materialnega sveta in vsega kar je v njem - ki se zdi, kot da lebdi nad njegovimi dvignjenimi rokami. Kot novi učenec pentaklja kaže, da se začne zavedati svojega okolja, telesa in fizičnega zdravja ter kaj mora storiti, da se vzdržuje in vsakodnevno preživi. Paž pentakljev je dovzeten za lekcije, ki jih prinaša njegovo orodje. Uči se, da je fizični svet duh, premišljen v obliki, da je njegovo telo živi tempelj in da so vsa fizična telesa božanska v bistvu in izvoru.</p><p>Vas bremenijo dolgovi drugih? Vas bremenijo težave s preživetjem? Bi lahko fizične potrebe in varnost svojega otroka postavili na prvo mesto? Ali prejemate štipendijo ali denarno pomoč za šolanje? Ste morda pametni, a vam manjka zdrave pameti? Ste športnik ali plesalec, ki bi mu koristilo dodatni treniraningi ali tečaji? Ste navdušeni nad čarobnostjo življenja? Študirate ekologijo? Ali se zavedate, da je vaše telo živi tempelj? Ali sprejemate začetniški položaj? Ali ste v stiku s svetom ali ne? Ste blagoslovljeni z ročno spretnostjo in tehnološkimi veščinami? Ali se dvigate navzgor v svetu? Ste hvaležni ali pomoč, ki jo prejemate, jemljete za samoumevno? Imate ali nimate finančne iznajdljivosti? Je vaš otrok bolan? Ste potopljeni v vprašanja glede preživetja? Se učite poslušati svoje telo?</p>',
                    src: pagepentaclesDown,
                    to: "/pazpentakljev"
                },
                {
                    name: 'Vitez pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Vitez, ki jezdi delovnega konja, drži pentakelj v iztegnjenih rokah. Vključuje tisto, kar se je naučil kot paž – moč fizičnih stvari, da služijo kot duhovno orodje. Vitez pentakljev je predan obvladovanju vsakodnevnih situacij na duhovne načine - delo, finance, okolje in njegovo fizično zdravje so orodja za njegov duhovni razvoj. Zavezan je živeti duhovno življenje v fizičnem svetu.</p><p>Kaj ste zavezani dokončati? Ali postajate vse bolj zanesljivi ali usmerjeni v podrobnosti? Katerih novih odgovornosti ste veseli? Ali uživate v tem, da ste produktivni? Katera zadeva zahteva vašo takojšnjo pozornost? Se počutite kot vlečni konj – preobremenjeni in premalo cenjeni? Ali uživate v svoji spolnosti? Ali vse, kar počnete, smatrate za duhovno prakso in se popolnoma posvečate vsemu, kar vam je pri roki? Iščete svetovno priznanje ali se temu izogibate? Kako razvijate svoje delo? Ali ste ponosni na to, da ste dobro organizirani in pripravljeni? Ste vztrajni in prevzemate pobudo? Ali trdo delate ali ste leni? Ali preizkušate različne vrste dela, da bi našli tisto, ki vam je všeč? Ali ste radi zunaj na prostem? Ste iznajdljivi – znate iz nič narediti nekaj? Ste telesno aktivni ali prepuščate svoje telo mirovanju? Iščete delo? Kateri rutini se želite izogniti?</p>',
                    src: knightpentacles,
                    to: "/vitezpentakljev"
                },
                {
                    name: 'Vitez pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Vitez, ki jezdi delovnega konja, drži pentakelj v iztegnjenih rokah. Vključuje tisto, kar se je naučil kot paž – moč fizičnih stvari, da služijo kot duhovno orodje. Vitez pentakljev je predan obvladovanju vsakodnevnih situacij na duhovne načine - delo, finance, okolje in njegovo fizično zdravje so orodja za njegov duhovni razvoj. Zavezan je živeti duhovno življenje v fizičnem svetu.</p><p>Kaj ste zavezani dokončati? Ali postajate vse bolj zanesljivi ali usmerjeni v podrobnosti? Katerih novih odgovornosti ste veseli? Ali uživate v tem, da ste produktivni? Katera zadeva zahteva vašo takojšnjo pozornost? Se počutite kot vlečni konj – preobremenjeni in premalo cenjeni? Ali uživate v svoji spolnosti? Ali vse, kar počnete, smatrate za duhovno prakso in se popolnoma posvečate vsemu, kar vam je pri roki? Iščete svetovno priznanje ali se temu izogibate? Kako razvijate svoje delo? Ali ste ponosni na to, da ste dobro organizirani in pripravljeni? Ste vztrajni in prevzemate pobudo? Ali trdo delate ali ste leni? Ali preizkušate različne vrste dela, da bi našli tisto, ki vam je všeč? Ali ste radi zunaj na prostem? Ste iznajdljivi – znate iz nič narediti nekaj? Ste telesno aktivni ali prepuščate svoje telo mirovanju? Iščete delo? Kateri rutini se želite izogniti?</p>',
                    src: knightpentaclesDown,
                    to: "/vitezpentakljev"
                },
                {
                    name: 'Kraljica pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Kraljica sedi v čudovitem vrtu in meditira na pentakelj v svojem naročju — gleda vanj, kot bi gledali v kristalno kroglo ko Kraljica kelihov in njen kelih). V naslonjala za roke njenega prestola so vklesane kozje glave, ki simbolizirajo njeno pripravljenost skrbeti za svojo čredo in njeno sposobnost, da se povzpne čez in skozi vsako oviro, da bi dosegla to skrb. Skrbna, delavna, razumska, neomajna in čutna Kraljica pentakljev razume duhovno realnost, ki je prisotna v fizični realnosti.</p><p>Ste materialno varni? je vaša zdrava pamet vaša moč? Ali prispevate k blaginji planeta? Negujete ali pretiravate z drugimi? Ste odgovorna mama ali "mrtva" mama? Je vaša bližina z naravo tudi bližina z božanskim? Ste noseči ali mati? Se ponovno vključujete v delovno silo? Ste finančno neodvisni in človekoljubni? Vam manjka motivacije? Ali obvladate upravljanje denarja? Ste v ciklu gospodinjstva? Ste zadovoljni z domačim življenjem? Vam je dolgčas ali ste navdušeni nad svojo rutino? Ste senzualist? Ali menite, da je fizični svet božanskost v svoji obliki? Ste naravni športnik, plesalec ali jogi? Ste morda bolj v stiku s svojim telesom? Ali ste ženska v moškem telesu? Se spopadate z zdravstvenimi težavami?</p>',
                    src: queenpentacles,
                    to: "/kraljicapentakljev"
                },
                {
                    name: 'Kraljica pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Kraljica sedi v čudovitem vrtu in meditira na pentakelj v svojem naročju — gleda vanj, kot bi gledali v kristalno kroglo ko Kraljica kelihov in njen kelih). V naslonjala za roke njenega prestola so vklesane kozje glave, ki simbolizirajo njeno pripravljenost skrbeti za svojo čredo in njeno sposobnost, da se povzpne čez in skozi vsako oviro, da bi dosegla to skrb. Skrbna, delavna, razumska, neomajna in čutna Kraljica pentakljev razume duhovno realnost, ki je prisotna v fizični realnosti.</p><p>Ste materialno varni? je vaša zdrava pamet vaša moč? Ali prispevate k blaginji planeta? Negujete ali pretiravate z drugimi? Ste odgovorna mama ali "mrtva" mama? Je vaša bližina z naravo tudi bližina z božanskim? Ste noseči ali mati? Se ponovno vključujete v delovno silo? Ste finančno neodvisni in človekoljubni? Vam manjka motivacije? Ali obvladate upravljanje denarja? Ste v ciklu gospodinjstva? Ste zadovoljni z domačim življenjem? Vam je dolgčas ali ste navdušeni nad svojo rutino? Ste senzualist? Ali menite, da je fizični svet božanskost v svoji obliki? Ste naravni športnik, plesalec ali jogi? Ste morda bolj v stiku s svojim telesom? Ali ste ženska v moškem telesu? Se spopadate z zdravstvenimi težavami?</p>',
                    src: queenpentaclesDown,
                    to: "/kraljicapentakljev"
                },
                {
                    name: 'Kralj pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Kralj pentakljev, ki mirno sedi sredi vrta v polnem razcvetu, nosi obleko, zvezeno z grozdjem, kar nakazuje materialno blaginjo. Njegov prestol krasijo bikove glave, simboli vodstva in plodnosti. Kralj drži žezlo v desnici in pentaklje v levici. Njegove oči so zaprte, kar namiguje, da modro ve, da njegova moč izvira iz nevidnega sveta notranjega duha, pa tudi iz tega, kar je nakopičil.</p><p>Ali maksimalno uživate v življenju in svojih čutih? Ali izpolnjujete svoje dogovore? Ali spoštujete ali zanikate duha v materialnem svetu? Ali ste odgovoren ali pasiven oče? Ste morda preveč materialistični? Ste morda bolj dobrodelni? Ali nadzorujete fizično počutje drugih? Ali upravljate z denarjem ali lastnino drugih? Ali morate biti bolj praktični? Ste zdravstveni delavec, maser ali zdravilec? Ali ste zadovoljni ali nezadovoljni s svojo stopnjo svetovnega uspeha? Ste v svojem delu ali skupnosti dobro spoštovani? Kako varujete okolje? Se počutite materialno izpolnjeni, a duhovno neizpolnjeni? Ali spoštujete svoje sodelavce? Ste usmerjeni v podrobnosti? Se vaša seksistična stališča spreminjajo? Ste radi v naravi? Ste mojster športnik ali rokodelec? Imate ali nimate vzdržljivosti ali močne konstitucije? Ste moški v ženskem telesu?</p>',
                    src: kingpentacles,
                    to: "/kraljpentakljev"
                },
                {
                    name: 'Kralj pentakljev',
                    text: '<p><b>Univerzalni arhetip:</b> Kralj pentakljev, ki mirno sedi sredi vrta v polnem razcvetu, nosi obleko, zvezeno z grozdjem, kar nakazuje materialno blaginjo. Njegov prestol krasijo bikove glave, simboli vodstva in plodnosti. Kralj drži žezlo v desnici in pentaklje v levici. Njegove oči so zaprte, kar namiguje, da modro ve, da njegova moč izvira iz nevidnega sveta notranjega duha, pa tudi iz tega, kar je nakopičil.</p><p>Ali maksimalno uživate v življenju in svojih čutih? Ali izpolnjujete svoje dogovore? Ali spoštujete ali zanikate duha v materialnem svetu? Ali ste odgovoren ali pasiven oče? Ste morda preveč materialistični? Ste morda bolj dobrodelni? Ali nadzorujete fizično počutje drugih? Ali upravljate z denarjem ali lastnino drugih? Ali morate biti bolj praktični? Ste zdravstveni delavec, maser ali zdravilec? Ali ste zadovoljni ali nezadovoljni s svojo stopnjo svetovnega uspeha? Ste v svojem delu ali skupnosti dobro spoštovani? Kako varujete okolje? Se počutite materialno izpolnjeni, a duhovno neizpolnjeni? Ali spoštujete svoje sodelavce? Ste usmerjeni v podrobnosti? Se vaša seksistična stališča spreminjajo? Ste radi v naravi? Ste mojster športnik ali rokodelec? Imate ali nimate vzdržljivosti ali močne konstitucije? Ste moški v ženskem telesu?</p>',
                    src: kingpentaclesDown,
                    to: "/kraljpentakljev"
                },
            ],
            cards: [
                {
                    povezava: 'Tarot',
                    to: '/tarot',
                    link: 'Razišči karte tarota',
                    opis: 'Opis vseh 78 kart iz velike in male arkane tarota in vse kar potrebujete za razumevanje vsake posamezne karte.'
                },
                {
                    povezava: 'Tarot vaje',
                    to: '/vaje',
                    link: 'Poveži se s kartami',
                    opis: 'Si želite delati s tarotom in se želite spoznati z vsako karto posebej. Če je temu tako, potem je to mesto za vas.'
                },
                {
                    povezava: 'Tarot postavitve',
                    to: '/tarotbranje',
                    link: 'Uporabljaj postavitve',
                    opis: 'Nimate tarot kart? Se želite seznaniti z različnimi postavitvami kart za posvetovanje?'
                },
                {
                    povezava: 'Kabala',
                    to: '/kabala',
                    link: 'Več o Kabali',
                    opis: 'Kabala, včasih prevedena kot "misticizem" ali "okultno znanje", je del judovske tradicije, ki se ukvarja z bistvom Boga.'
                },
                {
                    povezava: 'Qliphoth',
                    to: '/kliphot',
                    link: 'Kaj je Qliphot',
                    opis: 'Qliphoth je iniciacijski sistem, znan tudi kot Drevo smrti, Drevo nočne strani, saj je nasprotna stran Drevesa življenja.'
                },
                {
                    povezava: 'Meditacija',
                    to: '/meditacija',
                    link: 'Začnite z meditacijo!',
                    opis: 'S tehnikami meditacije pripravite sebe za nadaljnje, poglobljeno delo na samem sebi, ki lahko ima koristi na mnogih področjih.'
                },
                {
                    povezava: 'Sadhana',
                    to: '/sadhana',
                    link: 'Podajte se na pot',
                    opis: 'Vse, kar se izvaja zavestno, disciplinirano in z namenom duhovne rasti, se lahko šteje za sadhano.'
                },
                {
                    povezava: 'Literatura',
                    to: '/literatura',
                    link: 'Berite in raziskujte dalje',
                    opis: 'Za nadaljnje raziskovalno delo je tukaj navedena literatura, ki vam lahko pomaga poglobiti znanje o tarotu.'
                },
                {
                    povezava: 'V&O',
                    to: '/vpr-odg',
                    link: 'Pogosta vprašanja in odgovori',
                    opis: 'Odgovori na pogosto zastavljena vprašanja, ki se lahko pojavijo pri raziskovanju spletne strani.'
                }
            ],
            currentImageIndex: parseInt(localStorage.getItem("currentImageIndex")) || 0,
            deadline: parseInt(localStorage.getItem("deadline")) || 0,
            referenceTime: parseInt(localStorage.getItem("referenceTime")) || new Date().getTime(),

        }
    },
    computed: {
        currentImageSrc() {
            return this.slike[this.currentImageIndex].src;
        },
        currentImageText() {
            return this.slike[this.currentImageIndex].text;
        },
        currentImageLink() {
            return this.slike[this.currentImageIndex].to;
        },
        currentImageName() {
            return this.slike[this.currentImageIndex].name;
        }
    },
    mounted() {
        this.fetchData();
        let deadline = this.deadline;
        let currentIndex = this.currentImageIndex;
        let referenceTime = this.referenceTime;

        if (!deadline) {
            // If there's no deadline in localStorage, set one for 2 minutes from now
            deadline = new Date(referenceTime + 86400000).getTime();
            localStorage.setItem("deadline", deadline);
        }

        if (!currentIndex) {
            // If there's no currentIndex in localStorage, set it to a random value
            currentIndex = Math.floor(Math.random() * this.slike.length);
            localStorage.setItem("currentImageIndex", currentIndex);
        }

        setInterval(() => {
            let now = new Date().getTime();
            let timeLeft = deadline - now;

            if (timeLeft < 0) {

                // Reset the deadline to 2 minutes from now
                referenceTime = now;
                deadline = new Date(referenceTime + 86400000).getTime();
                localStorage.setItem("deadline", deadline);
                localStorage.setItem("referenceTime", referenceTime);

                // Generate a new random index for the next image
                currentIndex = Math.floor(Math.random() * this.slike.length);
                localStorage.setItem("currentImageIndex", currentIndex);

                // Update the currentImageIndex state variable
                this.currentImageIndex = currentIndex;
            }
        }, 1000);
    },
    methods: {
        fetchData() {
            axios.get('http://localhost:8004/api/blog')
                .then(res => {
                    const data = res.data.slice(0, 3);
                    this.blogPost = data;
                })
                .catch(err => {
                    console.error(err)
                })
        },
        truncateText(text, maxLength) {
            if (text && text.length <= maxLength) {
                return text;
            } else if (text) {
                const truncatedText = text.substring(0, maxLength);
                return truncatedText + '...';
            } else {
                return '';
            }
        }
    }
}


