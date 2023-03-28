export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "Dvojka kelihov",
                    rekDesno: "Čustva se prepletajo<br>Harmonija s čustvi<br>Nič drugega kot pozitivno",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>Dvojka kelihov prikazuje mladeniča in dekle, ki si izmenjujeta kelih in si obljubljata svojo ljubezen. Nad njimi lebdi Hermesov kaducej – krilata palica z dvema kačama, ovito okroi nje – starodavni simbol trgovine in menjave. Na vrhu kaduceja je levja glava, ki označuje strast in ognjeno energijo ter nakazuje, da je med tema dvema osebama morda veliko ognjevite, spolne energije.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Če As kelihov predstavlja tok ljubezni od znotraj, je Dvojka kelihov tok ljubezni med dvema osebama. S to karto ustvarjate globoke povezave in partnerstva, ki temeljijo na skupnih vrednotah, sočutju in brezpogojni ljubezni. Medtem ko so ti odnosi še vedno v zgodnjih fazah, imajo potencial, da rastejo in se dolgoročno razvijejo v nekaj zelo izpolnjujočega in nagrajujočega. Medsebojno se spoštujete in cenite in skupaj dosežete višje ravni zavesti in razumevanja.</p><p>Ko se karta Dvojka kelihov pojavi v branju tarota, lahko sklenete novo partnerstvo, morda z ljubimcem, prijateljem ali poslovnim partnerjem. Oba sta osredotočena na ustvarjanje odnosa, ki je obojestransko koristen in, ki bo ustvaril situacijo, v kateri bosta obe strani imela koristi. Vidite se "iz oči v oči" in cenite, kaj drug drugemu lahko prineseta na mizo.</p><p>V romantičnem razmerju Dvojka kelihov kaže na cvetočo novo zvezo, ki temelji na medsebojni privlačnosti. Obstaja tako fizična kot dušna povezava, zaradi katere se vam vrti v glavi in ​​vam klecajo kolena. Drug iz drugega izvabita najboljše in dvigneta drug drugega na še višje ravni. Izmenjava čustev je iskrena in oba sta pripravljena storiti vse, kar je potrebno, da drug drugega podpirata. V nekaterih primerih se lahko Dvojka kelihov nanaša na poroko, ponudbo ali zaroko.</p><p>V poslovnem partnerstvu je Dvojka kelihov znak, da sta oba na isti valovni dolžini in delita podobno vizijo za podvig, ki ga ustvarjata skupaj. Morda nimate enakih veščin, vendar ustvarite čudovito sinergijo, ko delate skupaj. Na primer, eden od vaju je lahko nadarjen za prodajo in trženje, medtem ko drugi blesti pri vodenju poslovanja podjetja. Takšno partnerstvo – zgrajeno na zaupanju, harmoniji in medsebojnem spoštovanju – bo verjetno uspešno, dokler boste še naprej komunicirali drug z drugim in se osredotočali na svojo skupno usklajenost. (Čeprav nikoli ne škodi, če imate sklenjeno pogodbo ali sporazum, ki zagotavlja, da se to sanjsko poslovno partnerstvo nadaljuje.)</p>',
                    besedePokoncna: 'Začenja se nova romanca, dobro uravnoteženo prijateljstvo, harmonija, sodelovanje, enotna ljubezen, partnerstvo, medsebojna privlačnost, kompatibilnost, globoke povezave.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>V svojem bistvu je obrnjena Dvojka kelihov o ljubezni do sebe. Ljubezen, v kateri koli obliki, se začne z ljubeznijo do sebe. Ko se imate brezpogojno radi, sprejemate in cenite to, kar ste, ter spoštujete in spoštujete najbolj pristno različico sebe. Pozdravljate življenje sreče, ker v osnovi verjamete, da si ga zaslužite (in prav imate!). Ko pridete iz tega kraja ljubezni do sebe, samosprejemanja in samospoštovanja, boste imeli bolj izpolnjujoče, ljubeče odnose z drugimi. Vse se začne z ljubeznijo do sebe.</p><p>Stvar je taka: če se nimate radi, boste na koncu projicirali to pomanjkanje na druge, postali boste oprijemljivi in navezani, pritegnili k sebi napačne vrste odnosov ali, kar je še huje, končali v škodljivih situacijah. Tukaj je obrnjena senčna stran Dvojke kelihov. Torej, preden poiščete svojega očarljivega princa ali zavežete vozel s svojo življenjsko ljubeznijo, se prepričajte, da ste svoj kelih najprej napolnili z vsem tem čudovitim ljubezenskim sokom, ki je samo za vas. Če želite najti izpolnitev v svojem življenju in odnosih, poiščite ljubezen v sebi in jo dajte najprej sebi. Nobena druga oseba, materialna lastnina ali dosežek tega ne more storiti namesto vas.</p><p>Obrnjena Dvojka kelihov lahko včasih pomeni razhod ali razpad. Niste usklajeni drug z drugim in ne delite enake čustvene povezave kot v preteklosti. Morda boste opazili pomanjkanje zaupanja in biti odkrit drug z drugim se izkaže za težavo. Komunikacija je lahko omejena ali zadržana, pretok energije med vama pa zadušen. Če želite spremeniti to situacijo, se odprite, delite in zadržite varen prostor drug za drugega, da izrazita svoja čustva. Že z enim pogovorom lahko dramatično spremenite pretok energije.</p>',
                    besedeObrnjena: 'izguba ravnotežja v odnosu, burna strast, ljubezen se obrne na slabše, nesporazum, samoljubje, razhodi, disharmonija, nezaupanje, ni v harmoniji, napetost, prekinjena komunikacija.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Privlačim zdrave in pozitivne odnose.\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Poza",
                    opis: "Lika sta skoraj v pol-profilu. Pozitivno: dve polovici tvorita celoto. Negativno: če nekdo vedno vidi drugo osebo kot svojo boljšo polovico, potem je ta le napol oseba, ljubi le napol."
                },
                {
                    simbol: "Krilata levja glava I",
                    opis: "Močna čustva. V pozitivnem smislu je to zaščitni ščit, ki daje krila in sprošča ogromno energije. Močne energije (srčne in spolne narave) se medsebojno krepijo in ustvarjajo navdihujoče energijsko polje."
                },
                {
                    simbol: "Krilata levja glava II",
                    opis: "Čustva, ki niso dojeta, ali urok. Zaklenjena skupaj, ne moreta se premakniti s kraja. Dvojna vez, v krempljih drug drugega se prepletajo želje in strahovi."
                },
                {
                    simbol: "Palica Hermesa",
                    opis: "Pomeni povezavo med zagonom in intelektom. Kače, zvite okrog njega, naredijo vse večje ovoje višje ko so. Da bi zaustavili ta razvoj, se je treba vrniti h koreninam."
                },
                {
                    simbol: "Lovorovi in cvetni kroni",
                    opis: "Če pogledamo z negativnega vidika, je to začetek zapletenega razmerja. Pozitivna: kako lahko ljubezen in biti ljubljen vsakodnevno rutino spremenita v praznovanje in dvig nas samih na višjo raven."
                },
                {
                    simbol: "Barve visoke svečenice",
                    opis: "Bela in modra predstavljata žensko stran. Če ta vidik ostane nejasen, premalo razvit ali polovičen, potem predstavljajo tudi živalski del našega duhovnega življenja: prestrašeno, zahtevno, dezorientirano."
                },
                {
                    simbol: "Barve norca",
                    opis: "Črna in rumena predstavljata moški vidik. Če ta vidik ostane nejasen, premalo razvit ali polovičarski, potem stojijo tudi za animus del našega duhovnega življenja: idealistično, nesebično, obsedeno."
                },
                {
                    simbol: "Hiša na hribu",
                    opis: "Hribi na sliki predstavljajo vzpone in padce v življenju. Naloga: pogledati bi morali za našo boljšo polovico v sebi in s tem odpremo pot pravemu partnerstvu. Tako samodejno najdemo pot domov."
                },
                {
                    simbol: "Rdeči čevlji",
                    opis: "Življenjska sila, čustva, strast. Pozitivno: živahnost! Negativno: uročena oziroma preklet vidik naših čustev, na katere včasih nakazujejo le majhne podrobnosti."
                },
                {
                    simbol: "Svetlo modro nebo",
                    opis: "Pozitivno: lahkotnost, duhovno veselje, namen volje, luciden um. Negativno: pretirano občudovanje, pobožne želje."
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
                    vrednost: "Voda",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Venera v raku",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Chokmah (Modrost)",
                },
                {
                    ime: "Čas:",
                    vrednost: "Junij 21 - julij 1"
                }
            ],
        }
    }
}
