export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "Osmica mečev",
                    rekDesno: "Problem, ki ga sami ustvarite<br>Potisnjen v kot<br>Um je pobegnil vase",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>Osmica mečev prikazuje zvezano žensko z zavezanimi očmi. Obkroža jo osem mečev, ki jo navidezno ujamejo na mestu, kar je simbol omejujočih misli, prepričanj in načina razmišljanja, ki ji preprečujejo napredovanje v življenju. Vendar poglejte bližje: če bi ženska odstranila prevezo z oči, bi hitro ugotovila, da se lahko izogne svoji stiski tako, da opusti svoja omejujoča prepričanja in vzpostavi novo, bolj opolnomočeno miselnost. Voda, zbrana ob njenih nogah, nakazuje, da bi njena intuicija lahko videla tisto, česar njene oči ne morejo.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Osmica mečev razkriva, da se počutite ujete in omejene zaradi okoliščin. Verjamete, da so vaše možnosti omejene, brez jasne poti. Morda imate neizpolnjujočo službo, zlorabo v razmerju, znaten znesek dolgov ali pa situacija ni v skladu z vašim notranjim bitjem. Zdaj ste ujeti med skalo in nakovalom, brez razpoložljive ločljivosti. Vendar upoštevajte, da ženska na karti ni popolnoma zaprta zaradi osmih mečev okoli nje, in če bi želela pobegniti, bi lahko. Preprosto mora odstraniti prevezo z oči in se osvoboditi samonaloženih vezi, ki jo zadržujejo.</p><p>Ko se v branju tarota pojavi Osmica mečev, je to opozorilo, da vam vaše misli in prepričanja ne služijo več. Morda preveč razmišljate o stvareh, ustvarjate negativne vzorce ali se omejujete z upoštevanjem samo najslabšega možnega scenarija. Bolj kot razmišljate o situaciji, bolj se počutite obtičane in brez kakršnih koli možnosti. Čas je, da greste iz glave in opustite te misli in prepričanja, ki vas zadržujejo. Ko spremenite svoje misli, spremenite svojo resničnost. Zamenjajte negativne misli s pozitivnimi in začeli boste ustvarjati ugodnejšo situacijo zase.</p><p>Osmica mečev vam zagotavlja, da obstaja izhod iz vaše trenutne stiske – potrebujete le novo perspektivo. Vire, ki jih potrebujete, že imate, vendar je odvisno od vas, ali jih boste uporabili tako, da vam bodo koristili. Morda vam drugi ponujajo pomoč ali pa obstaja alternativna rešitev, ki je še niste v celoti raziskali. Bodite odprti za iskanje odgovora, namesto da bi obtičali pri problemu.</p><p>Osmica mečev je pogosto povezana z miselnostjo žrtve. Svojo moč ste predali zunanji entiteti in si dovolili, da ste se na nek način ujeli in omejili. Morda se vam zdi, da to ni vaša krivda – sem so vas postavili proti vaši volji. Morda se počutite kot žrtev, ki čaka na rešitev, toda ali vam ta energija služi? Če ne, je nujno, da vzamete nazaj svojo moč in osebno odgovornost ter odprete oči za možnosti, ki so pred vami. Dejstvo je, da imate izbire, tudi če vam niso všeč. Niste nemočni.</p><p>Včasih Osmica mečev nakazuje, da ste zmedeni glede tega, ali bi morali ostati ali oditi, še posebej, če ste v zahtevni situaciji. Ni tako jasno, kot bi si želeli, zato je odločitev zelo težka. Z eno nogo ste notri in upate, da se bodo stvari uredile, druga noga pa je zunaj, pripravljena na odhod. Težava je v tem, da vas skrbi, da bi lahko katera koli možnost povzročila negativne posledice, in tako ostanete tam, kjer ste. Spet vas ta karta prosi, da greste iz glave in se spustite v sebe in svojo intuicijo, da boste lahko slišali svoje notranje vodstvo. Vaše misli vam trenutno ne služijo, ampak vaša intuicija. Zaupajte si.</p>',
                    besedePokoncna: 'Negativne misli; omejevanje, ki si ga sami naložite, zapor, miselnost žrtve, neodločnost, cenzura, začasna bolezen, slabost, ujetnik, težke ovire, strah pred neuspehom, razočaranje, past je iluzija.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Obrnjena Osmica mečev nakazuje, da vas omejujoče prepričanje mori in vam preprečuje, da bi napredovali. Morda si rečete, da si ne zaslužite biti bogati, in si preprečite, da bi prejeli finančno obilje, tudi če vam je ponujeno. Lahko pa sklepate, da ste prestari, da bi shujšali, zaradi česar ste nezadovoljni s svojim telesom in zdravjem. Prepričanja, ki jih imate o sebi, vam preprečujejo doseganje vaših osebnih ciljev. Glede na to spremenite svoj sistem prepričanj. Ujemite se, ko ste v negativnem miselnem vzorcu, in prekinite krog.</p><p>Obrnjena Osmica mečev tudi nakazuje, da ste bolj nagnjeni k negativnemu samogovoru in trpljenju v rokah vašega notranjega kritika. Počutite se ujeti, ker vam vsakič, ko poskušate nekaj narediti, vaš notranji kritik pove, zakaj je to narobe ali ni dovolj dobro – zato popolnoma opustite poskus.</p><p>Obrnjena Osmica mečev sporoča, da je treba okostnjake v omari pospraviti. Dovolite si, da opustite stare vzorce vedenja in sisteme prepričanj, ki vas zadržujejo.</p><p>Pozitivno pa je, da ko je Osmica mečev obrnjena, lahko kaže, da se osvobajate negativnih vzorcev in sistemov prepričanj. Vidite lahko luč na koncu tunela in si lahko ustvarite bolj pozitivno realnost, tako da opustite ta samoomejujoča prepričanja. Prebrodili ste težko obdobje in ste bolj odprti za spremembe in samosprejemanje. Razmislite o tem, kaj je delovalo v preteklosti in je spremenilo vašo perspektivo in pristop. Priznajte možnosti, ki so pred vami, in zavrnite vlogo žrtve ter prevzemite večjo odgovornost za to, kje v življenju ste.</p>',
                    besedeObrnjena: 'Samoomejujoča prepričanja, notranji kritik, osvobajanje negativnih misli, odprtost za nove perspektive, svoboda, možni novi začetki, sprostitev nečesa, iskanje možnosti, soočanje s strahovi in resnico.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Vedno znam najti pot.\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Poza",
                    opis: "Vezan ali zavezan? Ujamejo vas orožja intelekta. Ali: onkraj tega, kar se zdi, da je, in onkraj tega, kar je mogoče dojeti, se začne kraljestvo osebne posledice."
                },
                {
                    simbol: "Preveza za oči",
                    opis: "Negativno: ne morem videti, kaj se dogaja; sivo območje; lahko vidimo samo eno točko videnega. Pozitivno: pravičnost, nepristranskost, nezavzetost na videz. Povezava med obema stranema možganov."
                },
                {
                    simbol: "Vezi okoli rok in nog",
                    opis: "Negativno: zadrega, nepremičnost, ne moremo prijeti stvari, otrdel, ne dotikajte se, ne sklanjajte se. Pozitivno: vztrajen, neprijemanje, opuščanje starih navad, krepitev centra."
                },
                {
                    simbol: "Vezi okoli glave in rok",
                    opis: "Povezava med mislijo in dejanjem, glavo in telesom ali občutkom. Negativno: suženjstvo. Pozitivno: zavezujoča zvestoba / ustrežljivost – dolžnost."
                },
                {
                    simbol: "Gora",
                    opis: "Zavestno opuščanje daje notranji volji znanje in prostor, da se razkrije. Kdor preplavi lastne globine, se potem lažje dvigne visoko. Težave – in njihovo premagovanje."
                },
                {
                    simbol: "Grad",
                    opis: "Negativno: izključitev, zapor, izolacija. Izklopi se od ostalega sveta. Pozitivno: zaščita, neodvisnost, varnost, močna identiteta. Skrb zase. Iskanje varnosti v sebi."
                },
                {
                    simbol: "Voda in zemlja",
                    opis: "Negativno: usahli občutki. Tudi: blato, blato nezavednih potreb. Pozitivno: vse življenje izvira iz vode, zemlje in sonca. Zavestna interakcija z lastnimi osnovami in cilji."
                },
                {
                    simbol: "Obkrožajoči meči",
                    opis: "Imate meče in moč, da se osvobodite nezaželenih vezi. In: orožje intelekta je vaša trdnjava, ki vam daje varnost in zaščito v vašem življenju!"
                },
                {
                    simbol: "Oblačila",
                    opis: "Rdeča za življenjsko moč in voljo. Bež za barvo telesa. Potrebe telesa in voljo zavirajo, nadzorujejo, ujamejo v mečih – ali bolje rečeno krepijo in jim dajejo zanesljivo podporo."
                },
                {
                    simbol: "Sivo nebo",
                    opis: "Pozitivno: nevtralen, objektiven, zbran, zavesten (in zelo osredotočen). Negativno: slabo vzdušje, postavljanje strani, prepirljivost. Ali: nezavesten, brez volje sodelovati, brezizrazen (in apatičen)."
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "NE",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "8",
                },
                {
                    ime: "Element:",
                    vrednost: "Zrak",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Jupiter v dvojčku",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Hod (Sijaj)",
                },
                {
                    ime: "Čas:",
                    vrednost: "Maj 21 - maj 31"
                }
            ],
        }
    }
}
