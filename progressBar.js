var ractive = new Ractive({
    el: document.body,
    template: '#template',
    data: {
        readonly: false,
        progress: 0,
        progress1: 0,
        progress2: 0,

        progressbars: [{
                id: '0',
                name: '#progress1'
            }, {
                id: '1',
                name: '#progress2'
            }, {
                id: '2',
                name: '#progress3'
            }
        ]
    }
});


;
ractive.on({


    plusTwentyfive: function() {
        var selectedValue = ractive.get('selectedProgress');
        if (selectedValue == 0) {
            var progress = ractive.get('progress');
            progress = progress + 25;
            if (progress > 100) {
                progress = 100;
            }
            ractive.set('progress', progress);
        }

        if (selectedValue == 1) {
            var progress1 = ractive.get('progress1');
            progress1 = progress1 + 25;
            if (progress1 > 100) {
                progress1 = 100;
            }
            ractive.set('progress1', progress1);
        }

        if (selectedValue == 2) {
            var progress2 = ractive.get('progress2');
            progress2 = progress2 + 25;
            if (progress2 > 100) {
                progress2 = 100;
            }
            ractive.set('progress2', progress2);
        }

    },
    plusTen: function() {
        var selectedValue = ractive.get('selectedProgress');
        if (selectedValue == 0) {
            var progress = ractive.get('progress');
            progress = progress + 10;
            if (progress > 100) {
                progress = 100;
            }
            ractive.set('progress', progress);
        }

        if (selectedValue == 1) {
            var progress1 = ractive.get('progress1');
            progress1 = progress1 + 10;
            if (progress1 > 100) {
                progress1 = 100;
            }
            ractive.set('progress1', progress1);
        }

        if (selectedValue == 2) {
            var progress2 = ractive.get('progress2');
            progress2 = progress2 + 10;
            if (progress2 > 100) {
                progress2 = 100;
            }
            ractive.set('progress2', progress2);
        }
    },
    minusTen: function() {
        var selectedValue = ractive.get('selectedProgress');
        if (selectedValue == 0) {
            var progress = ractive.get('progress');
            progress = progress - 10;

            if (progress < 0) {
                progress = 0;
            }
            ractive.set('progress', progress);
        }

        if (selectedValue == 1) {
            var progress1 = ractive.get('progress1');
            progress1 = progress1 - 10;
            if (progress1 < 0) {
                progress1 = 0;
            }
            ractive.set('progress1', progress1);
        }

        if (selectedValue == 2) {
            var progress2 = ractive.get('progress2');
            progress2 = progress2 - 10;
            if (progress2 < 0) {
                progress2 = 0;
            }
            ractive.set('progress2', progress2);
        }
    },

    minusTwentyFive: function() {
        var selectedValue = ractive.get('selectedProgress');
        if (selectedValue == 0) {
            var progress = ractive.get('progress');
            progress = progress - 25;
            if (progress < 0) {
                progress = 0;
            }
            ractive.set('progress', progress);
        }

        if (selectedValue == 1) {
            var progress1 = ractive.get('progress1');
            progress1 = progress1 - 25;
            if (progress1 < 0) {
                progress1 = 0;
            }
            ractive.set('progress1', progress1);
        }

        if (selectedValue == 2) {
            var progress2 = ractive.get('progress2');
            progress2 = progress2 - 25;
            if (progress2 < 0) {
                progress2 = 0;
            }
            ractive.set('progress2', progress2);
        }
    }
});