
const defaultState = {
    apilist: '',
}

const doc = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_LIST':
            return {
                ...defaultState,
                apilist: action.data
            }
        default:
            return state;
    }
}


export default doc;

