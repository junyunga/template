<template>
    <v-container grid-list-md class="column">
        <v-layout row wrap>
            <v-flex xs12>
                <div @click="test()">메인1</div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {

        name: 'index',
        methods: {
            test () {
                this.$router.push('/about')
            }
        }
    }
</script>
