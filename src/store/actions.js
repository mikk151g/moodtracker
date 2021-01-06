export default {
    addActivity(context, payload) {
        context.commit('addActivity', payload);
    },
    changePage(context) {
        context.commit('changePage');
    }
};