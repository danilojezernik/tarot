import ceremonial from '@/assets/literatura/ceremonial-magic-tarot.jpg'
import pilgrimage from '@/assets/literatura/fools-pilgrimage.jpg'
import big from '@/assets/literatura/the-big-book-of-tarot.jpg'
import holistic from '@/assets/literatura/holistic-tarot.jpg'
import mystical from '@/assets/literatura/mystical-origins-tarot.jpg'
import beginners from '@/assets/literatura/tarot-for-beginers-second-ed.jpg'
import tree from '@/assets/literatura/tarot-tree-of-life.jpg'
import thot from '@/assets/literatura/thot-tarot.jpg'
import tarotfirst from '@/assets/literatura/tarot-therapy-first.jpg'
import tarotsecond from '@/assets/literatura/tarot-therapy-second.jpg'
import tarotthird from '@/assets/literatura/tarot-therapy-third.jpg'
import livingtarot from '@/assets/literatura/living-the-tarot.jpg'
import insighttarot from '@/assets/literatura/insight-tarot.jpg'
import language from '@/assets/literatura/language-of-tarot.jpg'
import introduction from '@/assets/literatura/introduction-tarot.jpg'
import fearless from '@/assets/literatura/fearless-tarot.jpg'
import meditation from '@/assets/literatura/meditation-tarot.jpg'
import pastkarma from '@/assets/literatura/past-life.jpg'
import reversal from '@/assets/literatura/reversal-tarot.jpg'
import hidden from '@/assets/literatura/hidden-symbols.jpg'
import guide from '@/assets/literatura/holistic-guide.jpg'
import numerlogy from '@/assets/literatura/numerology-book.jpg'
import numerlogytantra from '@/assets/literatura/numerology-tantra.jpg'
import kabalistictarot from '@/assets/literatura/kabalistic-tarot.jpg'
import kabalagates from '@/assets/literatura/tarot-gates.jpg'
import tarottransformation from '@/assets/literatura/tarot-transformation.jpg'
import karmatarot from '@/assets/literatura/karma-tariot.jpg'
import mindfulnesstarot from '@/assets/literatura/mindfulness-tarot.jpg'
import tarotmystical from '@/assets/literatura/mystical-tarot.jpg'
import tarotdeciphered from '@/assets/literatura/tarot-deciphered.jpg'
import pathworking from '@/assets/literatura/pathworking-tarot.jpg'
import mindful from '@/assets/literatura/mindful-tarot.jpg'
import kabbalahexperiences from '@/assets/literatura/kabala-experiences.jpg'
import chicken from '@/assets/literatura/chicken.jpg'
import magical from '@/assets/literatura/magic-qabalah.jpg'

