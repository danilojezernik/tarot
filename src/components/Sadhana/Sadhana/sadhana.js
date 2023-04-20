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
            sadhane: [
                {
                    id: 1,
                    hLetter: '32 - Tav - &#1514;',
                    pot: 'Malkut ➡ Yesod',
                    ide: '#1',
                    ime: "XXI – Svet (The World)",
                    img: world,
                    cas: '1,5',
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-world-sadhana",
                    toOpis: '/the-world'
                },
                {
                    id: 2,
                    hLetter: '31 - Shin - &#1513;',
                    pot: 'Malkut ➡ Hod',
                    ide: '#2',
                    ime: "XX – Sodba (Judgement)",
                    img: judgement,
                    cas: '2',
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/judgement-sadhana",
                    toOpis: '/judgement'
                },
                {
                    id: 3,
                    hLetter: '30 - Resh - &#1512;',
                    pot: 'Yesod ➡ Hod',
                    ide: '#4',
                    ime: "XIX – Sonce (The Sun)",
                    img: sun,
                    cas: '1,5',
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-sun-sadhana",
                    toOpis: '/the-sun'
                },
                {
                    id: 4,
                    hLetter: '29 - Qof - &#1511;',
                    pot: 'Malkut ➡ Netzach',
                    ide: '#3',
                    ime: "XVIII – Luna (The Moon)",
                    img: moon,
                    cas: '1,5',
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-moon-sadhana",
                    toOpis: '/the-moon'
                },
                {
                    id: 5,
                    hLetter: '28 - Tsadi - &#1510;',
                    pot: 'Yesod ➡ Netzach',
                    ide: '#5',
                    ime: "XVII – Zvezda (The Star)",
                    img: star,
                    cas: '1,5',
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-star-sadhana",
                    toOpis: '/the-star'
                },
                {
                    id: 6,
                    hLetter: '27 - Pe - &#1508;',
                    pot: 'Hod ➡ Netzach',
                    ide: '#6',
                    ime: "XVI – Trdnjava (The Tower)",
                    img: tower,
                    cas: '1,5',
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-tower-sadhana",
                    toOpis: '/the-tower'
                },
                {
                    id: 7,
                    hLetter: '26 - Ayin - &#1506;',
                    pot: 'Hod ➡ Tiphareth',
                    ide: '#7',
                    ime: "XV – Hudič (The Devil)",
                    img: devil,
                    cas: '1,5',
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-devil-sadhana",
                    toOpis: '/the-devil'
                },
                {
                    id: 8,
                    hLetter: '24 - Nun - &#1504;',
                    pot: 'Netzach ➡ Tiphareth',
                    ide: '#9',
                    ime: "XIII – Smrt (Death)",
                    img: death,
                    cas: '1,5',
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/death-sadhana",
                    toOpis: '/death'

                },
                {
                    id: 9,
                    hLetter: '25 - Samekh - &#1505;',
                    pot: 'Yesod ➡ Tiphareth',
                    ide: '#8',
                    ime: "XIV – Zmernost (Temperance)",
                    img: temperance,
                    cas: '1,5',
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/temperance-sadhana",
                    toOpis: '/temperance'
                },
                {
                    id: 10,
                    ide: '#10',
                    hLetter: '20 - Yod - &#1497;',
                    pot: 'Tiphareth ➡ Chesed',
                    ime: "IX – Puščavnik (The Hermit)",
                    img: hermit,
                    cas: '1,5',
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-hermit-sadhana",
                    toOpis: '/the-hermit'
                },
                {
                    id: 11,
                    hLetter: '22 - Lamed - &#1500;',
                    pot: 'Tiphareth ➡ Geburah',
                    ide: '#11',
                    ime: "XI – Pravica (Justice)",
                    img: justice,
                    cas: '1,5',
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/justice-sadhana",
                    toOpis: '/justice'
                },
                {
                    id: 12,
                    ide: '#12',
                    hLetter: '23 - Mem - &#1502;',
                    pot: 'Hod ➡ Geburah',
                    ime: "XII – Obešenec (The Hanged Man)",
                    img: hanged,
                    cas: '1,5',
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-hanged-man-sadhana",
                    toOpis: '/the-hanged-man'

                },
                {
                    id: 13,
                    ide: '#13',
                    hLetter: '21 - Kaf - &#1499;',
                    pot: 'Netzach ➡ Chesed',
                    ime: "X – Kolo sreče (Wheel of Fortune)",
                    img: wheel,
                    cas: '1,5',
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/wheel-of-fortune-sadhana",
                    toOpis: '/wheel-of-fortune'
                },
                {
                    id: 14,
                    hLetter: '19 - Tet - &#1496;',
                    pot: 'Geburah ➡ Chesed',
                    ide: '#14',
                    ime: "VIII – Moč (Strength)",
                    img: strength,
                    cas: '1,5',
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/strength-sadhana",
                    toOpis: '/strength'
                },
                {
                    id: 15,
                    ide: '#15',
                    hLetter: '17 - Zayin - &#1494;',
                    pot: 'Tiphareth ➡ Binah',
                    ime: "VI – Ljubimca (The Lovers)",
                    img: lovers,
                    cas: '1,5',
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-lovers-sadhana",
                    toOpis: '/the-lovers'
                },
                {
                    id: 16,
                    ide: '#16',
                    hLetter: '15 - He - &#1492;',
                    pot: 'Tiphareth ➡ Chokmah',
                    ime: "IV - Cesar (The Emperor)",
                    img: emperor,
                    cas: '1,5',
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-emperor-sadhana",
                    toOpis: '/the-emperor'
                },
                {
                    id: 17,
                    hLetter: '16 - Vav - &#1493;',
                    pot: 'Chesed ➡ Chokmah',
                    ide: '#17',
                    ime: "V – Svečenik (The Hierophant)",
                    img: hierophant,
                    cas: '1,5',
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-hierophant-sadhana",
                    toOpis: '/the-hierophant'
                },
                {
                    id: 18,
                    ide: '#18',
                    hLetter: '18 - Het - &#1495;',
                    pot: 'Geburah ➡ Binah',
                    ime: "VII – Kočija (The Chariot)",
                    img: chariot,
                    cas: '1,5',
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-chariot-sadhana",
                    toOpis: '/the-chariot'

                },
                {
                    id: 19,
                    hLetter: '14 - Dalet - &#1491;',
                    pot: 'Binah ➡ Chokmah',
                    ide: '#19',
                    ime: "III - Cesarica (The Empress)",
                    img: empress,
                    cas: '1,5',
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-empress-sadhana",
                    toOpis: '/the-empress'
                },
                {
                    id: 20,
                    hLetter: '13 - Gimel - &#1490;',
                    pot: 'Tiphareth ➡ Kether',
                    ide: '#20',
                    ime: "II - Visoka Svečenica (The High Priestess)",
                    img: priestess,
                    cas: '1,5',
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-high-priestess-sadhana",
                    toOpis: '/the-high-priestess'
                },
                {
                    id: 21,
                    hLetter: '12 - Bet - &#1489;',
                    pot: 'Binah ➡ Kether',
                    ide: '#21',
                    ime: "I - Magik (The Magician)",
                    img: magician,
                    cas: '1,5',
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-magician-sadhana",
                    toOpis: '/the-magician'
                },
                {
                    id: 22,
                    hLetter: '11 - Alef - &#1488;',
                    pot: 'Chokmah ➡ Kether',
                    ide: '#22',
                    ime: "0 - Norec (The Fool)",
                    img: fool,
                    cas: '1,5',
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-fool-sadhana",
                    toOpis: '/the-fool'
                }
            ]
        }
    }
}
