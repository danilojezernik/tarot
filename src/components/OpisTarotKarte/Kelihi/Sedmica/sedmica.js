export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "Sedmica kelihov",
                    rekDesno: "Veliko izbire na dosegu roke<br>Naše sanje so polne<br>Skušnjav je veliko",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>V Sedmici kelihov moški stoji pred sedmimi kelihi, napolnjenimi z različnimi darili. Nekateri kelihi nosijo zaželena darila, kot so dragulji in venec zmage. Toda drugi imajo darila, ki sploh niso darila; namesto tega so prekletstva, kot sta kača ali zmaj. Oblački in kelihi simbolizirajo moške želje in sanje, različna darila v notranjosti pa nakazujejo, da morate paziti, kaj si želite, saj ni vse tako, kot se zdi. Sprejeti je treba izbire, a pri tem morate preseči iluzije in privlačnost ter se namesto tega osredotočiti na tisto, kar je prav za vas.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Sedmica kelihov je karta novih priložnosti, izbir in včasih iluzij. Ko se v branju tarota pojavi ta karta, imate veliko možnosti in priložnosti, med katerimi lahko izbirate. Vendar bodite previdni! Nagnjeni ste k iluzijam in nerealnim idealom. Priložnost z obljubami več denarja, več slave ali več moči morda zveni privlačno, a ko pogledate globlje v ponujeno ponudbo, boste morda ugotovili, da ni vse, kar bi lahko bili. Vaš ego vas lahko vleče v določeno smer, vendar je pomembno, da najprej preverite pri svojem višjem jazu. Ocenite svoje možnosti in poglobite se pod površje, da odkrijete, kaj je vključeno v posamezno izbiro.</p><p>Pogosto je Sedmica kelihov lahko znak pobožnega razmišljanja in projiciranja v prihodnost o tem, kaj bi radi ustvarili, namesto da ukrepate tukaj v sedanjosti, da bi to uresničili. Na primer, morda si želite fit ali bolj zdravega telesa vse dokler ne pride čas za vadbo. Ali pa si morda želite uspešnega podjetja, ki bi ga spodbujal pasivni dohodek, vendar niste pripravljeni vložiti trdo delo zdaj, da bi pozneje uživali sadove svojega dela. Če večino svojega časa preživite v željah, vendar ne opravljate dela, potem je čas, da izberete samo eno stvar in jo uresničite.</p><p>Morda boste ugotovili, da vaše ideje niso utemeljene v realnosti. Vaši načrti se morda v vaši domišljiji slišijo čudovito, a ko jih boste uresničili, boste morda ugotovili, da v resničnem svetu ne delujejo.</p><p>Sedmica kelihov je lahko znak "sindroma svetlečega predmeta", kjer nenehno iščete "naslednjo veliko stvar", vendar nobene od teh novih priložnosti ne vidite do konca. Ko ste nenehno v fazi ideje, zamudite priložnost, da svoje načrte uresničite. Spet je čas, da se osredotočite na eno stvar, ki vas bo približala vašemu cilju; uprite se skušnjavi, da bi se obrnili na druge ideje, ko se pojavijo. Če je treba, si zabeležite svoje ideje, ko se pojavijo, vendar ostanite osredotočeni na eno stvar, ki jo počnete.</p><p>Ta karta vas vabi, da se premaknete iz faze idej in možnosti ter izberete. Vsak bo imel svoje prednosti in slabosti – na vas je, da zagotovite, da je možnost, ki jo izberete, v skladu z vašim namenom in vašim najvišjim dobrim – tudi če se počutite nekoliko ohromljeni zaradi možnosti, ki so vam na voljo.</p>',
                    besedePokoncna: 'Priložnosti, izbire, pobožne želje, iluzije, iluzorni uspehi; dolgotrajna domišljija, ki ne more izbrati svoje smeri v življenju, živeti v sanjah, veliko možnosti.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Obrnjena Sedmica kelihov se pogosto pojavi, ko se soočite z več različnimi izbirami in namesto da bi izbrali možnost, ki bi lahko pritegnila druge, se zanašate na svojo notranjo modrost in vodstvo, da vam pokažejo najboljšo pot. Morda si boste izmislili lastna merila, ki vam bodo pomagala pri sprejemanju odločitev v skladu z vašim notranjim bitjem.</p><p>Če imate več priložnosti ali idej, se najprej prizemljite in razmislite o tem, kaj si dolgoročno želite. Vsi ti bleščeči novi predmeti pred vami imajo trenutno določeno "čarobno" moč nad vami in tvegate, da boste izgubili fokus, če boste lovili sanjarjenje. Stopite korak nazaj in ocenite možnosti glede na svoje prednostne naloge, da ugotovite, katere priložnosti vam bodo resnično koristile.</p><p>Kot karta izbir in možnosti lahko obrnjena Sedmica kelihov pomeni, da ste preobremenjeni z izbiro in ne morete naprej. Zmanjšajte možnosti in se osredotočite na tisto, kar vam je pomembno. Ni vam treba kar naprej iskati te velike ideje; imate kar potrebujete. Izberite svojo izbiro in nadaljujte z njo.</p>',
                    besedeObrnjena: 'Usklajenost, osebne vrednote, preobremenjenost z izbirami, moč volje, dobra uporaba odločnosti, izogibanje realnosti, preobremenjeni z izbirami, zaupajte svojemu občutku.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Pripravljen sem narediti vse, kar je v moji moči, da uresničim svoje sanje.\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Črn lik I",
                    opis: "Če pogledate pozorno, se lahko vidite v temni sliki - vendar enako v vseh oblikah, ki jih najdemo v sedmih kelihih. Vaša naloga je razlikovati med vrednimi in ničvrednimi željami."
                },
                {
                    simbol: "Črn lik II",
                    opis: "Pozitivno: sprijazniti se s sencami preteklosti, da bi lahko dosegli svoje cilje. Negativno: dajati glavo v oblake, da bi ignorirali tukaj in zdaj; postati senca svojega pravega jaza."
                },
                {
                    simbol: "Kraljestvo oblakov",
                    opis: "Prepoznati in zahtevati svoje osebno premoženje. Nasprotna stran kovanca sestoji iz pohlepa in nezadovoljstva. Trik je v potrditvi tistega, kar je vaša last, in ne zanikati samega sebe v korist iluzornih idealov."
                },
                {
                    simbol: "Kodrasta glava",
                    opis: "Simbol lepote in večne mladosti, svarilo pred nečimrnostjo in narcisoidnostjo. Glava vabi, da se soočite s samim seboj in se sprejmete takšnega, kot ste."
                },
                {
                    simbol: "Grad / stolp",
                    opis: "Grad — Pozitivno: zaščita, dom, varnost in zdravje. Negativno: zatiranje, izolacija ali aroganca. Stolp — Pozitivno: pregled, budnost. Negativno: brez stika z realnostjo."
                },
                {
                    simbol: "Zaklad / Nakit",
                    opis: "Notranje in zunanje bogastvo. Prave vrednote, osebni sijaj in vrednost. V negativnem smislu: umazan dobiček, denar kot nadomestilo za nezadostnost, negotovost glede lastne osebne vrednosti."
                },
                {
                    simbol: "Krona iz lovora",
                    opis: "Lovorova krona je lahko znamenje zmage in smrti. Tudi ta kelih nosi podobo lobanje (glejte tudi karti Svet in Šestica palic). Naloga: narediti lastno življenje koristno."
                },
                {
                    simbol: "Zmaj",
                    opis: "V evropski legendi strašna pošast (sv. Jurij, uničevalec zmajev). V kitajski tradiciji je lahko tudi prinašalec sreče. Tudi vi nosite v sebi izjemne moči."
                },
                {
                    simbol: "Kača",
                    opis: "Nizki, premeteni vzorci obnašanja in nagonov. In prav tako simbol modrosti, preobrazbe (odstranitev stare kože) in razvoja."
                },
                {
                    simbol: "Belo, rdeče svetleče pokrivalo nad kelihom",
                    opis: "Enigma in skrivnost, ki prebivata v vsakem človeku. Ta dragocena in čudovita lastnost je v vas že vidna, vendar se bo v celoti uresničila le, če boste sledili svojemu osebnemu razvoju."
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "Morda",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "7",
                },
                {
                    ime: "Element:",
                    vrednost: "Voda",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Venera v škorpijonu",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Netzach (Zmaga)",
                },
                {
                    ime: "Čas:",
                    vrednost: "November 13 - november 22"
                }
            ],
        }
    }
}
