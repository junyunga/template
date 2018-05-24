<template>
    <div>
        <vue_header></vue_header>
        <vue_left_side></vue_left_side>
    </div>
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