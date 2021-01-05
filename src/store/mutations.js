export default {
    addActivity(state, payload) {
        state.activities.unshift(payload);
    }
};