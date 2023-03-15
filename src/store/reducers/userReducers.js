import { GET_USER } from "src/store/actions/user";
// import { GET_USER, GET_REPO, getUser, getRepo } from "src/store/actions/user";
// import { headers } from "src/store/apis/headers";

const initialState = {
  user: {},
  // repository: {},
};


export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER: {
      return { ...state, user: action.payload };
    }
    default: 
      return state;
  }
};

