
const initialState = {
    counter: 0,
    results: [1, 2]
}

 const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {counter: state.counter + 1};
        case 'DECREMENT':
            return {counter: state.counter - 1};
        case 'ADD_FIVE':
            return {counter: state.counter + action.val};
        case 'SUB_FIVE':
            return {counter: state.counter - action.val};
        case 'STORE_RESULT':
            return {results: state.results.push(action.val)};
        default:
            return state;
    }
}
export default reducer;