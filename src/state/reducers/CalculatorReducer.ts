const initialState: CalculatorStateType = {
    operation: '',
    result: '',
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
};
