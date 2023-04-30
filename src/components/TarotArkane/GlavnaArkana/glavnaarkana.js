import fool from '@/assets/majorarcana/the-fool.png'
import magician from '@/assets/majorarcana/the-magician.png'
import priestess from '@/assets/majorarcana/the-high-priestess.png'
import empress from '@/assets/majorarcana/the-empress.png'
import emperor from '@/assets/majorarcana/the-emperor.png'
import hierophant from '@/assets/majorarcana/the-hierophant.png'
import lovers from '@/assets/majorarcana/the-lovers.png'
import chariot from '@/assets/majorarcana/the-chariot.png'
import strength from '@/assets/majorarcana/strength.png'
import hermit from '@/assets/majorarcana/the-hermit.png'
import wheel from '@/assets/majorarcana/wheel-of-fortune.png'
import justice from '@/assets/majorarcana/justice.png'
import hanged from '@/assets/majorarcana/the-hanged-man.png'
import death from '@/assets/majorarcana/death.png'
import temperance from '@/assets/majorarcana/temperance.png'
import devil from '@/assets/majorarcana/the-devil.png'
import tower from '@/assets/majorarcana/the-tower.png'
import star from '@/assets/majorarcana/the-star.png'
import moon from '@/assets/majorarcana/the-moon.png'
import sun from '@/assets/majorarcana/the-sun.png'
import judgement from '@/assets/majorarcana/judgement.png'
import world from '@/assets/majorarcana/the-world.png'


