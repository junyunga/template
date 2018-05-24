<template>
    <v-app>
        <v-navigation-drawer
                id="leftSideContainer"
                class="blue" dark
                fixed
                app
        >
            <vue_left_side></vue_left_side>

        </v-navigation-drawer>
        <v-toolbar app>
            <vue_header></vue_header>
        </v-toolbar>
        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>
<script>
    import vue_header from './components/layout/vue_header';
    import vue_left_side from './components/layout/left_side';

    export default {
        name: 'MainVue',
        components: {
            vue_header,
            vue_left_side
        }
    }
</script>
<style lang="scss" scoped>
    #leftSideContainer {
        width: 180px !important;
    }
    .content {
        padding: 0px 0px 0px 180px !important;
    }
</style>