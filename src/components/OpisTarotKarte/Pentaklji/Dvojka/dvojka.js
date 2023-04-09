export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "Dvojka pentaklov",
                    rekDesno: "Sledi toku<br>Iskanje ravnotežja<br>Prilagajanje na vzpone in padce",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>V Dvojki pentakljev mladenič pleše, medtem ko v rokah žonglira z dvema kovancema. Simbol neskončnosti povezuje kovance in nakazuje, da lahko ta človek obvlada neomejene težave, če dobro upravlja s svojim časom, energijo in viri. V ozadju dve ladji plujeta po odprtem morju in se zibata gor in dol na ogromnih valovih – še en znak, da so vzponi in padci življenja obvladljivi z osredotočenostjo in pozornostjo.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Ko se Dvojka pentakljev pojavi v branju tarota, je varno reči, da žonglirate s svojimi prioritetami, vlogami in odgovornostmi. Lahko ste na primer zaposleni starš, generalni direktor podjetja, administrativni pomočnik v zaposleni pisarni ali nekdo, ki dela več služb. V pokončnem položaju ta karta ugotavlja, da opravljate odlično delo pri uravnovešanju teh različnih prioritet in da lahko sprejmete vse, kar vam življenje prinese; toda ta dva vas spomnita, da je meja med spopadanjem s temi zahtevami in izgubo nadzora tanka. S svojim časom, energijo in viri morate skrbno upravljati, da ne izgubite ravnotežja.</p><p>Dvojka pentakljev se pogosto pojavi, ko ste zaposleni, ko hitite od ene stvari k drugi, z malo vmesnega časa. Lahko si rečete, da nimate dovolj časa ali da se vam mudi. Vendar ne pozabite, da vam ni treba biti zaposlen, da bi opravili stvari. Včasih je odmor najbolj produktivna stvar, ki jo lahko naredite. Podobno se lahko pojavi Dvojka pentakljev, ko ste ujeti v vsakodnevne zahteve in izgubite izpred oči širšo sliko. Če to z vami odmeva, se vprašajte: Kakšno življenje si želim? In kako lahko reorganiziram svoj urnik, da ustvarim življenje, ki si ga želim?</p><p>Dvojka pentakljev vas vabi, da skrbno upravljate s svojim časom in prioritetami. Vaša delovna obremenitev je trenutno velika in če želite vse opraviti, morate ostati osredotočeni in produktivni. Morda vam bodo koristili seznam opravkov, boljše upravljanje koledarja in strožji urnik. Lahko celo pridobite podporo pomočnika ali poslovnega trenerja, ki vam bo pomagal narediti prave spremembe. Osnovno upravljanje s časom je ključnega pomena za vašo sposobnost usklajevanja teh različnih prednostnih nalog in ohranjanja glave nad vodo. Ta karta vas tudi opominja, da posvetite posebno pozornost svoji splošni administraciji, vključno s plačevanjem računov, upravljanjem financ, spremljanjem obveznosti in vodenjem dnevnika. Pazite, da ne boste zamudili pomembnih rokov, sestankov in drugih obveznosti.</p><p>Ta karta kliče vaše zavedanje o konceptu ravnovesja in tistih delih vašega življenja, kjer ga imate (in tistih, kjer ga nimate). Čeprav si lahko prizadevate za ravnotežje, nič ne ostane v popolni harmoniji. Na primer, stabilizacija vaših službenih in družinskih obveznosti se sliši fantastično, v resnici pa bo vaša družina en teden bolj na prvem mestu, naslednji teden pa delo. Torej, ko se Dvojka pentakljev pojavi v branju tarota, glejte na to kot na opomin, da ste potrpežljivi, prilagodljivi, ko poskušate usklajevati svoje obveznosti z družino, prijatelji, službo, financami, zdravjem in novimi izzivi. Bodite pripravljeni na izmenjavo dejavnosti ali ugoditev zahtevam v zadnjem trenutku. In vedite, da če ste uspešni na enem področju svojega življenja, je verjetno, da imate težave na drugem – to je le del uravnovešanja!</p>',
                    besedePokoncna: 'Več prioritet, upravljanje časa, določanje prioritet, prilagodljivost, sposobnost obvladovanja več situacij, novi projekti so lahko težavni, pričakujte koristno sporočilo.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>V obrnjenem položaju Dvojka pentakljev opozarja, da ste preveč zavezani in se včasih trudite vzdrževati svoj preobremenjen urnik ali ostati na vrhu svojih računov. Drugi tega morda še ne opazijo, toda stres postaja vse bolj prisoten in morda se boste celo ujeli, da vam je žoga padla. Sledite lekciji te karte in se organizirajte. Morda boste morali svoje odgovornosti bolj strukturirati s proračuni, seznami opravil, načrtovanjem za naprej ali dnevnikom in učinkovitim upravljanjem časa. Zavrnite priložnosti, ki niso več v skladu z vašimi cilji.</p><p>Obrnjena Dvojka pentakljev je lahko tudi znak, da preveč vlagate v eno področje svojega življenja na račun drugih. Na primer, lahko blestite v svoji karieri, vendar imate malo časa za svojo družino ali partnerja, zaradi česar se počutita nepovezana in sama. Čeprav se vam bo morda izognilo nekaj poznih noči v službi, bo prišel čas, ko bo dovolj.</p><p>Obrnjena Dvojka pentakljev vas vabi, da ponovno ocenite svoje prioritete in cilje ter se odločite, kje želite porabiti svoj čas in energijo. Motilcev je veliko in potrebna bo vsa vaša koncentracija, da ostanete zvesti svojim ciljem. Izberite eno stvar, na katero se morate osredotočiti, da ji lahko posvetite svojo nepodeljeno pozornost in dosegli boste uspeh.</p>',
                    besedeObrnjena: 'Prekomerna zavezanost, neorganiziranost, ponovno določanje prioritet, težave z obvladovanjem težav, pričakujte odvračajoče sporočilo, neravnovesje, neprilagodljiv, preobremenjen.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Z lahkoto upravljam svoje življenje.\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Dva pentakla I",
                    opis: "Dve plati kovancev: na različne načine, vse naše osebne prednosti in pomanjkljivosti, svetle in slabe strani, darovi in pomanjkljivosti, imajo nekaj opraviti drug z drugim ..."
                },
                {
                    simbol: "Dva pentakla II",
                    opis: "... in jih je treba razvrstiti (da ne zamenjamo prednosti in slabosti drug za drugega, na primer). Vendar to ne pomeni, da jih raztrgamo (zato zeleni pas) – oba vidika skupaj sta tisto, kar naredi človeka."
                },
                {
                    simbol: "Zeleni pas / vodoravna osmica",
                    opis: "Pozitivno: neskončne možnosti, osebni prispevek k igri vesolja, nedotaknjenost, celovitost. Negativno: navadna rutina, tekalna steza, ponavljanje (tek v krogu)."
                },
                {
                    simbol: "Ladji I",
                    opis: "\"... da mora najodličnejša oseba imeti tudi slabe lastnosti, kot na primer velika ladja s polnimi jadri, ki potrebuje balast, da je njena teža zadostna za pravilen prehod.\" (Gottfried Keller)"
                },
                {
                    simbol: "Ladji II",
                    opis: "Ladja z jadri je tudi simbol sposobnosti obvladovanja spreminjajočih se vetrov sreče tako spretno, da lahko doseže varen pristan v vseh razmerah. Opozorilo: ne plujte preblizu vetra."
                },
                {
                    simbol: "Valovi",
                    opis: "Vrhunci in padci življenja. Osebna rast. Prehod na nove celine. Vse življenje se je začelo v oceanih: to spominja na naš izvor, našo osebno vlogo ustvarjanja."
                },
                {
                    simbol: "Zeleni pas / zeleni čevlji",
                    opis: "Zelena je barva življenja, vitalnosti, rasti in tudi upanja. Toda po drugi strani pa lahko pomeni nezrelost, nedokončanost, nekaj, kar je na pol pečeno."
                },
                {
                    simbol: "Barva oblačil",
                    opis: "Rdeča pomeni voljo in strast, pa tudi vnemo, včasih preveč vneme. Barva tunike predstavlja mešanico rdeče in rumene barve pentakla - volja in sonce ali vnema z zavistjo in pohlepom."
                },
                {
                    simbol: "Velik klobuk",
                    opis: "Velik rdeč klobuk, kot petelinji glavnik, nakazuje ego, preveliko vnemo, ošabnost (predvsem v kolikor se lik ne zaveda, kaj se dogaja za njim). Pozitivno: krona, ki raste preko samega sebe, priznanje."
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "DA",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "2",
                },
                {
                    ime: "Element:",
                    vrednost: "Zemlja",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Jupiter v kozorogu",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Chokmah (Modrost)",
                },
                {
                    ime: "Čas:",
                    vrednost: "December 22 - december 30"
                }
            ],
        }
    }
}
