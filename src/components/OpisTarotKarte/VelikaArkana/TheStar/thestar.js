export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "XVII - Zvezda (The Star)",
                    rekLevo: "Stvari so takšne kot so. Ko ponoči gledamo v vesolje, ne delamo primerjav med pravimi in napačnimi zvezdami, niti med dobro in slabo urejenimi ozvezdji.",
                    rekDesno: "Srečni ljudje gradijo svoj notranji svet; nesrečni ljudje krivijo svoj zunanji svet.",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>Karta Zvezda prikazuje golo žensko, ki kleči na robu majhnega bazena. Drži dve posodi z vodo: eno v levi roki (podzavest) in eno v desni (zavest). Vodo izliva, da nahrani zemljo in nadaljuje cikel rodovitnosti, ki ga predstavlja bujno zelenje okoli nje. Druga posoda izliva vodo na suho v petih potočkih, ki predstavljajo pet čutov.</p><p>Ženska ima eno nogo na tleh, kar predstavlja njene praktične sposobnosti in zdrav razum, drugo nogo pa v vodi, kar predstavlja njeno intuicijo in notranje vire ter posluša svoj notranji glas. Je gola, ki predstavlja njeno ranljivost in čistost pod prostranostmi zvezdnega nočnega neba. Za njo sije ena velika zvezda, ki predstavlja njeno esenco, in sedem manjših zvezd, ki predstavljajo čakre.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Zvezda je naslednja, ki sledi karti Trdanjave v tarotu in pride kot dobrodošla odloga po obdobju uničenja in nemira. Prestali ste številne izzive in se znebili vseh omejujočih prepričanj, ki so vas prej zadrževala. Spoznavate svoje temeljno bistvo, kdo ste pod vsemi plastmi. Ne glede na to, kaj vam življenje prinese na pot, veste, da ste vedno povezani z božansko in čisto ljubečo energijo. Imate nov občutek, novo spoštovanje do jedra svojega Bitja.</p><p>Zvezda prinaša obnovljeno upanje in vero ter občutek, da vas vesolje resnično blagoslavlja. Vstopate v mirno, ljubeče obdobje svojega življenja, polno mirne energije, duševne stabilnosti in bolj poglobljenega razumevanja sebe in drugih okoli sebe. To je čas pomembne osebne rasti in razvoja, saj ste zdaj pripravljeni prejeti številne blagoslove vesolja.</p><p>S karto Zvezda je vse mogoče in čarovnija se pretaka okoli vas. Vaše srce je polno upanja in vaša duša se povzdigne do najvišjih višin, ko spoznate, da se vaše sanje lahko uresničijo. Dovolite si sanjati, si prizadevati, dvigovati se na kakršen koli način, da lahko dosežete zvezde. Tukaj so in čakajo vas.</p><p>Morda boste želeli najti ali ponovno odkriti smisel, navdih ali namen v svojem življenju. V svojem življenju delate nekaj pomembnih sprememb, se spreminjate iz starega sebe v novega sebe in s tem prinašate svež pogled: "S starim ven in z novim naprej!" Izbirate najvišjo različico sebe. To je globoko duhovno potovanje, ki bo v vaše življenje prineslo večji smisel in namen ter obnovilo vašo notranjo energijo. Odstranite vsa omejujoča prepričanja, maske ali prevare in živite v svoji pristni naravi. Bodite odprti za nove ideje in rast ter poslušajte tihi glas v sebi.</p><p>Zvezda nakazuje tudi velikodušnost. Želite dati ali deliti svoje bogastvo z drugimi, da bi pomagali spremeniti njihova življenja. Vaše srce je odprto in zdaj želite blagoslove, ki ste jih prejeli, vrniti, da bi drugim koristilo.</p>',
                    besedePokoncna: 'Upanje, vera, namen, prenova, duhovnost, dobro zdravje, iskrica božanskega, sijaj, občutek navdihnjenosti, blaženost, priložnosti, kreativnost, velikodušnost.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Obrnjena zvezda lahko pomeni, da ste izgubili vero in upanje v vesolje. Morda se trenutno počutite preobremenjeni z življenjskimi izzivi in se sprašujete, zakaj ste v to prisiljeni. Veste, da življenje meče ovinke, ampak ali je res? Zakaj to in zakaj zdaj?! Morda obupano kličete vesolje, naj vam da dihati, vendar se trudite videti, kako je božansko na vaši strani. Poglejte bolje in videli boste. Božansko je vedno tam. Vzemite si trenutek in se vprašajte, kaj je globlja življenjska lekcija in zakaj je to blagoslov, ne kazen.</p><p>Pogosto je obrnjena Zvezda preizkušnja vere. Ko se soočite z zahtevno situacijo, se lahko sesujete kot Trdnjava ali pa trdno stojite v svojem prepričanju, da je božansko povsod. Naučili se boste tudi, kako zaupati ne samo v vesolje, ampak tudi vase. Vi ste posoda za božansko in ko imate vero in zaupanje vase, dovolite božanskemu, da zasije skozi.</p><p>Obrnjena zvezda prav tako kaže, da ste nezavzeti in nenavdihnjeni z življenjem ali deli svojega življenja (na primer delo, hobiji, odnosi, osebni projekti, itd.). Morda ste začeli z veliko vizijo in navdušenjem, zdaj pa ste preobremenjeni z vsakodnevnimi rutinami, ki so dolgočasne in turobne. Ta karta je še posebej pomembna za branje kariere, ko se počutite ločeni od dela, ki ga opravljate, in se sprašujete, ali je čas, da greste naprej ali naredite spremembo. Ponovno se povežite s tem, kar je resnično pomembno za vas in namen vaše duše v tem življenju. Uskladite svoje vsakdanje življenje s tem namenom in našli boste nove vire navdiha.</p><p>Ta obrnjena karta vas poziva, da si vzamete čas za samooskrbo in prehrano na globoko osebni in duhovni ravni. Vaše zaloge energije so morda že pošteno izpraznjene, zato si raje vzemite čas samo zase, kot da se še bolj trudite. Naročite se na masažo, ponovno se povežite s svojimi dnevnimi duhovnimi praksami, privoščite si toplo kopel – karkoli je potrebno za negovanje vašega duha in ponovno povezovanje s svojim notranjim bistvom. Biti v bližini vode ali sodelovati v ritualu čiščenja vas bo pomagalo nahraniti na globlji ravni.</p>',
                    besedeObrnjena: 'Pomanjkanje vere, obup, pomanjkanje samozaupanja, nepovezanost, pomanjkanje navdiha, brezupnost, zaprta vrata, ustvarjalna blokada, dolgočasje, osredotočanje na negativno.',

                    podnaslovMeditacija: "Meditacija",
                    opisMeditacija: "\"Naj vedno sije nad mano nikoli zahajajoča zvezda moje božanske in nesmrtne duše.<br>Imam vodilno luč, ki je moj notranji Bog.<br>Naj nikoli ne izgubim izpred oči svoje nesmrtne in božanske duše,<br>vsajene v moje bitje pred začetkom časov.<br>Sem znotraj božje orbite, planeta na nebu duš.<br>Sem zvezda kot vsi drugi ljudje.<br>Naj moja luč, skupaj z lučjo vseh drugih, vedno sveti.\"<br>",

                    kljucnaVpr: '<p><b>Ključna vprašanja:</b> Ali dovolim, da je moj višji vir moj vodnik? Kako naj negujem sebe in tiste okoli sebe? Ali drugim oddajam prisotnost miru in harmonije? Kaj lahko naredim, da bo več miru v mojem dnevu? Ali dovolim miru in sprostitvi, da tečeta skozi moje življenje? Kaj lahko naredim, da mi bo bolj udobno s seboj in s svojo okolico?</p>',

                }
            ],
            opisSimbolov: [
                {
                    simbol: "Poza",
                    opis: "Predanost in kontemplacija. Morda se ta položaj ženske sklicuje tudi na Narcisusa, ki se je zaljubil v svoj odsev ali pa zaman išče svojo podobo v razburkanih vodah."
                },
                {
                    simbol: "Vrča",
                    opis: "Predstavljata duhovno kapaciteto, utelešenje naših čustev. Tudi starodavni spisi opisujejo človeka samega kot posodo, ki jo je oblikoval Bog. Prav tako sta vrča napolnjena s čisto vodo, kar govori o tem, da moramo biti čisti če želimo iti naprej in se razvijati. Čiščenje in prenova sta nikoli končana toka."
                },
                {
                    simbol: "Voda",
                    opis: "Voda predstavlja človeška čustva in intuicijo."
                },
                {
                    simbol: "Voda v vodo, voda v zemljo",
                    opis: "To je simbol kozmičnega cikla. Prav tako prostor za vse in vse v prostoru - nekaj energije se porabi za rodovitnost zemlje nekaj pa jo teče naravnost nazaj."
                },
                {
                    simbol: "Pet potokov",
                    opis: "Zemlje je rodovitna zaradi vode. Pet tokov predstavlja tudi bistvo vsakega človeka (5 čutov: vid, vonj, sluh, okus in otip)."
                },
                {
                    simbol: "Golota",
                    opis: "V negativnem smislu je opozorilo proti nesramnosti in surovosti. V pozitivnem smislu pa predstavlja osebno verodostojnost, pravljično lepoto. Golota je prav tako simbol lahkotnosti, s katero se premika po svetu. Ničesar ne skriva in ji je udobno in je mirna."
                },
                {
                    simbol: "Osemkraka zvezda",
                    opis: "Osem konic zvezde spominja na diamante. Diamant je starodavni simbol za čisto, resnično, jasno in očiščeno jedro duše, neuničljivo bistvo, ki prebiva v vsakem človeku. Osemkraka zvezda je tudi simbol upanja in vodstva."
                },
                {
                    simbol: "Noga na vodi",
                    opis: "V negativnem smislu je pomen tega, da ni dostopa do občutkov, da si človek ne upa stopiti v vodo, kot da bi bila duša zamrznjena, nezmožna potopa ali se prepusti vodi. V pozitivnem smislu pa voda podpira in duša in vera dajeta osnovo in stališče."
                },
                {
                    simbol: "Drevo na hribu",
                    opis: "Tako kot gora z vrhom v ozadju, drevo s svojimi koreninami in krošnjo pomeni povezavo med nebom in zemljo, za postopno združevanje mikrokozmosa in makrokozmosa."
                },
                {
                    simbol: "Ptica",
                    opis: "Dolg kljun je znak Ibisa. Stari egipčani so častili boga Tota (Grško Hermes) in ga upodabljali z glavo Ibisa. Ibis je vodil Noeta po koncu velikega potopa. Prav tako je ptič simbol svobode."
                },
                {
                    simbol: "Svetlo in modro nebo",
                    opis: "Predstavlja nebesa ali božansko kraljestvo in kraljevsko voljo. Svetlo modro nebo predstavlja lahkotnost, brezbrižnost, luciden um."
                },
                {
                    simbol: "Sedem zvezd",
                    opis: "Sedem zvezd predstavlja sedem glavnih čaker v človeku, ki so: Muladhara, Swadhisthana, Manipura, Anahata, Vishuddhi, Ajna, Sahasrara."
                },
            ],
            modrostiKarte: [
                {
                    modrost: "\"Ko je dovolj temno, lahko vidiš zvezde.\""
                },
                {
                    modrost: "\"Vizija brez akcije je sanjarjenje. Akcija brez vizije je nočna mora.\""
                },
                {
                    modrost: "\"\"Če slediš svoji zvezdi, ne moreš zatajiti veličastnih nebes.\""
                },
                {
                    modrost: "\"Ko je dovolj temno, lahko vidiš zvezde.\""
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "DA",
                },
                {
                    ime: "Barve:",
                    vrednost: "Modra, bela, oranžna, zelena, vijolična",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "8",
                },
                {
                    ime: "Čakre:",
                    vrednost: "Sahasrara",
                },
                {
                    ime: "Element:",
                    vrednost: "Zrak",
                },
                {
                    ime: "Zodiak:",
                    vrednost: "Vodnar",
                },
                {
                    ime: "Planet:",
                    vrednost: "Uran, Rahu",
                },
                {
                    ime: "Čas:",
                    vrednost: "Januar 20 - februar 18"
                },
                {
                    ime: "Kristali:",
                    vrednost: "Oniks, topaz, safir"
                },
                {
                    ime: "Telo:",
                    vrednost: "Meča, gležnji, krvni obtok"
                }
            ],
            background: "bg",
        }
    }
}
