
new Vue({
    el: '#income-transaction',
    data() {
        return {
            amount: null,
            comment: null,
            response: null,
            errors: [],
            notice: [],
            activeClass: 'active'
        }
    },
    methods: {
        submitIncomeForm() {
            let new_transaction_url = '//jsonplaceholder.typicode.com/posts';

            if(this.amount && this.comment) {
                axios.post( new_transaction_url, {
                    amount: this.amount,
                    comment: this.comment
                }).then(response => {
                    this.response = JSON.stringify(response, null, 2)
                });
                this.amount = null;
                this.comment = null;
                this.errors = [];
                this.notice.push('Data added');
            }
            else {
                this.errors = [];
                if(!this.amount) this.errors.push('Amount required');
                if(!this.comment) this.errors.push('Comment required');
            }

        },

    }
});
