import {createStore} from 'redux';
//Action generators - functions that return action objects

// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy: 1
// });

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

console.log('running');
//set state to the default state object
const countReducer =(state = {count: 0}, action ) =>{ 
    switch (action.type) {
        case 'INCREMENT':
            return{
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return{
                count: state.count - action.decrementBy
            };
        case 'SET':
            return{
                count: action.count
            };
        case 'RESET':
            return{
                count: state.count = 0
            };
        default:
            return(state);
    }
};

//call unsubscribe()  when to you want to stop subscribtion

const store = createStore(countReducer);
const unsubscribe = store.subscribe(()=> {
    console.log(store.getState());
})


//increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount ({ incrementBy: 5 }));

store.dispatch(incrementCount()
);

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));

