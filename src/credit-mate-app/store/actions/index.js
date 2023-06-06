import * as actionTypes from './actionTypes';

const setUser = (user) => {
    return {
        type: actionTypes.SET_USER,
        user,
    };
}

export {
    setUser,
};