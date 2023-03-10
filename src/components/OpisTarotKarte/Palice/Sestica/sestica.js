export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "Šestica palic",
                    rekDesno: "Uspeh je vaš<br>Prejemanje priznanj<br>Svet pod vašimi nogami",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>Šestica palic prikazuje moškega, ki okoli glave nosi venec zmage in jezdi na okrašenem belem konju skozi množico navijaških ljudi. Njegov konj predstavlja moč, čistost in uspešno napredovanje pustolovščine, skupina ljudi pa označuje javno priznanje za človekove dosežke. Jezdec drži pokončno palico z vencem, privezanim na vrh, kar dodatno poudarja uspeh in dosežek. Ni ga strah pokazati drugim, kaj mu je uspelo v življenju do zdaj, in kar je še bolje, množica okoli njega ga z veseljem bodri.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Šestica palic se pojavi, ko ste dosegli pomemben mejnik ali dosegli pomemben cilj in ste samozavestni, zadovoljni in uspešni. Izkoristili ste svoje moči in talente, da bi dosegli srečen izid svojih prizadevanj in se prebili skozi kaos Petice palic, zmanjšali svoje motnje in se osredotočili na trenutno nalogo. Da, na poti so bili izzivi, a ste jih premagali tako, da ste svojo energijo osredotočili na en cilj.</p><p>Šestica palic nakazuje, da niste le dosegli svojih ciljev, ampak tudi prejemate javna priznanja za svoja prizadevanja. Morda ste pred kratkim za svoje delo prejeli nagrado, pohvalo ali priznanje svojih vrstnikov. Morda bo to le trepljanje po rami, a ta pozornost močno dvigne vašo samozavest in vam da moč, da nadaljujete s svojimi prizadevanji.</p><p>Šestica palic vas prav tako spodbuja, da se izpostavite in ste ponosni na to, kar ste dosegli. Potegnite svoje uspehe s podstrehe in vse postavite na zid, da vas drugi vidijo in vas spodbujajo. Bodite odprti za prejemanje ljubezni in podpore svojih največjih navijačev, ki so napolnjeni z energijo, ko vidijo vaš uspeh. Zdaj je vaš čas, da zasijete!</p><p>Šestica palic je pozitivna spodbuda, da verjamete v to, kdo ste, in v svoje dosedanje dosežke. Verjemite v to, kar ste storili, in v to, kako bodo drugi to sprejeli. Ne dovolite, da vas strah ali krivda ovirata na poti do uspeha. Morali bi biti ponosni! Dvignite glavo visoko in vedite, da ste vredni občudovanja.</p><p>Medtem ko je Šestica palic pomemben mejnik, ne pozabite, da še niste povsem na ciljni črti. Pred vami je še nekaj in še vedno se lahko pojavijo izzivi na vaši poti – vendar bodite pogumni, saj veste, da imate podporo okoli sebe in da so tukaj, da vas 100-odstotno podpirajo.</p>',
                    besedePokoncna: 'Uspeh, javno priznanje, napredek, samozavest, dobre novice, zmaga, uspeh po porodu, ustrežljivi prijatelji, vodenje med potovanjem.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Obrnjena Šestica palic nakazuje, da ste dosegli pomemben osebni mejnik, vendar za razliko od pokončne različice te karte to trenutno raje zadržite zase. Morda vam je neprijetno prejemati javno pohvalo za svoje delo ali pa je to tako zasebni dosežek, da nimate razloga, da bi ga delili z drugimi. Vseeno preverite pri sebi: ali se izogibate delitvi tega, ker vam manjka samozavesti ali ste nervozni zaradi pretiravanja?</p><p>Obrnjena Šestica palic vas spodbuja, da ustvarite svojo definicijo uspeha. Če ste ugotovili, da iščete odobravanje in potrditev ali se primerjate z drugimi, ste morda izgubili osebno moč in samozavest. Namesto da se zanašate na mnenja nekoga drugega o tem, kaj je "uspešno" in kaj ne, vnesite svojo energijo in pozornost vase in se vprašajte: "Kaj mi pomeni uspeh?" Vaš odgovor bo videti drugačen od interpretacij drugih ljudi, ker so vaše vrednote in prioritete edinstvene za vas. Ko vam je jasno, kaj za vas pomeni uspeh, boste sprejemali boljše odločitve, ki bodo bolj v skladu s tem, kdo v resnici ste, ter povečali svojo samozavest in neodvisnost – in to je dobro!</p><p>Včasih lahko obrnjena Šestica palic pomeni, da ste padli v nemilost in niste prejeli javnega priznanja, ki ste ga želeli. Za svoja prizadevanja niste prejeli nobene povratne informacije ali pa ste namesto tega prejeli kritiko. Morda ste pričakovali, da bodo stvari dobro delovale, vendar ste namesto tega kaznovani ali zanemarjeni. Zdaj je padla vaša samozavest, prav tako vaš poklicni ugled ali vsaj vaše dojemanje vašega statusa. Če določen projekt ni bil tako uspešen, kot ste upali, je morda bolje, da se preselite v novo okolje, da boste lahko znova zgradili svojo osebno blagovno znamko, namesto da poskušate popraviti nekaj, kar je že pokvarjeno.</p><p>Senčna stran obrnjene Šestice palic je, da lahko prinese tudi samopomembnost, arogantnost in egoistično vedenje. Oboroženi z zmago in povečanjem vaše samozavesti boste morda pomislili, da nihče ni boljši od vas. Če zavzamete ta sebičen odnos, vas bo nekdo verjetno želel podreti, kar bo kasneje prineslo razočaranje in potencialno slab sloves. Zavladajte svojemu egu in naj bo vaša zmaga še slajša.</p>',
                    besedeObrnjena: 'Zasebni dosežek, osebna definicija uspeha, padec iz milosti, egoizem, nagrade zamujajo, preloženo potovanje, slabe novice, ponos na bogastvo/uspeh, po neuspehu sledi umik, odrekanje, pomanjkanje samozavesti.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Z lahkoto dosegam svoje cilje!\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Poze upodobljenih figur",
                    opis: "Slike prikazujejo aktivne in pasivne, zavestne in nezavedne sile, prednosti in slabosti: Vi, sami ali skupini. In/ali tvoja lastna moči samomotivacije, način kako vodite življenja."
                },
                {
                    simbol: "Veliki jezdec",
                    opis: "Poveljnik, vodja, koordinator, zmagovalec, simbol zavestne volje. Pozitivno: prava volja, dosledno vodstvo, dobre novice. Negativno: pretvarjanje, samoprevara, aroganca."
                },
                {
                    simbol: "Sivi konj",
                    opis: "Pogon, instinktivno delovanje, tisto, kar podpira in prenaša jezdeca, simbol za nezavedno voljo. Pozitivno: vitalnost, velika vitalna moč in živahnost. Negativno: živalsko, brezumno, prepuščeno na milost in nemilost slepemu impulzu."
                },
                {
                    simbol: "Vidni čin",
                    opis: "Volja do sodelovanja ali prostovoljnega spremljanja. Pozitivno: prostovoljno angažiranje, aktivno sodelovanje, zavestna podpora. Negativno: odvisnost, pomanjkanje samozavesti, omahovanje."
                },
                {
                    simbol: "Slabo viden lik za konjem",
                    opis: "Praktično skrit za konjem, kar nakazuje na precej zasenčeno voljo, ki se izogiba sprejemanju odločitev in preprosto prepušča stvarem, da se zgodijo same od sebe."
                },
                {
                    simbol: "Dve lovorovi kroni",
                    opis: "Venec zmage in v spomin na mrtve. Spomnite se žrtev! Ampak tudi: pravične puščave. Vaša naloga, vaša sposobnost: umetnost usmerjanja številnih interesov k skupnemu cilju in usklajevanju gibanja."
                },
                {
                    simbol: "Lovrojev venec na palici",
                    opis: "Venec na a palici je simbol za višji jaz."
                },
                {
                    simbol: "Zelena kapa",
                    opis: "Tukaj je nekaj v gibanju, kar je še vedno zelo zeleno. Pozitivno: velika rast potencial, narava, svežina, upanje. Negativno: veliko nezrelosti, lažni upi (idealizem), skriti nagoni (pokrit konj)."
                },
                {
                    simbol: "Rdeča in rumena oblačila",
                    opis: "Rdeča in rumena: srce in sonce. Pozitivno: moč, volja, strast s hladno glavo, modrost in razsvetljenje. Negativno: zavzetost z zavistjo, zatiranje temnega."
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "DA",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "6",
                },
                {
                    ime: "Element:",
                    vrednost: "Ogenj",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Jupiter v levu",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Tiphareth (lepota)",
                },
                {
                    ime: "Čas:",
                    vrednost: "Avgust 2 - avgust 11"
                }
            ],
        }
    }
}
