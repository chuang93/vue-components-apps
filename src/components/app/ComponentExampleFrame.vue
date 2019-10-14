<script lang="ts">
    import Vue, { VNode } from 'vue';

    export default Vue.extend({
        name: 'ComponentExampleFrame',
        props: {
            component: {
              type: Function,
              required: true,
            },
            componentName: {
                type: String,
                required: true,
            },
            componentProps: {
                type: Object,
                required: true,
            },
        },
        render(createElement): VNode {
            return createElement(
                'div',
                {},
                [
                    createElement(this.component, this.componentProps),
                ],
            );
        },
    });
</script>

<style scoped>

</style>
