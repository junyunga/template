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
                :close-on-content-click="false"
                offset-x
                v-for="list in menuList" :key="list.id"
        >
            <v-btn slot="activator">
                <v-icon dark left>{{list.icon}}</v-icon>
                {{list.name}}
            </v-btn>
            <v-card>
                <v-menu
                        transition="scale-transition"
                        :close-on-content-click="false"
                        offset-x
                        v-for="subInfo in list.sub" :key="subInfo.id"
                        :style="{display: 'block',background:'#2196f3',color: '#FFFFFF'}"
                >
                    <v-btn slot="activator">
                        <v-icon dark left>list</v-icon>
                        {{subInfo.title}}
                    </v-btn>
                    <v-card>
                        <div v-for="subList in subInfo.menu" :key="subList.id"
                        >
                            <v-btn :to="subList.to">{{subList.name}}</v-btn>
                        </div>
                    </v-card>
                </v-menu>
            </v-card>
        </v-menu>
    </v-layout>
</template>
<script>
    export default {
        name: 'vue_left_side',
        data() {
            return {
                menuList: [
                    {
                        id: 0,
                        name: '기초',
                        icon: 'folder_open',
                        sub: [
                            {
                                title: '기준정보관리',
                                menu: [
                                    {
                                        id: 100,
                                        name: '사원관리',
                                        to: '/M0001'
                                    },
                                    {
                                        id: 101,
                                        name: '업체관리',
                                        to: '/M0002'
                                    },
                                    {
                                        id: 102,
                                        name: '제품관리',
                                        to: '/M0003'
                                    },
                                    {
                                        id: 103,
                                        name: '코드관리',
                                        to: '/M0004'
                                    }
                                ]
                            },
                            {
                                title: '제품관련정보',
                                menu: [
                                    {
                                        id: 104,
                                        name: '공정별 단중정보',
                                        to: '/M0005'
                                    },
                                    {
                                        id: 105,
                                        name: '공정단가정보',
                                        to: '/M0006'
                                    }
                                ]
                            },
                            {
                                title: '권한관리',
                                menu: [
                                    {
                                        id: 106,
                                        name: '그룹관리',
                                        to: '/M0007'
                                    },
                                    {
                                        id: 107,
                                        name: '그룹별 사용자관리',
                                        to: '/M0008'
                                    },
                                    {
                                        id: 108,
                                        name: '화면별 권한관리',
                                        to: '/M0009'
                                    },
                                    {
                                        id: 109,
                                        name: '코드관리',
                                        to: '/M0010'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 1,
                        name: '영업',
                        icon: 'book'

                    },
                    {
                        id: 2,
                        name: '재고',
                        icon: 'description'

                    },
                    {
                        id: 3,
                        name: '품질',
                        icon: 'favorite'
                    },
                    {
                        id: 4,
                        name: '구매',
                        icon: 'face'

                    },
                    {
                        id: 5,
                        name: '생산',
                        icon: 'important_devices'
                    },
                    {
                        id: 6,
                        name: '외주',
                        icon: 'list'
                    },
                    {
                        id: 7,
                        name: '설비',
                        icon: 'pan_tool'
                    },
                    {
                        id: 8,
                        name: '금형',
                        icon: 'pan_tool'
                    },
                    {
                        id: 9,
                        name: '조립',
                        icon: 'pan_tool'
                    }
                ]
            }
        }
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