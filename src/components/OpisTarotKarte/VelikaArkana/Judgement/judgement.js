export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "XX - Sodba (Judgement)",
                    rekLevo: "Opustite svojo navezanost na to, da imate prav, in nenadoma bo vaš um bolj odprt. Lahko izkoristite edinstvena stališča drugih, ne da bi vas ohromila lastna presoja.",
                    rekDesno: "Ko bom ob koncu svojega življenja stal pred Bogom, upam, da mi ne bo ostal niti kanček talenta, in bom lahko rekel: Uporabil sem vse, kar si mi dal.",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>Karta Sodbe prikazuje gole moške, ženske in otroke, ki vstajajo iz svojih grobov, z razširjenimi rokami in gledajo v nebo. Zgoraj trobi na trobento nadangel Gabriel – Božji glasnik. Ljudje se odzovejo njegovemu klicu, pripravljeni na sojenje in na to, ali bodo sprejeti v nebesa ali ne. V ozadju je obsežna gorska veriga, ki označuje nepremagljive ovire in nezmožnost izogniti se sodbi.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Karta Sodbe vas kliče, da se dvignete in sprejmete višjo raven zavesti za služenje svojemu najvišjemu dobremu. Doživljate duhovno prebujenje in zavedate se, da vam je usojeno veliko več. To je vaša kozmična višja raven! Slišite klic in ste pripravljeni ukrepati. Uglasite se na višjo frekvenco. Opustite svoj stari jaz in stopite v to najnovejšo različico tega, kar v resnici ste.</p><p>Karta Sodba pogosto nakazuje, da morate sprejeti odločitev, ki vam bo spremenila življenje, vendar za razliko od tistih, povezanih z logično karto Pravice, ta odločitev zahteva mešanico intuicije in intelekta. Morda ste na razpotju in se zavedate, da bo vsaka vaša odločitev prinesla pomembno spremembo z dolgotrajnimi učinki. Uglasite se s svojim višjim jazom, zaupajte svoji presoji in vedite, da ste na pravi poti. Če še vedno potrebujete jasnost glede situacije, se obrnite na svojo preteklost in življenjske lekcije, ki vas bodo vodile.</p><p>Sodba se pojavi v branju tarota, ko ste blizu pomembne stopnje na svojem potovanju. Pregledali in ovrednotili ste svoje pretekle izkušnje in se iz njih kaj naučili. Vsi koščki sestavljanke vašega življenja se končno združijo v eno, enotno sliko vaše življenjske zgodbe. Ta integracija je zacelila globoke rane in zdaj lahko pustite preteklost za seboj. Našli ste svojo odvezo, ko ste očistili vse napake ali obžalovanja in osvobodili kakršne koli krivde ali žalosti zaradi preteklosti. Ta postopek čiščenja vas bo pustil sveže in pripravljene na nove izzive.</p><p>Karta Sodba nakazuje, da boste morda našli tolažbo v tem, da svoje težave delite z drugimi v skupinskem okolju. Obstajajo drugi, ki so izkusili nekaj podobnega in vam lahko pokažejo pot do osvoboditve vaših težav. Naj vas vodijo in vam pomagajo – dvignite se skupaj.</p>',
                    besedePokoncna: 'Sodba, ponovno rojstvo, notranji klic, odpuščanje, prenova, opuščanje starega, pospešen um, dobro preživeto življenje.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Obrnjena karta Sodbe zahteva obdobje razmisleka in samoocenjevanja. Z meditacijo ali tiho kontemplacijo boste morda prišli do globokega razumevanja univerzalnih tem, ki se prepletajo skozi vaše življenje, in tega, kaj lahko storite ali spremenite, da se izognete tem situacijam. Morda ste jih skrivali ali potlačili, ker se bojite, kako vas bodo drugi obsojali. Da bi razčistili te pretekle napake in obžalovanja ter vso povezano krivdo ali sram, delajte na svojem samoodpuščanju, samosprejemanju, ljubezni do sebe ter osvoboditvi in ​​svobodi.</p><p>Obrnjena karta Sodbe se pogosto pojavi, ko vam vesolje skuša poslati sporočilo in vas povabiti k nečemu večjemu, a ga ne poslušate. Morda se bojite žrtvovanja, ki ga boste morali narediti, da bi prisluhnili klicu, ali pa vas skrbi, da niste pripravljeni nastopiti pomembnejše vloge in želite samo varno igrati. Po svojih najboljših močeh se pretvarjate, da tega niste prejeli, in nadaljujete s svojim vsakdanjim življenjem v upanju, da bo izginilo. A bodimo iskreni – "klic" nikoli ne izgine; postaja samo glasnejši in glasnejši, dokler ne boste postali pozorni. Čas je, da premagate svoje notranje strahove in dvom vase ter zaupate, da vas vesolje pazi. To se dogaja z razlogom.</p><p>Včasih razveljavitev sodbe pomeni, da vaš notranji kritik prihaja jasno in glasno. Morda dvomite vase ali si sporočate negativna sporočila. To vas ovira pri tem, da bi izpolnili svoj največji potencial in bili najboljši. Če želite premagati svojega notranjega kritika, ga glejte kot ločen del sebe (dajte mu ime), prisluhnite mu in priznajte njegov strah ter mu zagotovite, da bo vse v redu. Z osredotočeno disciplino lahko prekinete krog samokritičnosti in jo nadomestite s pozitivnimi sporočili o tem, kaj je mogoče.</p>',
                    besedeObrnjena: 'Dvom vase, notranji kritik, ignoriranje intuicije, pomanjkanje, samoprezir, obtoževanje drugih, dvom, strah pred smrtjo, možno izgubo, slabim zdravjem.',

                    podnaslovMeditacija: "Meditacija",
                    opisMeditacija: "\"Ko zaslišim glasni klic, ki me kliče v kraljevo palačo, bom prenovljen znotraj in zunaj. Sem novo bitje in vse moje misli, občutki, dejanja in spoznanja bodo novi. Sem otrok božanskega ognja, iskra iz pra-plamena. Zemlja me ne more zadušiti; voda me ne more utopiti. Naj me dih mojega Jaza ponese v novo življenje in novo dejavnost. Prenovljena sem. Odločam se, da se bom vsak dan obnavljal.\"",

                    kljucnaVpr: '<p><b>Ključna vprašanja:</b> Kaj je moj najvišji klic? Ali je čas za preobrazbo v mojem življenju? Ali prestrogo obsojam druge ali sebe? Kako naj se dvignem iz mračnejše situacije? Ali sem pošten/a glede svojega načina življenja? Ali poslušam svoj višji jaz in svoje višje moči? Ali v tem primeru dobro presojam situacijo, ki je bila v mojih mislih zadnje čase?</p>',

                }
            ],
            opisSimbolov: [
                {
                    simbol: "Sodni dan",
                    opis: "Sveto pismo ne pripoveduje samo o izgonu Adama in Eve iz raja ampak tudi o vrnitvi v raj na sodni dan. Slednje je precej manj znano, a je trdno del krščanske tradicije."
                },
                {
                    simbol: "Položaj figur pod angelom",
                    opis: "Položaj figur lahko izraža slovo ali spravo. Potegniti je potrebno črto pri vsemu, kar je šlo stran oziroma ven. Prav tako lahko sivo obarvane figure predstavljajo nevtralnost in odprtost glede novega znanja."
                },
                {
                    simbol: "Trobenta z sedmimi črtami",
                    opis: "Trobenta sodnega dne prebuja speče energije in oživlja mrtve. Tudi vi lahko razpolagate s tako močjo ali se z njo soočate. Prav tako govori o tem, da boste slišali nekaj dobrega, dobro kupčijo. Trobenta predstavlja tudi klic k jasnosti in božjemu posredovanju. Je kot nekakšna budilka."
                },
                {
                    simbol: "Oranžno rdeč križ",
                    opis: "Kot vsi simboli križa je to znak razlikovanja in povezovanja. Naloga odhoda in ločevanja na eni ter sprava in združevanje na drugi strani."
                },
                {
                    simbol: "Angel",
                    opis: "Vseh sedem figur na sliki bi lahko predstavljalo vas - vključno z angelom. On predstavlja vašo moč motivacije (prebujanje) in moč transformacije. Opozarja pred neutemeljenimi prepričanji. Angel lahko simbolizira tudi to, da je k vam namenjena pomembna informacija."
                },
                {
                    simbol: "Šest ljudi pod angelom",
                    opis: "Teh šest ljudi lahko predstavlja družino, nekakšen klan ali prijatelje. Vseh šest figur je tudi zrcalo, ki odseva lastne moške, ženske in otroške vidike (vključno z ne tako ljubkimi)."
                },
                {
                    simbol: "Golota",
                    opis: "Je svarilo pred brezsramnostjo in surovostjo. Je spodbuda, da se soočimo z golo resnico. Predstavlja tudi odprtost, poštenost, lepoto in resnico - in nenazadnje tudi erotiko in poželenje."
                },
                {
                    simbol: "Odprte krste",
                    opis: "Nič več črnih, zaprtih skrinjic. Predstavljajo vrnitev potlačenega. Določene želje ali strahovi se vedno znova pojavljajo, ker niso bile izpolnjene ali pa niso bili strahovi razrešeni. Lahko tudi predstavljajo odrešitev, odkritost, usmiljenje."
                },
                {
                    simbol: "Modro bele gore",
                    opis: "Prestavljajo lahko nirvano ali ledeno dobo: stare želje in strahovi najdejo svojo rešitev - pot v nov raj ali obvladanje prej nerešenih problemov. Predstavljajo navdih za začetek procesa novih začetkov in transformacije."
                },
                {
                    simbol: "Rdeča krila",
                    opis: "Predstavljajo strast in moč, ki vas bosta podpirala pri doseganju višjega stanja zavesti."
                },
                {
                    simbol: "Oblaki",
                    opis: "Oblaki predstavljajo čas prehoda in ker je angel v oblakih je on tisti, ki sproži prehod."
                },
            ],
            modrostiKarte: [
                {
                    modrost: "\"Praksa odpuščanja je naš najpomembnejši prispevek k zdravljenju sveta.\""
                },
                {
                    modrost: "\"Zamera je kot piti strup in pričakovati, da bo druga oseba umrla.\""
                },
                {
                    modrost: "\"Pri dvajsetih letih zavlada volja; pri tridesetih pamet; pri štiridesetih pa sodba.\""
                },
                {
                    modrost: "\"Otroke je treba naučiti, kako misliti, ne kaj misliti.\""
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "DA",
                },
                {
                    ime: "Barve:",
                    vrednost: "Modra, rdeča, siva",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "2",
                },
                {
                    ime: "Čakre:",
                    vrednost: "Sahasrara",
                },
                {
                    ime: "Element:",
                    vrednost: "Voda",
                },
                {
                    ime: "Zodiak:",
                    vrednost: "Škorpijon",
                },
                {
                    ime: "Planet:",
                    vrednost: "Pluto",
                },
                {
                    ime: "Čas:",
                    vrednost: "Zima & nevihtno vreme"
                },
                {
                    ime: "Kristali:",
                    vrednost: "Kianit, moldavit, labradorit, obsidian"
                },
                {
                    ime: "Telo:",
                    vrednost: "Proces čiščenja, izločanje."
                }
            ],
            background: "bg",
        }
    }
}
