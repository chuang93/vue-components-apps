// @ts-ignore TS Lint does not support ability to recognize named imports in vue files.
import NavigationBar, { NavigationBarOptions } from './NavigationBar.vue';
// @ts-ignore TS Lint does not support ability to recognize named imports in vue files.
import DataGrid, { DataGridOptions } from './DataGrid.vue';
import Vue, { VueConstructor } from 'vue';

// TODO:: Fix 'any' type check for props and propdefinition.
interface ComponentSpec {
    component: VueConstructor<Vue>;
    props: any;
    propDefinition: any;
    description: string;
}

// TODO:: REPLACE WITH STRICTER TYPE REQUIREMENTS FOR requiredProps and return value instead of 'any'.
const getMergedProps = (propsDef: any, requiredProps: object): object => {
    const defaultProps = Object.keys(propsDef).reduce((prev: { [s: string]: any }, propKey: string): object => {
            prev[propKey] = propsDef[propKey].default;
            return prev;
        }
        , {});
    const merged = {
        ...defaultProps,
        ...requiredProps,
    };
    return merged;
};

export const ComponentMapper: { [s: string]: ComponentSpec } = {
    [NavigationBarOptions.name as string]: {
        component: NavigationBar,
        props: getMergedProps(NavigationBarOptions.props, {}),
        propDefinition: NavigationBarOptions.props,
        description: 'Top level navigation bar for all Vue JS web apps. Can be given a custom' +
            ' set of navigation links, else it will default to the example values.',
    },
    [DataGridOptions.name as string]: {
        component: DataGrid,
        props: getMergedProps(DataGridOptions.props, {
            rowCount: 25,
        }),
        propDefinition: DataGridOptions,
        description: 'Lightweight wrapper component around AG Grid for general use cases. Can also inject' +
            'custom properties if more advanced features need to be overridden',
    },
};
