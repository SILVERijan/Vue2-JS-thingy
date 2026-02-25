new Vue({
    el: '#vue-app',
    data: {
        name: 'Hello Vue!',
        job: 'Web Developer',
        website: 'https://www.google.com', // dynamic content
        websiteTag: 'https://www.google.comGoogle</a>', // rendered via v-html
        age: 20,
        x: 0,
        y: 0
    },
    methods: {
        greet: function (time) {
            return 'good morning' + time + ' ' + this.name;
        },
        add: function (inc) {
            this.age += inc;
        },
        subtract: function (desc) {
            this.age -= desc;
        },
        start: function () {
            console.log('Started');
        },
        updateCoordinates: function (event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
});
``