const initialState = {};

const updateInput = (state = initialState, action) => {
    switch(action.type){
        case "UPDATE":
            return {...state,[action.payload.name]: action.payload.value};
        default:
            return state;
    }
}

export default updateInput;