export default {
    data() {
        return {
            knjige: [
                {
                    id: 1,
                    naslovKnjige: "THE HOLISTIC TAROT",
                    podnaslov: "An Integrative Approach to Using Tarot for Personal Growth",
                    image: holistic,
                    opis: "Zasnovan tako za začetnike kot tudi za izkušene bralce tarota, Holistic Tarot ponuja svež in enostaven pristop k uporabi tarota za izkoriščanje podzavestnega znanja in ustvarjalnosti.",
                    depository: 'https://amzn.eu/d/b9Yv9Ck',
                    avtor: "Benebell Wen"
                },
                {
                    id: 2,
                    naslovKnjige: "MYSTICAL ORIGINS OF THE TAROT",
                    podnaslov: "From Ancient Roots to Modern Usage",
                    image: mystical,
                    opis: "V Mystical Origins of the Tarot je Paul Huson strokovno sledil vsakemu simbolu male arkane do korenin v starodavni Perziji in podobam kart velike arkane do srednjeveškega sveta skrivnosti, čudežev in moralnih iger.",
                    depository: 'https://amzn.eu/d/4kLIvii',
                    avtor: "Paul Huson"
                },
                {
                    id: 3,
                    naslovKnjige: "TAROT FOR BEGINNERS",
                    podnaslov: "A Guide to Psychic Tarot Reading, Real Tarot Card Meanings, and Simple Tarot Spreads",
                    image: beginners,
                    opis: "Izkušnja s tarotom je lahko resnično opolnomočena, razjasni zmedene situacije in nam pokaže, da lahko svojo prihodnost oblikujemo na podlagi odločitev, ki jih sprejemamo v sedanjosti.",
                    depository: 'https://amzn.eu/d/iLVLh3Q',
                    avtor: "Lisa Chamberlain"
                },
                {
                    id: 4,
                    naslovKnjige: "TAROT AND THE TREE OF LIFE",
                    podnaslov: "Finding Everyday Wisdom in the Minor Arcana",
                    image: tree,
                    opis: "Preprosta, dostopna in lahko razumljiva, ta spregledana zrcala vsakdanjega življenja nam lahko pomagajo dostopati do našega notranjega znanja in izvedeti več o sebi.",
                    depository: 'https://amzn.eu/d/8tZEWhi',
                    avtor: "Isabel Radow Kliegman"
                },
                {
                    id: 5,
                    naslovKnjige: "THOT TAROT",
                    podnaslov: "Understanding Aliester Crowley's Thot Tarot New Edition",
                    image: thot,
                    opis: "Thoth Tarot Aleisterja Crowleyja je bil njegov zadnji opus, vrhunec vseživljenjskega okultnega študija in prakse. Z umetnico Lady Friedo Harris je strnil jedro svojega učenja v 78 kart tarota.",
                    depository: 'https://amzn.eu/d/hb8ERAO',
                    avtor: "Lon Milo DuQuette"
                },
                {
                    id: 6,
                    naslovKnjige: "THE BIG BOOK OF TAROT",
                    podnaslov: "How to Interpret the Cards and Work with Tarot Spreads for Personal Growth",
                    image: big,
                    opis: "Čeprav obstaja nešteto knjig, posvečenih tarotu, je tisto, kar ločuje knjigo Joan Bunning od drugih, je njena sposobnost, da vzame precej zapleten ezoterični sistem in ga razdeli na jasne, obvladljive in preproste lekcije.",
                    depository: 'https://amzn.eu/d/b4aKilw',
                    avtor: "Joan Bunning"
                },
                {
                    id: 7,
                    naslovKnjige: "THE FOOL'S PILGRIMAGE",
                    podnaslov: "Kabbalistic Meditations and the Tarot",
                    image: pilgrimage,
                    opis: "Priročnik Stephana Hoellerja za dvig zavesti je brez konkurence zaradi svoje jasnosti pri razlagi starodavne mistične kabale v povezavi z glavno arkano Tarota.",
                    depository: 'https://amzn.eu/d/5YXokS3',
                    avtor: "Stephan A. Hoeller"
                },
                {
                    id: 8,
                    naslovKnjige: "TAROT OF CEREMONIAL MAGIC",
                    podnaslov: "A Pictorial Synthesis of Three Great Pillars of Magic (Astrology, Enochian Magic, Goetia)",
                    image: ceremonial,
                    opis: "V tej prelomni knjigi Lon Milo DuQuette razlaga simbologijo kart v svojem Tarotu ceremonialne magije, novem kompletu, ki ga je izdal Next Millennium. Koncept je preboj za okultiste vseh smeri.",
                    depository: 'https://amzn.eu/d/7Kq58BD',
                    avtor: "Lon Milo DuQuette"
                },
                {
                    id: 9,
                    naslovKnjige: "TAROT THERAPY VOLUME 1",
                    podnaslov: "Theory & Practice",
                    image: tarotfirst,
                    opis: "V tem prelomnem novem delu je podan predlog za uporabo tarota kot terapije, poleg številnih drugih dopolnilnih in naravnih postopkov, ki so na voljo.",
                    depository: 'https://amzn.eu/d/b8bkuek',
                    avtor: "Steve Hounsome"
                },
                {
                    id: 10,
                    naslovKnjige: "TAROT THERAPY VOLUME 2",
                    podnaslov: "The Seekers Quest",
                    image: tarotsecond,
                    opis: "V desetih letih, odkar je izdal prvo knjigo v tej seriji treh delov, se je Steve lotil lastnega \"Seekers Quest\" in tukaj predstavlja ta edinstven pogled na Veliko arkano.",
                    depository: 'https://amzn.eu/d/iYPjZ9D',
                    avtor: "Steve Hounsome"
                },
                {
                    id: 11,
                    naslovKnjige: "TAROT THERAPY VOLUME 3",
                    podnaslov: "The Map of the Quest",
                    image: tarotthird,
                    opis: "Kot pri prejšnjih dveh delih so karte obravnavane v terapevtskem kontekstu, saj obstajajo kot temeljne energije in sile, iz katerih se oblikuje in dobiva obliko našega jaza in življenja.",
                    depository: 'https://amzn.eu/d/3qKBtSv',
                    avtor: "Steve Hounsome"
                },
                {
                    id: 12,
                    naslovKnjige: "LIVING THE TAROT",
                    podnaslov: "Applying Ancient Wisdom to the Challenges of modern Living",
                    image: livingtarot,
                    opis: "Mojstrovina interpretacije tarota Amber Jayanti vzame tarot iz področja teoretičnega in mističnega ter ga naredi dostopnega kot orodje za vsakodnevno življenje.",
                    depository: 'https://amzn.eu/d/elrFMNP',
                    avtor: "Amber Jayanti"
                },
                {
                    id: 13,
                    naslovKnjige: "INSIGHT TAROT",
                    podnaslov: "Secrets of Tarot Mastery",
                    image: insighttarot,
                    opis: "Dawn Rothwell združuje ezoterično modrost in zgodovino tarota s poglobljenimi, podrobnimi vajami, ki so zasnovane tako, da vas spodbujajo naprej na vašem duhovnem potovanju.",
                    depository: 'https://www.amazon.com/gp/product/0557069394/ref=x_gr_bb_amazon?ie=UTF8&tag=x_gr_bb_amazon-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0557069394&SubscriptionId=1MGPYB6YW3HWK55XCGG2',
                    avtor: "Dr. Dawn Rothwell, PhD"
                },
                {
                    id: 14,
                    naslovKnjige: "THE SECRET LANGUAGE OF TAROT",
                    podnaslov: "",
                    image: language,
                    opis: "Secret Language of Tarot se lahko uporablja kot referenčna knjiga in kot niz vodenih meditacij o posameznih simbolih. Vsako od sedmih poglavij vsebuje niz simbolov, ki imajo skupno temo.",
                    depository: 'https://amzn.eu/d/f5TqouQ',
                    avtor: "Rzth Ann in Wald Amberstone"
                },
                {
                    id: 15,
                    naslovKnjige: "INTRODUCTION TO TAROT",
                    podnaslov: "Illustrated with both the RIDER-WAITE and Crowley THOT decks",
                    image: introduction,
                    opis: "Ta knjiga vključuje navodila za razumevanje strukture in simbolike tarota, osnovne in napredne razporeditve kart, numerologijo, dvorne karte in druge teme tarota.",
                    depository: 'https://amzn.eu/d/4yBHBaw',
                    avtor: "Susan Levitt"
                },
                {
                    id: 16,
                    naslovKnjige: "FEARLESS TAROT",
                    podnaslov: "How to Give a Positive Reading in Any Situation",
                    image: fearless,
                    opis: "S svojim privlačnim in lahkotnim slogom vas Elliot Adam nauči, kako se premikati skozi sence in v svetlobo, ne glede na to, katero karto potegnete.",
                    depository: 'https://amzn.eu/d/1M2zdyf',
                    avtor: "Eliot Adam"
                },
                {
                    id: 17,
                    naslovKnjige: "MEDITATIONS OF THE TAROT",
                    podnaslov: "A Journey into Christian Hermeticism",
                    image: meditation,
                    opis: "Z uporabo 22 glavnih arkan tarota kot sredstva za raziskovanje nekaterih najbolj prodornih duhovnih vprašanj človeštva, so Meditacije o tarotu pritegnile neverjeten niz pohval iz vsega duhovnega spektra.",
                    depository: 'https://amzn.eu/d/faJC3Mn',
                    avtor: "Eliot Adam"
                },
                {
                    id: 18,
                    naslovKnjige: "PAST-LIFE & KARMIC TAROT",
                    podnaslov: "",
                    image: pastkarma,
                    opis: "Tarot je odlično orodje za odkrivanje napredovanja vaše duše skozi njene inkarnacije. Ta knjiga je prva, ki ponuja posebne razdelke, ki odgovarjajo na karmična vprašanja, ki vas spremljajo iz enega življenja v drugega.",
                    depository: 'https://amzn.eu/d/9YNY0gQ',
                    avtor: "Edain McCoy"
                },
                {
                    id: 19,
                    naslovKnjige: "THE COMPLETE BOOK OF TAROT REVERSALS",
                    podnaslov: "",
                    image: reversal,
                    opis: "Te interpretacije ponujajo notranjo podporo, pozitivne nasvete in opise razpoložljivih učnih priložnosti, vendar z zasukom, ki je edinstven za njih.",
                    depository: 'https://amzn.eu/d/dFwOSpM',
                    avtor: "Mary K. Greer"
                },
                {
                    id: 20,
                    naslovKnjige: "TAROT CARDS",
                    podnaslov: "The Hidden Symbols Explained",
                    image: hidden,
                    opis: "Vsaka posamezna karta Tarot je polna skritih simbolov, vendar imajo nekatere karte več simbolov kot druge. Nekateri simboli se pojavijo znotraj karte v enem kompletu, v drugih pa ne.",
                    depository: 'https://amzn.eu/d/iyEHLoU',
                    avtor: "Derek Johnsen"
                },
                {
                    id: 21,
                    naslovKnjige: "TAROT FOR BEGINNERS",
                    podnaslov: "A Holistic Guide to Using the Tarot for Personal Growth & Self Development",
                    image: guide,
                    opis: "Ta dostopen vodnik pomaga začetnikom, da se naučijo brati tarot, in nudi tehnike za povezovanje abstraktnih arhetipov in simbolov v kartah s konkretnimi podrobnostmi v vašem življenju.",
                    depository: 'https://amzn.eu/d/bndGGLi',
                    avtor: "Meg Hayertz"
                },
                {
                    id: 22,
                    naslovKnjige: "THE BIG BOOK OF NUMEROLOGY",
                    podnaslov: "The Hidden Meaning of Numbers and Letters",
                    image: numerlogy,
                    opis: "Ta knjiga ni podobna nobeni drugi knjigi o numerologiji, saj razkriva znanost za to starodavno mistično umetnostjo in pojasnjuje, zakaj deluje.",
                    depository: 'https://amzn.eu/d/g4hM7Rv',
                    avtor: "Shirley Blackwell Lawrence"
                },
                {
                    id: 23,
                    naslovKnjige: "NUMEROLOGY WITH TANTRA, AYURVEDA AND ASTROLOGY",
                    podnaslov: "A Key to Human Behavior",
                    image: numerlogytantra,
                    opis: "Prvič tantrični učenjak in strokovnjak za hindujsko tradicijo ajurvede in astrologije predstavlja sistem numerologije, ki združuje numerične izračune, astrološke podatke in analizo tipa telesa.",
                    depository: 'https://amzn.eu/d/eCiU3Oe',
                    avtor: "Harish Johari"
                },
                {
                    id: 24,
                    naslovKnjige: "KABBALISTIC TAROT",
                    podnaslov: "Hebraic Wisdom in the Major and Minor Arcana",
                    image: kabalistictarot,
                    opis: "Ko so Grki napadli Izrael in prepovedali preučevanje Tore, so Judje začeli s skrivno metodo Toranskega preučevanja, ki se je zdelo zgolj preprost način za zapolnitev časa: igranje kart. Ti prvi krovi tarota so omogočili preučevanje Tore brez odkrivanja.",
                    depository: 'https://amzn.eu/d/bLg5uXG',
                    avtor: "Dovid Krafchow"
                },
                {
                    id: 25,
                    naslovKnjige: "TAROT AND THE GATES OF LIGHT",
                    podnaslov: "A Kabbalistic Path to Liberation",
                    image: kabalagates,
                    opis: "49-dnevna mistična praksa, znana kot štetje Omerja, je starodavni judovski obred med praznikoma Pasha in Šavuot (znan tudi kot binkošti).",
                    depository: 'https://amzn.eu/d/6M5zDzm',
                    avtor: "Mark Horn"
                },
                {
                    id: 26,
                    naslovKnjige: "Tarot for Transformation",
                    podnaslov: "Using the Major Arcana to Discover Your Best Self and Create a Life Worth Living",
                    image: tarottransformation,
                    opis: "Ta knjiga, mešanica tarota, samopomoči in psihologije, vam bo dala orodja za ustvarjanje življenja, kakršnega ste si želeli.",
                    depository: 'https://amzn.eu/d/16aOchC',
                    avtor: "Andy Matzner"
                },
                {
                    id: 27,
                    naslovKnjige: "KARMIC TAROT",
                    podnaslov: "A Profound System for Finding and Following Your Life's Path",
                    image: karmatarot,
                    opis: "Predstavlja posebno metodo za branje tarota, ki začetnikom ali naprednim bralcem omogoča, da najdejo odgovore na svoja vprašanja v kontekstu svojih sedanjih in preteklih življenj.",
                    depository: 'https://amzn.eu/d/eEoLtIz',
                    avtor: "William C. Lammey"
                },
                {
                    id: 28,
                    naslovKnjige: "TAROT",
                    podnaslov: "The Way of Mindfulness: Use the Cards to Find Peace & Balance",
                    image: mindfulnesstarot,
                    opis: "Odkrijte neverjetno partnerstvo tarota in pozornosti s to obsežno, barvno knjigo evropskih strokovnjakov za tarot Johannesa Fiebiga in Evelin Burger.",
                    depository: 'https://amzn.eu/d/hWOSXW0',
                    avtor: "Evelin Burger, Johannes Fiebig"
                },
                {
                    id: 29,
                    naslovKnjige: "STUDIES ON MYSTICAL TAROT",
                    podnaslov: "The Court Cards",
                    image: tarotmystical,
                    opis: "Tarot skozi lečo transformacijske psihologije služi krepitvi načinov, kako sta renesansa in humanizem oblikovala zavest prihodnjih generacij.",
                    depository: 'https://amzn.eu/d/bTfoOXd',
                    avtor: "Yolanda M. Robinson, Paul K. Austad"
                },
                {
                    id: 30,
                    naslovKnjige: "TAROT DECIPHERED",
                    podnaslov: "Decoding Esoteric Symbolism in Modern Tarot",
                    image: tarotdeciphered,
                    opis: "Tarot Deciphered je poglobljeno potovanje v ezoterične korenine, ki so podlaga za tarot Rider-Waite-Smith, tarot Thoth in nešteto drugih, ki imajo skupno simbologijo.",
                    depository: 'https://amzn.eu/d/2tiNHys',
                    avtor: "M. M. Meleen, T. Susan Chang"
                },
                {
                    id: 31,
                    naslovKnjige: "Pathworking the Tarot",
                    podnaslov: "Spiritual Guidance & Practical Advice from the Cards",
                    image: pathworking,
                    opis: "Z enostavnimi tehnikami in praktičnimi vajami vas Leeza Robertson vodi skozi vsako od 78 kart z uporabo treh stilov dela: namernega, intuitivnega in tavajočega.",
                    depository: 'https://amzn.eu/d/aaP08yP',
                    avtor: "Leeza Robertson"
                },
                {
                    id: 32,
                    naslovKnjige: "Mindful Tarot",
                    podnaslov: "Bring a Peace-Filled, Compassionate Practice to the 78 Cards",
                    image: mindful,
                    opis: "Ta prelomna knjiga, ki združuje arhetipe in pomene kart z današnjimi dobro raziskanimi metodami meditacije, vam pokaže, kako s sočutjem najti neverjetne vpoglede.",
                    depository: 'https://amzn.eu/d/38MAfHd',
                    avtor: "Lisa Freinkel Tishman PhD"
                },
                {
                    id: 33,
                    naslovKnjige: "The Kabbalah Experience",
                    podnaslov: "The Practical Guide to Kabbalistic Wisdom",
                    image: kabbalahexperiences,
                    opis: "The Kabbalah Experience vodi bralca skozi vrsto strukturiranih vaj na izkustveno potovanje samoodkrivanja Drevesa življenja, ki leži v samem srcu Kabale.",
                    depository: 'https://amzn.eu/d/chc94NY',
                    avtor: "Naomi Ozaniec"
                },
                {
                    id: 34,
                    naslovKnjige: "The Chicken Qabalah",
                    podnaslov: "of Rabbi Lamed Ben Clifford",
                    image: chicken,
                    opis: "Edinstven in šaljiv ter tudi praktičen pristop k vse bolj priljubljenemu preučevanju Kabale. To je res smešna knjiga!",
                    depository: 'https://amzn.eu/d/eGXPyOy',
                    avtor: "Naomi Ozaniec"
                },
                {
                    id: 35,
                    naslovKnjige: "Magical Qabalah for Beginners",
                    podnaslov: "A Comprehensive Guide to Occult Knowledge",
                    image: magical,
                    opis: "V knjigi Magical Qabalah for Beginners Frater Barrabbas poučuje ritualnega magika in okultnega študenta o zgodovini in teoriji kabale ter njeni praktični ritualni uporabi.",
                    depository: 'https://amzn.eu/d/d9QBlRl',
                    avtor: "Frater Barrabbas"
                }
            ]
        }
    }
}
