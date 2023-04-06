export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "Šestica mečev",
                    rekDesno: "Premagovanje ovir<br>Premik v mirnejše čase<br>Čas za ponovno polnjenje",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>Šestica mečev prikazuje žensko in majhnega otroka, ki veslata čez vodno proti kopnemu. Njena glava je pokrita, kar kaže na žalost ali izgubo, ko se odmika od nečesa iz svoje preteklosti. Njen otrok se ugnezdi ob njeno telo in išče varnost in udobje, ko se skupaj odpravita na to potovanje. V čolnu stoji šest mečev, kar nakazuje, da ženska in otrok še vedno nosita spomine ali prtljago iz preteklosti v svojo prihodnost.</p><p>Medtem ko je morje na desni strani čolna nemirna, je morje spredaj mirno. Ta podoba nakazuje, da za seboj puščajo nemirno situacijo, namenjeno bolj mirnemu in podpornemu okolju.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Šestica mečev kaže, da ste v stanju prehoda, zapuščate tisto, kar je bilo znano, in se premikate proti neznanemu. Morda se selite, zapuščate razmerje, menjate službo, greste skozi obred prehoda ali mentalni premik. To spremembo lahko povzročite sami ali pa ste v njo bili prisiljeni in morda se počutite žalostni, ker za seboj puščate tisto, kar vam je tako znano. Vendar veste, da je ta korak bistvenega pomena za vašo rast in osebni razvoj. Žalost zaradi tega, kar ste izgubili (ali osvobodili), bo kmalu nadomestila večja mentalna jasnost in ponovno sprejemanje sprememb. Posledično boste postali boljši človek.</p><p>Šestica mečev vas vabi, da opustite vse, kar vas zadržuje, pa naj bo to iz preteklosti ali sedanjih okoliščin. Namesto tega glejte naprej v svojo prihodnost in izberite pot, ki je najbolj v skladu z vašim najvišjim dobrim in dolgoročnim potencialom. Na tej poti boste morali sprejemati težke odločitve in sklepati kompromise; glejte na to kot na obred prehoda. Usmerjeni ste v veliko boljši položaj v življenju, če ste se pripravljeni razvijati in opustiti vse, kar ne potrebujete več. Ne razmišljajte o tem, kar ostane za vami. Namesto tega izkoristite to kot priložnost, da spremenite svoja prepričanja o sebi, se oddaljite od tistega, kar ste bili in h čemu želite biti.</p><p>Podobno vas Šestica mečev prosi, da razmislite o kakršni koli čustveni ali duševni prtljagi, ki jo lahko nosite, ko se premikate iz ene faze v drugo. V čolnu stoji šest pokončnih mečev – znak, da še vedno nosite težo iz preteklosti, medtem ko napredujete, kar pa bi lahko upočasnilo vašo osebno rast. Ti "meči" so lahko spomini, odnosi, navade, vedenja, miselni vzorci in prepričanja, ki vam ne služijo več. Odločite se, kaj morate vzeti s seboj in kaj lahko pustite za sabo.</p>',
                    besedePokoncna: 'Prehod, sprememba, obred prehoda, sprostitev prtljage, potovanje, stran od žalosti, prevladala bo harmonija, napredek, mirnejše vode, premikanje naprej, beg, žalosten a nujen prehod.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Ko se obrnjena Šestica mečev pojavi v branju tarota, greste morda skozi osebni ali duhovni prehod ali obred prehoda, tako da lahko zapustite odnos, prepričanje ali vedenjski vzorec, ki vam ne služi več. To je zelo osebno in zasebno potovanje, vi pa delate v izolaciji, da bi ga uresničili. Določili ste, kaj morate sprostiti, da sprejmete nov način razmišljanja, in zdaj to uresničujete v svojem osebnem življenju.</p><p>Včasih obrnjena Šestica mečev pomeni, da veste, da morate narediti spremembo ali prehod v svojem življenju, vendar to neradi storite. Morda upate, da bo težava izginila sama od sebe in se vam ne bo treba prepirati s to težko odločitvijo. Lahko pa se skušate zavajati, da mislite, da lahko to prenesete, čeprav globoko v srcu veste, da je čas, da greste naprej. Naravno je, da se želite izogniti nelagodju, a včasih morate preseči cono udobja, da se lahko razvijate kot oseba. To nelagodje je lahko pozitiven znak, da se dogaja rast, zato začutite to energijo in pustite, da vas spodbudi, da nadaljujete naprej in se širite.</p><p>V nekaterih primerih obrnjena Šestica mečev nakazuje, da se upirate spremembam in prehodu, ker verjamete, da vam je bilo to vsiljeno ali da niste bili vključeni v odločitev. Na primer, vaš partner se bo morda moral preseliti zaradi službe in vi se morate strinjati z njim ali njo. Pomembno je, da se osredotočite na prednosti prehoda in ne na slabosti. Kje se lahko nečesa veselite in iz tega pridobite osebno vrednost? Ponovno si potrdite, zakaj morate narediti ta prehod in kako se ujema z vašimi vrednotami.</p><p>Če se poskušate premakniti iz preteklosti in se za to trudite, Šestica obrnjenih mečev nakazuje, da so morda nedokončani posli, nerešeni konflikti ali lekcije, ki jih morate razumeti, preden se lahko z vsem srcem premaknete naprej v svojem življenju. Kaj vas ovira pri tem ključnem prehodu? Poskusite rešiti te težave. Morda pridejo trenutki, ko dvomite, ali se pravilno odločate, ko pustite za seboj svojo preteklost, vendar vas ta karta nežno spodbuja naprej in vas opominja, da greste naproti boljši prihodnosti.</p>',
                    besedeObrnjena: 'Osebna tranzicija, odpor do sprememb, nedokončani posli, potovanje bo odloženo, brez izhoda iz sedanjih ovir ali težav, ne gre na bolje, pomanjkanje napredka, prenašanje prtljage.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Pripravljen sem iti naprej.\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Poza",
                    opis: "Tri osebe so v istem čolnu in poosebljajo trud, predanost in pustijo stvarem, da uberejo svojo poot. Čoln je (tudi) pogosta metafora za nadzor, ki ga izvaja zavestni um na vodah podzavesti."
                },
                {
                    simbol: "Brodar",
                    opis: "Pozitivno: posrednik med svetovi (kot brodar Hermanna Hesseja v Siddharti). Negativno: pomanjkanje odrešitve, nemir, brezdomstvo."
                },
                {
                    simbol: "Lik I",
                    opis: "Vaša moška plat, aktivni del, zavestno dejanje. Nevarnost: biti poznavalec vsega, odločanje namesto drugih. Pozitivno: prevzemanje odgovornosti, pripravljen dati vse od sebe."
                },
                {
                    simbol: "Lik II",
                    opis: "Vaša ženska stran, pasivni del, zavestna predanost. Nevarnost: neodločnost, občutek manjvrednosti, prepuščanje odločitve drugim. Pozitivno: biti odprt za razvoj stvari, potrpežljivost."
                },
                {
                    simbol: "Lik III",
                    opis: "Vaša otroška stran, nezavedna odločitev; kaj se vam zgodi. Nevarnost: biti odvisen, nesamozavesten, neprijetna presenečenja. Pozitivno: radovednost, odprtost za nove izkušnje, preseneča vas vse (veliko je novega)."
                },
                {
                    simbol: "Črni drog",
                    opis: "Napredek z ohranjanjem na tleh (nazaj k osnovam). Pozitivno: priti do dna stvari, temeljitost. Negativno: črno = neznano: motivi in razlogi ostajajo del vaše slepe pege."
                },
                {
                    simbol: "Šest mečev",
                    opis: "Negativno: stari predsodki se vlečejo v vsako novo situacijo – duševni balast zastira pogled. Pozitivno: orožje intelekta kot igle kompasa, zavestno doživljanje, doslednost v spremembah."
                },
                {
                    simbol: "Pogled od zadaj",
                    opis: "Negativno: obračanje hrbta samemu sebi, miselna enosmerna ulica. Pozitivno: zavestno dojemanje druge strani z vidika opazovalca; pogled, raziskovanje nezavednih motivov."
                },
                {
                    simbol: "Dve različni vodi",
                    opis: "Gibljive in mirne vode: staro in novo, naloga zavestnega ustvarjanja sprememb in prehod oblike."
                },
                {
                    simbol: "Siva in modra barva",
                    opis: "Pozitivno: nevtralnost, nepristranskost, pomanjkanje predsodkov, umirjenost, jasna volja in um. Negativno: pomanjkanje zavedanja, apatija, zamegljene misli, vztrajanje pri starih sodbah, ponavljanje, potreba po svežem zraku."
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "MORDA",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "6",
                },
                {
                    ime: "Element:",
                    vrednost: "Zrak",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Merkur v vodnarju",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Tiphareth (Lepota)",
                },
                {
                    ime: "Čas:",
                    vrednost: "Januar 30 - februar 8"
                }
            ],
        }
    }
}
