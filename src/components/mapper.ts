import NavigationBar from './NavigationBar.vue';
import DataGrid from './DataGrid.vue';

enum PropType {
    STRING,
    BOOLEAN,
    NUMBER,
    OBJECT,
    ANY,
}

interface Prop {
    name: string;
    type: PropType;
    value: any;
    description: string;
}

interface ComponentSpec {
    component: object;
    description: string;
    props?: Prop[];
}

export const ComponentMapper: { [s: string]: ComponentSpec } = {
    [NavigationBar.name]: {
        component: NavigationBar,
        description: 'Top level navigation bar for all Vue JS web apps. Can be given a custom' +
            ' set of navigation links, else it will default to the example values.',
        props: [{
            name: 'condensed',
            type: PropType.BOOLEAN,
            value: 'true',
            description: 'determine if navigation bar is full height or reduced height.',
        }],
    },
    [DataGrid.name]: {
        component: DataGrid,
        description: 'Lightweight wrapper component around AG Grid for general use cases. Can also inject' +
            'custom properties if more advanced features need to be overridden',
        props: [{
            name: 'rowCount',
            type: PropType.NUMBER,
            value: '10',
            description: 'number of rows to display on the grid at once',
        }],
    },
};

export default {ComponentMapper};
