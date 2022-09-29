const app = Vue.createApp({
    data() {
        return {
            text: '',
            confirmedText: ''
        }
    },
    methods: {
        show() {
            alert('ALERT!');
        },
        testText(event) {
            this.text = event.target.value;
        },
    }
});

app.mount('#assignment')