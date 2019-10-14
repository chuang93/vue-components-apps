<template>
    <div>
        This is a Navigation bar with condensed prop equal to: {{condensed}}
    </div>
</template>

<script lang="ts">
    import Vue, { ComponentOptions } from 'vue';

    export const NavigationBarOptions: ComponentOptions<Vue> = {
        name: 'NavigationBar',
        props:  {
            condensed: {
                type: Boolean,
                default: true,
            },
        },
    };

    export default Vue.extend(NavigationBarOptions);
</script>

<style scoped>

</style>
