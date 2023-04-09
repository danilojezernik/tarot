export default {
    data() {
        return {
            showModal: false,
            modrost: [
                {
                    tarotKarta: "Desetica mečev",
                    rekDesno: "Tema pred zoro<br>Kolaps zaradi stresov<br>Stres vas je podrl",
                },
            ],
            opisKarte: [
                {
                    opisKarte: '<p>Desetica mečev prikazuje moškega, ki leži na tleh z obrazom navzdol, ki je očitno mrtev in z desetimi meči v hrbtu. Rdeča pelerina se prekriva na spodnji polovici njegovega telesa kot znak dostojanstva, ko zapušča ta svet. Medtem ko je temno nebo zlovešče, sonce vzhaja na obzorju in prinaša nov občutek upanja in priložnosti. Mirno morje v ozadju prinaša tudi tolažbo, saj daje slutiti, da je tudi v temi prisoten občutek miru in spokojnosti.</p>',

                    podnaslovPokoncna: "Pokončna karta",
                    opisPokoncna: '<p>Desetica mečev označuje boleč, a neizogiben konec. Na primer, razmerje se lahko nenadoma konča, vašo službo lahko ukinejo ali pogodbo razdrejo. Kot da se je ta konec pojavil z jasnega in zamajal vaš svet. Tega nikoli niste mogli pričakovati, a zdaj se je zgodilo, presekalo vas je v bistvo in pustilo občutek, kot da se je svet sesul okoli vas. Žalujete zaradi te šokantne izgube in se sprašujete, ali boste kdaj spet ljubili ali našli delo ali zaupanje.</p><p>Ko se Desetica mečev pojavi v branju tarota, ste morda žrtev izdaje ali prevare druge osebe. Počutite se, kot da bi vas zabodli v hrbet in se otepate zaradi dejanj nekoga drugega. Morda vas je partner prevaral, kolega širi neprijetne govorice o vas ali pa je družinski član izdal vaše zaupanje. Povzročena bolečina je globoka, ne zato, ker je to, kar so storili, boleče, ampak zato, ker globoko v sebi veste, da to pomeni konec vašega odnosa, kot ga poznate z njimi. Poleg občutka bolečine lahko tudi žalujete zaradi izgube odnosa.</p><p>Desetica mečev lahko nakazuje, da prevzamete vlogo "žrtve" v upanju, da se vas bodo drugi usmilili in vas rešili obupa. Ne morete spremeniti dejanj druge osebe, lahko pa spremenite svoj odziv. Tudi če ste bili prizadeti ali izdani, imate zdaj možnost, da se poberete in nadaljujete s svojim življenjem, namesto da padete na tla v upanju, da se vas bo nekdo usmilil.</p><p>Na ta način Desetica mečev govori o opuščanju in sprejemanju trenutnih okoliščin. Ne upirate se več spremembam, temveč jim dovolite, da se zgodijo, tudi če vam povzročajo prvotno bolečino in trpljenje. Zavedate se, da mora priti do spremembe, da bi olajšali obnovo, in ji dovolite, da se zgodi, namesto da se z njo borite.</p><p>Dobra novica je, da Desetica mečev označuje zadnjo preizkušnjo – iz tega vira vas ne bo več doletela nobena bolečina. Ura je najtemnejša pred zoro in izkusiti morate polni vpliv tega, kar se je zgodilo, preden se lahko premaknete naprej in začnete znova. Bo lahko? Ne. Toda ali bo ta preizkušnja trajala večno? Ne.</p><p>Dvignite se s tal in razmislite o tem, kaj se vam je zgodilo in zakaj ter kaj se lahko naučite iz te izkušnje. Ko boste to storili, bosta bolečina in trpljenje zbledeli in kmalu boste videli, zakaj se je vse to moralo zgoditi, da se lahko razvijete v svoj največji potencial. Bolečina in rana, ki ste jo prestali, nista ostali brez namena. Uporabite pozitivno moč v sebi, da se učite iz svoje bolečine in črpate modrost iz poraza.</p>',
                    besedePokoncna: 'Boleči konci, globoke rane, izdaja, izguba, kriza, propad načrtov, nenadna nesreča, poraz, neuspeh, bolečina in solze, uničenje, stvari je treba spremeniti.',

                    podnaslovObrnjena: "Obrnjena karta",
                    opisObrnjena: '<p>Obrnjena Desetica mečev pomeni, da se borite proti neizogibni spremembi ali koncu, ker se niste pripravljeni soočiti s tem, kar se dogaja. Vendar bolj ko se upirate, bolj se bo ta situacija vlekla, zato je čas, da strgate povoj (ne glede na to, kako boleče je to) in s tem končate, da lahko začnete na novo. Zaupajte, da se vse dogaja z razlogom, in čeprav je morda težko razumeti, skozi kaj greste, vedite, da to dolgoročno vodi k vaši osebni rasti in preporodu.</p><p>Podobno lahko obrnjena Desetica mečev predstavlja staro situacijo, ki se je slabo končala. Še vedno nosite s seboj rane, a ste jih zakopali globoko, da se tako ne zavedate, da so še vedno prisotne (in vas bolijo). S temi starimi bolečinami se je treba enkrat za vselej spopasti. Morda se bo težko poglobiti vase, vendar je to edini način, da se osvobodite te bolečine in ji dovolite, da odide iz vašega življenja.</p><p>Obrnjena Desetica mečev vas spodbuja, da ponovno ocenite svoje okoliščine in opustite vse vidike svojega življenja, ki vam ne služijo več. Namesto da razmišljate o svoji boleči preteklosti, je bistveno, da pogledate naprej in ugotovite, kako vas ti dogodki osvobodijo, da preoblikujete svoje življenje in izberete novo smer zase. Lahko se osvobodite svojo preteklost in ustvarite nov občutek sebe.</p><p>Končno se obrnjena Desetica mečev lahko pojavi kot dobrodošel znak, da se bolečina in žalost, ki ste jo čutili, končujeta. Ko so obrnjeni na glavo, se zdi, da meči v človekovem hrbtu padajo ven in ga osvobodijo bolečine, ki jo je utrpel. Osvobajate spomine na preteklost in si dopuščate priložnost, da greste naprej z občutkom prenove in upanja za prihodnost.</p>',
                    besedeObrnjena: 'Okrevanje, regeneracija, upiranje neizogibnemu koncu, zle sile so uničene, pogum, nekaj uspeha, boljše zdravje, obnova, izboljšave, ubežati katastrofi.',

                    podnaslovAfirmacija: "Afirmacija",
                    afirmacija: "\"Pripravljen/a sem osvoboditi preteklost in začeti znova.\"<br>",
                }
            ],
            opisSimbolov: [
                {
                    simbol: "Poza",
                    opis: "Opozorilo pred žrtvovanjem in uničenjem. Spodbuda za predanost in ljubezen."
                },
                {
                    simbol: "Rdeča tkanina I",
                    opis: "Negativna stran te karte ne obravnava smrti (tema katere je obravnavana v karti XIII - Smrt), temveč se trdno drži prejšnjih sodb in iluzij, tudi če se končajo katastrofalno."
                },
                {
                    simbol: "Rdeča tkanina II",
                    opis: "Rdeča tkanina predstavlja pretok življenjske krvi v človeku in to iz roda v rod. Negativno: vztrajno vztrajanje pri starih teorijah. Pozitivno: ustvarjanje novih zaključkov iz starih izkušenj!"
                },
                {
                    simbol: "Novo obzorje",
                    opis: "Uporabljene metode do danes tako s pozitivnega kot negativnega vidika nas ne pripeljejo naprej. Sadovi znanja so nove odločitve, ki odpirajo nove priložnosti za ljubezen in zavedanje."
                },
                {
                    simbol: "Nebo I",
                    opis: "Močan kontrast med črno in rumeno je znak ogromnih težav ali napetosti, ki čakajo na rešitev ali so bile pravkar obravnavane. A sprememba perspektive — pripravlja se nevihta — ali pa je ta pravkar mimo."
                },
                {
                    simbol: "Nebo II",
                    opis: "Sončni zahod: črnina (nekaj potlačenega ali neznanega) postane očitna. Sončni vzhod: Novo sonce, nov dan. Vsaka od teh slik je lahko videna v pozitivni ali negativni luči."
                },
                {
                    simbol: "Deset mečev",
                    opis: "Semena intelekta vzklijejo. Lažne misli pomenijo šah-mat. Dobre, delujoče misli prinašajo luč v temo. Pripeljejo nas dlje po poti, medtem ko so propadli vsi naši ideali."
                },
                {
                    simbol: "\"Pribit\" na tla",
                    opis: "Orožje intelekta nas pogosto pribije. Šele ko se naše misli manifestirajo  v meso in kri, pobegnejo iz sfer teorije. Nič ni tako kot praktičen preizkus ..."
                },
                {
                    simbol: "Znamenje blagoslova",
                    opis: "Negativno: slabo uporabljene mentalne / duhovne moči so lahko zelo uničujoče - celo božanski blagoslov. Pozitivno: to je posebej močna karta blagoslova."
                },
                {
                    simbol: "Na robu vode",
                    opis: "Spodaj ob reki: v času nesreče ali propada potrebujemo vodo življenja. Duhovne moči in duhovnost so kot vrelec mladosti, ko jim dajemo priložnost za pretok!"
                },
            ],
            elementi: [
                {
                    ime: "DA ali NE vprašanje:",
                    vrednost: "NE",
                },
                {
                    ime: "Numerologija:",
                    vrednost: "10",
                },
                {
                    ime: "Element:",
                    vrednost: "Zrak",
                },
                {
                    ime: "Astrologija:",
                    vrednost: "Sonce v dvojčku",
                },
                {
                    ime: "Kabalistični sefirot:",
                    vrednost: "Malkuth (Kraljestvo)",
                },
                {
                    ime: "Čas:",
                    vrednost: "Junij 11 - Junij 20"
                }
            ],
        }
    }
}
