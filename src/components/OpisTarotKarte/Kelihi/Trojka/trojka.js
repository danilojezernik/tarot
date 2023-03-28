export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "Trojka kelihov",
                    rekDesno: "Praznovanje z drugimi<br>Veselo vzdušje<br>Posebna priložnost",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>V Trojki kelihov tri mlade ženske plešejo druga z drugo v krogu in dvignejo skodelice visoko v zrak in nazdravljajo veselju in slavji. Druga drugo gledajo s hvaležnostjo, častjo in spoštovanjem, povezujejo pa jih čustvena povezanost in prijateljstvo. Obstaja občutek, da dvignejo druga drugo in slavijo edinstven prispevek vsake ženske k skupini. Tla so prekrita s cvetjem, sadjem in bučami, ki simbolizirajo praznovanje obilne letine in dobrote v življenju.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Trojka kelihov je karta praznovanja, prijateljstva, sestrstva in ustvarjalnega sodelovanja. Vaši prijatelji in družina so tukaj, da vas podpirajo in vas dvignejo na še višje ravni uspeha. Praznujte z njimi in uživajte v njihovem druženju.</p><p>Ta karta spominja na povezavo med štirimi ženskimi liki v Seks v mestu – Carrie, Charlotte, Samantha in Miranda. Druga drugi stojijo ob strani v dobrem in slabem in so vedno tam druga drugi, ko se prebijajo skozi odnose, kariero in različna življenjska potovanja. Skoraj vsaka epizoda prikazuje, kako uživajo v družbi druga druge, pogosto zaradi svetovljana v razkošni restavraciji na Manhattnu. Dobiš občutek, da bodo te dekleta prijateljice za vedno in vedo, da se lahko vedno zanesejo na podporo in sočutje.</p><p>Ko se Trojka kelihov pojavi v branju tarota, vas spodbuja, da se zberete s svojimi najbližjimi prijatelji in se skupaj zabavate, pogovarjate, smejite, delite in ustvarjate. Skupaj dajete in prejemate ljubezen, podporo in sočutje, ki jih potrebujete drug od drugega. Morda vas bo navdihnilo, da bi organizirali dekliški ali moški večer, vikend odmik ali ustanovili ženski ali kakšen moški krog, da bi lahko združili moči s podobno mislečimi ljudmi. Energija je visoka in tukaj ste, da skupaj počnete neverjetne stvari.</p><p>Trojka kelihov pogosto nakazuje zelo družabno obdobje – morda rojstni dan, poroko, praznično sezono ali počitnice s prijatelji. Na to glejte kot na priložnost, da se sprotite in za nekaj časa pozabite na vsakodnevne obveznosti. Namesto tega preživite kvaliteten čas s prijatelji in družino ter uživajte!</p><p>Ta karta vas tudi vabi, da sodelujete z drugimi pri ustvarjalnem projektu in drug drugega navdihujete, da dosežete nove višine. Skupaj si prizadevate za skupni cilj za večje dobro drugih in če se obrnete na druge in se združite, lahko dosežete veliko, tako da svojo pozitivno energijo in strast delite s širšo skupnostjo. Trojka kelihov je zelo kreativna karta, ki nakazuje, da si lahko prizadevate za ustvarjalno izhodišče v skupinskem okolju, kot je tečaj umetnosti ali plesa. To je odličen način za povezovanje z drugimi in dostop do vaših ustvarjalnih sposobnosti.</p>',
                    besedePokoncna: 'Praznovanje, prijateljstvo, ustvarjalnost, sodelovanja, sreča v ljubezni, srečen zaključek, neznani talenti so odkriti, občutljiva in sočutna oseba, gostoljubnost.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Medtem ko je pokončna Trojka kelihov karta prijateljstva in družabnih dogodkov, obrnjena karta nakazuje, da bi zdaj raje bili sami. Morda ste pred kratkim preživeli veliko časa z drugimi, zdaj pa potrebujete nekaj časa zase. Ali pa se morda ne ujemate več z nekaterimi svojimi prijatelji ali družbeno skupino in ste pripravljeni iti naprej. Včasih pa se lahko znajdete v "zunanjem krogu", izključeni iz krogov drugih ljudi in se počutite izolirani in sami. Spoštujte svojo željo, da bi se za nekaj časa umaknili iz družabnega prizorišča in uživajte v tem času sami, da boste lahko jasno razumeli, s kom se najbolj želite povezati v prihodnosti.</p><p>Če ste vključeni v ustvarjalni projekt, je zdaj morda čas, da delate samostojno in ne v skupini. Obrnjena Trojka kelihov lahko kaže, da je vaša ustvarjalnost zadušena ali da ste prisiljeni, da se prilagodite skupini. Morda ste del tesno povezanega kluba, ki dela stvari na določen način in ni odprt za inovacije ali alternativne pristope. Premisliti morate, ali ste pripravljeni žrtvovati svoje ustvarjalne sposobnosti v korist želja skupine.</p><p>Če doživljate visoko raven stresa ali ste trdo delali, se obrnjena Trojka kelihov prikaže kot sporočilo, da si vzamete nekaj časa, da si opomorete in pridobite podporo prijateljev, preden se vrnete v realnost. Morda ste tako trdo delali, da ste izgubili povezavo s prijatelji in družino. Zdaj je čas, da se ponovno povežete in ponovno določite prednost njihove ljubezni in podpore. Na to karto glejte kot na opomnik, da se znova povežete z ljudmi, ki so vam pomembni, se sprostite in se dobro zabavajte, ne da bi vas preveč skrbelo za posledice.</p><p>Po drugi strani pa lahko obrnjena Trojka kelihov pomeni pretirano uživanje. Morda ste večino noči zunaj na zabavah, jemljete droge ali močno pijete, medtem ko potrebujete ravnovesje v svojem življenju. Bodite pozorni na dolgoročne posledice svojih dejanj in se vprašajte, ali je tak način življenja vzdržen. Vzemite si odmor od družabne scene, da se ponovno zberete in se naspite.</p><p>Ko gre za branje odnosov, se lahko obrnjena Trojka kelihov včasih pojavi, ko je vpletena tretja oseba. Morda ste zavezani z nekom, ki je že v razmerju z nekom drugim, ne glede na to, ali to veste ali ne. Za več podrobnosti si oglejte druge karte. Sedmica mečev nakazuje izdajo zaupanja in možno goljufanje. Če vidite Petko mečev, verjetno že veste za drugo razmerje, vendar poskušate prezreti, da obstaja. Če vidite hudiča, razmislite o naravi razmerja, saj je verjetno hedonistično in nezdravo za vpletene. Malo verjetno je, da je ta situacija vzdržna, ker je "trije v množici" in nekaj je treba dati.</p>',
                    besedeObrnjena: 'Neodvisnost, čas zase, izolacija, bolečina, ogovarjanje, neznani talenti ostajajo skriti, pretirano uživanje, pomanjkanje čustvene rasti.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Življenje slavim vsak dan.\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Poza I",
                    opis: "Pozitivno: krožni ples, pogosta izkušnja, ki okrili srce in odpira obzorja. Negativno: nobeden od nosilcev pokalov ni videti zelo odprt, niti drug drugega ne nagovarjajo neposredno."
                },
                {
                    simbol: "Poza II",
                    opis: "Tukaj v pozitivnem in negativnem smislu vidimo \"moč žensk\" v akciji, a prapodoba, ki spominja na Veliko mater, tri Gracije, tri Mojre, Velika boginja kot devica, mati in modra ženska."
                },
                {
                    simbol: "Poza III",
                    opis: "Figure so v gibanju in se tudi nekoliko postrani gledajo. To je predstavitev moči čustev (latinsko: gibanje, izražanje)."
                },
                {
                    simbol: "Sadje / žetev",
                    opis: "Žetev je bogata – to je bogata podlaga za praznovanje. Uživajte življenje v skupnosti - vi ji pripadate. Naloga: Ne pozabite biti hvaležni za vse, kar vam je dano."
                },
                {
                    simbol: "Dvigovanje kelihov I",
                    opis: "Pozitivno: skupinske izkušnje, visoko dvigovanje kelihov, zabava, plodnost duše v svoji sposobnosti, da se dvigne nad samega sebe. Negativno: čustvena aroganca. Prirejanje predstave."
                },
                {
                    simbol: "Na prstih",
                    opis: "Pozitivno: ples, živahnost, lahkotnost, nazdravljanje. Negativno: fasada, izumetničenost, pretencioznost."
                },
                {
                    simbol: "Ples",
                    opis: "Negativno: pritisk skupine, omamljenost, izgubljanje samega sebe. Pozitivno: življenje je festival, \"Samo recite čarobno besedo in svet bo začel peti.\" (J. von Eichendorff)"
                },
                {
                    simbol: "Rdeča, bež, bela",
                    opis: "Liki predstavljajo tudi enotnost telesa, uma in duše. Rdeča je za dušo, bela za duha in bež za telo. Pozitivno: ljubite z vsemi čuti! Negativno: delitev med telesno, duševno in duhovno ljubeznijo."
                },
                {
                    simbol: "Svetlo modro nebo",
                    opis: "Pozitivno: lahkotnost, duhovno veselje, namen volje, luciden um. Negativno: naivnost, pobožne želje, opitost."
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "DA",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "3",
                },
                {
                    ime: "Element:",
                    vrednost: "Voda",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Merkur v raku",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Binah (razumevanje)",
                },
                {
                    ime: "Čas:",
                    vrednost: "Julij 2 - julij 11"
                }
            ],
        }
    }
}
