export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "Vitez palic",
                    rekDesno: "Pripravljen in voljan iti naprej<br>Sprejmimo izzive<br>Preobrazba je moja",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>Vitez palic sedi na svojem konju v polnem oklepu, nosi rumeno obleko, okrašeno s salamanderji (povezanimi z elementom ognja), in čelado z ognjenimi rdečimi perji, ki se vijejo za njim. V desni roki drži palico, ki simbolizira njegovo energijo in navdušenje nad njegovim poslanstvom. Njegov konj se dvigne na zadnje noge, umirjen in pripravljen na akcijo. Kot vse karte Palic je ozadje vroče, suho in pusto, z gorami, ki se dvigajo v daljavi.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Medtem ko Paž palic označuje začetno iskrico nove ideje, vitez palic prikazuje dejansko prizadevanje za to idejo. Ko se ta karta pojavi pri branju tarota, ste napolnjeni z energijo, strastjo, motivacijo in navdušenjem in to energijo usmerjate skozi svoja navdihujoča dejanja. Imate jasno vizijo o tem, kaj želite ustvariti, in s svojo strastjo in navdihom zdaj korakate naprej z velikimi koraki, da svojo vizijo spremenite v resničnost. Ta karta je vaš znak, da se odločite!</p><p>Ste drzni in pogumni ter se pripravljeni podati na neznana ozemlja, da bi nadaljevali svoje poslanstvo in svoje sanje. Pravzaprav vam ni vseeno, ali je pred vami nevarnost in če je, potem postane za vas še toliko bolj razburljivo in vznemirljivo. Takšne dogodivščine vas razsvetlijo, ker veste, da na drugi strani čakata rast in širitev. Bodite pionir in premišljeno tvegajte, da dosežete nove višine.</p><p>V tej luči vam Vitez palic daje občutek, da lahko prevzamete svet! Tako ste predani svoji viziji in namenu, da se ne boste ustavili pred ničemer, da bi ju uresničili. Ko sledite svojim ciljem, vaša samozavest strmo narašča in spoznate, da je vaš potencial neomejen. Vi zmorete vse!</p><p>Vaša strast, navdušenje, pogum in samozavest so zelo privlačni za druge. Drugi vas vidijo kot zelo karizmatične in želijo biti v vaši prisotnosti, da bi izkoristili vašo energijo. Čeprav še niste obvladali umetnosti privabljanja drugih na svoje potovanje, kot je Kralj palic, uživate v dodatni pozornosti, ki vam jo prinašajo vaša karizma in avanture. Vprašanje bo, ali vam drugi lahko sledijo, ali pa so tukaj zgolj zato, da opazujejo in z osmozo absorbirajo vašo energijo.</p><p>Upoštevajte, da se lahko Vitez palic izrazi kot tip osebe "najprej ukrepaj, nato razmišljaj". V želji po dejanjih ste morda impulzivni in nepotrpežljivi ter pričakujete, da bo vse opravljeno včeraj. Medtem ko pokate od energije, ste nagnjeni k temu, da hitite s stvarmi brez premisleka o posledicah svojih dejanj. Morda nimate jasnega načrta napada, kar zmanjšuje vaše možnosti za dolgoročni uspeh. Če to odmeva, poiščite način, da svoje navdušenje usmerite v dejavnosti, ki vas bodo približale cilju. Ko imate novo idejo, si raje vzemite trenutek, da preverite, ali se resnično ujema z vašimi cilji in ali jo je treba takoj uresničiti, namesto da bi se je kar takoj lotili. Morda boste ugotovili, da vam bo bolje počakati na pravi čas za uresničitev te zamisli, še posebej, če se med branjem pojavijo druge "čakajoče" karte, kot sta Obešenec ali Štirica mečev. Ali pa se boste morda zavedli, da je čas zdaj in da lahko nadaljujete z visoko energijo in živahnostjo.</p>',
                    besedePokoncna: 'Energija, strast, vznemirjenje, pustolovščina, impulzivnost, bolje kot pričakovano, pojdi naprej, pustolovščina čaka, svobodomiselna oseba,  ustvarjalnost, potovanje, radodaren prijatelj, ljubimec.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Obrnjen Vitez palic se lahko pojavi, ko se aktivno ukvarjate z osebnim strastnim projektom ali hobijem. V vas je bil prižgan ogenj in zdaj delate vse, da bi ta strastni projekt premaknili naprej. Nimate namena, da bi ga spremenili v nor uspeh – za vas je dbovolj, da uživate in vanj usmerite svojo energijo. Na primer, lahko se naučite brati tarot samo zato, ker vas zanima to čudovito duhovno orodje, namesto da bi želeli postati svetovno znani bralec tarota. Temu strastnemu projektu sledite z vsem srcem, ker vas resnično razsvetli.</p><p>Obrnjen Vitez palic lahko pomeni, da doživljate znatno kopičenje energije, vendar niste prepričani, kako jo učinkovito usmeriti v svet. Morda imate ustvarjalni nemir, saj veste, da ste usojeni za nekaj "velikega", vendar ste trenutno omejeni. Morda so vam na poti frustrirajoče zamude, nepremostljive ovire ali ljudje. Napetost od znotraj je otipljiva in nujno morate sprostiti to ustvarjalno energijo. Oglejte si alternativne načine za uresničevanje svoje strasti ali izražanje svoje vizije. Morda boste morali nekoliko prilagoditi svojo pot in pri tem ostati zvesti svoji prvotni zamisli.</p><p>Nasprotno pa obrnjen Vitez palic nakazuje, da morda delujete impulzivno in poskušate doseči vse naenkrat. Hitite od ene naloge do druge, ne da bi se osredotočili na podrobnosti ali zagotovili trajnostni uspeh. Kratkoročno se lahko zdi, da to deluje, dolgoročno pa lahko pregorite ali pa da ne boste dosegli svojih ciljev. Upočasnite se in vedite, da vam ni treba storiti vsega naenkrat.</p><p>Obrnjen Vitez palic prav tako nakazuje, da ste v nevarnosti, da boste delovali impulzivno, delali ali govorili stvari, ki jih boste morda kasneje obžalovali. Želite, da se vse takoj "popravi", vendar si ne dovolite časa, da bi dobro premislili, kaj je za vas najboljše. Pazite tudi, da se na vse, kar se zgodi, ne odzovete takoj. Dajte svojim okoliščinam nekaj prostora in časa, preden ukrepate. Morda se tudi počutite razočarani, ker dejavniki, na katere nimate vpliva, vplivajo na vaš položaj. Še enkrat se opomnite, da bodo stvari, ki jih lahko nadzirate in spreminjate, kot želite – le najti jih morate.</p>',
                    besedeObrnjena: 'Strastni projekt, naglica, razpršena energija, zamude, frustracije, nepremišljenost, jeza, kaotična oseba, spolni presežek, razdor, prekinitev dela, ljubosumje, ozkosrčnost.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"S strastjo in entuziazmom grem proti svojim ciljem.\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Poza",
                    opis: "Vzpet, viharen, divji — a vendarle na drugi pogled tudi na napetih vajetih in vse je točno izračunano! Rdeče rjavi konj je imenovan kislica."
                },
                {
                    simbol: "Oklep, ostroge, čelada, rokavice",
                    opis: "Pozitivno: previdno ravnanje z ognjem in palicami prinaša zaščito in varnost. Negativno: nekdo je pritrjen na svoje poti, neprilagodljiv, beži, da bi pobegnil, ali slepo zasleduje nekaj."
                },
                {
                    simbol: "Rdeče perje in rokavi",
                    opis: "Goreča volja, odločnost, moč, a tudi zadirčnost, brezobzirnost. Tudi: opečen otrok se boji ognja. In: drzni konj - nekdo, ki ga ni mogoče zadržati."
                },
                {
                    simbol: "Rumena tunika",
                    opis: "Sonce, svetloba, splošna zavest, pa tudi zavist, zaslepitev, manija. Nevarnost: zatiranje senčne strani. Pozitivno: osvetlitev vseh aspektov = zanesljiva moč zaznavanja."
                },
                {
                    simbol: "Močeradi v krogu",
                    opis: "Po legendi je močerad žival, ki lahko gre skozi ogenj brez da bi se poškodoval. Zaprti krog - Pozitivno: reinkarnacija; Negativno: ponavljajoči se argumenti in ponavljanje, vrtenje v krogu."
                },
                {
                    simbol: "Puščava",
                    opis: "Praznina, divjina. Vročina in ogenj v nas, doživeti kot sušo, žganje, pregrevanje. Ali novo kraljestvo volje iz katere lahko naša volja ustvari nekaj novega."
                },
                {
                    simbol: "Palica v puščavi",
                    opis: "Negativno: zabloda, nevarnost smrti od žeje / odmiranje, vročina, praznina. Pozitivno: premagovanje sušnega obdobja, ustvarjanje vrta iz puščave: samozavestni tudi ob velikih izzivih."
                },
                {
                    simbol: "Piramide I",
                    opis: "Znak modrosti in znanosti, skrivnosti in bližine bogov. Poteka po načrtu, duhovna dejavnost. Tudi: roparji grobov, roparji piramide."
                },
                {
                    simbol: "Piramide II",
                    opis: "Na splošno simbol prihoda do točke transformacije energije in nevtralizacije. Tudi vrhunske izkušnje in visoke točke. Naloga dvigniti, znižati, združiti na novo raven."
                },
                {
                    simbol: "Svetlo modro nebo",
                    opis: "Pozitivno: lahkotnost, lahkotnost, namen volje, luciden um. Negativno: malikovanje nečesa ali nekoga, posvetne želje."
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "DA",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "12",
                },
                {
                    ime: "Element:",
                    vrednost: "Zrak ognja",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Lev",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Tiphareth (lepota, harmonija)",
                },
                {
                    ime: "Čas:",
                    vrednost: "Poletje, zima"
                }
            ],
        }
    }
}
