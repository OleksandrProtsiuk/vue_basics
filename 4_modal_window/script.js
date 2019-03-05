// register modal component
Vue.component('modal', {
    template: '#modal-template'
});

// start app
new Vue({
    el: '#app',
    data: {
        showModal: false
    }
});

window.onload = function () {

    new Vue({
        el: '#test',
        data() {
            return {
                name: '',
                email: '',
                caps: '',
                response: '',
                activeClass: 'active'
            }
        },
        methods: {
            submitForm() {
                axios.post('//jsonplaceholder.typicode.com/posts', {
                    name: this.name,
                    email: this.email,
                    caps: this.caps
                }).then(response => {
                    this.response = JSON.stringify(response, null, 2)
                })
            }
        }
    });

};


