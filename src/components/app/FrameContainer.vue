<template>
    <div>
        <ComponentExampleFrame v-bind:component="component" v-bind:component-name="componentName" v-bind:component-props="componentProps"/>
        <DescriptionFrame v-bind:component-name="componentName" v-bind:description="description"/>
        <PropsFrame v-bind:component-name="componentName" v-bind:component-props="componentProps"></PropsFrame>
    </div>
</template>

<script lang="ts">
    import Vue, { ComponentOptions, VueConstructor } from 'vue';
    import { ComponentMapper } from '../../components/mapper';
    import ComponentExampleFrame from './ComponentExampleFrame.vue';
    import DescriptionFrame from './DescriptionFrame.vue';
    import PropsFrame from './PropsFrame.vue';

    export default Vue.extend({
        name: 'FrameContainer',
        components: {
            ComponentExampleFrame,
            DescriptionFrame,
            PropsFrame,
        },
        props: {
            componentName: {
                type: String,
                required: true,
            },
        },
        computed: {
            component(): VueConstructor<Vue> {
                return ComponentMapper[this.componentName].component;
            },
            description(): string {
                return ComponentMapper[this.componentName].description;
            },
            componentProps(): ComponentOptions<Vue> {
                return ComponentMapper[this.componentName].props;
            },
        },
    });
</script>

<style scoped>

</style>
