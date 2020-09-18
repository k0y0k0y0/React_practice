import jsonPlaceholder from '../apis/jsonPlaceholder';

export const getPostList = () => async dispatch => {
  try {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({ type: "GET_POST_LIST", payload: response.data });
  } catch (error) {
    throw error;
  }
};