export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "Paž palic",
                    rekDesno: "Prišel sem tako daleč, pa še vedno je pot pred mano<br>Zdaj me ne ustavi nihče<br>Življenje je prijetno",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>Paž palic prikazuje mladeniča, ki v obeh rokah drži dolgo palico, medtem ko radovedno opazuje zelene liste, ki poganjajo z vrha. Njegovo tuniko krasijo salamandri, mitsko bitje, povezano z ognjem in preobrazbo. Paž stoji nepremično, s svojo palico trdno na tleh, kar kaže na to, da čeprav ga navdihuje potencialna rast, ki jo predstavlja palica, še ni ukrepal glede tega navdiha.</p><p>V ozadju je pusta in gorata pokrajina, kar nakazuje, da ima Paž dar, da lahko najde rast in potencial na najbolj neverjetnih mestih. Njegove ideje so tako napolnjene z energijo, da lahko uresniči karkoli in ni omejen s svojimi okoliščinami.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>S Pažem palic ste nagnjeni k temu, da daste vsemu vse. Sprejmete priložnost, da začnete novo pot ali projekt in vidite, kam vas pripelje. Ni nujno, da imate izdelan trden načrt, niti ne veste, kam ste namenjeni, vendar ste navdušeni nad možnostmi.</p><p>Imate dar za sanjarjenje novih ustvarjalnih idej, neomejenih z bremeni vsakdanjega življenja. Nič ne bo oviralo vaših sanj!</p><p>In medtem ko videz Paža palic nakazuje, da doživljate ustvarjalni nemir, opazite, da Paž miruje in je njegova palica trdno na tleh – ne gre še nikamor. Še vedno morate vzeti svojo ustvarjalno iskro in jo utemeljiti v realnost, da bo pripravljena za implementacijo v fizičnem svetu. Morda boste morali začrtati svojo strategijo ali pa boste morda morali preizkusiti svoje zamisli ali ustvariti nekaj poskusov, preden se zavežete. Lahko bi bilo koristno, če svoje misli spravite skozi filter, tako da boste ukrepali le na tistih, ki so najbolj usklajene z vašimi širšimi cilji.</p><p>Paž palic se lahko pojavi, ko vas morda kliče duhovna pot ali potovanje. Imate radoveden um in vas zanima, kam bi ta klic lahko pripeljal. Medtem ko ste precej novinec v tem, ko gre za to duhovno prizadevanje, ste odprti za izkušnje in si želite odkriti nove ravni zavesti. Morda vam bo koristilo delo z modrim mentorjem, nekom, ki je že hodil po vaši poti in vas zdaj lahko vodi naprej</p>',
                    besedePokoncna: 'Navdih, sijaj, pogum, lepota, nenadna jeza ali ljubezen, ideje, odkritja, neomejen potencial, svoboden duh, dobre novice so na poti k vam, aktiven otrok.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Obrnjena karta Paž palic nakazuje, da lahko čutite vznemirjenje nečesa novega, ki se pojavlja v vas, vendar ne veste, kako to spremeniti v dejanja. Morda imate seme ideje ali splošen občutek, da prihaja nekaj novega, vendar tega še niste izrazili v svetu. Ni vam treba še ukrepati – pravzaprav je to lahko škodljivo, saj je ta ideja zelo v zgodnjih fazah oblikovanja. Preprosto se "igrajte" z idejo in pustite, da raste, se razvija in vzcveti v to, kar želi biti. Ne silite tega; sedite v ustvarjalni praznini in ji dovolite, da se vam odpre.</p><p>Po drugi strani pa obrnjen Paž palic lahko pomeni, da ste poskusili veliko novih podvigov ali projektov, vendar se ti niso izkazali, kot ste upali. Morda ste sanjali, da bi začeli nov hobi ali projekt z željo, da bi to pripeljalo do nečesa večjega, vendar se zavedate, da ste ubrali napačen pristop in da ne kaže na rast in razvoj, ki ste ga pričakovali. Obrnjen Paž palic vas vabi, da se ponovno povežete s svojo prvotno vizijo ali idejo in poiščete alternativne načine za njeno izražanje. Samo zato, ker vam prvič ni uspelo, to ne pomeni, da je koncept napačen; morda gre le za izvedbo, ki ni usklajena. Namesto tega izberite drug način, da izrazite idejo, in bodite pripravljeni na novo opredeliti svojo pot, da boste ostali v skladu z vašimi cilji osebne rasti.</p><p>Obrnjen Paž palic lahko pomeni, da so vašo vnemo, da začnete nekaj novega, ovirale zapletenosti, ovire in nasprotovanje, kar je povzročilo pomanjkanje motivacije in neodločenost glede vaše poti naprej. Skrbi vas lahko tudi, ali lahko svoj projekt ali zamisel uresničite ali pa vas bo le obremenjevalo še več odgovornosti in težav. Morda dovolite, da vas omejujoča prepričanja ter notranji strahovi in ​​tesnobe ovirajo pri uresničevanju vaših sanj.</p><p>Nazadnje, obrnjena stran palic se lahko pojavi tudi, ko iščete novo pot osebnega in duhovnega odkrivanja. Ker bo verjetno šlo za intenzivno duhovno pot, se odločite, da bo to potovanje ostalo zasebno. Veste tudi, da navdih in razumevanje prihajata od znotraj, namesto da bi iskali odgovore pri drugih</p>',
                    besedeObrnjena: 'Novo oblikovane ideje, preusmerjanje energije, nestabilno, zlomljeno srce, slabe novice, samoomejujoča prepričanja, duhovna pot, odlašanje, konflikt, zdolgočasen otrok, težave v šoli, nezrelost.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Sadim semena novih začetkov in se jih želim naučiti gojiti!\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Poza",
                    opis: "Kot Paž, dvignete pogled gor na veliko palico. Tudi puščava in piramide, so odsevi pomembnih vidikov vas samih."
                },
                {
                    simbol: "Velikost palice",
                    opis: "Palica je višja od Paža, impulz večji od osebe. Znak za nezrelost, ampak tudi mladost: Kar kaže v prihodnost, je večje od tistega, kar ima do sedaj. Za mlade (po srcu)."
                },
                {
                    simbol: "Rdeča perjanica ali plamen",
                    opis: "Pozitivno: poln entuziazma, goreč za doseganje cilja, pripravljen si je zastaviti odlične cilje (tri piramide). Negativno: zgrešena gorečnost / idealizem; pomanjkanje razumevanja (pero nevidno za Paža)."
                },
                {
                    simbol: "Puščava",
                    opis: "Praznina, divjina. Vročina in ogenj v nas, doživeti kot sušo, žganje, pregrevanje. Ali novo kraljestvo volje iz katere lahko naša volja ustvari nekaj novega."
                },
                {
                    simbol: "Palica v puščavi",
                    opis: "Negativno: zabloda, nevarnost smrti od žeje / odmiranje, vročina, praznina. Pozitivno: premagovanje sušnega obdobja, ustvarjanje vrta iz puščave: samozavestni tudi ob velikih izzivih."
                },
                {
                    simbol: "Piramide I",
                    opis: "Znak modrosti in znanosti, skrivnosti in bližine bogov. Poteka po načrtu, duhovna dejavnost. Tudi: roparji grobov, roparji piramide."
                },
                {
                    simbol: "Piramide II",
                    opis: "Na splošno simbol prihoda do točke transformacije energije in nevtralizacije. Tudi vrhunske izkušnje in visoke točke. Naloga dvigniti, znižati, združiti na novo raven."
                },
                {
                    simbol: "Položaj rok",
                    opis: "Držanje z obema rokama. Pozitivno: obvladati (situacijo), začeti, dobesedno dojeti nekaj. Negativno: negotovost, nezmožnost izpuščanja. Tudi: ena stvar naenkrat."
                },
                {
                    simbol: "Salamanderji v krogu",
                    opis: "Po legendi je salamander žival, ki lahko preide skozi ogenj brez poškodb. Zaprti krog. Pozitivno: reinkarnacija. Negativno: argumenti, ki ne vodijo nikamor in ponavljanje, hoja v krogu."
                },
                {
                    simbol: "Svetlo modro nebo",
                    opis: "Pozitivno: lahkotnost, lahkotnost, namen volje, luciden um. Negativno: malikovanje nečesa ali nekoga, posvetne želje."
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "DA",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "11",
                },
                {
                    ime: "Element:",
                    vrednost: "Zemlja ognja",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Ove, lev, strelec",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Malkuth (kraljestvo)",
                },
                {
                    ime: "Čas:",
                    vrednost: "Zgodi se še preden ste pripravljeni"
                }
            ],
        }
    }
}
