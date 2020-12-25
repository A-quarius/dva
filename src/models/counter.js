export default {
    namespace: "counter",
    state: 0,
    reducers: {
        increase(state) {
            return state + 1
        },
        decrease(state) {
            console.log(state);
            return state - 1
        }
    }
}