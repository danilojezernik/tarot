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
                    odg: 'Tukaj daj teks, ki je na strani tarot za raider weit',
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
                }
            ]
        }
    }
}
