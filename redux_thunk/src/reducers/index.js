import { combineReducers } from "redux";

const postListReducer=(state=[], action)=>{
  switch(action.type){
    case "GET_POST_LIST":
      return action.playload;
    default:
      return state;
  }
};

export default combineReducers({posts: postListReducer});