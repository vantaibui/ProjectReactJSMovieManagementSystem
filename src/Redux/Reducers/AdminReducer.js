const { FETCH_USER_LIST } = require("../Types/AdminType");

let initialState = {
    userList: [],
};

const AdminReducer = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case FETCH_USER_LIST:
            {
                state.userList = action.payLoad;
                return {...state };
            }
        default:
            return state;
    }
};

export default AdminReducer;