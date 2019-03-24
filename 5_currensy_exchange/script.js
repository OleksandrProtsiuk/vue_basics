var app = new Vue({
    el: '#app',
    data: {
            amount: '',
            from: null,
            to: null,
            result: null,
            EUR: null,
            RUB: null,
            USD: null
    },
    methods: {
        calc: function () {

            let api_url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';
                axios.get(api_url).then(response => (
                    this.EUR = parseFloat(response.data[0].buy),
                        this.RUB = parseFloat(response.data[1].buy),
                        this.USD = parseFloat(response.data[2].buy)
                ));

            amount = parseFloat(this.amount);
            from = this.from;
            to = this.to;
            let k = 1.0;

            if (from === to) {
                this.result = parseFloat(this.amount);
            }
            else {
                switch (from) {
                    case 'UAH':
                        if (to === 'USD') {
                            k = 1 / this.USD;
                        }
                        if (to === 'RUB') {
                            k = 1 / this.RUB;
                        }
                        if (to === 'EUR') {
                            k = 1 / this.EUR;
                        }
                        this.result = (this.amount * k).toFixed(3);
                        break;

                    case 'USD':
                        if (to === 'UAH') {
                            k = this.USD;
                        }
                        if (to === 'EUR') {
                            k = this.USD / this.EUR;
                        }
                        if (to === 'RUB') {
                            k = this.USD / this.RUB;
                        }
                        this.result = this.amount * k;
                        break;

                    case 'EUR':
                        if (to === 'UAH') {
                            k = this.EUR;
                        }
                        if (to === 'USD') {
                            k = this.EUR / this.USD;
                        }
                        if (to === 'RUB') {
                            k = this.EUR / this.RUB;
                        }
                        this.result = this.amount * k;
                        break;

                    case 'RUB':
                        if (to === 'UAH') {
                            k = this.RUB;
                        }
                        if (to === 'EUR') {
                            k = this.RUB / this.EUR;
                        }
                        if (to === 'USD') {
                            k = this.RUB / this.USD;
                        }
                        this.result = this.amount * k;
                        break;
                }
            }
        }
    },
});
