import moment from 'moment';
import filtersReducer from'../../reducers/filters';

test('should setup default filter values', ()  => {
    const state = filtersReducer(undefined, { type: '@@INIT'}); 
    expect(state).toEqual({
        text: '', 
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should setup sortBy the amount', ()  => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'}); 
    expect(state.sortBy).toBe('amount');
});

test('should setup sortBy the Date', ()  => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SORT_BY_DATE'};
    const state =  filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should setup text filter values', ()  => {
    const text = "Yes"
    const action = {
        type: 'SET_TEXT_FILTER', 
        text
    };
    const state = filtersReducer(undefined, action);
       
    expect(state.text).toBe(  text );
});

test('should setup start DATE filter values', ()  => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE', 
        startDate
    };
    const state = filtersReducer(undefined, action);
       
    expect(state.startDate).toEqual( startDate );
});

test('should setup end DATE filter values', ()  => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE', 
        endDate
    };
    const state = filtersReducer(undefined, action);
       
    expect(state.endDate).toEqual( endDate );
});


