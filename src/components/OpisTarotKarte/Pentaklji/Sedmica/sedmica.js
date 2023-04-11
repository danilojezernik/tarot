export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "Sedmica pentakljev",
                    rekDesno: "Kar seješ, to žanješ<br>Čas za žetev<br>Razmislite o alternativah",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>V Sedmici pentakljev se človek naslanja na svojo motiko in strmi navzdol v svoj obilen pridelek. Dolgo in trdo je obdeloval semena, da jih je vzgojil v ta uspešen vrt in zdaj si lahko vzame odmor in uživa sadove svojega dela. Vendar bodite pozorni na izraz na njegovem obrazu: videti je tudi utrujen – celo nekoliko "preveč" – od tako trdega dela za to uspešno letino. Uspeh prihaja iz trdega dela in potrpežljivosti, vendar vas ta karta opominja, da pazite, da ne pretiravate in se ne izčrpate.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Sedmica pentakljev kaže, da razumete vrednost vlaganja časa in energije zdaj za dolgoročne nagrade in imate močno željo vlagati v trajnostne rezultate. Ne iščete hitrih zmag. Prav tako se želite prepričati, da svojo pozornost usmerjate na prava področja, namesto da zapravljate čas in trud za naloge, ki ne bodo prinesle nobene vrednosti.</p><p>Ko se ta karta pojavi pri branju tarota, jemljite to kot povabilo, da se umaknete od vsakodnevnih opravil in pogledate širšo sliko. Praznujte, kar ste ustvarili, in ocenite svoj dosedanji napredek. Ste na dobri poti? Ste osredotočeni na prave naloge za svoj cilj?</p><p>Podobno, če načrtujete prihodnost, vas Sedmica pentakljev spodbuja, da zavzamete dolgoročen pogled in ocenite, kam lahko najbolje vložite svoj čas in energijo za največji učinek. Nočete več vlagati svojega srca in duše v nekaj, če ne boste poželi nagrad za svoje delo – in nedvomno ste videli, da so nekatera področja v vašem življenju le črpalci energije.</p><p>Če ste zadnjih nekaj mesecev trdo delali ali vlagali dodatne napore v nekaj zahtevnega in pomembnega, je podvig ali projekt blizu vrhunca. Bodite prepričani, vaš trud se bo poplačal. Verjetno boste videli finančne ali druge nematerialne nagrade za vse svoje trdo delo.</p><p>Včasih pa lahko Sedmica pentakljev kaže na razočaranje s počasnimi rezultati. Utrujali ste se z nečim pomembnim in morda ste zaskrbljeni, da bo vaš trud ostal nepoplačan. Bodite potrpežljivi in cenite napredek, ki ste ga dosegli do zdaj. Če se vaše delo še ni izplačalo, kot ste načrtovali, ne pozabite, da so vaša pričakovanja morda neustrezna. Ni garancij. Bodite hvaležni, osredotočite se na sedanjost in naredite, kar lahko, s tem, kar imate.</p>',
                    besedePokoncna: 'Dolgoročni pogled, trajni rezultati, vztrajnost, spodbujati prizadevanja, vlaganje, napor in trdo delo bosta povzročila rast, premor med razvojem, ponovna ocena.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Obrnjena Sedmica pentakljev nakazuje, da so vaša prizadevanja v tem času morda razpršena in se sprašujete, ali vlagate na prava področja. Nekaj začetnega denarja lahko porabite za stvari, ki ne bodo prinesle "sadov". Ali pa tisto, za kar ste mislili, da vas bo osrečilo, povzroča stres in tesnobo in ni vredno truda. Preglejte, kam vlagate svoj čas, energijo in vire, ter se prepričajte, da ste zadovoljni s svojim trenutnim napredkom in prejemanjem donosa teh naložb. Uporabite sistem določanja prednosti, da zagotovite, da ne zapravljate dragocenih virov na področjih, ki ne bodo prinesla rezultatov.</p><p>Podobno, obrnjena Sedmica pentakljev nakazuje, da čeprav morda še naprej vlagate veliko energije v določeno situacijo, morda ne boste izkoristili nagrad, ki jih iščete. Kot taka vas ta karta poziva, da skrbno določite prednost svojih dejavnosti. Narediti morate analizo stroškov in koristi glavnih vključenih nalog, da bi vaš projekt uresničili, saj vam nekatere vzamejo veliko časa in energije, ne da bi prinesle želene nagrade. E-pošta in sestanki so na primer ogromni potratniki časa, če niso učinkovito uporabljeni. Premislite, kaj morate še narediti, da pridete tja, kamor želite biti. Osredotočite se.</p><p>Kot kritična moč lahko obrnjena Sedmica pentakljev pokaže, da veste, kdaj prenehati vlagati v nekaj, ko vidite majhen donos. Nekateri ljudje razmišljajo, da bi se še naprej "trdili", samo zato, ker so porabili čas, energijo ali denar in nočejo priznati poraza. Vendar ste spretni pri prepoznavanju, kdaj vam situacija ne prinaša več nobene vrednosti, in veste, kdaj morate to zapakirati in poskusiti nekaj drugega.</p><p>Pri branju razmerja obrnjena Sedmica pentakljev pomeni, da ste zelo trdo delali na postavljanju temeljev za vašo zvezo, zdaj pa vas skrbi, da boste izgubili vse. Morda ste tudi razočarani, ker odnos ne napreduje ali raste tako hitro, kot ste upali, še posebej, če vložite toliko časa in energije. Včasih lahko svoje srce in dušo vložite v nekaj, kar je brez garancije. Morda boste spoznali, da to razmerje preprosto ni vredno vašega časa, ne glede na to, koliko se trudite.</p>',
                    besedeObrnjena: 'Pomanjkanje dolgoročne vizije, omejen uspeh ali nagrada, majhen napredek, nepotrpežljivost, tesnoba, lahko so naložbe nedonosne, frustracije, deloholik, ne dokončati.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Pripravljen sem počakati na svojo nagrado.\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Poza I",
                    opis: "Čakanje, razmišljanje, odmor ali ustavitev. Ne glede na to, ali je vaše delo pred vami ali za vami, je tukaj situacija povezana z inventuro ali morda razrešitvijo skrivnosti: \"Kaj je pomen vsega tega?\""
                },
                {
                    simbol: "Poza II",
                    opis: "Ali nima pojma, kam naj se obrne?! Ali pa ima samo ustvarjalni premor. Ali skrbno pregleduje, kaj je tam, in išče znake in sledi!"
                },
                {
                    simbol: "Porazdelitev pentakljev I",
                    opis: "Kopica pentakljev kaže, kako se je do sedaj vedno delalo na ustaljen način. En sam ob njegovih/vaših nogah označuje nov pristop, lastno stališče, inovativnost."
                },
                {
                    simbol: "Različne barve škornjev",
                    opis: "Dva škornja kažeta, da je razpet med dva svetova, preteklost in prihodnost."
                },
                {
                    simbol: "Porazdelitev pentakljev II",
                    opis: "Kot pravi pregovor, ima vse dve plati. Nekateri vidiki postanejo jasni šele, ko smo pripravljeni dvomiti o lastnem stališču in videti stvari z drugačne perspektive."
                },
                {
                    simbol: "Izraz I",
                    opis: "Položaj glave izraža ali zmedenost, ampak tudi skrbno študijo. Menijo, da je izvor besede \"religija\" \"ponovno branje\" - temeljita preiskava."
                },
                {
                    simbol: "Izraz II",
                    opis: "Tisti, ki pozorno pretehta vse vidike situacije, morda potrebuje več časa kot drugi. Večja pa je verjetnost, da bo našel skrita medsebojna razmerja in nove rešitve."
                },
                {
                    simbol: "Čevelj I",
                    opis: "Simbol pravilne uporabe pravega orodja za učinkovito korelacijo med umom in materijo (za kar na splošno stoji vsak pentakelj z vpisanim pentagramom)"
                },
                {
                    simbol: "Čevelj II",
                    opis: "Že pridobljene izkušnje = orodje za ustvarjanje novega. Iz tradicionalnih načinov izberite veljavno, dodajte svoj prispevek in pustite, da obstoječi pozitivni pristopi sodelujejo in ustvarijo nekaj novega."
                },
                {
                    simbol: "Mešane barve",
                    opis: "Predstave oblačil: prepletata se lastno in zunanje, tradicija in lasten pogled. Zdaj boste našli nalogo, ki vam ustreza — prispevek, ki ga je svet čakal!"
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "NE",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "7",
                },
                {
                    ime: "Element:",
                    vrednost: "Zemlja",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Saturn v biku",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Netzach (Zmaga)",
                },
                {
                    ime: "Čas:",
                    vrednost: "Maj 11 - maj 20"
                }
            ],
        }
    }
}
