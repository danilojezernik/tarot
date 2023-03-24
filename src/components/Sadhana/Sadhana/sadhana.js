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
                    ide: '#1',
                    ime: "XXI – Svet (The World)",
                    img: world,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-world-sadhana",
                },
                {
                    id: 2,
                    ide: '#2',
                    ime: "XX – Sodba (Judgement)",
                    img: judgement,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/judgement-sadhana",
                },
                {
                    id: 3,
                    ide: '#3',
                    ime: "XVIII – Luna (The Moon)",
                    img: moon,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-moon-sadhana",
                },
                {
                    id: 4,
                    ide: '#4',
                    ime: "XIX – Sonce (The Sun)",
                    img: sun,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-sun-sadhana",
                },
                {
                    id: 5,
                    ide: '#5',
                    ime: "XVII – Zvezda (The Star)",
                    img: star,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-star-sadhana",
                },
                {
                    id: 6,
                    ide: '#6',
                    ime: "XVI – Trdnjava (The Tower)",
                    img: tower,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-tower-sadhana",
                },
                {
                    id: 7,
                    ide: '#7',
                    ime: "XIV – Zmernost (Temperance)",
                    img: temperance,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/temperance-sadhana",
                },
                {
                    id: 8,
                    ide: '#8',
                    ime: "XV – Hudič (The Devil)",
                    img: devil,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-devil-sadhana",
                },
                {
                    id: 9,
                    ide: '#9',
                    ime: "XIII – Smrt (Death)",
                    img: death,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/death-sadhana",
                },
                {
                    id: 10,
                    ide: '#10',
                    ime: "XI – Pravica (Justice)",
                    img: justice,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/justice-sadhana",
                },
                {
                    id: 11,
                    ide: '#11',
                    ime: "IX – Puščavnik (The Hermit)",
                    img: hermit,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-hermit-sadhana",
                },
                {
                    id: 12,
                    ide: '#12',
                    ime: "VIII – Moč (Strength)",
                    img: strength,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/strength-sadhana",
                },
                {
                    id: 13,
                    ide: '#13',
                    ime: "XII – Obešenec (The Hanged Man)",
                    img: hanged,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-hanged-man-sadhana",
                },
                {
                    id: 14,
                    ide: '#14',
                    ime: "X – Kolo sreče (Wheel of Fortune)",
                    img: wheel,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/wheel-of-fortune-sadhana",
                },
                {
                    id: 15,
                    ide: '#15',
                    ime: "II - Visoka Svečenica (The High Priestess)",
                    img: priestess,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-high-priestess-sadhana",
                },
                {
                    id: 16,
                    ide: '#16',
                    ime: "VI – Ljubimca (The Lovers)",
                    img: lovers,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-lovers-sadhana",
                },
                {
                    id: 17,
                    ide: '#17',
                    ime: "IV - Cesar (The Emperor)",
                    img: emperor,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-emperor-sadhana",
                },
                {
                    id: 18,
                    ide: '#18',
                    ime: "VII – Kočija (The Chariot)",
                    img: chariot,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-chariot-sadhana",
                },
                {
                    id: 19,
                    ide: '#19',
                    ime: "V – Svečenik (The Hierophant)",
                    img: hierophant,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-hierophant-sadhana",
                },
                {
                    id: 20,
                    ide: '#20',
                    ime: "III - Cesarica (The Empress)",
                    img: empress,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-empress-sadhana",
                },
                {
                    id: 21,
                    ide: '#21',
                    ime: "I - Magik (The Magician)",
                    img: magician,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-magician-sadhana",
                },
                {
                    id: 22,
                    ide: '#22',
                    ime: "Norec (The Fool)",
                    img: fool,
                    opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae metus a elit finibus scelerisque. Vivamus quis nunc odio. Ut pretium, purus varius faucibus cursus, arcu ipsum mattis magna, vel fermentum dolor risus at nulla. Donec pellentesque orci urna. Aliquam quis mauris ligula. Curabitur vestibulum porttitor odio ac convallis. Integer sollicitudin lorem nisl, vel porta odio fringilla imperdiet. Fusce blandit dapibus nisl a viverra.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at posuere nisi. Aenean dictum felis augue, eu venenatis ante sodales a. Curabitur convallis sagittis nibh, nec laoreet augue ornare sit amet. Fusce laoreet nisl quis risus laoreet condimentum. Vestibulum ut urna aliquet, sagittis magna id, fringilla odio. Curabitur et consequat ante, id ultricies libero. In imperdiet ex eget lacus faucibus fringilla. Quisque nec laoreet leo. Vivamus imperdiet pulvinar bibendum.",
                    to: "/the-fool-sadhana",
                }
            ]
        }
    }
}
