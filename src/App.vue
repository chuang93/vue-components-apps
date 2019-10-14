<template>
    <v-app>
        <v-app-bar absolute clipped-left app>
            <div>Yo</div>
            <v-spacer></v-spacer>
            <div>yo</div>
        </v-app-bar>
        <v-navigation-drawer absolute permanent app clipped>
            <v-container fluid>
                <v-card elevation="8">
                    <v-input label="Search">
                    </v-input>
                </v-card>
            </v-container>
            <v-divider></v-divider>
            <v-list nav>
                <v-list-item v-bind:key="componentKey" v-for="componentKey in componentKeys">
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            {{componentKey}}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
            </v-list>
        </v-navigation-drawer>
        <v-content>
            <FrameContainer v-bind:component-name="selectedComponent"></FrameContainer>
        </v-content>
        <v-footer>
            <v-spacer></v-spacer>
            <div>Tilden Park Capital Management &copy; {{ new Date().getFullYear() }}</div>
        </v-footer>
    </v-app>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { ComponentMapper } from './components/mapper';
    import FrameContainer from './components/app/FrameContainer.vue';

    // TODO:: REMOVE THIS STATEMENT FROM PRODUCTION BUILD.
    export default Vue.extend({
        name: 'App',
        components: {
            FrameContainer,
        },
        data() {
            return {
                selectedComponent: 'DataGrid',
            };
        },
        computed: {
            componentKeys(): string[] {
                return Object.keys(ComponentMapper);
            },
        },
    })
    ;
</script>
