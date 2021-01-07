export default {
    addActivity(state, payload) {
        state.activities.unshift({
            title: payload.title,
            date: payload.date,
            description: payload.description,
            rating: payload.rating
        });
        state.isOnHomepage = !state.isOnHomepage;
    },
    changePage(state) {
        state.isOnHomepage = !state.isOnHomepage;
    },
    incrementId(state) {
        state.currentId++;
    }
};