import { GET_REPO } from "src/store/actions/repo";


const initialState = {
  repository: {}
};


export const repoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPO: {
      return { ...state, repository: action.payload };
    }
    default: 
      return state;
  }
};

