<template>
    <v-data-table
            :headers="headers"
            :items="desserts"
            :loading="loading"
            :pagination.sync="pagination"
            v-model="selected"
            select-all
            class="elevation-1"
    >
        <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
        <template slot="items" slot-scope="props">
            <td>
                <v-checkbox
                        v-model="props.selected"
                        primary
                        hide-details
                ></v-checkbox>
            </td>
            <td class="text-xs-center">{{ props.item.id }}</td>
            <td class="text-xs-center">{{ props.item.in_date }}</td>
            <td class="text-xs-center">{{ props.item.mail }}</td>
            <td class="text-xs-center">{{ props.item.name }}</td>
            <td class="text-xs-center">{{ props.item.phone }}</td>
        </template>
        <template slot="no-data">
            <v-alert :value="true" color="error" icon="warning">
                데이터 없음
            </v-alert>
        </template>

    </v-data-table>
</template>
<script>
    import Firebase from 'firebase';
    // 전체 빌드를로드합니다.
    let _ = require('lodash');
    // 핵심 빌드를로드합니다.
    // Initialize Firebase
    let config = {
        apiKey: "AIzaSyCqCcTRwgvbanOdIZWQajDGdbsOkwO0Sww",
        authDomain: "template-4f9fb.firebaseapp.com",
        databaseURL: "https://template-4f9fb.firebaseio.com",
        projectId: "template-4f9fb",
        storageBucket: "template-4f9fb.appspot.com",
        messagingSenderId: "122884676533"
    };
    let app = Firebase.initializeApp(config);
    let db = app.database();
    let employee_managements = db.ref('db');


    export default {
        name: 'employee',
        firebase: function () {
            return {
                employee_management: employee_managements
            }
        },
        data() {
            return {
                pagination: {},
                loading: true,
                headers: [],
                desserts: [],
                selected: []
            }
        },
        watch: {
            pagination: {
                handler() {
                    this.test()
                },
                deep: true
            }
        },
        mounted() {
            let $this = this;
            employee_managements.on("value", function (snapshot) {
                _.forEach(snapshot.val().title, function (value, key) {
                    $this.headers.push({
                        align: 'center',

                        text: value,
                        value: key
                    });
                });

                _.forEach(snapshot.val().data, function (info, key) {
                    $this.desserts.push({
                        value: false,
                        mail: info.mail,
                        id: info.id,
                        in_date: info.in_date,
                        name: info.name,
                        phone: info.phone
                    });
                });
            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });
        },
        methods: {
            test() {
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                }, 1000)
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>
