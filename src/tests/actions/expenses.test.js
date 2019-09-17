import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '1234abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '1234abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('1234abc', { note: 'YES'  });
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id: '1234abc',
        updates: {
            note: 'YES'
        }
    });
});

test('should setup add expense action object WITH values', () => {
    const expenseData = {
        description: 'Rent', 
        amount: 109500,
        createdAt: 1000,
        note: 'this was last month rent'
    };
    const action = addExpense(expenseData) ;
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: { 
            ...expenseData,
            id: expect.any(String)
        },

    });
});

test('should setup add expense action object WITHOUT values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: { 
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
    
});