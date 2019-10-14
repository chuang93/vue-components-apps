<template>
    <v-app>
        <v-app-bar absolute clipped-left app>
            <div>Yo</div>
            <v-spacer></v-spacer>
            <div>yo</div>
        </v-app-bar>
        <v-navigation-drawer absolute permanent app clipped>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        Test Title
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        Test Title 2
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-navigation-drawer>
        <v-content>
            <HelloWorld/>
        </v-content>
    </v-app>
</template>

<script lang="ts">
    import Vue from 'vue';
    import HelloWorld from './components/HelloWorld.vue';

    export default Vue.extend({
        name: 'App',
        components: {
            HelloWorld,
        },
        data: () => ({
            //
        }),
    });
</script>
