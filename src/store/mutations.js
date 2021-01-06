export default {
    addActivity(state, payload) {
        state.activities.unshift(payload);
    },
    changePage(state) {
        state.isOnHomepage = !state.isOnHomepage;
    }
};