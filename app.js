new Vue({
    el: '#vue-app',
    data: {
        name: '',
        job: '',
        website: 'https://www.google.com', // dynamic content
        websiteTag: '<a href="https://www.google.com">Google</a>', // rendered via v-html
        age: 0,
        x: 0,
        y: 0,
        a: 0,
        b: 0
    },

    methods: {
        greet: function (time) {
            console.log("something");
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
        },
        logName: function () {
            console.log('You entered your name as ' + this.name);
        },
        logAge: function () {
            console.log('Your age is ' + this.age);
        },
    },

    computed: {
        addToA: function () {
            return this.a + this.age;
        },
        addToB: function () {
            return this.b + this.age;
        },
        total: function () {
            return this.a + this.b + this.age
        }

    }
});
