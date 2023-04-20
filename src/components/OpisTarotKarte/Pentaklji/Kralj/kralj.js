export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "Kralj pentakljev",
                    rekDesno: "Končni materialni uspeh<br>Moč in oblast<br>Dosegli, kar ste si zastavili",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>Kralj pentakljev sedi na prestolu, okrašenim z vklesanim bikom, ki predstavljajo njegovo povezavo z astrološkim znamenjem bika, grozdje in vinska trta pa krasijo njegovo obleko, ki simbolizira bogastvo in obilje. V desni roki drži žezlo svoje moči, v levici pa zlatnik, ki simbolizira njegov materialni vpliv. Ta kralj ima prirojeno sposobnost ustvarjanja materialnega bogastva in finančnega izobilja – in še bolje, svoje bogastvo lahko vzdržuje skozi čas s samodisciplino, nadzorom in vodenjem.</p><p>Ob njegovih nogah in okoli prestola je več trt, rož in rastlin, ki predstavljajo najvišji dosežek materialnega uspeha. Njegov grad stoji za njim, simbol vsega, kar je zgradil s svojim trudom in odločnostjo. Ta kralj je torej zelo resen glede finančne varnosti in se je osredotočil na kopičenje bogastva. Ponosen je na svoje dosežke in drugim rad pokaže svoje dragocene stvari in bogastvo.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Kralj pentakljev predstavlja materialno bogastvo, finančno obilje in svetovni uspeh. Ta kralj je zvest oskrbovalec; uporablja svoje ambicije in samozavest, da ustvarja bogastvo zase in za druge ter ustvarja svojo lastno vrednost iz tega, kar je nabral in lahko deli z drugimi. Je tudi očetovska osebnost, ki drugim daje nasvete, smernice in modrost, zlasti v finančnih in službenih zadevah.</p><p>Ko se Kralj pentakljev pojavi v branju tarota, ste samozavestni in uspešni pri privabljanju in upravljanju bogastva. Ne samo, da prepoznate priložnosti za rast in uspeh, temveč se tudi oprete na svojo samodisciplino in nadzor, da upravljate svoje premoženje in ga dolgoročno pametno vlagate.</p><p>Prihod Kralja pentakljev nakazuje, da lahko svojo vizijo pretvorite v nekaj oprijemljivega, praktičnega in pogosto zelo donosnega. Vi ste končni lastnik podjetja. Ne predstavljate le idej in upanja na najboljše – trdo delate, da začrtate svoj načrt napada, zberete svoje vire in uresničite svoje cilje, pogosto z izjemnim uspehom. Ste kot kralj Mida: vse, česar se dotaknete, se spremeni v zlato. Ko se posvetite svoji viziji, ustvarite velik uspeh, zlasti na finančni ravni. Denar k vam priteka z lahkoto in v izobilju, in ko sedite na vrhuncu svoje ekonomske moči in vpliva, ste lahko prepričani v svojo nadaljnjo blaginjo. Ne trudite se več, da bi dosegli tisto, kar si želite, tako kot Paž in Vitez, niti nimate potrebe po dokazovanju.</p><p>Kralj pentakljev pogosto nakazuje končno izpolnitev ustvarjalne naloge, poslovnega podviga ali naložbe. S prizadevnostjo, odgovornostjo in pozornostjo do podrobnosti ste dosegli velike stvari in končno lahko rečete, da ste svojo nalogo opravili oziroma ste dosegli svoj cilj. Zdaj lahko uživate v vsem, kar ste dosegli, in v uspehih, ki ste jih ustvarili. Ustvarili ste si bogato življenje, ne samo finančno, ampak tudi duhovno, kar vam bo omogočilo dobro prihodnost.</p><p>Kralj pentakljev ve, da vas bo do uspeha pripeljal metodičen, načrtovan in dobro premišljen pristop. V preteklosti ste eksperimentirali s tem, kaj najbolje deluje, in pristali na lastnih metodah in praksah, za katere veste, da bodo delovale za vas tudi v prihodnosti. Nadaljujte po tej poti, namesto da preizkušate nove načine dela. Ni vam treba več tvegati.</p>',
                    besedePokoncna: 'Bogastvo, posel, vodstvo, varnost, moč, nadzor, stabilnost, disciplina, obilje, vodja industrije ali bankir, zanesljiva oseba, poročen človek, trdnost, vztrajnost.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Obrnjen Kralj pentakljev vas prosi, da pogledate svoj odnos do denarja in bogastva. Po eni strani morda ne upravljate dobro s svojim premoženjem. Lahko privabite velike vsote denarja s svojimi poslovnimi podjetji ali visoko letečo kariero, a takoj ko denar prispe na vaš bančni račun, je spet na poti ven, ko razmetavate z dragimi predmeti ali vlagate v visoko tvegane priložnosti. S svojim denarjem ne ravnate spoštljivo, ampak se morate namesto tega opreti na svojo samodisciplino in nadzor, da boste lahko varčevali za svojo prihodnost in hkrati uživali sadove svojega dela.</p><p>Po drugi strani pa morda denar postavljate pred karkoli drugega, kar negativno vpliva na vaše odnose in dobro počutje. Morda ste deloholik, pretirano vlagate v ustvarjanje bogastva in zanemarjate svoje ljubljene. Za dodaten denar lahko storite karkoli, tudi če to pomeni prodajo svoje duše in integritete. Morda ste nad statusom in družbenim položajem drugih ljudi tako navdušeni, da se klanjate vsem, ki so "nad" vami, medtem ko zavračate vse, ki so "pod" vami. Morda boste nenehno omenjali imena in se poskušali dokazati tako, da se hvalite z ljudmi, ki jih poznate. Če to odmeva, se za trenutek umaknite in poglejte večji vpliv vaše obsedenosti z denarjem. Ali vam v tem stanju služi ali se morate spremeniti?</p><p>Včasih obrnjen Kralj pentakljev predstavlja nekoga, ki je zelo trmast in tog v svojem pristopu. Ko se ta kralj pojavi v branju, poglejte svoje življenje. Se počutite "zataknjeni v kolesnici"? Je življenje postalo tako predvidljivo in rutinsko, da je popolnoma dolgočasno in brez barve? Biti prizemljen je dobra stvar, vendar si občasno dovolite, da se osvobodite in naredite nekaj drugega. Ni vam treba biti ves čas tako resen.</p>',
                    besedeObrnjena: 'Finančno nesposoben, obseden z bogastvom in statusom, materialističen, podkupnine, trmast, "glava je na tleh", izguba moči, nepotrpežljiv, avtoritativen, gospodovalen.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"S svojimi viri in ljubljenimi ravnam spoštljivo.\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Poza",
                    opis: "Kraljeve oči so zaprte ali pa gleda navzdol: zaspan ali prijetno potopljen v misli. Poza prikazuje odprtost, a tudi osebo, ki je postala eno s svojim poslanstvom."
                },
                {
                    simbol: "Grozdje I",
                    opis: "Grozdje in vino = vzvišeno uživanje: čutni užitki in radosti čutnosti (Dioniz, bog vina Bakhus ali Dioniz) in uživanje v iskanju smisla in resnice (Apolon; \"in vino veritas\")."
                },
                {
                    simbol: "Grozdje II",
                    opis: "Že od nekdaj je grozdje simboliziralo tudi naporno trdo delo – delavci v vinogradu dajejo trajno podobo tega, kaj pomeni preživljati se v potu svojega obraza."
                },
                {
                    simbol: "Grad",
                    opis: "Pozitivno: zaščita in varnost. Negativno: zaklenjeno, nedostopno. Tudi: preoblikovanje površja zemlje, ustvarjanje trajnih vrednosti, produktivnost, izgradnja. Znak potrpežljivega trdega dela (glejte bik spodaj)."
                },
                {
                    simbol: "Bik",
                    opis: "Star simbol zemlje (mati zemlje) v njeni rodovitnosti, pa tudi kot strah vzbujajoča naravna moč (bikoborba). V astrologiji je Bik = mesec maj: veseli mesec maj - obnovitev kraljeve naloge v življenju!"
                },
                {
                    simbol: "Črnina",
                    opis: "Prvinska moč narave, materije: utelešenje vseh še nerazrešenih skrbi, težav ali temnejših vidikov življenja. Hkrati drobovje zemlje, njeni zakladi, doslej neizkoriščene možnosti."
                },
                {
                    simbol: "Noga na kamnu",
                    opis: "\"Napolnite zemljo in si jo podvrzite.\" Pozitivno: zemlja kot domovina in gospostvo. Negativno: zloraba in uničevanje naravnih rezervatov in ozračja."
                },
                {
                    simbol: "Modre gore / oblaki",
                    opis: "Človekova volja je njegovo nebeško kraljestvo. Modri oblaki ali tudi modre gore (kot vez med nebom in zemljo). Duhovna razsežnost življenja in volje tvorita ozadje podobe."
                },
                {
                    simbol: "Dolga, padajoča halja",
                    opis: "Pozitivno: odraščanje s prestolom in vrtom/vinogradom. Negativno: prepotentna oseba, ki ne upošteva omejitev, nima zavesti. Opozorilo pred izgubljanjem v preveč podrobnostih namesto prikazovanja jasnega profila."
                },
                {
                    simbol: "Na zadnji strani lika",
                    opis: "Za likom ležijo modri oblaki/gore in grad. Zavestno se je treba zavedati in ukvarjati s svojim večjim potencialom, s tem, kar je v procesu ustvarjanja, s svojim duhovnim doprinosom."
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "DA",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "14",
                },
                {
                    ime: "Element:",
                    vrednost: "Ogenj zemlje",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Bik",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Chokmah (Modrost)",
                },
                {
                    ime: "Čas:",
                    vrednost: "Konec zime, konec poletja"
                }
            ],
        }
    }
}
