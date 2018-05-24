<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import Firebase from 'firebase';
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
    let booksRef = db.ref('db');
    booksRef.on("value", function(snapshot) {
        // console.log(snapshot.val());
    }, function (errorObject) {
        // console.log("The read failed: " + errorObject.code);
    });
    export default {
        name: 'App',
        firebase: function() {
            return {
                books: booksRef
            }
        },
        data () {
            return {
                newBook: {
                    title: '11',
                    author: '11',
                    url : 'http://'
                }
            }
        },
        mounted: function() {
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
