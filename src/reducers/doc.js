
const defaultState = {
    apilist: '',
}

const doc = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_APILIST":
            return {
                ...state,
                apilist: action.data
            };
        default:
            return state;
    }
}


export default doc;