export default {
    data() {
        return {
            tarot: [
                {
                    id: 1,
                    ime: "0 - Norec (The Fool)",
                    img: fool,
                    pregled: "Mladostna neumnost, nedolžnost, zaslepljen od nevednosti, poslušaj opozorila, novinec...",
                    to: "/the-fool"
                },
                {
                    id: 2,
                    ime: "I - Magik (The Magician)",
                    img: magician,
                    pregled: "Samokontrola, spretnost, dejanje, prevzemanje odgovornosti...",
                    to: "/the-magician"
                },
                {
                    id: 3,
                    ime: "II - Visoka Svečenica (The High Priestess)",
                    img: priestess,
                    pregled: "Intuicija, modrost, skrivnosti, skrivnostnost, vztrajnost...",
                    to: "/the-high-priestess"
                },
                {
                    id: 4,
                    ime: "III - Cesarica (The Empress)",
                    img: empress,
                    pregled: "Plodnost, obilje, mati, zdravje, prijaznost...",
                    to: "/the-empress"
                },
                {
                    id: 5,
                    ime: "IV - Cesar (The Emperor)",
                    img: emperor,
                    pregled: "Volja, ambicija, stabilnost, oče, dobrotnik...",
                    to: "/the-emperor"
                },
                {
                    id: 6,
                    ime: "V – Svečenik (The Hierophant)",
                    img: hierophant,
                    pregled: "Poroka, dober nasvet, vera, višji jaz, usmiljenje...",
                    to: "/the-hierophant"
                },
                {
                    id: 7,
                    ime: "VI – Ljubimca (The Lovers)",
                    img: lovers,
                    pregled: "Ljubezen, spolna zveza, lepota, čustveni uspeh, premagane preizkušnje...",
                    to: "/the-lovers"
                },
                {
                    id: 8,
                    ime: "VII – Kočija (The Chariot)",
                    img: chariot,
                    pregled: "Gonilna sila, zmagoslavje, vojna, maščevanje, previdnost...",
                    to: "/the-chariot"
                },
                {
                    id: 9,
                    ime: "VIII – Moč (Strength)",
                    img: strength,
                    pregled: "Trdnost, pogum, energija, uspeh, samodisciplina...",
                    to: "/strength"
                },
                {
                    id: 10,
                    ime: "IX – Puščavnik (The Hermit)",
                    img: hermit,
                    pregled: "Preudarnost, izdaja, previdnost, vztrajnost...",
                    to: "/the-hermit"
                },
                {
                    id: 11,
                    ime: "X – Kolo sreče (Wheel of Fortune)",
                    img: wheel,
                    pregled: "Roka usode, obrat na bolje, sreča, usoda, obilje...",
                    to: "/wheel-of-fortune"
                },
                {
                    id: 12,
                    ime: "XI – Pravica (Justice)",
                    img: justice,
                    pregled: "Zakon, resnica, ravnovesje, nadzor, pogodba...",
                    to: "/justice"
                },
                {
                    id: 13,
                    ime: "XII – Obešenec (The Hanged Man)",
                    img: hanged,
                    pregled: "Modrost v težavah, požrtvovalnost, intuicija, iniciacija, prerokba...",
                    to: "/the-hanged-man"
                },
                {
                    id: 14,
                    ime: "XIII – Smrt (Death)",
                    img: death,
                    pregled: "Preobrazba, dogodki, ki niso pod vašim nadzorom, nov a težek začetek...",
                    to: "/death"
                },
                {
                    id: 15,
                    ime: "XIV – Zmernost (Temperance)",
                    img: temperance,
                    pregled: "Upravljanje, gospodarnost, duh, ki presega materijo, zmernost, modri nasveti...",
                    to: "/temperance"
                },
                {
                    id: 16,
                    ime: "XV – Hudič (The Devil)",
                    img: devil,
                    pregled: "Jeza, nasilje, ljubosumje, pohlep, prevara, nagon, spolna strast...",
                    to: "/the-devil"
                },
                {
                    id: 17,
                    ime: "XVI – Trdnjava (The Tower)",
                    img: tower,
                    pregled: "Katastrofa, vrnitev v posest, propad, stiska, nesreča...",
                    to: "/the-tower"
                },
                {
                    id: 18,
                    ime: "XVII – Zvezda (The Star)",
                    img: star,
                    pregled: "Upanje, cilji, pričakovanja, vodilna sila, razsvetljenje, svetli obeti...",
                    to: "/the-star"
                },
                {
                    id: 19,
                    ime: "XVIII – Luna (The Moon)",
                    img: moon,
                    pregled: "Temne sile, nočne more, iluzije, skriti strahovi, nevarnost premagana skozi intuicija...",
                    to: "/the-moon"
                },
                {
                    id: 20,
                    ime: "XIX – Sonce (The Sun)",
                    img: sun,
                    pregled: "Sreča, veselje, preporod, svoboda, srečen zakon, uspeh...",
                    to: "/the-sun"
                },
                {
                    id: 21,
                    ime: "XX – Sodba (Judgement)",
                    img: judgement,
                    pregled: "Velika odločitev, izid, končni rezultat, ponovno rojstvo, težave premagati...",
                    to: "/judgement"
                },
                {
                    id: 22,
                    ime: "XXI – Svet (The World)",
                    img: world,
                    pregled: "Uspešen zaključek, zagotovljen uspeh, priznanje, potovanja na dolge razdalje, harmonija...",
                    to: "/the-world"
                }
            ],
            opis: '<p>Karte Tarota Velike arkane predstavljajo življenjske lekcije, karmične vplive in velike arhetipske teme, ki vplivajo na vaše življenje in potovanje vaše duše do razsvetljenja. Pomeni kart Velike arkane so globoki in zapleteni – na čudovite načine! Teze Tarot karte resnično predstavljajo strukturo človeške zavesti in vsebujejo ključe življenjskih lekcij, ki so se prenašale skozi stoletja.</p><p>Karte Velika Arcana vključujejo 21 oštevilčenih kart in 1 neoštevilčeno karto (Norec). Norec je glavni lik Velike Arkane in se poda na svoje potovanje skozi vsako od kart, spoznava nove učitelje in se na tej poti uči novih življenjskih lekcij ter na koncu doseže zaključek svojega potovanja s karto Svet. To je znano kot potovanje Norca in je koristen način za razumevanje zgodbe pomenov kart Tarota Velike arkane.</p><p><b>Kaj pomeni karta velike arkane pri branju tarota?</b> Ko v branju tarota zagledate karto Velike arkane, ste pozvani, da razmislite o življenjskih lekcijah in temah, ki jih trenutno doživljate. Karte Velike arkane bodo pogosto postavile sceno za celotno branje Tarota, druge karte pa se nanašajo na ta temeljni pomen Velike Arkane.</p><p><b>Kaj pomeni, ko je pri branju tarota prisotna večinoma karta iz Velike arkane?</b> Ko je branje tarota pretežno sestavljeno iz kart velike arkane, doživljate dogodke, ki vam bodo spremenili življenje in bodo imeli dolgoročne učinke. Obstajajo pomembne lekcije, na katere morate biti pozorni, da boste še naprej napredovali v svojem duhovnem in osebnem iskanju.</p><p>Če pa je veliko tarot kart Velike arkane obrnjenih navzdol, je to morda znak, da tem pomembnim življenjskim lekcijama ne posvečate dovolj pozornosti in morate lekcije najprej obvladati, preden lahko nadaljujete.</p>'
        }
    }
}
