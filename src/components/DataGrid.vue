<template>
    <div>DATA GRID COMPONENT</div>
</template>

<script lang="ts">
    import Vue, { ComponentOptions } from 'vue';

    export const DataGridOptions: ComponentOptions<Vue> = {
        name: 'DataGrid',
        props: {
            rowCount: {
                type: Number,
                required: true,
            },
        },
    };

    export default Vue.extend(DataGridOptions);
</script>

<style scoped>

</style>
