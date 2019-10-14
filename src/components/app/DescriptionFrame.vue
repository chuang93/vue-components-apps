<template>
    <div>
        <div id="descriptionTitle">
            Description: {{componentName}}
        </div>
        <div>
            {{description}}
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';

    export default Vue.extend({
        name: 'DescriptionFrame',
        props: {
            componentName: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
        },
    });
</script>

<style scoped>

</style>
