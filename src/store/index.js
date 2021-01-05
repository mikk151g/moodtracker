import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

const store = createStore({
    state() {
        return {
            activities: [
            {
                id: 1,
                title: 'Klarede opvasken',
                date: '15 min siden',
                description: 'Kunne ikke overskue at vaske op hele sidste uge.',
                rating: 4
            },
        ]
        };
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
});

export default store;