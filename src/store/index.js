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
                {
                    id: 2,
                    title: 'Klarede opvasken',
                    date: '15 min siden',
                    description: 'Kunne ikke overskue at vaske op hele sidste uge.',
                    rating: 4
                },
                {
                    id: 3,
                    title: 'Klarede opvasken',
                    date: '15 min siden',
                    description: 'Kunne ikke overskue at vaske op hele sidste uge.',
                    rating: 4
                },
                {
                    id: 4,
                    title: 'Klarede opvasken',
                    date: '15 min siden',
                    description: 'Kunne ikke overskue at vaske op hele sidste uge.',
                    rating: 4
                },
                {
                    id: 5,
                    title: 'Klarede opvasken',
                    date: '15 min siden',
                    description: 'Kunne ikke overskue at vaske op hele sidste uge.',
                    rating: 4
                },
            ],
            isOnHomepage: true
        };
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
});

export default store;