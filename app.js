new Vue({
    el: '#vue-app',
    data: {
        available: false,
        nearby: false,
        error: false,
        success: false
    },
    methods: {

    },
    computed: {
        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});

