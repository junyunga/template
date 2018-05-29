<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog" persistent max-width="500px">
            <v-btn slot="activator" color="primary" dark>등록</v-btn>
            <v-card>
                <v-card-title>
                    <span class="headline">사원관리</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12 sm6>
                                <v-text-field label="이름" v-model="item.name" required></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-select
                                        :items="['1', '2', '3', '4', '5', '6', '7', '8', '9']"
                                        label="직급"
                                        autocomplete
                                        v-model="item.part_level"
                                ></v-select>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-text-field label="ID" v-model="item.id" required></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-text-field label="Password" type="password" v-model="item.password"
                                              required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field label="Email" v-model="item.email" required></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click.native="close">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>
<script>
    export default {
        name: 'employee_insert',
        data() {
            return {
                dialog: false,
                item: {
                    name: '',
                    part_level: '',
                    id: '',
                    password: '',
                    email: ''
                }
            }
        },
        methods: {
            close() {
                this.dialog = false;
            },
            save() {
                this.$store.commit('postApi', {request: 'insert', data: this.item});
                this.dialog = false;
            }
        }
    }
</script>
<style lang="scss" scoped>
    .card {
        width: 500px;
    }
</style>