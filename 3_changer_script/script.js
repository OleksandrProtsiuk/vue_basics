var app = new Vue({
    el: '#app',
    data: {
        selected: '',
        field: ''
    },
    computed: {
        fun: function () {
            let field = this.field;
            let selected = this.selected;
            if (selected === 'coasts') {
                field = -field
            }
            return field
        }
    }
});
