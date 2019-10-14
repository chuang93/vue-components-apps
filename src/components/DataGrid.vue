<template>
    <div>
        <div>DATA GRID COMPONENT</div>
        <div> Inverted Color is {{inverted}}</div>
        <div> the width of the data grid is {{width}}</div>
        <table id ="blackTable">
            <thead>
            <tr>
                <th>Grid</th>
            </tr>
            </thead>
            <tbody>
            <tr v-bind:key="row" v-for="row in rowCount">
                <td>Row Number: {{row}}</td>
            </tr>
            </tbody>
        </table>
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
    #blackTable {
        border: 1px solid black;
    }
</style>
