<template>
    <div>
        <div>
            Props for: {{componentName}}
        </div>
        <div v-bind:key="key" v-for="(value, key, index) in componentProps">
            <div>
                {{index}}. {{key}}: {{value}}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    // TODO:: FILTER PROPS BY PROPS NOT ADDED BY DEFAULT BY VUE CONSTRUCTOR FOUND IN CONSTANT FILE.
    import { EXCLUDED_PROPS } from '@/components/constants';

    export default Vue.extend({
        name: 'PropsFrame',
        props: {
            componentName: {
                type: String,
                required: true,
            },
            componentProps: {
                type: Object,
                required: true,
            },
        },
    });
</script>

<style scoped>

</style>
