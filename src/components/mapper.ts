import NavigationBar, { NavigationBarOptions } from './NavigationBar.vue';
import DataGrid, { DataGridOptions } from './DataGrid.vue';
import Vue, { VueConstructor } from 'vue';

interface ComponentSpec {
    component: VueConstructor<Vue>;
    props: any;
    description: string;
}

export const ComponentMapper: { [s: string]: ComponentSpec } = {
    [NavigationBarOptions.name as string]: {
        component: NavigationBar,
        props: NavigationBarOptions.props,
        description: 'Top level navigation bar for all Vue JS web apps. Can be given a custom' +
            ' set of navigation links, else it will default to the example values.',
    },
    [DataGridOptions.name as string]: {
        component: DataGrid,
        props: DataGridOptions.props,
        description: 'Lightweight wrapper component around AG Grid for general use cases. Can also inject' +
            'custom properties if more advanced features need to be overridden',
    },
};
