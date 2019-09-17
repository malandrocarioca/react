import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('shoul set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual ([]);
});

test('should remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should NOT remove expense if ID not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should ADD expense ', () => {
    const expense = {
        id: '4',
        description: 'Bum',
        note: '',
        amount: 195000,
        createdAt: 250000
    };
    const action = {
        type: 'ADD_EXPENSE', 
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense] );
});

test('should edit expense if ID found', () => {
    const amount = 12345;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            amount
        }

    };
    const state = expensesReducer(expenses, action);
    expect(state[2].amount).toBe(amount);
});

test('should NOT edit expense if ID NOT found', () => {
    const amount = 12345;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }

    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});