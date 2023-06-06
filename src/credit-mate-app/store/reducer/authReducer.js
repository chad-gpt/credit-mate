import * as actionTypes from "../constants/actionTypes";

const initialState = {
    user: {
        email: 'noman.khan@gmail.com',
        token: 'uiyeiurbbsdfgsdfbsdf7734bjhv43457834bbnsdfsdf',
    }
};

export const updateObject = (oldObject, updatedProperties) => {
    const updated = {
        ...oldObject,
        ...updatedProperties,
    };
    return updated;
};

export const setUser = (state, action) => {
    return updateObject(oldArray, { user: action.user });
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return setUser(state, action);
        default:
            return state;
    }
}
export default authReducer;