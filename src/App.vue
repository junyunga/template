<template>
    <div id="app">
        <pre-loader v-show="this.$store.state.preLoader"></pre-loader>
        <router-view></router-view>
    </div>
</template>

<script>

    import preLoader from './components/layout/pre_loader';

    export default {
        name: 'App',
        components: {
            'pre-loader': preLoader
        },
        data() {
            return {}
        },
        mounted: function () {
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        .column {
            display: table-cell;
        }
    }
</style>
