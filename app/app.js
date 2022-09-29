const app = Vue.createApp({
    data() {
        return {
            text: '',
            text2: '',
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
        testText2(event) {
            this.text2 = event.target.value;
        },
        textOnEnter() {
            this.confirmedText = this.text2;
        }
    }
});

app.mount('#assignment')