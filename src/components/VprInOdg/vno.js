import cards from '@/assets/tarot-index-card.png'

export default {
    data() {
        return {
            rekVpr: 'Del uspeha je postavljanje vprašanj in poslušanje odgovorov.',

            accordions: [
                {
                    idHeading: 'flush-headingOne',
                    idCollapse: 'flush-collapseOne',
                    idCollapseL: '#flush-collapseOne',
                    vpr: 'Katere tarot karte so uporabljene tukaj?',
                    odg: '<p>Tarot Rider-Waite je postavil standard za stotine drugih tarot kart, ki sledijo arhetipskim podobam, ki jih je leta 1909 ustvarila Pamela Colman Smith pod vodstvom Arthurja Edwarda Waitea. Ta izdaja vključuje Smithove izvirne ročno narisane naslove. Edinstvena značilnost kompleta Rider-Waite in eden od glavnih razlogov za njegovo trajno priljubljenost je, da vse karte, vključno z Minor Arcana, prikazujejo celotne prizore s figurami in simboli.</p> <p>Pred tarotom Rider-Waite so bile karte za pike skoraj vseh tarot krovov označene le z razporeditvijo znakov obleke - meči, palice, skodelice in kovanci ali pentakli. Slikovne slike na vseh kartah omogočajo interpretacije brez potrebe po večkratnem pregledovanju pojasnjevalnega besedila. Inovativna Manjša Arcana in sposobnost Pamele Colman Smith, da ujame subtilnost čustev in izkušenj, je tarot Rider-Waite postal model za načrte številnih paketov tarota. Tarot Rider-Waite je bil po izboru Aeclectic Tarot imenovan za enega izmed najboljših desetih tarot zbirk vseh časov.</p> <p>Pamela Colman Smith se je rodila 16. februarja 1878 v Middlesexu v Angliji ameriškim staršem, Smithovo otroštvo so preživeli med Londonom, New Yorkom, in Kingstonom na Jamajki. V mladosti je potovala po Angliji z gledališko družbo Ellen Terry in Henryja Irvinga. Nato se je začela formalno izobraževati na inštitutu Pratt v Brooklynu, ki ga je diplomirala leta 1897.</p> <p>Smith se je vrnil v Anglijo, kjer je postala gledališka oblikovalka za miniaturno gledališče in ilustratorka – predvsem knjig, brošur in plakatov. Okoli leta 1903 se je pridružila redu Zlate zore. Leta 1909 se je pod vodstvom Arthurja Edwarda Waitea lotila serije oseminsedemdeset alegoričnih slik, ki jih je Waite opisal kot popravljen paket tarota.</p> <p>Dizajni, ki so jih istega leta objavili William Rider in sin, ponazarjajo mistiko, ritual, domišljijo, fantazijo in globoka čustva umetnika. Arthur Edward Waite, rojen v Ameriki leta 1857, je bil Waite vzgojen in izobražen kot katoličan v Angliji.</p><p>Pri 21 letih se je Waite ukvarjal z raziskavami in pisanjem o psihičnih in ezoteričnih zadevah. Kmalu po pridružitvi Hermetičnemu redu Zlate zore je postal veliki mojster in preusmeril fokus reda iz magije v mistiko. Zlati red, katerega strukturna hierarhija je temeljila na kabali, velja za največji vpliv 20. stoletja na okultistiko.</p> <p>Waite je bil plodovit avtor okultnih besedil, del o Svetem gralu in zbirke mističnega znanja, ki je osnova sodobnega tarota. Najbolj znan je kot soustvarjalec kompleta Tarot Rider-Waite in avtor spremljevalnega zvezka The Pictorial Key to the Tarot, ki je bil prvič objavljen leta 1910.</p>',
                },
                {
                    idHeading: 'flush-headingFive',
                    idCollapse: 'flush-collapseFive',
                    idCollapseL: '#flush-collapseFive',
                    vpr: 'Ali lahko uporabljam katere druge karte?',
                    odg: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a lectus ac turpis eleifend condimentum ac eget nisl. Aliquam erat volutpat. Aliquam tincidunt elementum enim, vitae placerat tortor ultrices et. Curabitur convallis ipsum elementum nunc tincidunt, quis tincidunt turpis maximus. Curabitur eget dignissim mi. Morbi quis erat eget ipsum porta facilisis. Fusce non lorem massa. In aliquam convallis dignissim. Nulla facilisi. Vestibulum rhoncus sapien ipsum, eget commodo lacus viverra faucibus.</p>' +
                        '<p>Cras suscipit augue non nunc convallis, et gravida lorem porttitor. Maecenas fringilla lectus nec diam congue, ac fermentum est laoreet. Nullam interdum in arcu ac efficitur. Nam finibus mattis sapien, et posuere magna mattis elementum. Phasellus aliquam vulputate lorem non ultricies. Integer lobortis dolor ac malesuada dapibus. Etiam pulvinar nibh ac felis venenatis, vitae facilisis massa imperdiet.</p>',
                },
                {
                    idHeading: 'flush-headingSix',
                    idCollapse: 'flush-collapseSix',
                    idCollapseL: '#flush-collapseSix',
                    vpr: 'Zakaj bi se sploh ukvarjal s tarotom?',
                    odg: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a lectus ac turpis eleifend condimentum ac eget nisl. Aliquam erat volutpat. Aliquam tincidunt elementum enim, vitae placerat tortor ultrices et. Curabitur convallis ipsum elementum nunc tincidunt, quis tincidunt turpis maximus. Curabitur eget dignissim mi. Morbi quis erat eget ipsum porta facilisis. Fusce non lorem massa. In aliquam convallis dignissim. Nulla facilisi. Vestibulum rhoncus sapien ipsum, eget commodo lacus viverra faucibus.</p>' +
                        '<p>Cras suscipit augue non nunc convallis, et gravida lorem porttitor. Maecenas fringilla lectus nec diam congue, ac fermentum est laoreet. Nullam interdum in arcu ac efficitur. Nam finibus mattis sapien, et posuere magna mattis elementum. Phasellus aliquam vulputate lorem non ultricies. Integer lobortis dolor ac malesuada dapibus. Etiam pulvinar nibh ac felis venenatis, vitae facilisis massa imperdiet.</p>',
                },
                {
                    idHeading: 'flush-headingTwo',
                    idCollapse: 'flush-collapseTwo',
                    idCollapseL: '#flush-collapseTwo',
                    vpr: 'Kje naj začnem in kako naj uporabljam stran?',
                    odg: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a lectus ac turpis eleifend condimentum ac eget nisl. Aliquam erat volutpat. Aliquam tincidunt elementum enim, vitae placerat tortor ultrices et. Curabitur convallis ipsum elementum nunc tincidunt, quis tincidunt turpis maximus. Curabitur eget dignissim mi. Morbi quis erat eget ipsum porta facilisis. Fusce non lorem massa. In aliquam convallis dignissim. Nulla facilisi. Vestibulum rhoncus sapien ipsum, eget commodo lacus viverra faucibus.</p>' +
                        '<p>Cras suscipit augue non nunc convallis, et gravida lorem porttitor. Maecenas fringilla lectus nec diam congue, ac fermentum est laoreet. Nullam interdum in arcu ac efficitur. Nam finibus mattis sapien, et posuere magna mattis elementum. Phasellus aliquam vulputate lorem non ultricies. Integer lobortis dolor ac malesuada dapibus. Etiam pulvinar nibh ac felis venenatis, vitae facilisis massa imperdiet.</p>' +
                        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a lectus ac turpis eleifend condimentum ac eget nisl. Aliquam erat volutpat. Aliquam tincidunt elementum enim, vitae placerat tortor ultrices et. Curabitur convallis ipsum elementum nunc tincidunt, quis tincidunt turpis maximus. Curabitur eget dignissim mi. Morbi quis erat eget ipsum porta facilisis. Fusce non lorem massa. In aliquam convallis dignissim. Nulla facilisi. Vestibulum rhoncus sapien ipsum, eget commodo lacus viverra faucibus.</p>',
                },
                {
                    idHeading: 'flush-headingThree',
                    idCollapse: 'flush-collapseThree',
                    idCollapseL: '#flush-collapseThree',
                    vpr: 'Ali je meditacija res pomembna pri tem?',
                    odg: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a lectus ac turpis eleifend condimentum ac eget nisl. Aliquam erat volutpat. Aliquam tincidunt elementum enim, vitae placerat tortor ultrices et. Curabitur convallis ipsum elementum nunc tincidunt, quis tincidunt turpis maximus. Curabitur eget dignissim mi. Morbi quis erat eget ipsum porta facilisis. Fusce non lorem massa. In aliquam convallis dignissim. Nulla facilisi. Vestibulum rhoncus sapien ipsum, eget commodo lacus viverra faucibus.</p>' +
                        '<p>Cras suscipit augue non nunc convallis, et gravida lorem porttitor. Maecenas fringilla lectus nec diam congue, ac fermentum est laoreet. Nullam interdum in arcu ac efficitur. Nam finibus mattis sapien, et posuere magna mattis elementum. Phasellus aliquam vulputate lorem non ultricies. Integer lobortis dolor ac malesuada dapibus. Etiam pulvinar nibh ac felis venenatis, vitae facilisis massa imperdiet.</p>' +
                        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a lectus ac turpis eleifend condimentum ac eget nisl. Aliquam erat volutpat. Aliquam tincidunt elementum enim, vitae placerat tortor ultrices et. Curabitur convallis ipsum elementum nunc tincidunt, quis tincidunt turpis maximus. Curabitur eget dignissim mi. Morbi quis erat eget ipsum porta facilisis. Fusce non lorem massa. In aliquam convallis dignissim. Nulla facilisi. Vestibulum rhoncus sapien ipsum, eget commodo lacus viverra faucibus.</p>',
                },
                {
                    idHeading: 'flush-headingFour',
                    idCollapse: 'flush-collapseFour',
                    idCollapseL: '#flush-collapseFour',
                    vpr: 'Nimam nobenih izkušenj z meditiranjem in podobnim? Kaj pa sedaj?',
                    odg: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a lectus ac turpis eleifend condimentum ac eget nisl. Aliquam erat volutpat. Aliquam tincidunt elementum enim, vitae placerat tortor ultrices et. Curabitur convallis ipsum elementum nunc tincidunt, quis tincidunt turpis maximus. Curabitur eget dignissim mi. Morbi quis erat eget ipsum porta facilisis. Fusce non lorem massa. In aliquam convallis dignissim. Nulla facilisi. Vestibulum rhoncus sapien ipsum, eget commodo lacus viverra faucibus.</p>' +
                        '<p>Cras suscipit augue non nunc convallis, et gravida lorem porttitor. Maecenas fringilla lectus nec diam congue, ac fermentum est laoreet. Nullam interdum in arcu ac efficitur. Nam finibus mattis sapien, et posuere magna mattis elementum. Phasellus aliquam vulputate lorem non ultricies. Integer lobortis dolor ac malesuada dapibus. Etiam pulvinar nibh ac felis venenatis, vitae facilisis massa imperdiet.</p>' +
                        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a lectus ac turpis eleifend condimentum ac eget nisl. Aliquam erat volutpat. Aliquam tincidunt elementum enim, vitae placerat tortor ultrices et. Curabitur convallis ipsum elementum nunc tincidunt, quis tincidunt turpis maximus. Curabitur eget dignissim mi. Morbi quis erat eget ipsum porta facilisis. Fusce non lorem massa. In aliquam convallis dignissim. Nulla facilisi. Vestibulum rhoncus sapien ipsum, eget commodo lacus viverra faucibus.</p>',
                },
                {
                    idHeading: 'flush-headingSeven',
                    idCollapse: 'flush-collapseSeven',
                    idCollapseL: '#flush-collapseSeven',
                    vpr: 'Kaj pomeni arkana?',
                    odg: '<p>"Arkana" je množina besede "arcanum", ki izhaja iz latinske besede "arcanus", kar pomeni "skrivnost". Velike arkanske karte v tarotu predstavljajo življenjske teme in lekcije, ki odražajo vašo posvetno in duhovno resničnost. Uporaba kart Velike Arkane pri branju tarota je povezana z željo po globlje uglašenosti z vzorcem, ki se odvija v življenju, v prepričanju, da so vse izkušnje smiselne, povezane in pravilne.</p>'
                }
            ]
        }
    }
}
