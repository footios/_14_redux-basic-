/* Now this file here will not be holding any react code, 
we won't include it into our react project, I'll
execute it with nodeJS
instead, just to show the different concepts of redux 
in one file and to show that it's independent
of react. */

// NodeJS syntax:
const redux = require('redux')
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.val
        }
    }
    return state;
}

// Store
const store = createStore(rootReducer);



// Subscription (comes before the actions)
store.subscribe(() => {
    console.log('[Subscription', store.getState())
})

// Dispaching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', val: 10});

console.log(store.getState());

