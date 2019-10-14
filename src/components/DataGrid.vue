<template>
    <div>
        <div>DATA GRID COMPONENT</div>
        <div> The Row Count is {{rowCount}}</div>
        <div> Inverted Color is {{inverted}}</div>
        <div> the width of the data grid is {{width}}</div>
    </div>
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
            inverted: {
                type: Boolean,
                default: true,
            },
            width: {
                type: Number,
                default: 55,
            },
        },
    };

    export default Vue.extend(DataGridOptions);
</script>

<style scoped>

</style>
