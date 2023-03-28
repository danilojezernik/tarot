export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "Devetica kelihov",
                    rekDesno: "Aplavz je bil zaslužen<br>Srečen čas<br>Cilji so doseženi",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>V Devetici kelihov moški sedi na leseni klopi. Je udobno, vendar ne preveč udobno (ne bi želeli sedeti na tej leseni klopi ves dan!). Roke ima prekrižane, na obrazu pa je nasmeh, ki izraža zadovoljstvo. Za njim je ukrivljena struktura, obdana z modrim materialom, z devetimi zlatimi kelihi, razporejenimi v loku. Kelihi predstavljajo čustveno izpolnitev po izpolnitvi vaših najglobljih želja.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Poznate tiste trenutke, ko se ozrete naokoli in začutite, kako vam srce prekipeva od ljubezni in hvaležnosti za vse, kar ste ustvaril v življenju? To je tisto, o čemer govori Devetica kelihov: čustvena izpolnitev, sreča in zadovoljstvo. Ko se ta karta pojavi v branju tarota, ste zadovoljni v vseh vidikih svojega življenja – v odnosih, službi, življenjskem slogu, dobrem počutju in več. Uživate se v izobilju življenja in doživljate svoja čustva z intenzivnostjo in užitkom.</p><p>Zato se Devetici kelihov pogosto imenuje karta želja. Prihaja kot znak, da so planeti poravnani in imate vse, kar ste si želeli. Ne bi mogel biti srečnejši! Če ste si zaželeli in potrpežljivo čakate, da se uresniči, potem je ta karta odličen znak, da se vam bo želja kmalu izpolnila.</p><p>Devetica kelihov je povabilo k zapravljanju, prepuščanju in uživanju življenjskih užitkov. To vključuje uživanje v dobri hrani in vinu, cenjenju umetnosti, ljubljenju, sproščanju v razkošnem letovišču ali v doživljanju lepote. Živite v tem trenutku in si dovolite, da se začasno prepustite brez občutka krivde za morebitne negativne posledice takšnega užitka.</p><p>Ko med branjem vidite Devetico kelihov, ne pozabite prešteti svojih blagoslovov in izraziti hvaležnost za to, kar imate. Vsak dan začnite ali končajte tako, da si v mislih ustvarite seznam treh stvari, za katere ste najbolj hvaležni. Sčasoma boste okrepili svoj občutek zadovoljstva in svojo sposobnost, da pritegnete tisto, kar si želite – to je zakon privlačnosti. Če se trudite najti pozitivno stran življenja, vam bo izražanje hvaležnosti pomagalo uvideti, da imate veliko razlogov za veselje.</p><p>Ena stvar, ki jo morate imeti v mislih pri Devetici kelihov, je, da sedi na leseni klopi, ki je udobna le za določen čas. Zavedajte se, da sta tudi zadovoljstvo in izpolnjenost le začasna, saj se vse vedno spreminja. Zato je tako pomembno, da cenite to, kar imate zdaj, in to cenite, ker lahko kasneje izgine ali pa se boste morda morali prilagoditi.</p>',
                    besedePokoncna: 'Zadovoljstvo, hvaležnost, uresničitev želja, zagotovljena prihodnost, fizično dobro počutje, dobre stvari prihajajo, vsesplošna sreča.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Tudi ko se zdi, da imate vse, o čemer ste kdaj sanjali, se lahko še vedno počutite, kot da globoko v sebi nekaj manjka. Ali ste si prizadevali za materialne koristi na račun svoje duhovne rasti ali čustvene izpolnitve? Na primer, morda ste lastnik najdražjega doma ali avtomobila v bloku, vendar nikoli ne vidite prijateljev in družine in ste precej nesrečni. To je bistvo obrnjene Devetice kelihov in ko se pojavi v branju tarota, vas prosi, da ponovno premislite, kaj si želite, in to uskladite s svojim najvišjim dobrim. Morda ste izgubili stik s tem, kar je za vas pomembno, namesto tega dajete prednost egu in lovite tisto, kar bo naredilo vtis na druge.</p><p>Obrnjena Devetica kelihov je znak, da namesto iskanja sreče zunaj sebe, iščite to v sebi. Uspeh in sreča različnim ljudem pomenita različne stvari. Torej, namesto da počnete tisto, kar mislite, da bo osrečilo druge ljudi, počnite tisto, kar bo osrečilo vas. Vprašajte se: "Kako se meni zdi uspeh? In kako bom vedel, kdaj bom uspešen?" Če vaš zunanji svet ne prinaša zadovoljstva, spremenite definicijo uspeha.</p><p>Včasih obrnjena Devetica kelihov nakazuje, da ste razočarani, ker se vaše želje še niso uresničile. Vaša pričakovanja so morda nerealna ali pa morda ne sledite aktivno svojim sanjam in upate, da se bodo uresničile z malo vašega prispevka ali ukrepanja. Morda ste izbrali cilje, ki vas ne izpolnjujejo, in če je tako, je najbolje, da jih pustite ob strani. Zdaj je čas, da se ponovno povežete s svojimi cilji in sanjami ter se ponovno zavežete, da jih boste uresničili. Morda boste morali prilagoditi svoje cilje, da bodo popolnoma usklajeni z vašimi osebnimi vrednotami. In morda boste morali biti bolj proaktivni pri ustvarjanju akcijskega načrta, da boste videli, kako bodo vaši cilji uresničeni.</p><p>Obrnjena Devetica kelihov služi kot opomnik, da ne pretiravate z uživanjem na račun svojega zdravja in dobrega počutja. Morda ste nagnjeni k pretiravanju s hrano, alkoholom, drogami, zabavami ali zapravljanjem. V vsemu bodite zmerni in se osredotočite na dolgoročne posledice svojih dejanj, tudi če prinašajo kratkoročno zadovoljstvo.</p>',
                    besedeObrnjena: 'Notranja sreča, materializem, nezadovoljstvo, popuščanje, pomanjkanje denarja, pretirano razvajanje, bolezen, želja se morda ne bo uresničila, pomanjkanje samozavesti.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Hvaležen sem za obilje, ki me zdaj obdaja.\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Poza",
                    opis: "Na tej sliki lahko vidite sebe (ali nekoga, ki ga poznate), ki je na nek način zelo odprt, v drugih pogledih pa zelo zaprt. Kot opazovalec lahko vidite veliko vrst kelihov – ali jih je upodobljen lik opazil?"
                },
                {
                    simbol: "Rdeči klobuk / rdeče nogavice",
                    opis: "Volja in strast, ljubezen ali ljubosumje najdejo svoj izraz v rdeči barvi. Videti tudi modro barvo, ki je barva duše in duhovnosti ter rumeno, ki lahko pomeni sonce in svetloba, pa tudi zavist."
                },
                {
                    simbol: "Kelihi zadaj",
                    opis: "Duhovno bogastvo, ki ga nakazuje devet kelihov, je v celoti zunaj vidnega polja lika na karti. Lahko se zgodi, da se to prostranstvo občutkov, potreb in želja čuti na nezavedni ravni – za njegovim hrbtom."
                },
                {
                    simbol: "Prekrižane roke",
                    opis: "Pozitivno: znak pričakovanja, pripravljenosti in potrpežljivosti (podlakti in roke tvorijo vodoravno osmico). Negativno: lenoba, zgolj opazovalec, ki se ne vpleta, ki ni razumel, kaj se dogaja."
                },
                {
                    simbol: "Razmaknjene noge",
                    opis: "Položaj rok in nog razkriva zavestna in nezavedna stališča. Naročje je odprto. To je znak odprtosti."
                },
                {
                    simbol: "Bela halja",
                    opis: "Bela pomeni začetke in/ali dokončanje, naivnost in brezbarvnost, pa tudi zrelost in modrost. Tako kot beseda modrost in kot tudi bela svetloba, sta oba znaka dosežka in celovitosti."
                },
                {
                    simbol: "Kelihi po vrsti",
                    opis: "Pozitivno: imate sposobnost zajeti celotno zbirko in jo zagotoviti po naročilu (mreže, večje skupine, nabor potreb). Negativno: občasno vam enostavno ne gre \"stopiti iz začrtane linije\"."
                },
                {
                    simbol: "Nekoliko dvignjeni kelihi",
                    opis: "Vprašanje perspektive: na polkrog skodelic lahko gledamo, kot da so za likom. Videti jih je tudi, kot da se bočijo nad likom in tako predstavlja uvod v dvignjene kelihov, ki jih najdemo v Desetici kelihov. Njihov dvignjen položaj simbolizira dvigovanje v vseh pomenih besede. Dvigovanje: pozitivne in dvigujoče izkušnje in občutki. Prinaša nekaj do konca, npr. obleganje. Končno dvigniti nekaj ali sebe na višjo raven, torej uspešnejše ukvarjanje s kelihi."
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "DA",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "9",
                },
                {
                    ime: "Element:",
                    vrednost: "Voda",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Jupiter v ribi",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Yesod (Temelj)",
                },
                {
                    ime: "Čas:",
                    vrednost: "Marec 1 - marec 10"
                }
            ],
        }
    }
}
