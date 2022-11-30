const dummyUser = {
    id: 1,
    nickname: '하은',
    Posts: [],
    Followings: [],
    Followers: [],
};

export const initialState = {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
}

export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
}
 
export const logoutAction = (data) => {
    return {
        type: 'LOG_OUT',
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                    ...state,
                    isLoggedIn: true,
                    name: action.data,
                };
        case 'LOG_OUT':
            return {
                    ...state,
                    isLoggedIn: false,
                    name: null,
                };
        default:
            return state;
    }
};

export default reducer;