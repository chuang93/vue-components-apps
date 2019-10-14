import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
    },
    theme: {
        themes: {
            light: {
                primary: colors.lightGreen.darken1,
                secondary: colors.green.lighten3,
            },
            dark: {
                primary: colors.green.darken4,
            },
        },
    },
});
