Vue.component('greeting', {
    template: '<p> Hello there, I am a {{ name }}. <button v-on:click="changeName">Change Name</button> I am {{ age }} years old. </p>',
    data: function () {
        return {
            name: 'YoshiGG',
            age: 21
        }
    },
    methods: {
        changeName: function () {
            this.name = 'Mario';
        }
    }
});

new Vue({
    el: '#vue-app',
    data: {
        name: 'jack',
        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas: [
            { name: 'Ryu', age: 25 },
            { name: 'Yoshi', age: 15 },
            { name: 'Ken', age: 20 },
        ],
        job: '',
        website: 'https://www.google.com', // dynamic content
        websiteTag: '<a href="https://www.google.com">Google</a>', // rendered via v-html
        age: 30,
        x: 0,
        y: 0,
        a: 0,
        b: 0,
        available: false,
        nearby: false,
        punchBagHealth: 100,
        ended: false,
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
        punch: function () {
            this.punchBagHealth -= 10;
            if (this.punchBagHealth <= 0) {
                this.ended = true;
            }
        },
        restart: function () {
            this.punchBagHealth = 100;
            this.ended = false;
        }
    },

    computed: {
        addToA: function () {
            return this.a + this.age;
        },
        addToB: function () {
            return this.b + this.age;
        },
        total: function () {
            return this.a + this.b + this.age;
        },
        compClasses: function () {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }                       

    }
});
