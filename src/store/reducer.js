
const initialState = {
    counter: 0,
    results: []
}

 const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, counter: state.counter + 1};
        case 'DECREMENT':
            return {...state, counter: state.counter - 1};
        case 'ADD_FIVE':
            return {...state, counter: state.counter + action.val};
        case 'SUB_FIVE':
            return {...state, counter: state.counter - action.val};
        case 'STORE_RESULT':
        
            return {
                ...state, 
                results: [...state.results, {id: new Date(), value: state.counter}]
            };
        case 'DELETE_RESULT':
        const updatedResults = state.results.filter(result => result.id !== action.id)
            return {
                ...state, 
                results: updatedResults
            };
        default:
            return state;
    }
}
export default reducer;