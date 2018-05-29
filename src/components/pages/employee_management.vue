<template>
    <div>
        <insert-form></insert-form>
        <v-data-table
                :headers="headers"
                :items="this.$store.state.user"
                :loading="loading"
                :pagination.sync="pagination"
                v-model="selected"
                :rows-per-page-items="[10,15,25,{text:'All',value:-1}]"
                select-all
                class="elevation-1"
        >
            <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
            <template slot="items" slot-scope="props">
                <tr :active="props.selected" @click="props.selected = !props.selected">
                    <td>
                        <v-checkbox
                                v-model="props.selected"
                                primary
                                hide-details
                        ></v-checkbox>
                    </td>
                    <td class="text-xs-center">{{ props.item.name }}</td>
                    <td class="text-xs-center">{{ props.item.part_level }}</td>
                    <td class="text-xs-center">{{ props.item.id }}</td>
                    <td class="text-xs-center">{{ props.item.hp_no }}</td>
                    <td class="text-xs-center">{{ props.item.home_addr }}</td>
                </tr>
            </template>
            <template slot="no-data">
                <v-alert :value="true" color="error" icon="warning">
                    데이터 없음
                </v-alert>
            </template>

        </v-data-table>
    </div>
</template>

<script>
    import Firebase from 'firebase';
    import Insert from '../modals/employee/insert'
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
        components: {
            'insert-form': Insert
        },
        data() {
            return {
                pagination: {},
                loading: true,
                headers: [
                    {text: '이름', value: 'name'},
                    {text: '직책', value: 'part_level'},
                    {text: 'id', value: 'id'},
                    {text: '휴대폰', value: 'hp_no'},
                    {text: '주소', value: 'address'},
                ],
                desserts: this.$store.state.user,
                selected: []
            }
        },
        watch: {
            pagination: {
                handler() {
                    this.goPage()
                },
                deep: true
            }
        },
        mounted() {
            let $this = this;

            $this.$nextTick(() => {
                //사원 정보 GET
                $this.$store.dispatch('getApi', {'request': 'user'});
            })
        },
        methods: {
            // initialize() {}
            goPage() {
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
