new Vue({
    el: '#app',
    data: {
        msg: 'bienvenido',
        name: ''
    },
    computed: {
        msgName() {
            return this.msg + ' ' + this.name
        }
    }
});