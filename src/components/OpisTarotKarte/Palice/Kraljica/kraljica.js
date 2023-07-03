export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "Kraljica palic",
                    rekDesno: "Energična in ukazovalna<br>Ženstvena in močna<br>Edinstven in samozavesten pristop",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>Kraljica palic sedi na prestolu, okrašenem z levoma, obrnjenima v nasprotne smeri, simbolom ognja in moči. V njeni levi roki, na njeni kroni in za njo so sončnice, ki simbolizirajo življenje, plodnost, veselje in zadovoljstvo, njena desna roka pa drži palico z enim majhnim kalčkom, ki požene življenje. Ob njenih nogah sedi črna mačka, znak, da je ta kraljica drzna in odprta, hkrati pa je v stiku s svojim senčnim jazom – temnejšo, manj znano stranjo svojega bitja.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Kraljica palic vas spominja, da ste optimistični, pogumni in odločni. Tukaj ste, da spregledate svoje ustvarjalne vizije in življenjski namen, tudi kljub težavam in izzivom. Zelo samouresničeni in samozavedni veste, kako najbolje usmeriti svoje prednosti in slabosti, da dosežete svoje cilje. Ste optimistični in polni idej, ki jih lahko delite z drugimi. Veste, kaj hočete in kako to doseči, ter ste mojstrski v sodelovanju z drugimi, da dosežete svoje cilje. Ostanite močno odločni in osredotočeni na svoje cilje, hkrati pa bodite prijazni in optimistični s tistimi okoli sebe.<p></p>Kraljica palic vas prosi, da ste pogumni pri svojih podvigih in dejanjih. Ne bojte se imeti svoje prave moči in jo dati v svet. Imate toliko za ponuditi – zato sijte s svojo svetlobo! Verjemite vase in v to, za kar se zavzemate, in naj vas ne bo strah spregovoriti in biti slišan. Nihče vas ne bo utišal.<p></p>Kraljica palic predlaga, da vodite živahno življenje, navezujete stike z drugimi in se izpostavljate, ko sledite svoji ustvarjalni viziji. Izžarevate zdravje in vitalnost, vaša notranja živahnost pa vas napolni z energijo in navdihom – po naravi rojeni, inteligentni vodja, ki aktivno navdihuje druge. Lahko ste ta, ki vplivate na druge s svojo vizijo, pogumom in odločnostjo. Drugim vlivate zaupanje in jim dajete moč in samozavest, da lahko dosežejo vse, kar si zadajo.<p></p>Kraljica palic tudi kaže, da se v svojem zunanjem svetu popolnoma izražate in uživate v tem, da ste v središču pozornosti. Ustvarite močan prvi vtis in lahko hitro osvojite druge s svojo sladko, toplo in očarljivo naravo. Zdaj je pravi čas, da se predstavite in spoznate nove ljudi ali ustvarite skupnost podobno mislečih ljudi. Pritegnili jih bodo vaša energija, strast in entuziazem, skupaj pa lahko ustvarite pozitivne spremembe v svetu.<p></p>Končno vas Kraljica palic spodbuja, da spoznate svoj senčni jaz, manj znano in včasih temnejšo plat tega, kdo v resnici ste. Ni nujno, da je to negativen vidik vas samih, lahko pa je nekaj, česar večina ljudi ne ve o vas ... še! Morda je to vaš črni smisel za humor, skrivno življenje iz vaše preteklosti ali strasten projekt, ki ste ga skrivali. Čeprav bi morda želeli zaščititi ta del sebe, vas Kraljica palic spodbuja, da to plat izrazite bolj odkrito z drugimi – ne bojte se tu in tam pokazati svoje sence. Omogočil vam bo povezovanje z drugimi na globlji ravni.</p>',
                    besedePokoncna: 'Pogum, zaupanje, neodvisnost, družabni metulj, odločnost, ženska, naklonjenost naravi ali domu, privlačnost, ukaz, nekdo, ki je všečen ali časten.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Obrnjena Kraljica palic kaže, da ste dosegli mesto samospoštovanja in samozavesti. Poznate se na globoki ravni in vam je jasna osebna resnica in sistem prepričanj. Veste, za kaj se zavzemate, in mnenja drugih vas ne ganejo zlahka. Določili ste tudi, kaj za vas pomeni uspeh, čeprav se razlikuje od definicij drugih.</p><p>Obrnjena Kraljica palic lahko tudi nakazuje, da ste morda bolj introvertirani kot običajno. Namesto da bi bili družabni metuljček in središče pozornosti, raje ostanete ob strani in opazujete, kaj se dogaja. To je povsem v redu – spoštujte svoje potrebe in občutke in se ne silite v ekstrovertnost, ko to ne želite biti. Morda se tudi počutite poklicane, da preživite več časa sami, da se lahko povežete s svojim notranjim jazom in slišite svoj notranji glas.</p><p>Če vam je primanjkovalo samozavesti, vas obrnjena Kraljica palic vabi, da svojo energijo in pozornost usmerite navznoter ter se osredotočite na ponovno vzpostavitev samega sebe in svoje notranje odpornosti. Morda ste svojo moč predali drugim, ker ste preveč pozorni na njihove misli in mnenja. Zdaj morate svoje zavedanje usmeriti navznoter, da boste lahko slišali sebe in dostopali do svojih osebnih prednosti in talentov. Odkrijte, kdo ste, in bodite pogumni pri izražanju samega sebe v vsem, kar počnete, tudi če se razlikuje od tega, kar drugi pričakujejo od vas.</p>',
                    besedeObrnjena: 'Samospoštovanje, samozavest, zaprtost vase, ponovna vzpostavitev občutka samega sebe, stroga, gospodovalna, ljubosumna in maščevalna narava, prevara, nezvestoba.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Sem močno kreativen. Zaupam in netim svoj notranji ustvarjalni ogenj.\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Poza",
                    opis: "Noge in roke so razmaknjene. Lasje so srednje dolgi. Kraljica je videti sproščena, pripravljena na ukrepanje, čuječna, pokončna, veličastna, ne utesnjena in ne prestrašena – kraljica se zaveda svojih zmožnosti."
                },
                {
                    simbol: "Črna mačka",
                    opis: "Moč instinkta, individualnost, nepredvidljivost, preživetje (mačjih devet življenj). Negativno: zvitost."
                },
                {
                    simbol: "Sončnice",
                    opis: "Pozitivno: vitalnost, veselje do življenja, vedno obrnjena proti soncu. Negativno: ignoriranje temnejše plati, pomanjkanje prizemljenosti, brez korenin."
                },
                {
                    simbol: "Puščava v dveh barvah",
                    opis: "Negativno: zaiti, biti odrinjen, živeti v svojem malem svetu. Pozitivno: ustvarjalna, transformativna moč. Delo z različnimi energijskimi vzorci. Koncentracija sil (piramide)."
                },
                {
                    simbol: "Rdeči čevelj",
                    opis: "Leva noga / rdeči čevelj se vidi pod obleko: Nezavestna stran reagira prvi. Rdeči čevelj: posvetiti se zadevi z vsem srcem in voljo (od glave do prstov). Temeljitost, popolnost - in včasih impulzivnost."
                },
                {
                    simbol: "Sivi podstavek",
                    opis: "Pozitivno: nevtralnost, objektivnost, zavest v gibanju. Negativno: brezbrižnost, vztrajanje pri načelnosti, nepopustljivost. Vse mačke so sive v temi - svari pred nezavednimi sanjami in načeli."
                },
                {
                    simbol: "Rdeči levi",
                    opis: "Strast in moč. Simbol resnične volje. Znak poguma, divjosti, spolnosti – ampak tudi za nepotrebne strahove, predvsem strah pred letenjem. Opozorilo pred razkazovanjem."
                },
                {
                    simbol: "Prestol, ki sega do neba",
                    opis: "Naloga in sposobnost vzpostaviti vez med nebom in zemljo, med teorijo in prakso, željo in realnostjo."
                },
                {
                    simbol: "Rumena in siva",
                    opis: "(obleka in puščava) Rumena: sonce, zavest, budnost. Tudi: zavist, prevara in zablode. Siva: pomanjkanje predsodkov, objektivnost. Tudi: brezbrižnost, apatija."
                },
                {
                    simbol: "Svetlo sivo nebo",
                    opis: "Nebo / nebesa = božje kraljestvo (sila usode) in kraljestvo človeška volja (človekova volja so njegova nebesa). Zdaj je pomembno prinesti usodo in lastno voljo do srečnega zakona!"
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "",
                },
                {
                    ime: "Element:",
                    vrednost: "",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "",
                },
                {
                    ime: "Čas:",
                    vrednost: ""
                }
            ],
        }
    }
}
