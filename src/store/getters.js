export default {
    getActivities(state) {
        if (state.activities.length > 0)
        {
            return state.activities;
        }
        return [];
    },
    isOnHomepage(state) {
        return state.isOnHomepage;
    },
    generateId(state) {
        return state.currentId;
    }
};