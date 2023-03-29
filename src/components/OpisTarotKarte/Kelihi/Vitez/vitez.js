export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "Vitez kelihov",
                    rekDesno: "Vodite s srcem<br>Grem v pravo smer<br>izrazite se",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>V Vitezu kelihov vitez jezdi na belem konju in iztegne zlati kelih, kot da nosi sporočilo iz srca. Preko oklepa nosi vitez plašč, prekrit s podobami rib, ki so simbol vode, zavesti in ustvarjalnosti. Njegova čelada in škornji so krilati, simbol dejavne in ustvarjalne domišljije ter cenjenja lepih stvari.</p><p>Za razliko od Viteza palic ali Viteza mečev konj v Vitezu kelihov ne drvi naprej, temveč se premika počasi in graciozno ter daje pridih umirjenosti in miru. Konj predstavlja moč, energijo in zagon, bela barva pa je simbol čistosti, duhovnosti in svetlobe.</p><p>Ozadje je večinoma pusto, razen tistih nekaj dreves daleč stran in reke, ki teče skozi, simbolizira moč čustev in domišljije za ustvarjanje nove življenjske sile, tudi tam, kjer se morda zdi, da je ni.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Vitez kelihov je klasični romantik tarota. V stiku je s svojo intuicijo in čustvi, ki jih mojstrsko uporablja, da očara in pritegne druge. Do drugih kaže sočutje in razumevanje, ker se je naučil razumeti svoje občutke in čustva. Vitez je prijazen, skrben in zelo v stiku s svojo žensko stranjo. Morda ga najdemo, ko svoji ljubljeni osebi piše romantično pesem, ustvarja umetnost, ki jo navdihujejo njegovi najgloblji občutki, ali ko ceni živahen sončni zahod s kozarcem šampanjca v roki. Njegovo srce je široko odprto. Svojo ljubezen svobodno deli z drugimi, brez omejitev ali skrbi; zaljubljen je v ljubezen samo.</p><p>Ko se v branju tarota pojavi Vitez kelihov, vam vse lepo uspeva in vas navdihujejo številne ustvarjalne možnosti, ki so vam na voljo. Medtem ko je Paža kelihov navdihnila domiselna ideja, Viteza kelihov motivira dejanje. Sanjali ste o tem, kaj želite ustvariti, in zdaj napredujete s temi sanjami, da bi jih uresničili. To je lahko umetniški projekt ali nekaj, za kar se čutite "poklicani" na podlagi svojih čustev, domišljije in intuicije. Bodite odprti za raziskovanje svojih strasti in velikih zamisli. Morda vas privlači določena strast ali hobi in zdaj je čas, da to spremenite v "nekaj". Medtem ko se vam ne mudi na cilj, imejte v mislih, da se prava domišljija hrani z akcijo; če s svojimi sanjami ne naredite nič, bodo le to tudi ostale – sanje in ne realnost.</p><p>Vsi vitezi so na misiji in misija tega viteza je humanitarnost, romantika, altruizem, sočutje in lepota. Imate vizijo harmonije in ste jo pripravljeni uresničiti. Vodi vas srce in želite videti mir za vse vpletene.</p><p>Ko gre za sprejemanje odločitev, Vitezu kelihov vladajo njegova čustva in srce. Ko ta karta prispe v branje tarota, sprejemate odločitve na podlagi tega, kako se počutite glede situacije, in ne na podlagi tega, kar mislite, tudi če drugi ne morejo razumeti, kaj počnete in zakaj, vaša intuicija pa vas vodi pri vsem kar delate.</p>',
                    besedePokoncna: 'Ustvarjalnost, romantika/romantik, šarm, domišljija, lepota, inteligenca, prihod ali odhod osebe, prinašalec idej, zlahka prepričan, strast.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Ko se obrnjen Vitez kelihov pojavi v branju tarota, nastaja ustvarjalni projekt, vendar še niste pripravljeni ukrepati. Morda večino svojega časa porabite za sanjarjenje o tem, kaj je mogoče ali kako čudovito bo, ko se bo uresničilo. Čeprav je lahko nekaj časa dobro, če ste nekaj časa v sanjah, v fazi idej, načrt ne bo uresničen, dokler ne ukrepate. Morda boste morali svoje zamisli uresničiti. Ugotovite, koliko bo to stalo, koliko časa bo trajalo, katera sredstva boste potrebovali itd. To bo vašemu projektu dalo večjo težo, da boste lahko nadaljevali z uresničevanjem svoje zamisli.</p><p>Včasih lahko obrnjen Vitez kelihov pomeni, da ste čemerni, muhasti in ljubosumni. Morda se počutite razočarani, ker vam ni dana priložnost sanjati in ustvarjati. Dovolite, da vas čustva prevladajo, če vam ne uspe.</p><p>Obrnjen Vitez kelihov lahko opiše nekoga, ki ima preveč romantičen pristop do življenja in je ločen od realnosti. Morda boste občutili stopnjo razočaranja, da ponudba ni povsem taka, kot ste jo pričakovali, ker ste se znašli ujeti v razburjenju ali v čustvih situacije. Na primer, lahko pustite službo v pisarni, da bi lahko delali doma, samo da ugotovite, da pogrešate družabni stik s svojimi sodelavci. Lahko pa prodate svojo hišo, da bi potovali po državi, samo da ugotovite, da vaš avtodom potrebuje popolnoma nov motor drugi dan vašega potovanja.</p>',
                    besedeObrnjena: 'Prekomerna domišljija, nerealen, ljubosumen, muhavost, zvijača, goljufija, čutnost, brezdelje, lažniva oseba, odhajati stran, ciničnost, stvari niso kot se zdijo.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Uresničujem svoje najbolj skrite sanje.\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Poza",
                    opis: "Visoka osebnost, ki odjaha v svet, da bi napolnila kelih ali delila njegovo vsebino z drugimi. Oba sta vidika galantnega in mojstrskega način z vodnim elementom."
                },
                {
                    simbol: "Oklep",
                    opis: "Oklep s čelado, ostrogami in odprtim vizirjem spada med atribute katerega koli viteza Pozitivno: zaščita in varnost. Negativno: nekdo je nespremenljiv na svojih poteh, a ujetnik lastne \"zaščitne lupine\"."
                },
                {
                    simbol: "Hermesova krila",
                    opis: "Usklajeni z ljubeznijo od glave do pete. Povezava med umom (zrak) in občutki (voda): zavestno ravnanje z občutki in prepričanji. Svari pred: dogmatizmom, uporabo čustev kot neupogljiv oklep."
                },
                {
                    simbol: "Sivi konj",
                    opis: "Konj in jezdec skupaj tvorita eno. Nagoni in nagon (konj) igrajo stransko vlogo. Tu je siva barva čustvene stabilnosti. Pozitivno: ljubezen brez gorečnosti in predsodki. Negativno: notranja brezvoljnost."
                },
                {
                    simbol: "Položaj sprednjih nog konja",
                    opis: "Igrivo, plesno, kot med dresuro. Pozitivno: plemenitenje nagonov. Sposobnost soočanja s potrebami in strastmi. Negativno: dresura, podrejenost, pomanjkanje spontanosti."
                },
                {
                    simbol: "Kelih v desni roki",
                    opis: "Prazen kelih: znak iskanja in hrepenenja. Poln kelih: dobri ali manj dobri občutki se prenašajo v svet. Kaj vsebuje kelih, ostaja stvar domišljije ali intuicije opazovalca."
                },
                {
                    simbol: "Reka",
                    opis: "Le če se podredimo procesu spreminjanja, lahko ostanemo zvesti sami sebi. Povezava med izvirom in odtokom. Dovolite občutkom, da tečejo in poiščejo svoj kanal."
                },
                {
                    simbol: "Gore",
                    opis: "Negativno: ovire, odpor, oblikovanje čustev. Pozitivno: vrhunska izkušnja, visoke točke, naloge za življenje."
                },
                {
                    simbol: "Podeželje",
                    opis: "Gora in dolina, travnik in drevesa - vijugasta reka: izraz veselja do življenja, užitka in dobrega počutja. Pokrajina: prijetno vzdušje, polno harmonije."
                },
                {
                    simbol: "Ribe",
                    opis: "Bogastvo, sreča, množica (ribe v roju), skupnost, celota. Neizmerni občutki, vključno s krutostjo, primitivnim nasiljem. Zlata ribica ali morski pes?"
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
                    vrednost: "Zrak od vode",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Škorpijon",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Tiphareth (Lepota, harmonija)",
                },
                {
                    ime: "Čas:",
                    vrednost: "Jesen, Pomlad"
                }
            ],
        }
    }
}
