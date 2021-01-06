export default {
    getActivities(state) {
        if (state.activities.length > 10)
        {
            return state.activities;
        }
        return [];
    },
    isOnHomepage(state) {
        return state.isOnHomepage;
    }
};