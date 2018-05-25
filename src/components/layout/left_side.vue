<template>
    <v-layout row wrap id="leftSide">
        <v-list class="left-side-list">
            <v-list-tile class="left-side-list-title">
                <v-list-tile-title class="title">
                    <router-link to="/">(주)무른모</router-link>
                </v-list-tile-title>
            </v-list-tile>
            <v-divider></v-divider>
        </v-list>
        <v-menu
                transition="scale-transition"
                offset-x
                v-for="i in 5" :key="i"
        >
            <v-btn slot="activator">
                <v-icon dark left>folder_open</v-icon>
                기초
            </v-btn>
            <v-card>
                <div class="sub-list-container"
                     v-for="i in 2" :key="i"
                >
                    <v-list>
                        <v-list-tile>
                            <v-list-tile class="left-side-list-title">
                                <v-list-tile-title>기준정보관리</v-list-tile-title>
                            </v-list-tile>
                        </v-list-tile>
                    </v-list>
                    <v-divider></v-divider>
                    <div v-for="i in 2" :key="i"
                    >
                        <v-btn to="/M0001">사원관리</v-btn>
                    </div>
                </div>
            </v-card>
        </v-menu>
    </v-layout>
</template>
<script>
    export default {
        name: 'vue_left_side'
    }
</script>
<style lang="scss" scoped>
    #leftSide {
        width: 100%;
        .left-side-list {
            width: 100%;
            .left-side-list-title {
                height: 37px;
            }
        }
        .menu {
            width: 100%;
            background-color: transparent;
            & .btn {
                width: 100%;
                background-color: transparent;
                margin: 0px;
                box-shadow: none;
                outline: 1px solid #2196f3;
            }
        }
    }

    .card {
        width: 100%;
        .list {
            padding: 0;
        }
        .btn {
            background-color: transparent !important;
            width: 100%;
            margin: 0;
            box-shadow: none;
            &:hover {
                background-color: rgba(0, 0, 0, 0.25) !important;
            }
        }
        .divider {
            margin: 0;
            padding: 0;
        }
        .sub-list-container {
            float: left;
            outline: 1px solid rgba(0, 0, 0, .12);
        }
    }
</style>